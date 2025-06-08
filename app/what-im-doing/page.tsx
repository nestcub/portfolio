import Link from "next/link";
import { getChildPageContent } from "@/lib/notion";

// Define a more accurate type for the blocks returned from Notion API
type NotionBlock = {
  id: string;
  type: string;
  created_time: string;
  last_edited_time: string;
  paragraph?: {
    rich_text: Array<{
      plain_text: string;
      text?: {
        content: string;
      };
      href: string | null;
    }>;
    color: string;
  };
  image?: {
    caption: any[];
    type: 'file' | 'external';
    file?: {
      url: string;
      expiry_time: string;
    };
    external?: {
      url: string;
    };
  };
  child_page?: {
    title: string;
  };
  code?: {
    rich_text: Array<{
      plain_text?: string;
      text?: {
        content: string;
      };
    }>;
    language: string;
  };
}

export default async function WhatImDoing() {
  const rootPageId = '1eaf2d73-f03d-8007-ba9b-d8afc88fa9e3';
  const blocksData = await getChildPageContent(rootPageId);
  
  // Cast the blocks to our type and sort by created_time
  const blocks = blocksData as unknown as NotionBlock[];
  
  // Sort blocks by created_time in descending order (newest first)
  const sortedBlocks = [...blocks].sort((a, b) => {
    const dateA = new Date(a.created_time).getTime();
    const dateB = new Date(b.created_time).getTime();
    return dateB - dateA; // Descending order
  });

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 prose prose-lg prose-neutral">
      <div className="space-y-4">
        {sortedBlocks.map((block) => {
          const created = new Date(block.created_time).toLocaleDateString();
          if (block.type === 'paragraph') {
            return (
              <div key={block.id} className="p-4 border rounded">
                {block.paragraph?.rich_text.map((text, index) => (
                  <span key={index}>
                    {text.plain_text || text.text?.content}
                  </span>
                ))}
              </div>
            );
          }

          if (block.type === 'child_page') {
            return (
              <div key={block.id} className="p-4 border rounded ">
                <Link href={`/what-im-doing/${block.id}`} className="text-white hover:underline">
                  📄 {block.child_page?.title}
                </Link>           
                  <span className="flex justify-end text-sm text-gray-500 dark:text-gray-400">
                    {created}
                  </span>
              </div>
            );
          }
          if (block.type === 'code' && block.code && block.code.rich_text?.length > 0) {
            const codeText = block.code.rich_text.map((text) => text.plain_text || text.text?.content).join('');
            const language = block.code.language || 'plain';
          
            return (
              <div key={block.id} className="p-4 border rounded bg-gray-100">
                <pre className="overflow-x-auto text-sm">
                  <code className={`language-${language}`}>
                    {codeText}
                  </code>
                </pre>
              </div>
            );
          }

          return null;
        })}
      </div>
    </main>
  );
}

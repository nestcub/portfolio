import { getChildPageContent } from '@/lib/notion';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function NotionChildPage({ params }: PageProps) {
  const blocks = await getChildPageContent(params.id);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 prose prose-lg prose-neutral">
      <div className="space-y-4">
        {blocks.map((block) => {
          if ('type' in block && block.type === 'paragraph' && block.paragraph) {
            return (
              <div key={block.id} className="p-4 border rounded">
                {block.paragraph.rich_text.map((text, index) => (
                  <span key={index}>
                    {text.plain_text || text.text?.content}
                  </span>
                ))}
              </div>
            );
          }

          if ('type' in block && block.type === 'image' && block.image) {
            const imageUrl = block.image.file?.url || block.image.external?.url;
            return (
              <div key={block.id} className="p-4 border rounded">
                <img
                  src={imageUrl}
                  alt={block.image.caption[0]?.plain_text || 'Notion image'}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-md mx-auto"
                />
              </div>
            );
          }
          if ('type' in block && block.type === 'code' && block.code && block.code.rich_text?.length > 0) {
            const codeText = block.code.rich_text.map((text) => text.plain_text || text.text?.content).join('');
            const language = block.code.language || 'plain';
          
            return (
              <div key={block.id} className="p-4 border rounded">
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

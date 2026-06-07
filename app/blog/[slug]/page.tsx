export const dynamic = 'force-dynamic';

import { db } from '@/app/db';
import { posts } from '@/app/db/schema';
import { and, eq } from 'drizzle-orm';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [post] = await db
    .select({ title: posts.title, excerpt: posts.excerpt })
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, 'published')));

  if (!post) return {};
  return { title: post.title, description: post.excerpt ?? undefined };
}

function readingTime(content: string) {
  return Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, 'published')));

  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 pb-24">
      <Link href="/blog" className="text-white/40 text-sm hover:text-white mb-8 inline-block">
        ← Blog
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl font-bold leading-tight">{post.title}</h1>

        <div className="flex items-center gap-2 mt-3 text-sm text-white/30">
          {post.publishedAt && (
            <time dateTime={post.publishedAt.toISOString()}>
              {post.publishedAt.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          )}
          <span>·</span>
          <span>{readingTime(post.content)} min read</span>
        </div>
      </header>

      <div className="prose prose-invert prose-sm max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

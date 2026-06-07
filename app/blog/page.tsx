export const dynamic = 'force-dynamic';

import { db } from '@/app/db';
import { posts } from '@/app/db/schema';
import { desc, eq } from 'drizzle-orm';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function BlogPage() {
  const allPosts = await db
    .select()
    .from(posts)
    .where(eq(posts.status, 'published'))
    .orderBy(desc(posts.publishedAt));

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 pb-24">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      {allPosts.length === 0 ? (
        <p className="text-white/40">Nothing published yet.</p>
      ) : (
        <div className="space-y-10">
          {allPosts.map((post) => (
            <article key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-lg font-semibold group-hover:text-white/80 transition-colors">
                  {post.title}
                </h2>
              </Link>

              {post.excerpt && (
                <p className="mt-1 text-white/50 text-sm leading-relaxed">{post.excerpt}</p>
              )}

              <div className="flex items-center gap-2 mt-2 text-xs text-white/30">
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

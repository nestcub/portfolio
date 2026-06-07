export const dynamic = 'force-dynamic';

import { db } from '@/app/db';
import { posts } from '@/app/db/schema';
import { desc } from 'drizzle-orm';
import Link from 'next/link';
import { deletePost } from './actions';
import { cn } from '@/lib/utils';

export default async function AdminPostsPage() {
  const allPosts = await db.select().from(posts).orderBy(desc(posts.updatedAt));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="bg-white text-black rounded px-4 py-2 text-sm font-semibold hover:bg-white/90"
        >
          New post
        </Link>
      </div>

      {allPosts.length === 0 ? (
        <p className="text-white/40 text-sm">No posts yet.</p>
      ) : (
        <div className="divide-y divide-white/10 border border-white/10 rounded">
          {allPosts.map((post) => (
            <div key={post.id} className="flex items-center justify-between px-4 py-3 gap-4">
              <div className="min-w-0">
                <p className="font-medium truncate">{post.title}</p>
                <p className="text-xs text-white/40 mt-0.5">
                  {post.status === 'published' && post.publishedAt
                    ? `Published ${post.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
                    : `Updated ${post.updatedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={cn(
                    'text-xs px-2 py-0.5 rounded-full border',
                    post.status === 'published'
                      ? 'border-green-500/40 text-green-400'
                      : 'border-white/20 text-white/40',
                  )}
                >
                  {post.status}
                </span>

                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  Edit
                </Link>

                <form
                  action={async () => {
                    'use server';
                    await deletePost(post.id);
                  }}
                >
                  <button
                    type="submit"
                    className="text-sm text-red-400/70 hover:text-red-400"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

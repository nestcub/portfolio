export const dynamic = 'force-dynamic';

import { db } from '@/app/db';
import { posts } from '@/app/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PostForm } from '@/components/post-form';
import { updatePost } from '../../actions';

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);

  const [post] = await db.select().from(posts).where(eq(posts.id, postId));
  if (!post) notFound();

  const updatePostWithId = updatePost.bind(null, postId);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/posts" className="text-white/40 text-sm hover:text-white">
          ← Posts
        </Link>
        <h1 className="text-2xl font-bold">Edit post</h1>
        {post.status === 'published' && (
          <Link
            href={`/blog/${post.slug}`}
            target="_blank"
            className="text-sm text-white/40 hover:text-white ml-auto"
          >
            View live ↗
          </Link>
        )}
      </div>

      <PostForm
        action={updatePostWithId}
        defaultValues={{
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          status: post.status,
        }}
        submitLabel="Save changes"
      />
    </div>
  );
}

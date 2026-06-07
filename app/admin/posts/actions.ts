'use server';

import { db } from '@/app/db';
import { posts } from '@/app/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const excerpt = (formData.get('excerpt') as string).trim() || null;
  const content = formData.get('content') as string;
  const status = formData.get('status') as 'draft' | 'published';

  await db.insert(posts).values({
    title,
    slug: slugify(title),
    excerpt,
    content,
    status,
    publishedAt: status === 'published' ? new Date() : null,
  });

  revalidatePath('/admin/posts');
  revalidatePath('/blog');
  redirect('/admin/posts');
}

export async function updatePost(id: number, formData: FormData) {
  const title = formData.get('title') as string;
  const excerpt = (formData.get('excerpt') as string).trim() || null;
  const content = formData.get('content') as string;
  const status = formData.get('status') as 'draft' | 'published';

  const [current] = await db.select().from(posts).where(eq(posts.id, id));
  if (!current) return;

  const publishedAt =
    status === 'published' && !current.publishedAt ? new Date() : current.publishedAt;

  await db
    .update(posts)
    .set({ title, excerpt, content, status, publishedAt, updatedAt: new Date() })
    .where(eq(posts.id, id));

  revalidatePath('/admin/posts');
  revalidatePath('/blog');
  revalidatePath(`/blog/${current.slug}`);
  redirect('/admin/posts');
}

export async function deletePost(id: number) {
  const [post] = await db.select({ slug: posts.slug }).from(posts).where(eq(posts.id, id));
  if (!post) return;

  await db.delete(posts).where(eq(posts.id, id));

  revalidatePath('/admin/posts');
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
}

import { PostForm } from '@/components/post-form';
import Link from 'next/link';
import { createPost } from '../actions';

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/posts" className="text-white/40 text-sm hover:text-white">
          ← Posts
        </Link>
        <h1 className="text-2xl font-bold">New post</h1>
      </div>

      <PostForm action={createPost} submitLabel="Create post" />
    </div>
  );
}

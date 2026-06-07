'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostFormProps {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: {
    title: string;
    excerpt: string | null;
    content: string;
    status: 'draft' | 'published';
  };
  submitLabel?: string;
}

export function PostForm({ action, defaultValues, submitLabel = 'Save' }: PostFormProps) {
  const [content, setContent] = useState(defaultValues?.content ?? '');

  return (
    <form action={action} className="space-y-4">
      <input
        name="title"
        defaultValue={defaultValues?.title}
        placeholder="Post title"
        required
        className="w-full bg-transparent border border-white/20 rounded px-3 py-2 text-xl font-semibold focus:outline-none focus:border-white/50"
      />

      <textarea
        name="excerpt"
        defaultValue={defaultValues?.excerpt ?? ''}
        placeholder="Short excerpt (optional) — shown on the blog listing page"
        rows={2}
        className="w-full bg-transparent border border-white/20 rounded px-3 py-2 text-sm text-white/70 resize-none focus:outline-none focus:border-white/50"
      />

      <div className="border border-white/20 rounded overflow-hidden">
        <div className="border-b border-white/10 px-3 py-2 flex items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-wider">Markdown</span>
          <span className="text-white/20">·</span>
          <span className="text-xs text-white/40 uppercase tracking-wider">Preview</span>
        </div>
        <div className="grid md:grid-cols-2">
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write in Markdown…"
            rows={22}
            className="w-full bg-transparent px-4 py-3 text-sm font-mono resize-none focus:outline-none border-r border-white/10"
          />
          <div className="px-4 py-3 overflow-auto h-[500px] prose prose-invert prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <select
          name="status"
          defaultValue={defaultValues?.status ?? 'draft'}
          className="bg-black border border-white/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/50"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <button
          type="submit"
          className="bg-white text-black rounded px-5 py-2 text-sm font-semibold hover:bg-white/90"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

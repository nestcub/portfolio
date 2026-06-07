import Link from 'next/link';
import { logout } from './login/actions';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pb-16">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/40 text-sm hover:text-white">
            ← Portfolio
          </Link>
          <Link href="/admin/posts" className="text-sm font-medium">
            Posts
          </Link>
        </div>
        <form action={logout}>
          <button type="submit" className="text-sm text-white/40 hover:text-white">
            Sign out
          </button>
        </form>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}

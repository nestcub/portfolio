'use client';

import { useActionState } from 'react';
import { login } from './actions';

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold">Admin</h1>

        <form action={action} className="space-y-4">
          <input
            name="secret"
            type="password"
            placeholder="Secret"
            autoComplete="current-password"
            required
            className="w-full bg-transparent border border-white/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/50"
          />
          {state?.error && (
            <p className="text-red-400 text-sm">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full bg-white text-black rounded py-2 text-sm font-semibold hover:bg-white/90 disabled:opacity-50"
          >
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

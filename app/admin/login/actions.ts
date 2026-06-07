'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(_: unknown, formData: FormData) {
  const secret = formData.get('secret') as string;

  if (secret && secret === process.env.ADMIN_SECRET) {
    (await cookies()).set('admin_token', secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    redirect('/admin/posts');
  }

  return { error: 'Invalid secret.' };
}

export async function logout() {
  (await cookies()).delete('admin_token');
  redirect('/admin/login');
}

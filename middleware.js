import { next } from '@vercel/edge';

export default function middleware(request) {
  const url = new URL(request.url);
  
  if (url.pathname.startsWith('/internal/') && !url.pathname.startsWith('/internal/login')) {
    const cookieHeader = request.headers.get('cookie') || '';
    if (!cookieHeader.includes('otis_internal_session=')) {
      url.pathname = '/internal/login';
      url.searchParams.set('next', new URL(request.url).pathname);
      return Response.redirect(url, 302);
    }
  }

  if (url.pathname.startsWith('/api/internal/') && !url.pathname.startsWith('/api/internal/auth')) {
    const cookieHeader = request.headers.get('cookie') || '';
    if (!cookieHeader.includes('otis_internal_session=')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }
  }

  return next();
}

export const config = {
  matcher: ['/internal/:path*', '/api/internal/:path*']
};

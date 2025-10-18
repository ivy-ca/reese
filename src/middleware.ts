import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Enforce HTTPS redirect only in production; skip in local dev to avoid cert issues
  if (process.env.NODE_ENV === 'production') {
    if (request.headers.get('x-forwarded-proto') === 'http') {
      const host = request.headers.get('host');
      if (host) {
        const url = request.nextUrl.clone();
        url.protocol = 'https:';
        url.host = host;
        return NextResponse.redirect(url, 301);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

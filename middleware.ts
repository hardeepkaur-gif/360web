import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SPAM_PATTERNS: RegExp[] = [
  /\.html?$/i,        // 2026-07: legacy .htm/.html doorway pages
  /^\/shop\//i,       // 2026-07: fake /shop/ category folders
  /^\/wp-admin/i,     // 2026-07: WordPress admin probes
  /^\/wp-content/i,   // 2026-07: WordPress uploads/theme paths
  /^\/wp-includes/i,  // 2026-07: WordPress core paths
  /\.php$/i,          // 2026-07: no PHP exists on this site
];

const EXCLUDED = /^\/(_next|api|blogs|favicon\.ico|sitemap\.xml|robots\.txt)/i;
const STATIC_EXT = /\.(png|jpe?g|gif|svg|webp|ico|css|js|json|woff2?|ttf|txt|xml|pdf)$/i;

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (EXCLUDED.test(path) || STATIC_EXT.test(path)) {
    return NextResponse.next();
  }

  if (SPAM_PATTERNS.some((re) => re.test(path))) {
    return new NextResponse('410 Gone', {
      status: 410,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image).*)',
};

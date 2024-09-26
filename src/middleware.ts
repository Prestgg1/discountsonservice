import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { getToken } from 'next-auth/jwt';


const intlMiddleware = createMiddleware(routing);

export const middleware = async (request: NextRequest) => {
  
  const token = await getToken({ req: request });

  if ((request.nextUrl.pathname.startsWith('/account-info') || request.nextUrl.pathname.startsWith('/en/account-info')) && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if ((request.nextUrl.pathname.startsWith('/mysubscriptions') || request.nextUrl.pathname.startsWith('/en/mysubscriptions')) && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  

  return intlMiddleware(request);
};
export const config = {
  matcher: [
    '/', 
    '/(az|en)/:path*',
    '/((?!api|_next|_vercel|images.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)',
    '/account-info(.*)',
    '/mysubscriptions(.*)',
  ]
};

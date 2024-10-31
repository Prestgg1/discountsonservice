import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { getToken } from 'next-auth/jwt'; 
import { routing } from './i18n/routing';
import { NextMiddlewareWithAuth } from "next-auth/middleware"

const intlMiddleware = createMiddleware(routing);

export const middleware = async (request: NextRequest) => {
  const intlResponse = intlMiddleware(request);
  
/*   const protectedRoutes = ['/account-info', '/mysubscriptions', '/en/account-info', '/en/mysubscriptions'];
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET,secureCookie:true });
    console.log(token)
  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET,secureCookie:true });
    console.log(token)
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url)); 
    }
  } */
  return intlResponse;
};
export const config = {
  matcher: [
    '/', 
    '/(az|en)/:path*',
    '/((?!api|admin|_next|_vercel|images.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)',
    '/account-info(.*)', 
    '/mysubscriptions(.*)', 
  ]
};

import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export const middleware = async (request: NextRequest) => {
  const intlResponse = intlMiddleware(request);
  

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

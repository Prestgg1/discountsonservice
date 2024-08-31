import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({

  // A list of all locales that are supported
  locales: ['en', 'az'],
  localePrefix: 'as-needed',
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    '/': '/',
    '/blog': '/blog',
 
    // If locales use different paths, you can
    // specify each external path per locale
    '/about': {
      en: '/about',
      az: '/haqqimizda'
    },
  },
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);

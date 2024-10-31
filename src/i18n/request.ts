import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
type ValidLocale = (typeof routing.locales)[number];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as ValidLocale)) notFound();
 
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

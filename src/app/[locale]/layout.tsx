import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"],fallback:['Arial'] });

export const metadata: Metadata = {
  title: "Discount App",
  description: "Generated by create next app",
};
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <link rel="icon" href="/public/images/logo1.png" sizes='any' />
      <body className={`${inter.className} bg-[#ECF3FB]`}>
         <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider> 
      </body>
    </html>
  );
}

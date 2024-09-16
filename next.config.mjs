import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
      }
    ],
  },};
 
export default withNextIntl(nextConfig);
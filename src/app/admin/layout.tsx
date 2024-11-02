import Header from '@/components/Admin/Header';
import "../globals.css";
export const metadata = {
  title: 'Admin',
  description: 'DiscountsOnServices Admin Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme='dark' lang="en">
      <body  className='h-full w-full'>
        <Header/>

        Çox Yaxında
        {/* {children} */}</body>
    </html>
  )
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subscriptions from "./subs/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>

  );
}

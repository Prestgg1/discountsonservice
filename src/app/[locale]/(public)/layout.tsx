"use client"
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Toaster } from 'react-hot-toast';
import Tawk from "@/components/Tawk";


export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: Session
}>) {
  return (
    <SessionProvider session={session}>
    <div className="flex justify-center items-center flex-col w-full overflow-x-hidden">
      <Toaster position="top-right"/>
      <Header />
      <main className="container pt-28 md:pt-0 px-10 2xl:px-0 flex flex-col justify-start items-center min-h-screen gap-4">

          {children}

      </main>
      <Tawk/>
      <Footer/>
    </div>
    </SessionProvider>
  );
}

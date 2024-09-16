"use client"
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: Session
}>) {
  return (
    <SessionProvider session={session}>
    <div className="flex justify-center items-center flex-col w-full">
      <Header />
      <main className="container px-10 2xl:px-0 flex flex-col justify-start items-center min-h-screen gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </main>
      <Footer/>
    </div>
    </SessionProvider>
  );
}

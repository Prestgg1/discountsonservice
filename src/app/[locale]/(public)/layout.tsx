import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Header />
      <main className="container px-10 md:px-0 flex flex-col justify-center items-center min-h-screen gap-4">
      {children}
      </main>
      <Footer/>
    </div>

  );
}

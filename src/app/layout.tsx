'use client'
import Header from "@/components/Header";
import "@/styles/global.css";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
    <link rel="icon" href="/favicon.png" />
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
    </>
  );
}

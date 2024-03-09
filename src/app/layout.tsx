import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";
import { Header, Footer } from "./components";

export const metadata: Metadata = {
  title: "Reda Mansour | Frontend developer and designer",
  description: "Later",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

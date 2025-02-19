import type { Metadata } from "next";
import "./globals.css";

// import {Piedra} from 'next/font/google';
import {M_PLUS_1p } from 'next/font/google';
const font = M_PLUS_1p({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Samurai",
  description: "Launch your AI agents",
};

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} > */}
      <body className={`antialiased ${font.className}`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

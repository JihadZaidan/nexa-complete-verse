'use client'

import "./globals.css";
import { DM_Sans } from "next/font/google"
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <main className="w-full min-h-screen">
          {isHomePage && (
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-custom inset-0 backdrop-blur-md h-screen max-h-[70vh] z-[-10]">
                <div className="absolute w-full h-full shadow-blur z-[-5]"></div>
              </div>
            </div>
          )}
          <Navbar/>
          <div className="w-full">{children}</div>
          <Footer/>
        </main>
      </body>
    </html>
  )

}


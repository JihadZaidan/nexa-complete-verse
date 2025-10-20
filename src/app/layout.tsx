'use client'
import localfont from "next/font/local"
import "./globals.css";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const openSauce = localfont({
  src: [
    {
      path: "/OpenSauceSans/OpenSauceSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
  ],
  variable: "--font-open-sauce",
  display: "swap"
})

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body className={`${openSauce.className} bg-white`}>
        <main className="w-full min-h-screen pt-32">
          {/* Gradient overlay hanya untuk homepage */}
          {isHomePage && (
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-custom inset-0 backdrop-blur-md h-[70vh] z-[-10]">
                <div className="absolute w-full h-full shadow-blur z-[-5]" />
              </div>
            </div>
          )}

          <Navbar />
          <div className="w-full overflow-hidden">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}

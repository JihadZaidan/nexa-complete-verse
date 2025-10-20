import localfont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";
import GradientOverlay from "@/components/layout/GradientOverlay";

const openSauce = localfont({
  src: [
    { path: "/OpenSauceSans/OpenSauceSans-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSauce.className} bg-white`}>
        <Navbar />

        <main className="w-full min-h-screen overflow-hidden pt-32">
          <GradientOverlay />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

"use client"

import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { useRef } from "react"
import { useSlideFromTop } from "@/library/animations/useSlideFromTop"

export default function Navbar() {
  const navRef = useRef<HTMLHeadElement>(null)
  useSlideFromTop(navRef, 0.35)

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <nav className="flex justify-between items-center lg:px-20 md:px-14 px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-3xl font-sans font-medium text-black">
          Nexa
        </Link>

        {/* Right Side */}
        <div className="flex items-center lg:gap-8">
          {/* Button hanya muncul di desktop */}
          <Button className="hidden lg:flex items-center gap-2 bg-transparent hover:bg-black hover:text-white transition-all duration-300 lg:visible md:invisible invisible">
            <p className="text-black text-base font-medium">
              Let&apos;s talk
            </p>
            <ArrowRight
              height={18}
              width={18}
              className="mt-[2px] text-black group-hover:text-white transition"
            />
          </Button>

          {/* Garis pemisah hanya tampil di desktop */}
          <div className="hidden lg:block w-[2px] h-[20px] bg-neutral-900" />

          {/* Sidebar / Menu Button */}
          <Link
            href="../sidebar"
            className="p-2 rounded-md hover:bg-neutral-100 transition-colors duration-200"
          >
            <FiMenu className="w-7 h-7 text-black" />
          </Link>
        </div>
      </nav>
    </header>
  )
}



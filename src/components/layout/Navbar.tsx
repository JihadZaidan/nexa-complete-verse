"use client"

import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import { ArrowRight, DivideIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useRef } from "react"
import { useSlideFromTop } from "@/library/animations/useSlideFromTop"

export default function Navbar() {
  const navRef = useRef<HTMLHeadElement>(null)
  useSlideFromTop(navRef, 0.35)

  return (
    <header
      ref={navRef}
      className="relative z-50 w-full max-w-full mt-8 mb-20 lg:px-20 px-8"
    >
      <nav className="w-full flex justify-between items-center">
        <h4 className="text-4xl font-normal font-sans text-black">Nexa</h4>

        <div className="flex items-center gap-5">
          <Button className="flex items-center gap-2">
            <p className="text-black text-lg font-medium lg:block hidden">
              Let&apos;s talk
            </p>
            <ArrowRight height={18} width={18} className="mt-[5px] text-black lg:block hidden" />
          </Button>

          <DivideIcon className="text-neutral-900 lg:opacity-100 opacity-0 rotate-90" />

          {/* Tombol ke halaman sidebar */}
          <Link href="../sidebar" className="p-2">
            <FiMenu className="w-8 h-8 text-black" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

'use client'

import Link from "next/link"
import { HiX } from "react-icons/hi"
import { FiMenu } from "react-icons/fi"
import { navigation } from "@/data/navigation"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { useRef } from "react"
import { useSlideFromTop } from "@/library/animations/useSlideFromTop"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLHeadElement>(null);

    useSlideFromTop(navRef, 0.35);
    
    return (
        <header ref={navRef} className="w-full max-w-full mt-8 mb-20 lg:px-20 px-8 justify-center items-center">
            <nav className="w-full justify-between flex flex-row">
                <div>
                    <h4 className="text-4xl font-medium font-sans text-black">Nexa</h4>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center">
                    <Button className="flex flex-row justify-center gap-2">
                        <p className="text-black text-lg font-medium lg:block hidden">Let&apos;s talk</p>
                        <ArrowRight height={18} width={18} className="mt-[5px] text-black lg:block hidden" />
                    </Button>
                    <div className="border-1 border-black height-[3px] lg:block hidden"></div>
                    <div className="flex flex-row gap-5">
                        <button
                            className="text-black hover:text-black p-2 rounded-lg cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <HiX className="w-8 h-8" />
                            ) : (
                                <FiMenu className="w-8 h-8" />
                            )}
                        </button>

                        {isMenuOpen && (
                            <nav
                                className="absolute z-5 px-5 top-16 left-0 w-full bg-black shadow-lg flex flex-col items-center gap-8 py-8 px-8"
                            >
                                {navigation
                                    .filter((item) => !item.published)
                                    .map((item) => (
                                        <Link
                                            key={item.url}
                                            href={item.url}
                                            className="text-white hover:text-gray text-lg font-sans font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                            </nav>
                        )}
                    </div>
                </div>
            </nav>
        </header >
    )
}
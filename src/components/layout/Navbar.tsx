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
// import Image from "next/image"
// import Snack from "../../../public/second/landing-page/header/chipschapa.png"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLHeadElement>(null);

    useSlideFromTop(navRef, 0.35);

    return (
        <header
            ref={navRef}
            className="relative z-50 w-full max-w-full mt-8 mb-20 lg:px-20 px-8 justify-center items-center"
        >
            <nav className="w-full justify-between flex flex-row">
                <div>
                    <h4 className="text-4xl font-medium font-sans text-black">Nexa</h4>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center">
                    <Button className="flex flex-row justify-center gap-2">
                        <p className="text-black text-lg font-medium lg:block hidden">Let&apos;s talk</p>
                        <ArrowRight height={18} width={18} className="mt-[5px] text-black lg:block hidden" />
                    </Button>

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
                                className="absolute z-[9999] top-16 left-0 w-full flex flex-col gap-20 bg-black shadow-lg pt-10 pb-12 lg:px-12 px-5"
                            >
                                <div className="flex lg:flex-row flex-col lg:justify-between gap-8">
                                    <div></div>
                                    <div className="flex flex-col items-right gap-8">
                                        {navigation
                                            .filter((item) => !item.hideInNavbar && item.published)
                                            .map((item) => (
                                                <Link
                                                    key={item.url}
                                                    href={item.url}
                                                    className="text-white hover:text-gray lg:text-3xl text-2xl font-sans font-medium lg:text-right text-left w-full"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                                <div className="flex lg:flex-row flex-col gap-8 lg:justify-between">
                                    <h4 className="font-sans font-medium text-8xl text-neutral-100 text-left">Nexa</h4>
                                    <div className="flex flex-col gap-5 pt-3">
                                        <p className="text-neutral-100 font-sans font-normal lg:text-xl text-base lg:text-right text-left">123 Main Street, Anytown, USA 12345</p>
                                        <p className="text-neutral-100 font-sans font-normal lg:text-xl text-base lg:text-right left">+1 141-756-9201 | contact@nexa.com</p>
                                    </div>
                                </div>
                            </nav>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

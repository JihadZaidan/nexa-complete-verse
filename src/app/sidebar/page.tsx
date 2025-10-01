"use client"

import Link from "next/link"
import { HiX } from "react-icons/hi"
import { ArrowRight, DivideIcon } from "lucide-react"
import { navigation } from "@/data/navigation"
import Image from "next/image"
import Snack from "../../../public/second/landing-page/header/chipschapa.png"
import { useSlideFromRight, useSlideFromLeft, useSlideFromTop } from "@/library/animations"
import { useRef } from "react"

export default function SidebarPage() {
    const closeRef = useRef<HTMLDivElement>(null);
    const mageRef = useRef<HTMLImageElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const headeRef = useRef<HTMLHeadingElement>(null);
    const addRef = useRef<HTMLDivElement>(null);

    useSlideFromTop(closeRef, 0.3)
    useSlideFromLeft(mageRef, 0.3)
    useSlideFromRight(listRef, 0.3)
    useSlideFromLeft(headeRef, 0.3)
    useSlideFromRight(addRef, 0.3)
    
    return (
        <div className="fixed inset-0 z-[9999] w-[100vw] h-[100vh] bg-black flex flex-col lg:px-10 lg:pt-12 lg:pb-20 lg:gap-3 px-7 py-7">

            {/* Top-right Let's Talk + Close */}
            <div ref={closeRef} className="flex lg:justify-end items-center lg:gap-6 lg:pr-10 justify-between">
                <button className="flex items-center gap-2 text-lg font-sans hover:opacity-80 transition text-white">
                    Let&apos;s talk
                    <ArrowRight size={18} />
                </button>
                <DivideIcon className="text-neutral-100 rotate-90 lg:opacity-100 opacity-0" />
                <Link href="/" className="p-2">
                    <HiX className="w-8 h-8 text-white hover:opacity-80 transition" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col gap-20 px-5 lg:px-12 pt-10 pb-12">
                <div className="flex lg:flex-row flex-col lg:justify-between gap-8">
                    <div className="lg:w-1/2 flex justify-center lg:justify-start">
                        <Image
                            ref={mageRef}
                            src={Snack}
                            alt="Snack assets"
                            className="rounded-md object-contain max-h-[280px] lg:mr-50 lg:mt-5"
                        />
                    </div>

                    <div ref={listRef} className="flex flex-col items-right lg:gap-8 gap-4">
                        {navigation
                            .filter((item) => !item.hideInNavbar && item.published)
                            .map((item) => (
                                <Link
                                    key={item.url}
                                    href={item.url}
                                    className="text-white hover:text-gray lg:text-3xl text-2xl font-sans font-normal lg:text-right text-left w-full hover:border-b hover:border-additional-100 leading-[120%]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-8 lg:justify-between">
                    <h4 ref={headeRef} className="font-sans font-normal text-8xl text-neutral-100 text-left">
                        Nexa
                    </h4>
                    <div ref={addRef} className="flex flex-col gap-5 pt-3">
                        <p className="text-neutral-100 font-sans font-normal lg:text-xl text-base lg:text-right text-left">
                            123 Main Street, Anytown, USA 12345
                        </p>
                        <p className="text-neutral-100 font-sans font-normal lg:text-xl text-base lg:text-right text-left">
                            +1 141-756-9201 | contact@nexa.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}


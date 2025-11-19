"use client"

import Link from "next/link"
import { HiX } from "react-icons/hi"
import { ArrowRight } from "lucide-react"
import { navigation } from "@/data/navigation"
import Image from "next/image"
import Snack from "../../../public/second/landing-page/header/chipschapa.png"
import { useFadeIn } from "@/library/animations"
import { useRef, useEffect, MutableRefObject } from "react"
// Import useStaggerZoom
import { useStaggerZoom } from "@/library/animations/useStaggerZoom"

export default function SidebarPage() {
    const closeRef = useRef<HTMLDivElement>(null);
    const mageRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null); // Tetap gunakan ini jika perlu ref container
    const headeRef = useRef<HTMLHeadingElement>(null);
    const addRef = useRef<HTMLDivElement>(null);

    // 1. Ref Array untuk item menu
    const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    // 2. Callback Ref untuk mengisi array
    const setMenuRef = (el: HTMLAnchorElement | null, index: number) => {
        if (el) {
            menuItemRefs.current[index] = el;
        }
    };
    
    // Cleanup refs (Best Practice)
    useEffect(() => {
        return () => {
            menuItemRefs.current = [];
        };
    }, []);


    // Animasi komponen statis lainnya (Tetap gunakan useFadeIn)
    useFadeIn(closeRef, 0.3)
    useFadeIn(mageRef, 0.3)
    // Hapus useFadeIn(listRef, 0.3) - sekarang item individual yang dianimasikan
    useFadeIn(headeRef, 0.3)
    useFadeIn(addRef, 0.3)
    
    // 3. Panggil useStaggerZoom pada array menu
    // Kita gunakan baseDelay yang lebih lama (misalnya 0.7s) agar terjadi setelah elemen lain fade in
    useStaggerZoom(menuItemRefs as MutableRefObject<(HTMLDivElement | null)[]>, 0.7);
    
    return (
        <div className="fixed inset-0 z-[9999] w-[100vw] h-[100vh] bg-black flex flex-col lg:px-10 lg:pt-10 md:px-10 md:py-7 lg:gap-2 px-7 py-7">

            {/* Top-right Let's Talk + Close */}
            <div ref={closeRef} className="flex lg:justify-end items-center lg:gap-8 lg:pr-10 justify-between">
                <button className="flex items-center gap-2 text-lg font-sans hover:opacity-80 transition text-white">
                    Let&apos;s talk
                    <ArrowRight size={18} />
                </button>
                <div className="w-[2px] h-[20px] bg-neutral-100 lg:visible md:invisible invisible" />
                <Link href="/" className="p-2">
                    <HiX className="w-8 h-8 text-white hover:opacity-80 transition" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col lg:gap-15 gap-20 px-5 md:px-8 lg:px-12 md:py-8 pt-10 pb-12">
                <div className="flex lg:flex-row flex-col lg:justify-between gap-8">
                    <div ref={mageRef} className="lg:w-1/2 flex justify-center lg:justify-start lg:visible md:visible invisible">
                        <Image
                            src={Snack}
                            alt="Snack assets"
                            className="rounded-md object-contain max-h-[280px] lg:mr-50 lg:mt-5"
                        />
                    </div>

                    {/* Ref container dipertahankan, namun item di dalamnya yang dianimasikan */}
                    <div ref={listRef} className="flex flex-col lg:items-end lg:gap-8 gap-4 lg:mt-0 md:mt-0 mt-[-200px]">
                        {navigation
                            .filter((item) => !item.hideInNavbar && item.published)
                            .map((item, index) => (
                                // 4. Terapkan Callback Ref dan Style Awal
                                <Link
                                    key={item.url}
                                    href={item.url}
                                    ref={(el: HTMLAnchorElement | null) => setMenuRef(el, index)}
                                    className="text-white hover:text-gray lg:text-3xl text-2xl font-sans font-normal lg:text-right md:text-center text-left w-full hover:border-b hover:border-additional-100 leading-[120%]"
                                    style={{ opacity: 0 }} // PENTING: Sembunyikan item sebelum animasi
                                >
                                    {item.label}
                                </Link>
                            ))}
                    </div>
                </div>

                <div className="flex lg:flex-row md:flex-col flex-col lg:gap-8 md:gap-8 gap-4 lg:justify-between md:justify-center lg:mt-0 md:mt-0 mt-[-80px]">
                    <h4 ref={headeRef} className="font-sans font-normal lg:text-8xl md:text-5xl lg:visible md:visible invisible text-neutral-100 lg:text-start md:text-center">
                        Nexa
                    </h4>
                    <div ref={addRef} className="flex flex-col gap-5 pt-3">
                        <p className="text-neutral-100 font-sans font-normal lg:text-xl md:text-lg text-sm lg:text-end md:text-center text-start">
                            123 Main Street, Anytown, USA 12345
                        </p>
                        <p className="text-neutral-100 font-sans font-normal lg:text-xl md:text-lg text-sm lg:text-end md:text-center text-start">
                            +1 141-756-9201 | contact@nexa.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

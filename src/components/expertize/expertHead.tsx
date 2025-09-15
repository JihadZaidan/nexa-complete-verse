"use client"
import { useRef } from "react";
import ExpertiseCarousel from "./preview";
import { useSlideFromLeft, useFadeIn } from "@/library/animations";

export default function ExpertWorks() {
    const headerRef = useRef<HTMLDivElement>(null);
    const coroRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headerRef, 0.3);
    useFadeIn(coroRef, 0.3);

    return (
        <div className="max-w-full w-full bg-white lg:px-20 lg:py-16 px-8 py-8">
            <div className="w-full flex flex-col lg:gap-30 gap-20">
                <h1 ref={headerRef} className="text-black font-sans font-medium lg:text-4xl text-2xl leading-[150%]">
                    — Discover Our Expertise: <br/>
                    Crafting Digital Strategy, <br/>
                    Elevating Brands, Web <br/>
                    Wizardry, and App Magic.
                </h1>

                <div ref={coroRef} className="w-full">
                    <ExpertiseCarousel/>
                </div>
            </div>
        </div>
    )
}
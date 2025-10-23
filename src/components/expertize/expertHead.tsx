"use client"
import { useRef } from "react";
import ExpertiseCarousel from "./preview";
import { useSlideFromTop } from "@/library/animations";

export default function ExpertWorks() {
    const headerRef = useRef<HTMLDivElement>(null);
    const coroRef = useRef<HTMLDivElement>(null);

    useSlideFromTop(headerRef, 0.3);
    useSlideFromTop(coroRef, 0.3);

    return (
        <div className="max-w-full w-full bg-white lg:px-20 lg:py-16 md:px-14 md:py-10 px-8 py-8">
            <div className="w-full flex flex-col lg:gap-30 gap-20">
                <h1 ref={headerRef} className="text-black font-sans font-normal lg:text-4xl md:text-3xl text-2xl leading-[150%]">
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




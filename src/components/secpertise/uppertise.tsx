"use client";

import Image from "next/image";
import Kopi from "../../../public/expertise/01-digital.png";
import Tamar from "../../../public/expertise/02-branding.png";
import Cody from "../../../public/expertise/03-website.png";
import { useSlideFromTop, useSlideFromLeft, useSlideFromRight } from "@/library/animations";
import { useRef } from "react";

const images = [
    { src: Kopi, alt: "coffeship", scale: "scale-[50%]" },
    { src: Tamar, alt: "conferention", scale: "scale-[70%]" },
    { src: Cody, alt: "coder", scale: "scale-[50%]" },
];

export default function Uppertise() {
    const slideRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<HTMLHeadingElement>(null);
    const pagaRef = useRef<HTMLParagraphElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(pagaRef, 0.3);
    useSlideFromTop(slideRef, 0.3);
    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-12 lg:pb-18 md:px-12 md:py-8 px-5 pt-6 pb-14">
            <div className="w-full flex flex-col justify-left gap-20">
                {/* Manual horizontal overflow (no auto) */}
                <div ref={slideRef} className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ WebkitOverflowScrolling: "touch" }}>
                    {/* hide scrollbar (optional) */}
                    <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                    <div className="flex items-center gap-6 lg:gap-10 px-5">
                        <div className="flex-none snap-start">
                            <h3 className="text-neutral-800 lg:text-3xl text-lg font-normal font-sans">01/ DIGITAL STRATEGY</h3>
                            <Image src={Kopi} alt="coffeship" className="h-[370px] lg:h-[700px] w-auto object-contain" />
                        </div>
                        <div className="flex-none snap-start">
                            <h3 className="text-neutral-800 lg:text-3xl text-lg font-normal font-sans">02/ BRANDING</h3>
                            <Image src={Tamar} alt="conferention" className="h-[370px] lg:h-[700px] w-auto object-contain" />
                        </div>
                        <div className="flex-none snap-start">
                            <h3 className="text-neutral-800 lg:text-3xl text-lg font-normal font-sans">03/ WEB DEVELOPMENT</h3>
                            <Image src={Cody} alt="coder" className="h-[370px] lg:h-[700px] w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-10">
                    <h3 ref={headRef} className="text-neutral-800 font-sans font-normal lg:text-5xl text-3xl text-left leading-[140%] pl-5">
                        Few of Our <br /> Specialites
                    </h3>
                    <p ref={pagaRef} className="text-neutral-800 font-sans font-normal lg:text-3xl text-base leading-[140%] pl-5">
                        — From creative projects that push the <br /> boundaries of our
                        team&apos;s imagination. <br /> Build it into all of our works.
                    </p>
                </div>
            </div>
        </div>
    );
}




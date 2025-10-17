"use client"

import Image from "next/image"
import Antony from "../../../public/about/team/team-antony.png"
import Luna from "../../../public/about/team/team-luna.png"
import Sakhir from "../../../public/about/team/team-sakhir.png"
import Wayne from "../../../public/about/team/team-wayne.png"
import { useRef } from "react"
import { useFadeIn, useSlideFromRight, useSlideFromLeft, useZoom } from "@/library/animations"

export default function Teams() {
    const oneRef = useRef<HTMLImageElement>(null);
    const twoRef = useRef<HTMLImageElement>(null);
    const thRef = useRef<HTMLImageElement>(null);
    const fouRef = useRef<HTMLImageElement>(null);
    const themeRef = useRef<HTMLHeadingElement>(null);

    useSlideFromRight(oneRef, 0.3);
    useSlideFromLeft(twoRef, 0.3);
    useFadeIn(thRef, 0.3);
    useFadeIn(fouRef, 0.3);
    useZoom(themeRef, 0.3);

    return (
        <section className="relative lg:px-30 lg:py-30 md:px-22 md:py-22">
            <Image
                ref={fouRef}
                src={Antony}
                alt="team-antony"
                className="absolute grayscale scale-30 md:scale-25 lg:scale-25 lg:right-[-200px] lg:bottom-[-350px] md:bottom-[-310px] md:right-[-270px] right-[120px] bottom-[-140px]"
            />

            <Image
                ref={oneRef}
                src={Luna}
                alt="team-luna"
                className="absolute grayscale scale-35 md:scale-35 lg:scale-40 lg:right-[-150px] lg:bottom-[230px] md:right-[-220px] right-[100px] bottom-[180px]"
            />

            <div className="z-5 w-full px-25 pt-30 pb-40 relative justify-center items-center">
                <div className="justify-center items-center">
                    <h2 ref={themeRef} className="w-full text-black text-center text-xl lg:text-5xl md:text-3xl font-sans font-medium leading-[130%]">
                        Meet Our Troops of Creative
                    </h2>
                </div>
            </div>

            <Image
                ref={thRef}
                src={Sakhir}
                alt="team-sakhir"
                className="absolute grayscale scale-30 md:scale-25 lg:scale-35 lg:left-[-150px] lg:bottom-[-150px] md:left-[-250px] md:bottom-[-150px] left-[123px] bottom-[-80px]"
            />

            <Image
                ref={twoRef}
                src={Wayne}
                alt="team-wayne"
                className="absolute grayscale scale-30 lg:scale-32 lg:left-[-250px] lg:bottom-[170px] md:left-[-250px] md:bottom-[120px] left-[120px] bottom-[150px]"
            />
        </section>

    )
}

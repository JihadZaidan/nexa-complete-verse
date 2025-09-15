"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Discusion from "../../../public/about/Video-Showcase.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight, useFadeIn } from "@/library/animations"

export default function AboutExplor() {
    const headeRef = useRef<HTMLHeadingElement>(null);
    const describeRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headeRef, 0.3);
    useSlideFromRight(describeRef, 0.3);
    useSlideFromRight(buttonRef, 0.3);
    useFadeIn(imageRef, 0.3);

    return (
        <div className="max-w-full w-full bg-black lg:px-20 lg:py-20 px-8 py-8">
            <div className="w-full flex flex-col gap-14">
                <div className="w-full flex flex-col gap-10">
                    <h2 ref={headeRef} className="font-sans font-medium text-left lext-white lg:text-4xl text-xl leading-[150%]">
                        Shaping Tomorrow&apos;s Digital Realms. <br />
                        One Pixel at a Time
                    </h2>

                    <div className="w-full flex flex-col lg:pl-130 lg:gap-10 gap-5">
                        <p ref={describeRef} className="text-white font-normal font-sans lg:text-2xl text-base leading-[170%]">
                            Here, we transform your digital dreams into reality <br />
                            — pushing boundaries and setting new standards in the digital landscape.
                        </p>

                        <div ref={buttonRef} className="lg:ml-140">
                            <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                                <p className="text-white text-lg font-medium">Explore More</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div ref={imageRef}>
                    <Image
                        src={Discusion}
                        alt="discusion teams"
                        className="lg:aspect-[16/9] aspect-[5/3] grayscale scale-[100%]"
                    />
                </div>

            </div>
        </div>
    )
}
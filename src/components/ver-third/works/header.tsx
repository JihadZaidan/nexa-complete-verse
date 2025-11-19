"use client"

import Image from "next/image"
import team from "../../../../public/three/landingpage/teams.png"
import upper from "../../../../public/about/upper-about.png"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useFadeIn } from "@/library/animations"
import { useRef } from "react"

export default function Worked() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const timsRef = useRef<HTMLDivElement>(null);
    const paraRef = useRef<HTMLDivElement>(null);

    useFadeIn(headRef, 0.3);
    useFadeIn(timsRef, 0.3);
    useFadeIn(paraRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-16 px-5 pt-7 pb-14 bg-neutral-100">
            <div className="w-full flex flex-col justify-between lg:gap-30 gap-8">
                <div className="w-full flex flex-col justify-right lg:gap-15 gap-8">
                    <h1 ref={headRef} className="w-full text-neutral-800 font-sans font-medium lg:text-8xl text-5xl lg:text-center text-left leading-[130%]">CHECK OUR WORKS</h1>
                    <div ref={timsRef} className="lg:ml-120 lg:w-[50%] flex lg:flex-row flex-col lg:gap-2 gap-3 justify-left items-left">
                        <Image
                            src={team}
                            alt="photos"
                            className="ml-[-45px] lg:scale-[70%] scale-[75%] lg:ml-0"
                        />
                        <p className="lg:mt-4 lg:text-xl text-base font-medium text-black leading-[140%]">A Perfect Craft From These People</p>
                    </div>
                </div>

                <div className="w-full flex lg:flex-row items-left justify-left">
                    <div ref={paraRef} className="flex flex-col gap-8">
                        <p className="font-sans font-medium lg:text-2xl text-base text-neutral-800 leading-[150%] text-left">
                            — Dive into Our Works and Explore <br />
                            Transformative Digital Strategies, Branding <br /> 
                            Initiatives, and Innovative Web and App <br />
                            Developments.
                        </p>

                        <Button className="w-fit justify-start gap-[9px] border-b-2 border-black">
                            <p className="text-black text-xl lg:text-2xl font-medium text-left">
                                See More
                            </p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>

                <div>
                    <Image
                        src={upper}
                        alt="upper section"
                        className="lg:w-[40%] lg:absolute lg:opacity-[100%] opacity-0 grayscale lg:top-[700px] lg:left-[750px]"
                    />
                </div>
            </div>
        </div>
    )
}



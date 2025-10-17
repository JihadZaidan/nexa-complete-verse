"use client"

import Image from "next/image"
import team from "../../../../public/three/landingpage/teams.png"
import cheepa from "../../../../public/three/landingpage/body/chipschapa.png"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useSlideFromTop, useSlideFromLeft, useSlideFromRight } from "@/library/animations"
import { useRef } from "react"

export default function Resprime() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const timsRef = useRef<HTMLDivElement>(null);
    const paraRef = useRef<HTMLDivElement>(null);
    const chiRef = useRef<HTMLImageElement>(null);

    useSlideFromTop(headRef, 0.3);
    useSlideFromRight(timsRef, 0.3);
    useSlideFromLeft(paraRef, 0.3);
    useSlideFromRight(chiRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-16 md:px-14 md:py-10 px-5 pt-7 pb-14 bg-neutral-100">
            <div className="w-full flex flex-col justify-between lg:gap-30 gap-8">
                <div className="w-full flex flex-col lg:justify-right md:justify-center lg:gap-15 md:gap-10 gap-8">
                    <h1 ref={headRef} className="w-full text-neutral-800 font-sans font-normal lg:text-8xl md:text-5xl text-5xl lg:text-center md:text-center text-start leading-[130%]">NEXA DIGITAL AGENCY</h1>
                    <div ref={timsRef} className="lg:ml-150 lg:w-[50%] flex lg:flex-row md:flex-row flex-col lg:gap-5 gap-3 justify-left items-left">
                        <Image
                            src={team}
                            alt="photos"
                            className="ml-[-45px] lg:scale-[75%] md:scale-[55%] scale-[75%] lg:ml-0"
                        />
                        <p className="lg:mt-4 lg:text-2xl md:mt-7 md:ml-[-50px] md:text-xl text-base font-normal text-black leading-[140%]">You&apos;ll collaborate with our experts.</p>
                    </div>
                </div>

                <div className="w-full flex lg:flex-row items-left justify-left">
                    <div ref={paraRef} className="flex flex-col gap-8">
                        <p className="font-sans font-normal lg:text-2xl text-base text-neutral-800 leading-[150%] text-left">
                            — An digital agency focused on digital <br />
                            experiences. With every single one of <br />
                            our clients, we bring forth a deep <br />
                            passion for creative problem solving.
                        </p>

                        <Button className="w-fit justify-start gap-[9px] border-b-2 border-black">
                            <p className="text-black text-xl lg:text-2xl font-normal text-left">
                                Let&apos;s talk
                            </p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>


                <Image
                    ref={chiRef}
                    src={cheepa}
                    alt="upper section"
                    className="lg:w-[33%] md:w-[33%] lg:absolute md:absolute lg:opacity-[100%] md:opacity-[100%] opacity-0 lg:top-[587.75px] lg:left-[930px] md:left-[500px] md:top-[450px]"
                />

            </div>
        </div>
    )
}

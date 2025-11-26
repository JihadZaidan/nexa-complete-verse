"use client"

import Image from "next/image";
import brando from "../../../../public/three/landingpage/story/brando.png"
import creator from "../../../../public/three/landingpage/story/creator.png"
import designer from "../../../../public/three/landingpage/story/designer.png"
import elevato from "../../../../public/three/landingpage/story/elevato.png"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useFadeIn } from "@/library/animations"

export default function Story() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);

    useFadeIn(headRef, 0.3);
    useFadeIn(buttonRef, 0.3);
    useFadeIn(oneRef, 0.3);
    useFadeIn(twoRef, 0.3);

    return (
        <div className="max-w-full w-full bg-[#F2F2F2]">
            <div className="w-full flex flex-col justify-left items-left lg:gap-30 gap-20">
                <div className="w-full flex lg:flex-row md:flex-row flex-col lg:justify-between justify-left items-left gap-8 lg:px-20 lg:pt-20 px-10 pt-10">
                    <h3 ref={headRef} className="lg:w-[45%] w-full text-left lg:text-5xl md:text-3xl text-2xl font-medium font-sans text-black leading-[150%]">
                        Latest insights, stories, <br />
                        and news from Nexa.
                    </h3>

                    <div ref={buttonRef} className="relative lg:mt-[100px] md:mt-12">
                        <Button className="flex flex-row justify-center gap-3 ml-[-10px]">
                            <p className="text-black lg:text-lg md:text-base text-base font-medium">Explore the Insight</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]" />
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div ref={oneRef} className="flex lg:flex-row md:flex-row flex-col">
                        <div><Image src={creator} alt="Secrets to Compelling Content Creation" /></div>
                        <div><Image src={designer} alt="UI + UX: Two Different but Complimenting Practices" /></div>
                    </div>
                    <div ref={twoRef} className="flex lg:flex-row md:flex-row flex-col">
                        <div><Image src={brando} alt="Your Guide to Branding and Why it Matters" /></div>
                        <div><Image src={elevato} alt="Elevate your brand with effective tactics." /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}





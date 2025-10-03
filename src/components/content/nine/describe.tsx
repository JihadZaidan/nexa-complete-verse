"use client"

import Image from "next/image"
import Note from "../../../../public/insight-blog/inblog-04.png"
import Tims from "../../../../public/one/landing-photos/branding.png"
import Meeting from "../../../../public/about/Video-Showcase.png"
import { useSlideFromTop, useFadeIn, useSlideFromLeft, useSlideFromRight } from "@/library/animations"
import { useRef } from "react"

export default function Ninescription() {

    const textRef = useRef<HTMLParagraphElement>(null);
    const typoRef = useRef<HTMLDivElement>(null);
    const NoteRef = useRef<HTMLImageElement>(null);
    const TeamRef = useRef<HTMLImageElement>(null);
    const MeetRef = useRef<HTMLImageElement>(null);

    useSlideFromLeft(textRef, 0.3)
    useSlideFromTop(NoteRef, 0.3)
    useFadeIn(TeamRef, 0.3)
    useSlideFromRight(typoRef, 0.3)
    useFadeIn(MeetRef, 0.3)

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-15 px-10 py-10">
            <div className="w-full gap-15 flex flex-col">
                <p ref={textRef} className="lg:w-[75%] text-[#595E5E] lg:text-3xl leading-[150%] font-sans font-normal">
                    To build a successful brand, focus on understanding your target audience deeply, defining a clear
                    brand purpose and unique value proposition, and creating a consistent brand identity across all
                    touchpoints. Leverage insights from market research and customer feedback to refine your strategy,
                    foster emotional connections, and measure performance.
                </p>

                <div className="justify-right items-right lg:relative lg:mt-[-200px] lg:mb-[-700px] flex flex-col gap-10">
                    <Image
                        ref={NoteRef}
                        src={Note}
                        alt="photos"
                        className="lg:relative lg:scale-[50%] lg:left-[200px]"
                    />

                    <Image
                        ref={TeamRef}
                        src={Tims}
                        alt="branding"
                        className="relative lg:scale-[50%] lg:w-[70%] lg:top-[-550px] lg:left-50"
                    />
                </div>

                <div ref={typoRef} className="justify-right items-left flex flex-col lg:pl-120 gap-8">
                    <h5 className="text-black lg:text-3xl text-xl font-sans font-normal text-left leading-[140%]">Insights for Brand Building</h5>
                    <p className="text-[#595E5E] lg:text-2xl leading-[150%] font-sans font-normal">
                        Brand insights are the heartbeat of successful brands. The more you know about
                        your brand in the eyes of customers, the more you can tailor your brand strategy 
                        to align with what they&apos;re looking for. These brand insights can ultimately 
                        elevate your brand to new heights.
                    </p>
                </div>

                <Image
                    ref={MeetRef}
                    src={Meeting}
                    alt="discusion teams"
                    className="grayscale lg:aspect-[4/2] aspect-[2/1]"
                />
            </div>
        </div>
    )

}

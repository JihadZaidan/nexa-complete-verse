"use client"

import Image from "next/image"
import Note from "../../../../public/insight-blog/inblog-04.png"
import Tims from "../../../../public/one/landing-photos/branding.png"
import Meeting from "../../../../public/about/Video-Showcase.png"
import { useFadeIn } from "@/library/animations"
import { useRef } from "react"

export default function Fourscription() {

    const textRef = useRef<HTMLParagraphElement>(null);
    const typoRef = useRef<HTMLDivElement>(null);
    const NoteRef = useRef<HTMLImageElement>(null);
    const TeamRef = useRef<HTMLImageElement>(null);
    const MeetRef = useRef<HTMLImageElement>(null);

    useFadeIn(textRef, 0.3)
    useFadeIn(NoteRef, 0.3)
    useFadeIn(TeamRef, 0.3)
    useFadeIn(typoRef, 0.3)
    useFadeIn(MeetRef, 0.3)

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-15 px-10 py-10">
            <div className="w-full gap-15 flex flex-col">
                <p ref={textRef} className="lg:w-[75%] text-[#595E5E] lg:text-3xl leading-[150%] font-sans font-normal">
                    Navigating branding challenges involves creating a clear vision and strategy, ensuring consistent
                    messaging and visual identity across all platforms, adapting to changing market trends and consumer
                    behavior, and building trust and authenticity with your audience.
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
                    <h5 className="text-black lg:text-3xl text-xl font-sans font-normal text-left leading-[140%]">Navigating Branding Challenges</h5>
                    <p className="text-[#595E5E] lg:text-2xl leading-[150%] font-sans font-normal">
                        Key challenges include cultural differences, competitive pressures, legal 
                        complexities, and maintaining brand resilience in a dynamic environment. 
                        To overcome these, focus on consistent brand storytelling, a strong digital 
                        strategy, proactive management of online reputation, and a flexible approach
                        that prioritizes long-term brand value over short-term trends.
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


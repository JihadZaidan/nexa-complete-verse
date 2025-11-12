"use client"

import Image from "next/image"
import Note from "../../../../public/insight-blog/inblog-04.png"
import Tims from "../../../../public/one/landing-photos/branding.png"
import Meeting from "../../../../public/about/Video-Showcase.png"
import { useSlideFromTop } from "@/library/animations"
import { useRef } from "react"

export default function SecondaryDescription() {

    const textRef = useRef<HTMLParagraphElement>(null);
    const typoRef = useRef<HTMLDivElement>(null);
    const NoteRef = useRef<HTMLImageElement>(null);
    const TeamRef = useRef<HTMLImageElement>(null);
    const MeetRef = useRef<HTMLImageElement>(null);

    useSlideFromTop(textRef, 0.3)
    useSlideFromTop(NoteRef, 0.3)
    useSlideFromTop(TeamRef, 0.3)
    useSlideFromTop(typoRef, 0.3)
    useSlideFromTop(MeetRef, 0.3)

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-15 px-10 py-10">
            <div className="w-full gap-15 flex flex-col">
                <p ref={textRef} className="lg:w-[75%] text-[#595E5E] lg:text-3xl leading-[150%] font-sans font-normal">
                    Data-driven growth strategies involve using collected and analyzed
                    data to guide business decisions, rather than relying on intuition.
                    These strategies focus on identifying patterns and trends within data
                    to improve decision-making, personalize customer experiences, optimize
                    operations, and ultimately achieve growth. Key components include
                    collecting relevant data, employing advanced analytics to extract
                    insights, and using those insights to implement targeted changes in
                    areas like marketing, product development, and customer success.
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
                    <h5 className="text-black lg:text-3xl text-xl font-sans font-normal text-left leading-[140%]">Data-Driven Growth Strategies</h5>
                    <p className="text-[#595E5E] lg:text-2xl leading-[150%] font-sans font-normal">
                        Intuition and adaptability — these have been the driving force behind 
                        successful startups over the years. Haven&apos;t you seen founders 
                        relying on gut feeling to make important decisions while
                        surviving in an uncertain environment with limited resources?
                        But times have changed, and so should your business strategy.
                        Running a startup without a data driven business strategy in 
                        today&apos;s world is like driving a car aimlessly around the block. 
                        Yes, you might go from A to B, but you&apos;ll not get anywhere meaningful 
                        or in other words, won&apos;t achieve your business goals.
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

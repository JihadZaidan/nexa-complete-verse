"use client"

import Image from "next/image"
import Note from "../../../../public/insight-blog/inblog-04.png"
import Tims from "../../../../public/one/landing-photos/branding.png"
import Meeting from "../../../../public/about/Video-Showcase.png"
import { useSlideFromTop } from "@/library/animations"
import { useRef } from "react"

export default function Fivescription() {

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
                    The Dreyfus model for skill development says that the first step to go from novice to expert is to 
                    identify and apply many recipes or templates for accomplishing a task. Eventually, through research 
                    and analysis, they can build intuition about what recipe will help solve a problem, and how to 
                    improvise or combine recipes to create their own. They can develop expertise.
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
                    <h5 className="text-black lg:text-3xl text-xl font-sans font-normal text-left leading-[140%]">Skills Needed to Become an AI Engineer or Researcher</h5>
                    <p className="text-[#595E5E] lg:text-2xl leading-[150%] font-sans font-normal">
                        Mathematical Skills - Developing AI models will require confidence in calculating
                        algorithms and a strong understanding in probability. AI programming will utilize
                        statistics, calculus, linear algebra, and numerical analysis to help predict how
                        AI programs will run.
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

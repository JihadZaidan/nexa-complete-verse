"use client"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations"

export default function Insider() {
    
    const headRef = useRef<HTMLHeadingElement>(null);
    const graphRef = useRef<HTMLParagraphElement>(null);

    useFadeIn(headRef, 0.3);
    useFadeIn(graphRef, 0.3);

    return (
        <div className="max-w-full w-full bg-white lg:px-18 lg:pt-16 lg:pb-20 md:px-14 px-9 pt-5 pb-8">
            <div className="w-full justify-left items-left flex flex-col lg:gap-25 gap-16">
                <h1 ref={headRef} className="w-full text-left lg:text-7xl md:text-4xl text-3xl font-normal font-sans text-black leading-[150%]">
                    Digital Diaries: <br />
                    Strategies and Insights for Success
                </h1>

                <p ref={graphRef} className="lg:text-end md:text-end text-black font-sans font-normal lg:text-3xl md:text-xl text-lg leading-[140%]">
                    — Unlocking Strategies, Trends, <br/>
                    and Insights to Propel Your Brand <br/>
                    Forward in the Dynamic World of <br/>
                    Digital Marketing.
                </p>
            </div>
        </div>
    )
}



"use client"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations"

export default function Insider() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const graphRef = useRef<HTMLParagraphElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(graphRef, 0.3);

    return (
        <div className="max-w-full w-full bg-white lg:px-18 lg:pt-16 lg:pb-20 px-9 pt-5 pb-8">
            <div className="w-full justify-left items-left flex flex-col lg:gap-25 gap-16">
                <h1 ref={headRef} className="w-full text-left lg:text-7xl text-3xl font-medium font-sans text-black leading-[150%]">
                    Digital Diaries: <br />
                    Strategies and Insights for Success
                </h1>

                <p ref={graphRef} className="lg:text-right text-black font-sans font-medium lg:text-3xl text-lg leading-[140%] lg:ml-50">
                    — Unlocking Strategies, Trends, <br/>
                    and Insights to Propel Your Brand <br/>
                    Forward in the Dynamic World of <br/>
                    Digital Marketing.
                </p>
            </div>
        </div>
    )
}
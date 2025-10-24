"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Canva from "../../../../public/second/landing-page/story/storycanvas.png"
import UIUX from "../../../../public/second/landing-page/story/uiux.png"
import Brand from "../../../../public/second/landing-page/story/improve.png"
import { useSlideFromTop } from "@/library/animations"
import { useRef } from "react"

export default function StoryWork() {
    const headRef  = useRef<HTMLHeadingElement>(null)
    const btnRef   = useRef<HTMLButtonElement>(null)
    const imcaRef  = useRef<HTMLDivElement>(null)
    const imdegRef = useRef<HTMLDivElement>(null)
    const imbRef   = useRef<HTMLDivElement>(null)

    useSlideFromTop(headRef, 0.3)
    useSlideFromTop(btnRef, 0.3)
    useSlideFromTop(imcaRef, 0.3)
    useSlideFromTop(imdegRef, 0.3)
    useSlideFromTop(imbRef, 0.3)

    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-20 lg:pb-5 md:px-14 md:py-18 px-5 py-14 bg-neutral-200">
            <div className="w-full lg:gap-26 gap-8 flex flex-col">
                <div className="w-full flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between">
                    <h3 className="font-sans font-normal text-neutral-800 lg:text-5xl text-3xl leading-[150%]">
                        Latest insights, stories, <br />
                        and news from Nexa.
                    </h3>

                    <Button className="justify-center gap-[9px] lg:mt-22 md:mt-13 mt-10 lg:ml-0 md:ml-0 ml-[-150px]">
                        <p className="text-neutral-800 text-base font-normal">Explore the Insight</p>
                        <ArrowRight height={25} width={25} className="mt-[3px] text-neutral-800" />
                    </Button>
                </div>

                <div className="w-full flex flex-col lg:gap-18 gap-12">
                    <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-20 gap-12">
                        <div className="w-full">
                            <Image
                                src={Canva}
                                alt="business model canvas"
                                className="lg:scale-[95%] grayscale"
                            />
                        </div>
                        <div className="w-full lg:pt-30">
                            <Image
                                src={UIUX}
                                alt="business model canvas"
                                className="lg:scale-[95%] grayscale"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:pl-10">
                        <Image
                            src={Brand}
                            alt="business model canvas"
                            className="lg:scale-[55%] lg:mt-[-200px] lg:ml-[-100px] grayscale"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


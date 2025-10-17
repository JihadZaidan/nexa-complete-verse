"use client"

import Image from "next/image"
import Full from "../../../../public/second/works/lower/full.png"
import Short from "../../../../public/second/works/lower/short.png"
import { ArrowRight } from "lucide-react"
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations"
import { useRef } from "react"

export default function Lork() {

    const lemakeRef = useRef<HTMLDivElement>(null);
    const remakeRef = useRef<HTMLDivElement>(null);
    useSlideFromLeft(lemakeRef, 0.3);
    useSlideFromRight(remakeRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-10 md:px-14 md:py-18 pb-30 px-5 pt-12 bg-neutral-100">
            <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-14 gap-12">
                <div ref={lemakeRef} className="flex flex-col justify-left items-left gap-8">
                    <Image src={Short} alt="image lower person" />
                    <div className="flex flex-row justify-between">
                        <h4 className="text-neutral-800 text-xl font-size font-medium text-left">/ CLOODY</h4>
                        <ArrowRight className="text-neutral-700 font-medium" />
                    </div>
                </div>
                <div ref={remakeRef} className="flex flex-col justify-left items-left gap-8">
                    <Image src={Full} alt="image lower person" />
                    <div className="flex flex-row justify-between">
                        <h4 className="text-neutral-800 text-xl font-size font-medium text-left">/ DOCKER</h4>
                        <ArrowRight className="text-neutral-700 font-medium" />
                    </div>
                </div>
            </div>
        </div>
    )
}

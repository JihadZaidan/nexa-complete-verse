"use client"
import Image from "next/image"
import railey from "../../../../public/blog-detail/railey.png"
import detail from "../../../../public/blog-detail/detailhead.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations"

export default function TressingThemes() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const foundRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromLeft(foundRef, 0.3);
    useSlideFromRight(imageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-30 px-8 py-5 flex flex-col lg:gap-20 gap-10">
            <div className="w-full flex flex-col gap-20">
                <h1 ref={headRef} className="font-sans font-normal lg:text-5xl text-3xl text-black leading-[150%] lg:z-5">
                    Brand Evolution — <br />
                    Strategy for Ecommerce Success
                </h1>
                <div ref={foundRef} className="lg:w-[50%] flex flex-row gap-4 justify-start items-center">
                    <Image
                        src={railey}
                        alt="founder"
                        className="w-[10%] h-[10%]"
                    />
                    <p className="text-black text-2xl font-sans font-normal">Railey Braid</p>
                </div>
            </div>

            <div ref={imageRef} className="lg:relative">
                <Image 
                  src={detail}
                  alt="photos market"
                  className="lg:absolute lg:z-0 grayscale lg:w-[40%] lg:right-[-10px] lg:top-[-300px]"
                />
            </div>
        </div>
    )
}
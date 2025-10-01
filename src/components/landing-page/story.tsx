"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import invidi from "../../../public/one/landing-photos/insight/insight-visa.png"
import invida from "../../../public/one/landing-photos/insight/insight-vida.png"
import { useRef } from "react";
import { useSlideFromLeft, useSlideFromRight, useZoom } from "@/library/animations"

export default function Story() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(buttonRef, 0.3);
    useZoom(oneRef, 0.3);
    useZoom(twoRef, 0.3);

    return (
        <div className="max-w-full w-full bg-[#F2F2F2] lg:px-20 lg:py-30 px-8 py-8">
            <div className="w-full flex flex-col justify-left items-left lg:gap-30 gap-20">
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-8">
                    <h3 ref={headRef} className="lg:w-[45%] w-full text-left lg:text-5xl text-3xl font-normal font-sans text-black leading-[140%]">
                        Latest insights, stories,
                        and news from Nexa.
                    </h3>

                    <div ref={buttonRef} className="relative lg:mt-20">
                        <Button className="flex flex-row justify-center gap-3 ml-[-10px]">
                            <p className="text-black text-xl font-normal">Explore the Insight</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]" />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex lg:flex-row flex-col lg:gap-20 gap-12 justify-left items-left">
                    <div ref={oneRef} className="w-full flex flex-col justify-left gap-10 items-left">
                        <Image
                            src={invidi}
                            alt="insight firstly"
                            className="grayscale"
                        />
                        <div className="lg:w-[75%] w-full flex flex-col gap-6">
                            <h4 className="w-full text-normal text-black lg:text-4xl text-2xl leading-[140%]">
                                All about the Business <br />
                                Model Canvas
                            </h4>
                            <p className="w-full text-lg font-normal text-black">
                                The Business Model Canvas was proposed by <br />
                                Alexander Osterwalder based on his earlier book.
                            </p>
                        </div>
                    </div>

                    <div ref={twoRef} className="w-full flex flex-col justify-left gap-10 items-left lg:pt-20">
                        <Image
                            src={invida}
                            alt="insight secondary"
                        />
                        <div className="lg:w-[75%] w-full flex flex-col gap-6">
                            <h4 className="w-full text-normal text-black lg:text-4xl text-2xl leading-[140%]">
                                UI + UX: Two Different but 
                                Complimenting Practices
                            </h4>
                            <p className="w-full text-lg font-normal text-black">
                                The Business Model Canvas was proposed by <br />
                                Alexander Osterwalder based on his earlier book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


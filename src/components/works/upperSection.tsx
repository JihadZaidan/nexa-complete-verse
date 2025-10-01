"use client"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import work1 from "../../../public/one/landing-photos/worker/firsly-work.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations"

export default function UpperWorks() {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const describeRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    
    useSlideFromLeft(headerRef, 0.3);
    useSlideFromLeft(describeRef, 0.3);
    useSlideFromRight(imageRef, 0.3);
    return (
        <section>
            <div className="max-w-full w-full lg:px-20 lg:py-16 px-8 py-8 bg-white">
                <div className="w-full flex flex-col lg:gap-30 gap-18 relative lg:top-10">
                    <h1 ref={headerRef} className="lg:text-5xl text-2xl leading-[130%] lg:w-[60%] font-normal font-sans text-black">
                        From creative projects that push 
                        the boundaries of our team&apos;s 
                        imagination. Build in into all of 
                        our works.
                    </h1>

                    <div className="w-full flex lg:flex-row flex-col lg:pl-[304px] lg:gap-24 gap-10">
                        <div ref={describeRef} className="w-[55%] justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-normal text-left text-black">/ HOUSEL</h5>
                            <h4 className="lg:text-3xl text-base font-normal text-left text-black">
                                Help you to sell, buy, 
                                mortgage, invest 
                                property, and other 
                                real estate service.
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-10px]">
                                    <p className="text-black lg:text-xl text-base font-normal text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={imageRef} className="lg:w-full w-full z-7 relative lg:top-15">
                            <Image
                                src={work1}
                                alt="worker first photos"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full relative bg-black bottom-0 h-20"></div>
        </section>
    )
}

"use client"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import DigitalStrategy from "../../../public/one/landing-photos/digital-strategy.png"
import Branding from "../../../public/one/landing-photos/branding.png"
import Webdev from "../../../public/one/landing-photos/webdevelopers.png"
import Appdev from "../../../public/one/landing-photos/appdeveloper.png"
import { useRef } from "react"
import { useSlideFromTop, useFadeIn, useZoom } from "@/library/animations"

export default function VisionBrand() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const graphRef = useRef<HTMLDivElement>(null);
    const upperRef = useRef<HTMLDivElement>(null);
    const lowerRef = useRef<HTMLDivElement>(null);

    useSlideFromTop(headRef, 0.3);
    useFadeIn(graphRef, 0.3);
    useZoom(upperRef, 0.3);
    useZoom(lowerRef, 0.3);
    
    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 md:px-14 md:py-14 px-10 py-8 bg-black">
            <div className="w-full flex flex-col lg:gap-20 gap-10">
                <div className="w-full justify-left items-left">
                    <h2 ref={headRef} className="lg:w-[40%] md:w-[75%] w-full text-left lg:text-5xl md:text-4xl text-3xl font-normal font-sans text-white leading-[150%]">
                        Transforming Digital 
                        Innovations for Visionary Brands
                    </h2>
                </div>

                <div className="w-full flex flex-col gap-18 justify-start items-start">
                    <div ref={graphRef} className="w-full flex lg:flex-row flex-col justify-between items-start pr-10 pb-10 gap-8 border-b-[0.25px] border-gray">
                        <div className="w-full flex lg:flex-row flex-col justify-start lg:gap-20 gap-10 items-start">
                            <p className="lg:text-base text-xl font-normal text-white leading-[180%] text-left">
                                Elevating Brands with <br />
                                Digital Transformation Innovation
                            </p>
                            <p className="lg:text-base lg:w-[50%] w-[90%] text-lg font-normal text-white leading-[180%] text-left">
                                We are passionate about uncovering the best digital innovations for forward — thinking brands looking to push boundaries and drive significant impact.
                            </p>
                        </div>

                        <div>
                            <Button className="justify-left gap-[9px] ml-[-10px] border-b-2 border-black">
                                <p className="text-white text-lg font-normal">Explore All Expertise</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-left items-left gap-18">
                        <div ref={upperRef} className="w-full flex lg:flex-row md:flex-row flex-col gap-7">
                            <div className="w-full flex flex-col justify-left items-left gap-5">
                                <h4 className="font-normal text-2xl text-white">01/ DIGITAL STRATEGY</h4>
                                <Image
                                    src={DigitalStrategy}
                                    alt="digital strategy"
                                    className="lg:h-[480px] md:h-[240px] w-full"
                                />
                            </div>
                            <div className="w-full flex flex-col justify-left items-left gap-5">
                                <h4 className="font-normal text-2xl text-white">02/ BRANDING</h4>
                                <Image
                                    src={Branding}
                                    alt="Branding"
                                    className="lg:h-[480px] md:h-[240px] w-full"
                                />
                            </div>
                        </div>

                        <div ref={lowerRef} className="w-full flex lg:flex-row md:flex-row flex-col gap-7">
                            <div className="w-full flex flex-col justify-left items-left gap-5">
                                <h4 className="font-normal text-2xl text-white">03/ WEB DEVELOPMENT</h4>
                                <Image
                                    src={Webdev}
                                    alt="WebDev"
                                    className="lg:h-[480px] md:h-[240px] w-full"
                                />
                            </div>
                            <div className="w-full flex flex-col justify-left items-left gap-5">
                                <h4 className="font-normal text-2xl text-white">04/ APP DEVELOPMENT</h4>
                                <Image
                                    src={Appdev}
                                    alt="MobileDev"
                                    className="lg:h-[480px] md:h-[240px] w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 


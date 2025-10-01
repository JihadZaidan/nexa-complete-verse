"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Chitato from "../../../../public/second/landing-page/header/chipschapa.png"
import Studio from "../../../../public/second/landing-page/header/shooting.png"
import Bin from "../../../../public/second/landing-page/body/binary.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight, useFadeIn } from "@/library/animations"

export default function Marketing() {

    const firstoRef = useRef<HTMLDivElement>(null);
    const dousRef = useRef<HTMLDivElement>(null);
    const tresseruRef = useRef<HTMLDivElement>(null);
    const fourtRef = useRef<HTMLDivElement>(null);
    const onetownRef = useRef<HTMLHeadingElement>(null);
    const twonRef = useRef<HTMLHeadingElement>(null);
    const tresuRef = useRef<HTMLHeadingElement>(null);
    const fourteRef = useRef<HTMLHeadingElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const parRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(onetownRef, 0.3);
    useSlideFromLeft(twonRef, 0.3);
    useSlideFromLeft(tresuRef, 0.3);
    useSlideFromLeft(fourteRef, 0.3);
    useSlideFromRight(firstoRef, 0.3);
    useSlideFromRight(dousRef, 0.3);
    useSlideFromRight(tresseruRef, 0.3);
    useSlideFromRight(fourtRef, 0.3);
    useSlideFromLeft(headerRef, 0.3);
    useSlideFromRight(parRef, 0.3);
    useFadeIn(imageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-24 lg:pb-28 px-10 py-14 bg-neutral-900">
            <div className="w-full flex flex-col gap-24">
                {/* Intro */}
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-10">
                    <h3 ref={headerRef} className="text-neutral-100 text-left leading-[140%] lg:text-5xl text-3xl font-sans font-normal">
                        Transforming Digital <br />
                        Innovations for <br />
                        Visionary Brands
                    </h3>

                    <p ref={parRef} className="lg:mt-[135px] text-neutral-100 text-left leading-[180%] text-lg font-sans font-normal">
                        We are passionate about uncovering the best digital innovations for forward — <br />
                        thinking brands looking to push boundaries and drive significant impact.
                    </p>
                </div>

                {/* Section 1 */}
                <div className="w-full flex flex-col gap-8 border-b border-neutral-300 lg:pb-5">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 ref={onetownRef} className="text-neutral-100 font-sans font-normal lg:text-5xl text-2xl text-left">
                            01/ DIGITAL STRATEGY.
                        </h3>
                        <div ref={firstoRef}>
                            <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                                <p className="text-neutral-100 text-lg font-normal">Explore</p>
                                <ArrowRight height={20} width={20} className="text-neutral-100" />
                            </Button>
                        </div>
                    </div>

                    <div ref={imageRef} className="w-full flex lg:flex-row flex-col lg:gap-8 gap-6 justify-start items-start">
                        <Image
                            src={Chitato}
                            alt="snack packaging design"
                            className="w-full lg:w-1/3"
                        />
                        <Image
                            src={Bin}
                            alt="binary data illustration"
                            className="w-full lg:w-1/3"
                        />
                        <Image
                            src={Studio}
                            alt="studio photography"
                            className="w-full lg:w-1/3"
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="w-full flex flex-col gap-5 border-b border-neutral-300 lg:pb-12 pb-4">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 ref={twonRef} className="text-neutral-100 font-sans font-normal lg:text-5xl text-2xl text-left">
                            02/ BRANDING.
                        </h3>
                        <div ref={dousRef}>
                            <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                                <p className="text-neutral-100 text-lg font-normal">Learn More</p>
                                <ArrowRight height={20} width={20} className="text-neutral-100" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="w-full flex flex-col gap-5 border-b border-neutral-300 lg:pb-12 pb-4">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 ref={tresuRef} className="text-neutral-100 font-sans font-normal lg:text-5xl text-2xl text-left">
                            03/ WEB DEVELOPMENT.
                        </h3>
                        <div ref={tresseruRef}>
                            <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                                <p className="text-neutral-100 text-lg font-normal">Learn More</p>
                                <ArrowRight height={20} width={20} className="text-neutral-100" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="w-full flex flex-col gap-5 border-b border-neutral-300 lg:pb-12 pb-4">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 ref={fourteRef} className="text-neutral-100 font-sans font-normal lg:text-5xl text-2xl text-left">
                            04/ APP DEVELOPMENT.
                        </h3>
                        <div ref={fourtRef}>
                            <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                                <p className="text-neutral-100 text-lg font-normal">Learn More</p>
                                <ArrowRight height={20} width={20} className="text-neutral-100" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


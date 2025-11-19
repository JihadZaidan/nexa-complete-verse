"use client"

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Converter from "../../../../public/second/works/center/upper.png"
import Lofi from "../../../../public/second/works/center/left.png"
import Rigel from "../../../../public/second/works/center/right.png"
import { useFadeIn } from "@/library/animations/useFadeIn";
import { useRef } from "react";

export default function CenterWorks() {
    const uppermageRef = useRef<HTMLDivElement>(null);
    const lowerlevronRef = useRef<HTMLDivElement>(null);
    const loweregRef = useRef<HTMLDivElement>(null);
    const prihadRef = useRef<HTMLHeadingElement>(null);
    const prigarpRef = useRef<HTMLParagraphElement>(null);

    useFadeIn(uppermageRef, 0.3);
    useFadeIn(lowerlevronRef, 0.3);
    useFadeIn(loweregRef, 0.3);
    useFadeIn(prihadRef, 0.3);
    useFadeIn(prigarpRef, 0.3);

    return (
        <div className="max-w-full w-full bg-neutral-900 lg:px-20 lg:pt-20 lg:pb-16 md:px-14 md:pt-15 md:pb-18 px-8 py-14">
            <div className="w-full flex flex-col lg:gap-18 gap-12">
                <div className="w-full flex flex-col lg:gap-14 gap-6">
                    <div ref={uppermageRef}>
                        <Image
                            src={Converter}
                            alt="center works primary"
                            className="w-full"
                        />
                    </div>

                    <div className="w-full flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-left items-left gap-5">
                        <h4 ref={prihadRef} className="text-neutral-100 text-xl font-size font-medium text-left">/ HOUSEL</h4>
                        <p ref={prigarpRef} className="text-neutral-100 text-xl font-size font-medium text-left">
                            Empowers developers and companies <br /> to build outstanding products.
                        </p>
                    </div>
                </div>
                <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-20 gap-12">
                    <div ref={lowerlevronRef} className="flex flex-col gap-8">
                        <Image
                            src={Lofi}
                            alt="center lower left"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between">
                            <h4 className="text-neutral-100 text-xl font-size font-medium text-left">/ HOUSEL</h4>
                            <ArrowRight className="text-white font-medium" />
                        </div>
                    </div>
                    <div ref={loweregRef} className="flex flex-col gap-8">
                        <Image
                            src={Rigel}
                            alt="center lower right"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between">
                            <h4 className="text-neutral-100 text-xl font-size font-medium text-left">/ CONTEXT AI</h4>
                            <ArrowRight className="text-white font-medium" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




"use client"

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import cloody from "../../../../public/three/landingpage/worker/cloody.png"
import dockey from "../../../../public/three/landingpage/worker/docker.png"
import house from "../../../../public/three/landingpage/worker/housel.png"
import ai from "../../../../public/three/landingpage/worker/contai.png"
import { useZoom, useSlideFromLeft, useSlideFromRight } from "@/library/animations";
import { useRef } from "react";

export default function WorkerFiles() {

    const headerRef = useRef<HTMLHeadingElement>(null);
    useSlideFromRight(headerRef, 0.3);

    const housemageRef  = useRef<HTMLDivElement>(null);
    const housetitleRef = useRef<HTMLHeadingElement>(null);
    const houserrow = useRef<HTMLDivElement>(null);
    useZoom(housemageRef, 0.3);
    useSlideFromRight(housetitleRef, 0.3);
    useSlideFromLeft(houserrow, 0.3);

    const cloodyRef  = useRef<HTMLDivElement>(null);
    const cloodeRef = useRef<HTMLHeadingElement>(null);
    const clorophile = useRef<HTMLDivElement>(null);
    useZoom(cloodyRef, 0.3);
    useSlideFromRight(cloodeRef, 0.3);
    useSlideFromLeft(clorophile, 0.3);

    const intelekRef  = useRef<HTMLDivElement>(null);
    const intitleRef = useRef<HTMLHeadingElement>(null);
    const interrow = useRef<HTMLDivElement>(null);
    useZoom(intelekRef, 0.3);
    useSlideFromRight(intitleRef, 0.3);
    useSlideFromLeft(interrow, 0.3);

    const dockeRef  = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLHeadingElement>(null);
    const dorrow = useRef<HTMLDivElement>(null);
    useZoom(dockeRef, 0.3);
    useSlideFromRight(dotRef, 0.3);
    useSlideFromLeft(dorrow, 0.3);

    return (
        <div className="max-w-full w-full bg-neutral-100 lg:px-20 lg:pt-27 lg:pb-30 px-8 pt-10 pb-14">
            <div className="w-full flex flex-col lg:gap-[-150px] gap-8">
                <h2 ref={headerRef} className="text-right text-neutral-800 lg:text-7xl text-3xl leading-[140%]">The work we do, <br /> and the people we help</h2>
                <div className="w-full flex lg:flex-row flex-col lg:gap-25">
                    <div className="w-full flex flex-col lg:gap-20 gap-10">
                        <div className="w-full flex flex-col gap-8">
                            <div ref={housemageRef}><Image src={house} alt="cloudess-image-upper" /></div>
                            <div className="flex flex-row justify-between">
                                <h4 ref={housetitleRef} className="text-neutral-800 lg:text-2xl text-xl font-size font-normal text-left">/ HOUSEL</h4>
                                <div ref={houserrow}><ArrowRight className="text-neutral-700 font-normal" /></div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-8">
                            <div ref={intelekRef}><Image src={ai} alt="cloudess-image-upper" /></div>
                            <div className="flex flex-row justify-between">
                                <h4 ref={intitleRef} className="text-neutral-800 lg:text-2xl text-xl font-size font-normal text-left">/ CONTEXT AI</h4>
                                <div ref={interrow}><ArrowRight className="text-neutral-700 font-normal" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col lg:pt-50 lg:gap-20 gap-10">
                        <div className="w-full flex flex-col gap-8">
                            <div ref={cloodyRef}><Image src={cloody} alt="cloudess-image-upper" /></div>
                            <div className="flex flex-row justify-between">
                                <h4 ref={cloodeRef} className="text-neutral-800 lg:text-2xl text-xl font-size font-normal text-left">/ CLOODY</h4>
                                <div ref={clorophile}><ArrowRight className="text-neutral-700 font-normal" /></div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-8">
                            <div ref={dockeRef}><Image src={dockey} alt="cloudess-image-upper" /></div>
                            <div className="flex flex-row justify-between">
                                <h4 ref={dotRef} className="text-neutral-800 lg:text-2xl text-xl font-size font-normal text-left">/ DOCKER</h4>
                                <div ref={dorrow}><ArrowRight className="text-neutral-700 font-normal" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


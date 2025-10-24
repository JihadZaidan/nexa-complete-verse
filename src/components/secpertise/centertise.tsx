"use client"

import Image from "next/image";
import Chitato from "../../../public/three/landingpage/body/chipschapa.png"
import Studio from "../../../public/three/landingpage/body/shooting.png"
import Bin from "../../../public/three/landingpage/body/binary.png"
import { useSlideFromTop } from "@/library/animations";
import { useRef } from "react";

export default function Featurise() {
    const fredoRef = useRef<HTMLHeadingElement>(null);
    const sedoRef = useRef<HTMLHeadingElement>(null);
    const tredeRef = useRef<HTMLHeadingElement>(null);
    const fordoRef = useRef<HTMLHeadingElement>(null);
    const mageRef = useRef<HTMLDivElement>(null);

    useSlideFromTop(fredoRef, 0.3);
    useSlideFromTop(sedoRef, 0.3);
    useSlideFromTop(tredeRef, 0.3);
    useSlideFromTop(fordoRef, 0.3);
    useSlideFromTop(mageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 md:px-14 md:py-15 px-7 py-14 bg-neutral-900">
            <div className="w-full flex flex-col lg:gap-30 gap-15">
                <div className="w-full flex flex-col gap-14">
                    <h3 ref={fredoRef} className="lg:w-[35%] lg:pb-2 pb-4 text-4xl text-neutral-100 font-normal font-sans border-b-2 border-neutral-500">01/ DIGITAL STRATEGY.</h3>
                    <div ref={mageRef} className="flex lg:flex-row md:flex-row lg:justify-between flex-col justify-left gap-4">
                        <Image
                            src={Chitato}
                            alt="snack packaging design"
                            className="w-full lg:w-1/3 md:w-[33%] lg:relative lg:top-15 lg:mt-15"
                        />
                        <Image
                            src={Bin}
                            alt="binary data illustration"
                            className="w-full lg:w-1/3 md:w-[33%] lg:scale-[70%]"
                        />
                        <Image
                            src={Studio}
                            alt="studio photography"
                            className="w-full lg:w-1/3 md:w-[33%] lg:relative lg:top-15 lg:mt-4"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col lg:gap-9 gap-10">
                    <h3 ref={sedoRef} className="text-4xl lg:text-end md:text-end text-neutral-100 font-medium font-sans">02/ BRANDING.</h3>
                    <h3 ref={tredeRef} className="text-4xl text-neutral-100 font-medium font-sans">03/ WEB DEVELOPMENT.</h3>
                    <h3 ref={fordoRef} className="text-4xl lg:text-end md:text-end text-neutral-100 font-medium font-sans">04/ APP DEVELOPMENT.</h3>
                </div>
            </div>
        </div>
    )

}





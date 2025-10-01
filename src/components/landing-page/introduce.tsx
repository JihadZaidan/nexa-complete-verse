"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import team from "../../../public/one/landing-photos/teams.png"
import contribute from "../../../public/one/landing-photos/contributors.png"
import { useRef } from "react"
import { useSlideFromLeft, useFadeIn} from "@/library/animations"

export default function Introduce() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromLeft(buttonRef, 0.3);
    useFadeIn(bottomRef, 0.3);

    return (
        <div className="max-w-full w-full gap-16 lg:px-20 lg:pt-24 px-8 lg:pb-0 pb-10 bg-white">
            <div className="w-full flex flex-col justify-between items-left gap-20">
                <div className="w-full flex flex-col justify-left items-left lg:gap-16 gap-8">
                    <h1 ref={headRef} className="lg:text-5xl text-3xl leading-[130%] lg:w-[70%] w-full font-normal font-sans text-black">
                        An digital agency focused on digital
                        experiences. With every single one of our
                        clients, we bring forth a deep passion for
                        creative problem solving.
                    </h1>
                    <div ref={buttonRef} className="justify-left">
                        <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                            <p className="text-black text-xl lg:text-3xl font-normal">Let&apos;s talk</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
                <div ref={bottomRef} className="w-full lg:flex lg:flex-row lg:justify-between lg:gap-4 flex flex-col justify between gap-10">
                    <div className="lg:w-full w-[80%] flex lg:flex-row flex-col lg:gap-12 gap-8 lg:justify-left justify-center items-center lg:pt-72">
                        <Image
                            src={team}
                            alt="photos"
                            className="ml-0 lg:w-[50%]"
                        />
                        <p className="lg:text-2xl text-base font-normal text-black leading-[140%]">You&apos;ll collaborate with our experts.</p>
                    </div>

                    <Image
                        src={contribute}
                        alt="contributors clients"
                        className="relative lg:w-[50%] w-full lg:left-20 lg:block hidden"
                    />
                </div>
            </div>
        </div>
    )
}

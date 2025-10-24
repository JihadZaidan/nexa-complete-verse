"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Work from "../../../../public/second/landing-page/body/worker.png"
import { useRef } from "react"
import { useSlideFromTop } from "@/library/animations"

export default function WorkerSheet() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const imRef = useRef<HTMLImageElement>(null);

    useSlideFromTop(headRef, 0.3)
    useSlideFromTop(btnRef, 0.3)
    useSlideFromTop(listRef, 0.3)
    useSlideFromTop(imRef, 0.3)

    return (
        <div className="max-w-full w-full bg-neutral-100 lg:px-20 lg:pt-25 lg:pb-30 md:px-14 md:py-16 px-8 py-8">
            <div className="w-full flex flex-col lg:gap-20 md:gap-14 gap-5">
                <div className="w-full flex flex-col gap-5">
                    <h2 ref={headRef} className="font-sans font-normal lg:text-5xl md:text-4xl text-2xl text-neutral-800 leading-[140%]">
                        The work we do, <br />
                        and the people we help
                    </h2>
                    <Button ref={btnRef} className="lg:hidden md:hidden justify-center gap-[9px] ml-[-170px] ">
                        <p className="text-neutral-800 text-base font-normal">All Case Study</p>
                        <ArrowRight height={20} width={20} className="mt-[3px] text-neutral-800" />
                    </Button>
                </div>

                <div className="w-full justify-left flex lg:flex-row-reverse md:flex-col flex-col-reverse gap-15">
                    <div className="w-full justify-left lg:ml-[-250px] flex flex-col lg:justify-between gap-8">
                        <div ref={listRef} className="flex flex-col lg:gap-8 md:gap-6 gap-4">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-neutral-800 lg:text-4xl md:text-3xl text-xl font-sans font-normal text-left">/ HOUSEL</h4>
                                <p className="text-neutral-600 lg:text-2xl md:text-lg text-lg font-sans font-normal leading-[150%]">
                                    Help you to sell, buy, 
                                    mortgage,invest property, and <br /> 
                                    other real estate service.
                                </p>
                            </div>
                            <h4 className="text-neutral-500 lg:text-4xl md:text-2xl font-sans font-normal text-left">/ CONTEXT AI</h4>
                            <h4 className="text-neutral-500 lg:text-4xl md:text-2xl font-sans font-normal text-left">/ CLODY</h4>
                        </div>
                        <Button ref={btnRef} className="justify-center gap-[9px] lg:ml-[-250px] md:ml-[-580px] ml-[-170px]">
                            <p className="text-neutral-800 lg:text-xl text-base font-normal">All Case Study</p>
                            <ArrowRight height={20} width={20} className="mt-[3px] text-neutral-800" />
                        </Button>
                    </div>

                    <Image
                        ref={imRef}
                        src={Work}
                        alt="project"
                        className="lg:w-[55%] lg:mr-[350px]"
                    />
                </div>
            </div>
        </div>
    )
}


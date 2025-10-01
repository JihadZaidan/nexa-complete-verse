"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import work1 from "../../../public/one/landing-photos/worker/firsly-work.png"
import work2 from "../../../public/one/landing-photos/worker/secondary-work.png"
import work3 from "../../../public/one/landing-photos/worker/threel-work.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations"

export default function Worksheet() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const firstRef = useRef<HTMLDivElement>(null);
    const figeRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const sagaRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const tangoRef = useRef<HTMLDivElement>(null);    

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(buttonRef, 0.3);
    useSlideFromLeft(firstRef, 0.3);
    useSlideFromRight(figeRef, 0.3);
    useSlideFromLeft(secondRef, 0.3);
    useSlideFromRight(sagaRef, 0.3);
    useSlideFromLeft(thirdRef, 0.3);
    useSlideFromRight(tangoRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-36 py-14 px-5 gap-28 bg-white justify-left items-left">
            <div className="w-full justify-left gap-28 flex flex-col">
                <div className="w-full lg:justify-between items-left flex lg:flex-row flex-col justify-left gap-10">
                    <h2 ref={headRef} className="lg:w-[40%] lg:text-5xl w-full text-left text-3xl font-normal font-sans text-black leading-[140%]">
                        The work we do,
                        and the people we help
                    </h2>

                    <div ref={buttonRef} className="relative lg:mt-25">
                        <Button className="flex flex-row justify-center gap-3 ml-[-8px]">
                            <p className="text-black text-lg font-normal">All Case Study</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]" />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-between gap-36">
                    <div className="w-full justify-left items-left flex lg:flex-row flex-col gap-18">
                        <div ref={firstRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-normal text-left text-black">/ HOUSEL</h5>
                            <h4 className="lg:text-4xl text-2xl font-normal text-left text-black">
                                Help you to sell, buy, <br />
                                mortgage, invest <br />
                                property, and other <br />
                                real estate service. <br />
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-10px]">
                                    <p className="text-black text-xl font-normal text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={figeRef} className="lg:w-[40%] w-full">
                            <Image
                                src={work1}
                                alt="worker first photos"
                            />
                        </div>
                    </div>

                    <div className="w-full justify-right items-right lg:ml-75 flex lg:flex-row flex-col gap-18">
                        <div ref={secondRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-normal text-left text-black">/ CONTEXT AI</h5>
                            <h4 className="lg:text-4xl text-2xl font-normal text-left text-black">
                                Empowers developers <br />
                                and companies to <br />
                                build outstanding <br />
                                products.
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-10px]">
                                    <p className="text-black text-xl font-normal text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={sagaRef} className="lg:w-[40%] w-full">
                            <Image
                                src={work2}
                                alt="worker first photos"
                            />
                        </div>
                    </div>

                    <div className="w-full justify-left items-left flex lg:ml-[-150px] lg:flex-row-reverse flex-col-reverse gap-18">
                        <div ref={thirdRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-normal text-left text-black">/ CLOODY</h5>
                            <h4 className="lg:text-4xl text-2xl font-normal text-left text-black">
                                Allowing users to <br/>
                                upload and sync files <br/>
                                to cloud storage and <br/>
                                then access <br/>
                                them via Web Browser <br/>
                                or specific devices. 
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-10px]">
                                    <p className="text-black text-xl font-normal text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={tangoRef} className="lg:w-[55%] w-full">
                            <Image
                                src={work3}
                                alt="worker first photos"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

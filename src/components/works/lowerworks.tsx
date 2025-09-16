"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ProDocker from "../../../public/one/works/docker-pro.png"
import { useRef } from "react";
import { useSlideFromLeft, useSlideFromRight, useZoom } from "@/library/animations";


export default function LowerSection() {
    const describeRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useSlideFromRight(describeRef, 0.3);
    useSlideFromLeft(imageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-18 lg:pt-12 lg:pb-25 px-5 py-8 bg-white">
            <div className="w-full flex lg:flex-row flex-col-reverse lg:gap-20 gap-12">
                <div ref={imageRef} className="lg:w-[70%] w-full">
                    <Image
                        src={ProDocker}
                        alt="Docker Project"
                    />
                </div>

                <div ref={describeRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                    <h5 className="text-2xl font-medium text-left text-black">/ DOCKER</h5>
                    <h4 className="lg:text-3xl text-2xl font-normal text-left text-black">
                        Enhanching digital <br />
                        marketing with <br />
                        innovative design <br />
                        solutions <br />
                    </h4>
                    <div>
                        <Button className="justify-left gap-[9px] ml-[-10px]">
                            <p className="text-black lg:text-xl text-base font-medium text-left">View case study</p>
                            <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

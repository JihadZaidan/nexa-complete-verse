"use client"
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import upper from "../../../public/about/upper-about.png"
import { useRef } from "react";
import { useSlideFromTop } from "@/library/animations";

export default function UpperAbout() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useSlideFromTop(headRef, 0.3);
    useSlideFromTop(buttonRef, 0.3);
    useSlideFromTop(imageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-16 lg:pb-0 md:px-14 md:pt-12 md:pb-10 px-8 pt-8 pb-8 bg-white">
            <div className="w-full flex flex-col lg:gap-0 gap-12">
                <div className="w-full flex flex-col gap-12 lg:pl-150">
                    <h1 ref={headRef} className="font-sans font-medium lg:text-start md:text-end text-left lg:text-4xl md:text-3xl text-xl text-black leading-[150%]">
                        An digital agency focused on digital 
                        experiences. With every single one 
                        of our clients, we bring forth a deep 
                        passion for creative problem solving.
                    </h1>

                    <div ref={buttonRef} className="lg:ml-85 md:ml-100">
                        <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                            <p className="text-black lg:text-2xl text-lg font-medium">Learn More About Us</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>

                <div ref={imageRef}>
                    <Image
                        src={upper}
                        alt="upper section"
                        className="lg:w-[50%] w-full lg:relative grayscale"
                    />
                </div>
            </div>
        </div>
    )
}






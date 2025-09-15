"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import work2 from "../../../public/one/landing-photos/worker/secondary-work.png"
import crop from "../../../public/one/works/crop-work.png"
import { useRef } from "react";
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations";

export default function CenterWork() {
    const fibeRef = useRef<HTMLDivElement>(null);
    const fimageRef = useRef<HTMLDivElement>(null);
    const secobeRef = useRef<HTMLDivElement>(null);
    const seimageRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(fimageRef, 0.3);
    useSlideFromRight(fibeRef, 0.3);
    useSlideFromLeft(secobeRef, 0.3);
    useSlideFromRight(seimageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 px-8 py-8 bg-black">
            <div className="w-full flex flex-col lg:gap-[-64px] gap-16">
                <div className="w-full justify-left items-left flex lg:flex-row flex-col-reverse gap-12">
                    <div ref={fimageRef} className="lg:w-[40%] w-full">
                        <Image
                            src={work2}
                            alt="second-work-features"
                        />
                    </div>

                    <div ref={fibeRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                        <h5 className="text-2xl font-medium text-left text-white">/ CONTEXT AI</h5>
                        <h4 className="lg:text-4xl text-xl font-medium text-left text-white">
                            Empowers developers <br />
                            and companies to <br />
                            build outstanding <br />
                            products.<br />
                        </h4>
                        <div>
                            <Button className="justify-left gap-[9px] ml-[-10px]">
                                <p className="text-white lg:text-xl text-base font-medium text-left">View case study</p>
                                <ArrowRight height={23} width={23} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full justify-right items-right flex lg:flex-row flex-col gap-12 lg:pl-90">
                    <div ref={secobeRef} className="justify-left items-left flex flex-col gap-6 bg-transparent relative lg:top-25">
                        <h5 className="text-2xl font-medium text-left text-white">/ CLOODY</h5>
                        <h4 className="lg:text-4xl text-xl font-medium text-left text-white">
                            Allowing users to <br />
                            upload and sync files <br />
                            to cloud storage and <br />
                            then access <br />
                            them via Web Browser <br />
                            or specific devices. <br />
                        </h4>
                        <div>
                            <Button className="justify-left gap-[9px] ml-[-10px]">
                                <p className="text-white lg:text-xl text-base font-medium text-left">View case study</p>
                                <ArrowRight height={23} width={23} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>

                    <div ref={seimageRef} className="lg:w-[44%] w-full">
                        <Image
                            src={crop}
                            alt="worker first photos"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
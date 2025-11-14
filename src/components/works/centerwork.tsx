"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import work2 from "../../../public/one/landing-photos/worker/secondary-work.png"
import crop from "../../../public/one/works/crop-work.png"
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";

export default function CenterWork() {
    const fibeRef = useRef<HTMLDivElement>(null);
    const fimageRef = useRef<HTMLDivElement>(null);
    const secobeRef = useRef<HTMLDivElement>(null);
    const seimageRef = useRef<HTMLDivElement>(null);

    useFadeIn(fimageRef, 0.3);
    useFadeIn(fibeRef, 0.3);
    useFadeIn(secobeRef, 0.3);
    useFadeIn(seimageRef, 0.3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 md:px-14 md:py-8 px-10 py-8 bg-black">
            <div className="w-full flex flex-col lg:gap-[-64px] gap-16">
                <div className="w-full justify-left items-left flex lg:flex-row md:flex-row flex-col-reverse gap-12">
                    <div ref={fimageRef} className="lg:w-[40%] w-full">
                        <Image
                            src={work2}
                            alt="second-work-features"
                            className="lg:w-[75%] lg:w-[85%]"
                        />
                    </div>

                    <div ref={fibeRef} className="justify-start items-start flex flex-col gap-6 bg-transparent">
                        <h5 className="text-2xl font-normal text-left text-white">/ CONTEXT AI</h5>
                        <h4 className="lg:text-3xl text-xl font-normal text-left text-white">
                            Empowers developers <br />
                            and companies to <br />
                            build outstanding <br />
                            products.<br />
                        </h4>
                        <div>
                            <Button className="justify-left gap-[9px] ml-[-10px]">
                                <p className="text-white lg:text-xl text-base font-normal text-left">View case study</p>
                                <ArrowRight height={23} width={23} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:justify-end lg:items-end flex lg:flex-row md:flex-row flex-col gap-12 lg:pl-90">
                    <div ref={secobeRef} className="justify-left items-left flex flex-col gap-6 bg-transparent lg:pb-20">
                        <h5 className="text-2xl font-normal text-left text-white">/ CLOODY</h5>
                        <h4 className="lg:text-3xl text-xl font-normal text-left text-white">
                            Allowing users to upload and <br/>
                            sync files to cloud storage and <br/>
                            then access them via Web <br/> 
                            Browser or specific devices.
                        </h4>
                        <div>
                            <Button className="justify-left gap-[9px] ml-[-10px]">
                                <p className="text-white lg:text-xl text-base font-normal text-left">View case study</p>
                                <ArrowRight height={23} width={23} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>

                    <div ref={seimageRef} className="lg:w-[44%] md:w-[44%] w-full">
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







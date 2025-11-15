"use client"

import Image from "next/image"
import Note from "../../../../public/insight-blog/inblog-04.png"
import Tims from "../../../../public/one/landing-photos/branding.png"
import Meeting from "../../../../public/about/Video-Showcase.png"
import { useSlideFromTop } from "@/library/animations"
import { useRef } from "react"

export default function TressurelyDescription() {

    const textRef = useRef<HTMLParagraphElement>(null);
    const typoRef = useRef<HTMLDivElement>(null);
    const NoteRef = useRef<HTMLImageElement>(null);
    const TeamRef = useRef<HTMLImageElement>(null);
    const MeetRef = useRef<HTMLImageElement>(null);

    useSlideFromTop(textRef, 0.3)
    useSlideFromTop(NoteRef, 0.3)
    useSlideFromTop(TeamRef, 0.3)
    useSlideFromTop(typoRef, 0.3)
    useSlideFromTop(MeetRef, 0.3)

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-15 px-10 py-10">
            <div className="w-full gap-15 flex flex-col">
                <p ref={textRef} className="lg:w-[75%] text-[#595E5E] lg:text-3xl leading-[150%] font-sans font-normal">
                    A successful e-commerce strategy focuses on customer experience, leveraging SEO and content marketing
                    for traffic, using social media and influencer marketing for engagement, optimizing for mobile, and
                    implementing personalized marketing and loyalty programs for retention. Key tactical steps include
                    improving the website user experience, optimizing product pages, offering excellent customer service,
                    and reducing cart abandonment through targeted campaigns and easy checkout processes.
                </p>

                <div className="justify-right items-right lg:relative lg:mt-[-200px] lg:mb-[-700px] flex flex-col gap-10">
                    <Image
                        ref={NoteRef}
                        src={Note}
                        alt="photos"
                        className="lg:relative lg:scale-[50%] lg:left-[200px]"
                    />

                    <Image
                        ref={TeamRef}
                        src={Tims}
                        alt="branding"
                        className="relative lg:scale-[50%] lg:w-[70%] lg:top-[-550px] lg:left-50"
                    />
                </div>

                <div ref={typoRef} className="justify-right items-left flex flex-col lg:pl-120 gap-8">
                    <h5 className="text-black lg:text-3xl text-xl font-sans font-normal text-left leading-[140%]">Strategy for Ecommerce Success</h5>
                    <p className="text-[#595E5E] lg:text-2xl leading-[150%] font-sans font-normal">
                        You&apos;ve built your eCommerce store with great products and spent time on branding and design. 
                        But after all that effort, sales just aren&apos;t where you thought they&apos;d be. Sound familiar ? 
                        You&apos;re not alone. Many eCommerce business owners find that launching a store is just the beginning 
                        and without a solid eCommerce sales strategy, growth stays out of reach.
                    </p>
                </div>

                <Image
                    ref={MeetRef}
                    src={Meeting}
                    alt="discusion teams"
                    className="grayscale lg:aspect-[4/2] aspect-[2/1]"
                />
            </div>
        </div>
    )

}

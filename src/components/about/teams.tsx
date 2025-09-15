"use client"
import Image from "next/image"
import Antony from "../../../public/about/team/team-antony.png"
import Luna from "../../../public/about/team/team-luna.png"
import Sakhir from "../../../public/about/team/team-sakhir.png"
import Wayne from "../../../public/about/team/team-wayne.png"
import { useRef } from "react"
import { useZoom } from "@/library/animations"

export default function Teams() {
    const imageRef = useRef<HTMLDivElement>(null);
    useZoom(imageRef, 0.3);

    return (
        <section className="relative lg:px-30 lg:py-30">
            <Image
                src={Antony}
                alt="team-antony"
                className="absolute grayscale scale-30 lg:scale-25 lg:right-[-200px] lg:bottom-[-350px] right-[120px] bottom-[-140px]"
            />

            <Image
                src={Luna}
                alt="team-luna"
                className="absolute grayscale scale-35 lg:scale-40 lg:right-[-150px] lg:bottom-[230px] right-[100px] bottom-[180px]"
            />

            <div className="z-5 w-full px-25 pt-30 pb-40 relative justify-center items-center">
                <div className="justify-center items-center">
                    <h2 className="w-full text-black text-center text-xl lg:text-5xl font-sans font-medium leading-[130%]">
                        Meet Our Troops of Creative
                    </h2>
                </div>
            </div>

            <Image
                src={Sakhir}
                alt="team-sakhir"
                className="absolute grayscale scale-30 lg:scale-35 lg:left-[-150px] lg:bottom-[-150px] left-[123px] bottom-[-80px]"
            />

            <Image
                src={Wayne}
                alt="team-wayne"
                className="absolute grayscale scale-30 lg:scale-32 lg:left-[-250px] lg:bottom-[170px] left-[120px] bottom-[150px]"
            />
        </section>

    )
}
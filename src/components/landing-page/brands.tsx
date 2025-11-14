"use client"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import DigitalStrategy from "../../../public/one/landing-photos/digital-strategy.png"
import Branding from "../../../public/one/landing-photos/branding.png"
import Webdev from "../../../public/one/landing-photos/webdevelopers.png"
import Appdev from "../../../public/one/landing-photos/appdeveloper.png"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function VisionBrand() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const graphRef = useRef<HTMLDivElement>(null)
  const upperRef = useRef<HTMLDivElement>(null)
  const lowerRef = useRef<HTMLDivElement>(null)

  useFadeIn(headRef, 0.3)
  useFadeIn(graphRef, 0.3)
  useFadeIn(upperRef, 0.3)
  useFadeIn(lowerRef, 0.3)

  return (
    <section className="w-full max-w-full bg-black overflow-x-hidden lg:px-20 md:px-14 px-8 lg:py-20 md:py-14 py-12">
      <div className="flex flex-col gap-12 lg:gap-20">
        {/* Heading */}
        <div className="w-full">
          <h2
            ref={headRef}
            className="font-sans text-white font-normal leading-[150%] w-full md:w-[75%] lg:w-[63%] text-3xl md:text-4xl lg:text-5xl"
          >
            Transforming Digital Innovations for Visionary Brands
          </h2>
        </div>

        {/* Intro text + button */}
        <div className="flex flex-col gap-10">
          <div
            ref={graphRef}
            className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/20 pb-10"
          >
            <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-20 w-full">
              <p className="text-white text-lg lg:text-base leading-[180%]">
                Elevating Brands with <br /> Digital Transformation Innovation
              </p>
              <p className="text-white text-base lg:w-[65%] w-full leading-[180%]">
                We are passionate about uncovering the best digital innovations
                for forward-thinking brands looking to push boundaries and drive
                significant impact.
              </p>
            </div>

            <div>
              <Button className="flex items-center gap-[9px] px-0">
                <p className="text-white text-lg font-normal">
                  Explore All Expertise
                </p>
                <ArrowRight
                  height={22}
                  width={22}
                  className="mt-[2px] text-white"
                />
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex flex-col gap-14">
            <div
              ref={upperRef}
              className="flex flex-col md:flex-row gap-7 w-full"
            >
              <div className="flex flex-col gap-5 w-full">
                <h4 className="text-white text-2xl font-normal">
                  01/ DIGITAL STRATEGY
                </h4>
                <Image
                  src={DigitalStrategy}
                  alt="Digital Strategy"
                  className="w-full h-auto lg:h-[480px] md:h-[320px] object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <h4 className="text-white text-2xl font-normal">
                  02/ BRANDING
                </h4>
                <Image
                  src={Branding}
                  alt="Branding"
                  className="w-full h-auto lg:h-[480px] md:h-[320px] object-cover"
                />
              </div>
            </div>

            <div
              ref={lowerRef}
              className="flex flex-col md:flex-row gap-7 w-full"
            >
              <div className="flex flex-col gap-5 w-full">
                <h4 className="text-white text-2xl font-normal">
                  03/ WEB DEVELOPMENT
                </h4>
                <Image
                  src={Webdev}
                  alt="Web Development"
                  className="w-full h-auto lg:h-[480px] md:h-[320px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <h4 className="text-white text-2xl font-normal">
                  04/ APP DEVELOPMENT
                </h4>
                <Image
                  src={Appdev}
                  alt="App Development"
                  className="w-full h-auto lg:h-[480px] md:h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}











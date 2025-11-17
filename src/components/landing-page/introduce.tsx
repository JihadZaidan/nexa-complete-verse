"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import team from "../../../public/one/landing-photos/teams.png"
import contribute from "../../../public/one/landing-photos/contributors.png"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function Introduce() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useFadeIn(headRef, 0.3)
  useFadeIn(buttonRef, 0.3)
  useFadeIn(bottomRef, 0.3)

  return (
    <section className="w-full max-w-full bg-white lg:px-20 md:px-14 px-8 lg:pt-24 pt-14 lg:pb-0 pb-10 overflow-x-hidden">
      <div className="flex flex-col justify-between gap-16">
        {/* Heading + Button */}
        <div className="flex flex-col gap-8 lg:gap-16">
          <h1
            ref={headRef}
            className="font-sans text-black font-normal leading-[130%] w-full lg:w-[80%] text-xl md:text-3xl lg:text-5xl"
          >
            A digital agency focused on digital experiences. With every single
            one of our clients, we bring forth a deep passion for creative
            problem solving.
          </h1>

          <div ref={buttonRef}>
            <Button className="flex items-center gap-2 border-b-2 border-black px-0">
              <p className="text-black text-lg md:text-xl lg:text-3xl font-normal">
                Let&apos;s talk
              </p>
              <ArrowRight
                height={22}
                width={22}
                className="mt-[2px] text-black"
              />
            </Button>
          </div>
        </div>

        {/* Images Section */}
        <div
          ref={bottomRef}
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 lg:ml-[-60px] lg:pt-[200px] w-full lg:w-[55%]">
            <Image
              src={team}
              alt="team members"
              className="w-full sm:w-[80%] lg:w-[40%] h-auto object-contain"
              priority
            />
            <p className="text-black font-normal leading-[140%] text-base md:text-xl lg:w-[40px] lg:text-2xl text-center lg:text-left">
              You&apos;ll collaborate with our experts.
            </p>
          </div>

          {/* Hide this image completely in mobile (not invisible, to avoid white space) */}
          <div className="hidden lg:block lg:w-[45%] relative lg:left-20">
            <Image
              src={contribute}
              alt="contributors clients"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}






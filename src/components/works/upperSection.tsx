"use client"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import work1 from "../../../public/one/landing-photos/worker/firsly-work.png"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function UpperWorks() {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const describeRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useFadeIn(headerRef, 0.3)
  useFadeIn(describeRef, 0.3)
  useFadeIn(imageRef, 0.3)

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-full w-full lg:px-20 lg:py-20 md:px-14 md:py-16 px-8 py-12">
        <div className="flex flex-col gap-16">
          <h1
            ref={headerRef}
            className="lg:text-5xl md:text-3xl text-2xl leading-[130%] lg:w-[60%] md:w-[85%] font-normal font-sans text-black"
          >
            From creative projects that push the boundaries of our team&apos;s
            imagination. Built into all of our works.
          </h1>

          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-24 gap-10 items-center">
            {/* Left text */}
            <div
              ref={describeRef}
              className="lg:w-[45%] w-full flex flex-col gap-6"
            >
              <h5 className="text-2xl font-normal text-left text-black">/ HOUSEL</h5>
              <h4 className="lg:text-3xl text-xl font-normal text-left text-black leading-relaxed">
                Help you to sell, buy, mortgage, invest property, and other real
                estate service.
              </h4>
              <Button className="justify-start gap-2 w-fit">
                <p className="text-black lg:text-lg text-base font-normal">View case study</p>
                <ArrowRight height={20} width={20} className="text-black mt-[2px]" />
              </Button>
            </div>

            {/* Right image */}
            <div
              ref={imageRef}
              className="lg:w-[55%] w-full overflow-hidden"
            >
              <Image
                src={work1}
                alt="worker first photos"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




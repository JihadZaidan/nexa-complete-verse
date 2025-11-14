"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import work1 from "../../../public/one/landing-photos/worker/firsly-work.png"
import work2 from "../../../public/one/landing-photos/worker/secondary-work.png"
import work3 from "../../../public/one/landing-photos/worker/threel-work.png"
import { useRef } from "react"
import { useFadeIn } from "@/library/animations/useFadeIn"

export default function Worksheet() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const figeRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const sagaRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const tangoRef = useRef<HTMLDivElement>(null)

  useFadeIn(headRef, 0.3)
  useFadeIn(buttonRef, 0.3)
  useFadeIn(firstRef, 0.3)
  useFadeIn(figeRef, 0.3)
  useFadeIn(secondRef, 0.3)
  useFadeIn(sagaRef, 0.3)
  useFadeIn(thirdRef, 0.3)
  useFadeIn(tangoRef, 0.3)

  return (
    <section className="relative max-w-full w-full bg-white overflow-hidden lg:px-20 lg:py-36 md:px-14 md:py-24 px-8 py-16 mb-0">
      <div className="flex flex-col w-full lg:gap-28 md:gap-20 gap-14">
        
        {/* Header */}
        <div className="flex lg:flex-row md:flex-col flex-col justify-between gap-10">
          <h2
            ref={headRef}
            className="lg:w-[40%] w-full text-left lg:text-5xl md:text-4xl text-3xl font-normal font-sans text-black leading-[150%]"
          >
            The work we do, and the people we help
          </h2>

          <div ref={buttonRef} className="lg:mt-12 md:mt-6">
            <Button className="flex flex-row justify-center gap-3">
              <p className="text-black text-lg font-normal">All Case Study</p>
              <ArrowRight height={22} width={22} className="text-black group-hover:text-white transition" />
            </Button>
          </div>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col w-full lg:gap-36 md:gap-24 gap-16">
          
          {/* Case 1 */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-start items-start gap-8">
            <div ref={firstRef} className="flex flex-col gap-6 bg-transparent">
              <h5 className="text-2xl font-normal text-left text-black">/ HOUSEL</h5>
              <h4 className="lg:text-4xl text-2xl font-normal text-left text-black leading-[140%]">
                Help you to sell, buy, <br />
                mortgage, invest property, <br />
                and other real estate service.
              </h4>
              <Button className="justify-start gap-[9px] mt-2">
                <p className="text-black lg:text-xl md:text-lg text-base font-normal">View case study</p>
                <ArrowRight height={23} width={23} className="text-black group-hover:text-white transition" />
              </Button>
            </div>

            <div ref={figeRef} className="lg:w-[45%] md:w-[50%] w-full overflow-hidden">
              <Image
                src={work1}
                alt="worker first photos"
                className="w-full aspect-[16/9] object-cover"
                priority
              />
            </div>
          </div>

          {/* Case 2 */}
          <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse lg:items-end lg:justify-end md:justify-end md:items-end justify-start lg:ml-[200px] gap-8">
            <div ref={sagaRef} className="lg:w-[45%] md:w-[50%] w-full overflow-hidden">
              <Image
                src={work2}
                alt="worker second photos"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <div ref={secondRef} className="flex flex-col gap-6 bg-transparent">
              <h5 className="text-2xl font-normal text-left text-black">/ CONTEXT AI</h5>
              <h4 className="lg:text-4xl text-2xl font-normal text-left text-black leading-[140%]">
                Empowers developers <br />
                and companies to build <br />
                outstanding products.
              </h4>
              <Button className="justify-start gap-[9px] mt-2">
                <p className="text-black lg:text-xl md:text-lg text-base font-normal">View case study</p>
                <ArrowRight height={23} width={23} className="text-black group-hover:text-white transition" />
              </Button>
            </div>
          </div>

          {/* Case 3 */}
          <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse justify-start items-start lg:mr-[200px] gap-8">
            <div ref={thirdRef} className="flex flex-col gap-6 bg-transparent">
              <h5 className="text-2xl font-normal text-left text-black">/ CLOODY</h5>
              <h4 className="lg:text-4xl text-2xl font-normal text-left text-black leading-[140%]">
                Allowing users to upload <br />
                and sync files to cloud <br />
                storage, then access <br />
                them via browser or device.
              </h4>
              <Button className="justify-start gap-[9px] mt-2">
                <p className="text-black lg:text-xl md:text-lg text-base font-normal">View case study</p>
                <ArrowRight height={23} width={23} className="text-black group-hover:text-white transition" />
              </Button>
            </div>

            <div ref={tangoRef} className="lg:w-[45%] md:w-[50%] w-full overflow-hidden">
              <Image
                src={work3}
                alt="worker third photos"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}












"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import invidi from "../../../public/one/landing-photos/insight/insight-visa.png";
import invida from "../../../public/one/landing-photos/insight/insight-vida.png";
import { useRef } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";

export default function Story() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const oneRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);

  useFadeIn(headRef, 0.3);
  useFadeIn(buttonRef, 0.3);
  useFadeIn(oneRef, 0.3);
  useFadeIn(twoRef, 0.3);

  return (
    <section className="relative w-full overflow-x-hidden bg-[#F2F2F2] lg:px-20 lg:py-24 md:px-14 md:py-16 px-6 py-12">
      <div className="flex flex-col gap-14 lg:gap-24 mx-auto max-w-[1400px]">
        {/* Heading + Button */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start gap-8">
          <h3
            ref={headRef}
            className="text-left text-3xl md:text-4xl lg:text-5xl font-normal font-sans text-black leading-[140%] w-full md:w-[45%]"
          >
            Latest insights, stories, and news from Nexa.
          </h3>

          <div ref={buttonRef} className="md:mt-10 lg:mt-16 mt-4">
            <Button className="flex items-center justify-center gap-3 bg-transparent">
              <span className="text-black lg:text-xl md:text-base text-base font-normal group-hover:text-white">
                Explore the Insight
              </span>
              <ArrowRight height={22} width={22} className="mt-[2px] text-black group-hover:text-white transition" />
            </Button>
          </div>
        </div>

        {/* Story Cards */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-12 lg:gap-20 w-full">
          {/* Card 1 */}
          <div
            ref={oneRef}
            className="flex flex-col gap-6 w-full cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full overflow-hidden">
              <Image
                src={invidi}
                alt="Insight 1"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[75%]">
              <h4 className="text-black text-2xl md:text-3xl lg:text-4xl leading-[140%]">
                All about the Business <br /> Model Canvas
              </h4>
              <p className="text-base md:text-lg font-normal text-black leading-relaxed">
                The Business Model Canvas was proposed by Alexander Osterwalder based on his earlier book.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={twoRef}
            className="flex flex-col gap-6 w-full lg:pt-20 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full overflow-hidden">
              <Image
                src={invida}
                alt="Insight 2"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[75%]">
              <h4 className="text-black text-2xl md:text-3xl lg:text-4xl leading-[140%]">
                UI + UX: Two Different but Complimenting Practices
              </h4>
              <p className="text-base md:text-lg font-normal text-black leading-relaxed">
                The Business Model Canvas was proposed by Alexander Osterwalder based on his earlier book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



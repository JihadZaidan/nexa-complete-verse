"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useSlideFromTop } from "@/library/animations";

import Kopi from "../../../public/expertise/01-digital.png";
import Tamar from "../../../public/expertise/02-branding.png";
import Cody from "../../../public/expertise/03-website.png";

const slides = [
  {
    id: 1,
    title: "01/ DIGITAL STRATEGY",
    img: Kopi,
    alt: "coffeship",
  },
  {
    id: 2,
    title: "02/ BRANDING",
    img: Tamar,
    alt: "conferention",
  },
  {
    id: 3,
    title: "03/ WEB DEVELOPMENT",
    img: Cody,
    alt: "coder",
  },
];

export default function Uppertise() {
  const [current, setCurrent] = useState(0);
  const headRef = useRef<HTMLHeadingElement>(null);
  const pagaRef = useRef<HTMLParagraphElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useSlideFromTop(headRef, 0.3);
  useSlideFromTop(pagaRef, 0.3);
  useSlideFromTop(slideRef, 0.3);

  // Auto slide every 4.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-full w-full lg:px-20 lg:pt-12 lg:pb-18 md:px-12 md:py-8 px-5 pt-6 pb-14">
      <div className="w-full flex flex-col justify-left gap-20">
        {/* Image Section with Auto Slide */}
        <div ref={slideRef} className="relative w-full flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <h3 className="text-neutral-800 lg:text-3xl text-lg font-normal font-sans mb-2 text-center">
                {slides[current].title}
              </h3>
              <Image
                src={slides[current].img}
                alt={slides[current].alt}
                className="h-[370px] lg:h-[700px] w-auto object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="w-full flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-left items-left gap-10">
          <h3
            ref={headRef}
            className="text-neutral-800 font-sans font-medium lg:text-5xl md:text-4xl text-3xl text-left leading-[140%] lg:pl-0 md:pl-0 md:pb-2 pl-5"
          >
            Few of Our <br /> Specialities
          </h3>
          <p
            ref={pagaRef}
            className="text-neutral-800 font-sans font-medium lg:text-3xl text-base leading-[140%] md:pt-4 pl-5"
          >
            — From creative projects that push the <br /> boundaries of our team&apos;s imagination. <br /> Build it
            into all of our works.
          </p>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-neutral-800 w-6" : "bg-neutral-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

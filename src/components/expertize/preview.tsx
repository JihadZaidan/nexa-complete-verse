"use client"

import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

type Work = {
  id: number;
  title: string;
  avatar: string;
};

const works: Work[] = [
  {
    id: 1,
    title: "01/ DIGITAL STRATEGY",
    avatar: "/expertise/01-digital.png",
  },
  {
    id: 2,
    title: "02/ BRANDING",
    avatar: "/expertise/02-branding.png",
  },
  {
    id: 3,
    title: "03/ WEB DEVELOPMENT",
    avatar: "/expertise/03-website.png",
  },
  {
    id: 4,
    title: "04/ APP DEVELOPMENT",
    avatar: "/expertise/04-application.png",
  },
];

export default function ExpertiseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="relative w-full px-6 flex flex-col lg:gap-4 gap-2">
      {/* Arrows */}
      <div className="absolute top-2 right-8 flex gap-3 mb-8">
        <button
          onClick={scrollLeft}
          className="p-2 bg-white rounded-full"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 bg-white rounded-full"
        >
          <ArrowRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-6 no-scrollbar pt-10 pb-6 pr-12 mt-5"
      >
        {works.map((work) => (
          <div key={work.id} className="min-w-[500px] flex-shrink-0 lg:object-cover object-contain">
            <div className="mb-3 text-xl font-normal text-black">
              {work.title}
            </div>
            <div className="lg:aspect-[4/5] aspect-[3/2] w-full relative overflow-hidden shadow-lg">
              <Image
                src={work.avatar}
                alt={work.title}
                fill
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





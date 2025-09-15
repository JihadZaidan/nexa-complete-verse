"use client"

import { insightBlog } from "@/data/insight";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import Link from "next/link";
import { useZoom } from "@/library/animations";

export default function InsightSection() {
  const [showAll, setShowAll] = useState(false);
  const blogsToShow = showAll ? insightBlog : insightBlog.slice(0, 3);
  
  // gsap implement components
  const blogRef = useRef<HTMLDivElement>(null);

  // run animate
  useZoom(blogRef, 0.3);

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20">

      {/* Mobile View */}
      <div ref={blogRef} className="block md:hidden space-y-8">
        {blogsToShow.map((item, index) => (
          <Link
            key={index}
            href={`/blog-detail`}
            className="flex flex-col gap-3"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={item.image.replace("public/", "/")}
                alt={item.title}
                fill
                className="object-cover rounded-md cursor-pointer"
              />
            </div>
            <h3 className="font-medium text-xl text-black lg:cursor-pointer">{item.title}</h3>
            <p className="text-base text-gray-500">{item.date}</p>

          </Link>

        ))}

        {!showAll && (
          <div className="pt-4">
            <Button
              variant="outline"
              className="text-xl font-medium font-sans text-black px-25"
              onClick={() => setShowAll(true)}
            >
              See more →
            </Button>
          </div>
        )}
      </div>

      {/* Desktop Grid */}
      <div ref={blogRef} className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {insightBlog.map((item, index) => (
          <Link
            key={index}
            href={`/blog-detail`}
            className="flex flex-col gap-3"
          >
            <div className="relative w-full lg:h-[300px]">
              <Image
                src={item.image.replace("public/", "/")}
                alt={item.title}
                fill
                className="object-cover rounded-md aspect-[1/1]"
              />
            </div>
            <h3 className="font-medium text-lg text-black">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}


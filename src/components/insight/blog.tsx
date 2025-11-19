"use client";

import { insightBlog } from "@/data/insight";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import Link from "next/link";
// Hapus useFadeIn, Import useStaggerChildren
import { useStaggerChildren } from "@/library/animations/useStaggerChildren"; 

export default function InsightSection() {
  const [showAll, setShowAll] = useState(false);
  const blogsToShow = showAll ? insightBlog : insightBlog.slice(0, 3);

  const blogRef = useRef<HTMLDivElement>(null);
  
  // Terapkan useStaggerChildren pada blogRef, menargetkan elemen dengan class '.insight-item'
  useStaggerChildren(blogRef, ".insight-item", 0.2);

  return (
    // Pindahkan ref={blogRef} ke elemen <section> utama
    <section className="py-12 px-4 md:px-14 lg:px-20" ref={blogRef}>
      
      {/* Mobile View */}
      {/* Ref dihapus dari sini */}
      <div className="block md:hidden space-y-8c">
        {blogsToShow.map((item, index) => (
          // Tambahkan class 'insight-item' dan style awal
          <Link
            key={index}
            href={item.url}
            className="flex flex-col gap-3 insight-item" 
            style={{ opacity: 0 }} 
          >
            <div
              className="relative w-full lg:h-[200px] h-[250px]"
            >
              <Image
                src={item.image.replace("public/", "/")}
                alt={item.title}
                fill
                className="object-cover cursor-pointer"
              />
            </div>
            <h3 className="font-medium lg:text-xl text-2xl text-black lg:cursor-pointer">
              {item.title}
            </h3>
            <p className="text-base text-gray-500">{item.date}</p>
          </Link>
        ))}

        {!showAll && (
          // Tambahkan class 'insight-item' pada wrapper tombol 'See more'
          <div className="pt-4 insight-item" style={{ opacity: 0 }}>
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

      {/* Tablet View */}
      {/* Ref dihapus dari sini */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
        {insightBlog.map((item, index) => (
          // Tambahkan class 'insight-item' dan style awal
          <Link
            key={index + "tablet"}
            href={item.url}
            className="flex flex-col gap-3 insight-item"
            style={{ opacity: 0 }} 
          >
            <div
              className="relative w-full h-[240px]"
            >
              <Image
                src={item.image.replace("public/", "/")}
                alt={item.title}
                fill
                className="object-cover aspect-[1/1]"
              />
            </div>
            <h3 className="font-medium text-lg text-black">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </Link>
        ))}
      </div>

      {/* Desktop Grid */}
      {/* Ref dihapus dari sini */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {insightBlog.map((item, index) => (
          // Tambahkan class 'insight-item' dan style awal
          <Link
            key={index + "desktop"}
            href={item.url}
            className="flex flex-col gap-3 insight-item"
            style={{ opacity: 0 }}
          >
            <div
              className="relative w-full lg:h-[300px]"
            >
              <Image
                src={item.image.replace("public/", "/")}
                alt={item.title}
                fill
                className="object-cover aspect-[1/1]"
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




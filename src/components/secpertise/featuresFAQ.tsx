"use client";

import { itemsFAQ } from "@/data/faq";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { useFadeIn } from "@/library/animations";
// 1. Import useStaggerZoom
import { useStaggerZoom } from "@/library/animations/useStaggerZoom";

export default function ExpertiseFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(itemsFAQ[0]?.id);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const headerRef = useRef<HTMLHeadingElement>(null);
  // Ref ini tidak lagi diperlukan karena kita akan menggunakan ref array
  // const listRef = useRef<HTMLDivElement>(null) 

  // 2. Ref Array untuk item FAQ
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 3. Callback Ref untuk mengisi array
  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  };

  // Cleanup refs saat unmount (best practice)
  useEffect(() => {
    return () => {
      itemRefs.current = [];
    };
  }, []);

  // Animasi Header
  useFadeIn(headerRef, 0.3)
  // Hapus useSlideFromTop(listRef, 0.3)
  
  // 5. Panggil useStaggerZoom pada array item
  // Gunakan delay 0.5s agar muncul setelah header
  useStaggerZoom(itemRefs as MutableRefObject<(HTMLDivElement | null)[]>, 0.5);

  return (
    <div className="w-full max-w-full px-4 lg:px-20 px-10 py-20 bg-gray-50">
      <div className="flex lg:flex-row lg:justify-between flex-col gap-12">
        <h2 
          ref={headerRef} 
          className="text-black font-normal lg:text-5xl text-3xl font-sans leading-snug"
          style={{ opacity: 0 }} // Style awal untuk useSlideFromTop
        >
          Frequently Asked <br />
          Questions
        </h2>

        {/* Gunakan div ini tanpa ref listRef */}
        <div className="flex flex-col border-t divide-y">
          {itemsFAQ.map((item, index) => {
            const isOpen = openItem === item.id;

            return (
              // 6. Terapkan Callback Ref dan Style Awal (opacity: 0)
              <div 
                key={item.id} 
                ref={(el) => setItemRef(el, index)} 
                className="w-full border-gray border-b"
                style={{ opacity: 0 }} // PENTING: Style awal untuk useStaggerZoom
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center py-6 text-left text-lg font-normal text-black hover:underline focus:outline-none"
                >
                  <div className="flex gap-3 items-center flex-1">
                    <span className="text-black text-2xl font-sans font-normal">
                      {String(index + 1).padStart(2, "0")}/
                    </span>
                    <span className="w-full">{item.question}</span>
                  </div>

                  {isOpen ? (
                    <ArrowDown className="w-5 h-5 text-black" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-black" />
                  )}
                </button>


                {isOpen && (
                  <div className="pl-8 pr-4 pb-4 text-gray-500 text-base transition-all duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

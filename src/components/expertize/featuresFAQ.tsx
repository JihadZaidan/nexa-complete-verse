"use client";

import { itemsFAQ } from "@/data/faq";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { useFadeIn } from "@/library/animations/useFadeIn";
import { useStaggerZoom } from "@/library/animations/useStaggerZoom"; // Asumsi lokasi hook

// --- PASTIKAN HOOK useStaggerZoom ADA DI SINI ATAU DIIMPOR DENGAN BENAR ---
// (Jika Anda perlu menempatkan kode useStaggerZoom di file terpisah, 
// pastikan jalur impor di atas sudah benar)
// -------------------------------------------------------------------------

export default function ExpertiseFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(itemsFAQ[0]?.id);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  // 1. Ref Collection untuk Semua Item FAQ
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 2. Callback Ref untuk mengisi Ref Collection
  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  };

  // Ref untuk Judul (Jika Anda masih ingin menggeser judul)
  const headeRef = useRef<HTMLHeadingElement>(null);
  
  // 3. Panggil Hook Animasi
  useFadeIn(headeRef, 0.3);
  // Panggil useStaggerZoom pada koleksi itemRefs
  useStaggerZoom(itemRefs as MutableRefObject<(HTMLDivElement | null)[]>, 0.5); 

  // Cleanup refs saat unmount (best practice)
  useEffect(() => {
    return () => {
      itemRefs.current = [];
    };
  }, []);

  return (
    <div className="w-full max-w-full px-4 lg:px-20 px-10 py-20 bg-gray-50">
      <div className="flex flex-col gap-12">
        <h2 
          ref={headeRef} 
          className="text-black font-normal lg:text-5xl text-3xl font-sans leading-snug"
          // Tambahkan opacity 0 untuk mencegah FOUC pada judul
          style={{ opacity: 0 }} 
        >
          Frequently Asked <br />
          Questions
        </h2>

        {/* Hapus contentRef karena sekarang itemRefs menargetkan setiap baris */}
        <div className="flex flex-col border-t divide-y">
          {itemsFAQ.map((item, index) => {
            const isOpen = openItem === item.id;

            return (
              // 4. Terapkan Callback Ref dan Style Awal (opacity: 0) di sini
              <div 
                key={item.id} 
                ref={(el) => setItemRef(el, index)} 
                className="border-gray border-b"
                style={{ opacity: 0 }} // PENTING: Sembunyikan item sebelum GSAP menjalankannya
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center py-6 text-left text-lg font-normal text-black hover:underline focus:outline-none"
                >
                  <div className="flex gap-2 items-center">
                    <span className="text-black text-2xl font-sans font-normal">
                      {String(index + 1).padStart(2, "0")}/
                    </span>
                    {item.question}
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

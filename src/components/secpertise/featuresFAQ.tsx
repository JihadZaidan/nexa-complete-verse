"use client";

import { itemsFAQ } from "@/data/faq";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useState } from "react";

export default function ExpertiseFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(itemsFAQ[0]?.id);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-full px-4 lg:px-20 px-10 py-20 bg-gray-50">
      <div className="flex lg:flex-row lg:justify-between flex-col gap-12">
        <h2 className="text-black font-medium lg:text-5xl text-3xl font-sans leading-snug">
          Frequently Asked <br />
          Questions
        </h2>

        <div className="flex flex-col border-t divide-y">
          {itemsFAQ.map((item, index) => {
            const isOpen = openItem === item.id;

            return (
              <div key={item.id} className="w-full border-gray border-b">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center py-6 text-left text-lg font-medium text-black hover:underline focus:outline-none"
                >
                  <div className="flex gap-3 items-center flex-1">
                    <span className="text-black text-2xl font-sans font-medium">
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

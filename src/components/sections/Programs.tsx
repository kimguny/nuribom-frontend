"use client";

import { useState } from "react";
import Image from "next/image";
import { PROGRAMS } from "@/constants/programs";

export default function Programs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="programs" className="py-24 bg-[#edf7e3] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#5a9478] mb-12 text-center">
          프로그램
        </h2>

        <div className="flex flex-col gap-4">
          {PROGRAMS.map((program, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={program.title}
                className={`bg-white rounded-2xl border transition-colors overflow-hidden ${
                  isOpen ? "border-[#5a9478]" : "border-[#c8e6d5]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#2d5040]">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#7aab94] mt-1 leading-relaxed">
                      {program.summary}
                    </p>
                  </div>
                  {program.detail && (
                    <span className="ml-6 text-[#5a9478] text-lg flex-shrink-0">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  )}
                </button>

                {isOpen && program.detail && (
                  <div className="px-8 pb-8 text-sm text-[#2d5040] leading-relaxed space-y-6 border-t border-[#c8e6d5]">
                    <p className="whitespace-pre-line pt-6">{program.detail.description}</p>
                    <div>
                      <p className="font-semibold text-[#5a9478] mb-2">이런 아이에게 필요합니다</p>
                      <ul className="space-y-2">
                        {program.detail.targets.map((target) => (
                          <li key={target} className="flex items-start gap-2">
                            <span className="text-[#5a9478] mt-0.5">·</span>
                            {target}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {"goals" in program.detail && (
                      <div>
                        <p className="font-semibold text-[#5a9478] mb-2">치료 목표</p>
                        <ul className="space-y-2">
                          {(program.detail as { goals: string[] }).goals.map((goal) => (
                            <li key={goal} className="flex items-start gap-2">
                              <span className="text-[#5a9478] mt-0.5">·</span>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {"images" in program.detail && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {(program.detail as { images: string[] }).images.map((src, i) => (
                          <div key={i} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                            <Image
                              src={src}
                              alt={`${program.title} 치료실 사진 ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { PROGRAMS } from "@/constants/programs";

export default function ProgramsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = PROGRAMS[selectedIndex];

  return (
    <main
      className="pt-16 md:pt-32 min-h-screen relative"
      style={{ backgroundImage: "url('/images/programs-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-gray-500/50" />
      {/* 모바일: 가로 스크롤 탭 */}
      <div className="relative z-10 md:hidden flex gap-2 overflow-x-auto py-6 px-6 scrollbar-hide">
        {PROGRAMS.map((program, index) => (
          <button
            key={program.title}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedIndex === index
                ? "bg-[#5a9478] text-white"
                : "bg-white/20 text-white"
            }`}
          >
            {program.title}
          </button>
        ))}
      </div>
      <div className="md:hidden h-px bg-[#c8e6d5] mx-6" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 md:py-12 md:flex gap-8">

        {/* 왼쪽 사이드바 (데스크탑만) */}
        <aside className="hidden md:block w-1/5 flex-shrink-0">
          <h2 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4 px-3">
            치료프로그램
          </h2>
          <ul className="flex flex-col gap-1">
            {PROGRAMS.map((program, index) => (
              <li key={program.title}>
                <button
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    selectedIndex === index
                      ? "bg-[#5a9478] text-white"
                      : "text-white/80 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <span>{program.title}</span>
                  {selectedIndex === index && <ChevronRight size={14} />}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* 콘텐츠 */}
        <section className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-sm min-h-[400px]">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{selected.title}</h1>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">{selected.summary}</p>

          {selected.detail ? (
            <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
              {/* 설명 */}
              <p className="whitespace-pre-line text-base">{selected.detail.description}</p>

              {/* 대상 */}
              <div>
                <p className="font-semibold text-gray-900 mb-3">이런 아이에게 필요합니다</p>
                <ul className="space-y-2">
                  {selected.detail.targets.map((target) => (
                    <li key={target} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5 flex-shrink-0">·</span>
                      {target}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 목표 */}
              {"goals" in selected.detail && (
                <div>
                  <p className="font-semibold text-gray-900 mb-3">치료 목표</p>
                  <ul className="space-y-2">
                    {(selected.detail as { goals: string[] }).goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5 flex-shrink-0">·</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 사진 */}
              {"images" in selected.detail && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {(selected.detail as { images: string[] }).images.map((src, i) => (
                    <div key={i} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`${selected.title} 치료실 사진 ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-400">프로그램 내용을 준비 중입니다.</p>
          )}
        </section>

      </div>
    </main>
  );
}

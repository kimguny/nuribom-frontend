"use client";

import Image from "next/image";
import { PROGRAMS } from "@/constants/programs";

export default function ProgramsPage() {
  return (
    <main
      className="pt-16 min-h-screen"
      style={{ backgroundImage: "url('/images/programs-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      {PROGRAMS.map((program, index) => (
        <div key={program.title}>
          {/* 프로그램 타이틀 배너 */}
          <div className={`relative flex flex-col items-center justify-center ${index === 0 ? "h-56 md:h-72 pt-16" : "h-40 md:h-52"}`}>
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">{program.title}</h2>
            </div>
          </div>

          {/* 콘텐츠 */}
          <div className="bg-white">
            <div className="max-w-4xl mx-auto px-8 py-10">
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">{program.summary}</p>

              {program.detail ? (
                <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
                  <p className="whitespace-pre-line text-base">{program.detail.description}</p>

                  <div>
                    <p className="font-semibold text-gray-900 mb-3">이런 아이에게 필요합니다</p>
                    <ul className="space-y-2">
                      {program.detail.targets.map((target) => (
                        <li key={target} className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5 flex-shrink-0">·</span>
                          {target}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {"goals" in program.detail && (
                    <div>
                      <p className="font-semibold text-gray-900 mb-3">치료 목표</p>
                      <ul className="space-y-2">
                        {(program.detail as { goals: string[] }).goals.map((goal) => (
                          <li key={goal} className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5 flex-shrink-0">·</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"images" in program.detail && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {(program.detail as { images: string[] }).images.map((src, i) => (
                        <div key={i} className="relative w-full aspect-[4/3] overflow-hidden">
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
              ) : (
                <p className="text-gray-400">프로그램 내용을 준비 중입니다.</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

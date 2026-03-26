"use client";

import Image from "next/image";
import { PROGRAMS } from "@/constants/programs";

const PROGRAM_SUBTITLES: Record<string, string> = {
  언어치료: "SPEECH THERAPY",
  놀이치료: "PLAY THERAPY",
  미술치료: "ART THERAPY",
  인지학습: "COGNITIVE LEARNING",
  "사회성 그룹치료": "SOCIAL GROUP THERAPY",
};

export default function ProgramsPage() {
  return (
    <main
      className="pt-16 min-h-screen"
      style={{ backgroundImage: "url('/images/programs-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      {PROGRAMS.map((program, index) => (
        <div key={program.title}>
          {/* 프로그램 타이틀 배너 */}
          <div className={`relative flex flex-col items-center justify-center ${index === 0 ? "h-44 md:h-72 md:pt-16" : "h-40 md:h-52"}`}>
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">{program.title}</h2>
              <p className="text-white/70 text-xs mt-2 tracking-widest">{PROGRAM_SUBTITLES[program.title]}</p>
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

                  {program.detail.goals && (
                    <div>
                      <p className="font-semibold text-gray-900 mb-3">치료 목표</p>
                      <ul className="space-y-2">
                        {program.detail.goals.map((goal) => (
                          <li key={goal} className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5 flex-shrink-0">·</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.detail.images && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {program.detail.images.map((src, i) => (
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

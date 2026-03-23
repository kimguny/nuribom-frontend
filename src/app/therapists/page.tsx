"use client";

import { THERAPIST_CATEGORIES } from "@/constants/therapists";

const CATEGORY_SUBTITLES: Record<string, string> = {
  심리상담: "PSYCHOLOGICAL COUNSELING",
  인지치료: "COGNITIVE THERAPY",
  언어치료: "SPEECH THERAPY",
  임상심리: "CLINICAL PSYCHOLOGY",
};

export default function TherapistsPage() {
  return (
    <main className="pt-16 md:pt-32 min-h-screen bg-white">
      {THERAPIST_CATEGORIES.map((category) => (
        <div key={category.label} className="mb-16">
          {/* 분야 제목 - 배경 이미지 */}
          <div
            className="relative h-40 md:h-52 flex flex-col items-center justify-center mb-10"
            style={{
              backgroundImage: "url('/images/therapists-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {category.label}
              </h2>
              <p className="text-white/70 text-xs mt-2 tracking-widest">
                {CATEGORY_SUBTITLES[category.label]}
              </p>
            </div>
          </div>

        <div className="max-w-5xl mx-auto px-6">

            {/* 소장 카드 (심리상담 첫 번째만 풀너비) */}
            {category.label === "심리상담" && (() => {
              const director = category.therapists[0];
              return (
                <div className="border border-gray-400 p-0.5 mb-6">
                  <div className="border border-gray-400 p-6 md:p-8">
                    {/* 이름 / 타이틀 */}
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{director.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{director.title}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {director.specialties.map((s) => (
                          <span key={s} className="text-xs border border-gray-300 text-gray-500 px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* 상세 — 3단 그리드 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-1.5">학력</p>
                          <ul className="space-y-1">
                            {director.education.map((e) => (
                              <li key={e} className="flex items-start gap-2">
                                <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{e}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1.5">자격 및 전문과정</p>
                          <ul className="space-y-1">
                            {director.certifications.map((c) => (
                              <li key={c} className="flex items-start gap-2">
                                <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-1.5">경력</p>
                        <ul className="space-y-1">
                          {director.career.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                              <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <ul className="space-y-1">
                          {director.current.map((c) => (
                            <li key={c} className="flex items-start gap-2 font-medium text-gray-900">
                              <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{c}
                            </li>
                          ))}
                        </ul>
                        {director.extra && director.extra.length > 0 && (
                          <div>
                            <p className="font-semibold text-gray-900 mb-1.5">기타</p>
                            <ul className="space-y-1">
                              {director.extra.map((e) => (
                                <li key={e} className="flex items-start gap-2">
                                  <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{e}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 나머지 치료사 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(category.label === "심리상담" ? category.therapists.slice(1) : category.therapists).map((therapist) => (
                <div
                  key={therapist.name}
                  className="border border-gray-400 p-0.5"
                >
                <div className="border border-gray-400 p-5 h-full">
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">{therapist.name}</h3>
                    <p className="text-sm text-gray-400 mt-0.5">{therapist.title}</p>
                  </div>

                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1.5">학력</p>
                      <ul className="space-y-1">
                        {therapist.education.map((e) => (
                          <li key={e} className="flex items-start gap-2">
                            <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-1.5">자격 및 전문과정</p>
                      <ul className="space-y-1">
                        {therapist.certifications.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-1.5">경력</p>
                      <ul className="space-y-1">
                        {therapist.career.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="space-y-1">
                      {therapist.current.map((c) => (
                        <li key={c} className="flex items-start gap-2 font-medium text-gray-900">
                          <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{c}
                        </li>
                      ))}
                    </ul>

                    {therapist.extra && therapist.extra.length > 0 && (
                      <div>
                        <p className="font-semibold text-gray-900 mb-1.5">기타</p>
                        <ul className="space-y-1">
                          {therapist.extra.map((e) => (
                            <li key={e} className="flex items-start gap-2">
                              <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        ))}
    </main>
  );
}

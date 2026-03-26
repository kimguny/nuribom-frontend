"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PHOTOS = [
  { src: "/images/tour/01.jpeg", label: "로비" },
  { src: "/images/tour/02.jpeg", label: "복도" },
  { src: "/images/tour/03.jpeg", label: "로비·접수처" },
  { src: "/images/tour/04.jpeg", label: "접수처" },
  { src: "/images/tour/05.jpeg", label: "복도" },
  { src: "/images/tour/06.jpeg", label: "로비·접수처" },
  { src: "/images/tour/07.jpeg", label: "대기실" },
  { src: "/images/tour/08.jpeg", label: "복도" },
  { src: "/images/tour/09.jpeg", label: "대기실" },
  { src: "/images/tour/10.jpeg", label: "놀이치료실" },
  { src: "/images/tour/11.jpeg", label: "놀이치료실" },
  { src: "/images/tour/12.jpeg", label: "놀이치료실" },
  { src: "/images/tour/13.jpeg", label: "놀이치료실" },
  { src: "/images/tour/14.jpeg", label: "모래놀이치료실" },
  { src: "/images/tour/15.jpeg", label: "인지실·언어실" },
  { src: "/images/tour/16.jpeg", label: "미술치료실" },
  { src: "/images/tour/17.jpeg", label: "상담실" },
  { src: "/images/tour/18.jpeg", label: "접수처" },
  { src: "/images/tour/19.jpeg", label: "대기실" },
  { src: "/images/tour/20.jpeg", label: "로비" },
];

const COUNT = PHOTOS.length;

// 현재 기준 상대 위치 (음수=왼쪽, 양수=오른쪽)
function relPos(i: number, current: number) {
  let r = i - current;
  if (r > COUNT / 2) r -= COUNT;
  if (r < -COUNT / 2) r += COUNT;
  return r;
}

export default function TourPage() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(900); // container width

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setCw(containerRef.current.offsetWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + COUNT) % COUNT);
  const next = () => setCurrent((c) => (c + 1) % COUNT);

  // stage 전체 너비 기준으로 카드/간격 계산
  const cardW = Math.min(520, cw * 0.68);
  const cardH = cardW * 0.72;
  const offset1 = cw * 0.58;
  const z1 = -400;
  const z2 = -1100;
  const z3 = -1500;

  function getStyle(rel: number): React.CSSProperties {
    const abs = Math.abs(rel);
    const sign = rel <= 0 ? -1 : 1;
    const base = "translateX(-50%) translateY(-50%)";

    if (abs === 0) {
      return {
        transform: `${base} translateX(0px) translateZ(0px) scale(1)`,
        opacity: 1,
        zIndex: 10,
        pointerEvents: "none",
      };
    }
    if (abs === 1) {
      return {
        transform: `${base} translateX(${sign * offset1}px) translateZ(${z1}px) scale(0.75)`,
        opacity: 0.75,
        zIndex: 8,
        cursor: "pointer",
      };
    }
    if (abs === 2) {
      return {
        transform: `${base} translateX(${sign * offset1}px) translateZ(${z2}px) scale(0.45)`,
        opacity: 0.45,
        zIndex: 5,
        cursor: "pointer",
      };
    }
    return {
      transform: `${base} translateX(0px) translateZ(${z3}px) scale(0.3)`,
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };
  }

  return (
    <main className="pt-16">
      {/* 상단 배너 */}
      <div
        className="relative h-44 md:h-72 md:pt-16 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/tour/20.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">센터 둘러보기</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">CENTER TOUR</p>
        </div>
      </div>

      {/* 캐러셀 */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-8">

          {/* 3D 무대 — 버튼 절대 위치, stage 전체 너비 사용 */}
          <div className="relative">

            {/* 좌 버튼 */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors flex items-center justify-center text-xl bg-white shadow-sm"
            >
              ‹
            </button>

            {/* 3D 무대 */}
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden"
              style={{
                height: cardH + 32,
                perspective: "1200px",
                perspectiveOrigin: "50% 50%",
                maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              {PHOTOS.map((photo, i) => {
                const rel = relPos(i, current);
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: cardW,
                      height: cardH,
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease",
                      ...getStyle(rel),
                    }}
                    onClick={() => {
                      if (rel < 0) prev();
                      else if (rel > 0) next();
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={photo.src}
                        alt={photo.label}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/35 text-white text-sm text-center py-2">
                        {photo.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 우 버튼 */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors flex items-center justify-center text-xl bg-white shadow-sm"
            >
              ›
            </button>
          </div>

          {/* 점 인디케이터 */}
          <div className="flex justify-center items-center gap-1.5 mt-5">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 20 : 7,
                  height: 7,
                  background: i === current ? "#111111" : "#d1d5db",
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}

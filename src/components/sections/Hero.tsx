"use client";

import { useState } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center md:mt-16">
      {/* 배경 영상 히어로 */}
      <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        {!videoLoaded && <div className="absolute inset-0 shimmer z-10" />}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
        />
        <div className="relative w-full max-w-5xl pl-6 pr-12 pt-16 pb-20 flex flex-col items-start z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug drop-shadow text-left break-keep">
            아이의 <span className="text-[#5a9478] font-extrabold text-3xl md:text-4xl">성장</span>을 지켜보는 <span className="text-[#5a9478] font-extrabold text-3xl md:text-4xl">부모의 마음</span>으로<br />
            아이의 손을 잡고, 성장의 길을 <span className="text-[#5a9478] font-extrabold text-3xl md:text-4xl">함께</span>합니다.
          </h1>
        </div>
      </div>
    </section>
  );
}

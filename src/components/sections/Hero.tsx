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
        <div className="relative w-full max-w-5xl px-12 pt-16 pb-20 flex flex-col items-start z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug drop-shadow text-left">
            누리봄 아동청소년발달연구소
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow text-left">
            아이의 성장을 지켜보는 부모의 마음으로<br />
            아이의 손을 잡고, 성장의 길을 함께합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

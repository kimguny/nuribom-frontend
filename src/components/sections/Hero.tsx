"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.5;
    v.currentTime = 0.1;
    const handleTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - 0.3) {
        v.currentTime = 0.1;
      }
    };
    v.addEventListener("timeupdate", handleTimeUpdate);
    return () => v.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="flex flex-col items-center md:mt-16">
      {/* 배경 영상 히어로 */}
      <div className="relative w-full h-[55vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {!videoLoaded && <div className="absolute inset-0 shimmer z-10" />}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-new.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setVideoLoaded(true)}
        />
        <div className="relative w-full max-w-5xl pl-6 pr-12 pt-16 pb-20 flex flex-col items-start z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug text-left break-keep [text-shadow:_0_2px_6px_rgba(0,0,0,0.5),_0_4px_12px_rgba(0,0,0,0.3)]">
            아이의 <span className="font-extrabold text-3xl md:text-4xl drop-shadow-lg">성장</span>을 지켜보는 <span className="font-extrabold text-3xl md:text-4xl drop-shadow-lg">부모의 마음</span>으로<br />
            아이의 손을 잡고, 성장의 길을 <span className="font-extrabold text-3xl md:text-4xl drop-shadow-lg">함께</span>합니다.
          </h1>
        </div>
      </div>
    </section>
  );
}

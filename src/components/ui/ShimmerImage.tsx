"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export default function ShimmerImage({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="absolute inset-0 shimmer" />}
      <Image
        {...props}
        className={`${className ?? ""} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </>
  );
}

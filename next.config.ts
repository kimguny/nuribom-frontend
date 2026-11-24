import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // 2026-11-24: 서버(nginx)가 정적 파일로 내보낸다 — Node 프로세스 없이 `out/` 을 그대로 서빙.
  // 정적 내보내기에서는 Next 이미지 최적화 서버가 없으므로 원본 이미지를 쓴다.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

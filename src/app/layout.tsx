import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "누리봄",
  description: "아동 청소년 센터 누리봄",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

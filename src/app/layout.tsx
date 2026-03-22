import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "누리봄 아동청소년발달연구소",
  description: "누리봄 아동청소년발달연구소 - 놀이치료, 심리상담, 언어치료",
  icons: {
    icon: "/images/banner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

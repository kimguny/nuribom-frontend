import type { Metadata } from "next";
import { preload } from "react-dom";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "누리봄 아동청소년발달연구소",
  description: "누리봄 아동청소년발달연구소 - 놀이치료, 심리상담, 언어치료",
  icons: {
    icon: "/images/shared/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload("/images/shared/about-bg.jpg", { as: "image" });
  preload("/images/therapists/therapists-bg.jpg", { as: "image" });
  preload("/images/programs/programs-bg.jpg", { as: "image" });

  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        <Header />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/constants/nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] shadow-sm h-16">
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-[#5a9478]">
          누리봄
          <span className="block text-xs font-normal text-[#7aab94]">
            아동청소년발달연구소
          </span>
        </a>

        {/* 데스크탑 네비 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#2d5040] hover:text-[#5a9478] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 bg-[#2d5040] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2d5040] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2d5040] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden bg-[#ffffff] border-t border-[#c8e6d5] px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#2d5040] hover:text-[#5a9478] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

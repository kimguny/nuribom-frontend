"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* 상단 흰색 바 - 로고 */}
        <div className="bg-white shadow-sm h-16">
          <div className="w-full px-6 h-full grid grid-cols-3 items-center">
            {/* 왼쪽 - 사이드바 버튼 */}
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-[#2d5040] hover:text-[#5a9478] transition-colors"
                aria-label="사이드바 열기"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* 가운데 - 로고 */}
            <div className="flex justify-center">
              <a href="/">
                <Image
                  src="/images/logo.jpg"
                  alt="누리봄 아동청소년발달연구소"
                  width={160}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </a>
            </div>

            {/* 오른쪽 - 검색 버튼 (데스크탑만) */}
            <div className="flex justify-end items-center">
              <button
                className="hidden md:block text-[#2d5040] hover:text-[#5a9478] transition-colors"
                aria-label="검색"
              >
                <Search size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* 하단 초록 반투명 바 - 네비 */}
        <div className="hidden md:block bg-[#3d7a5e]/70 backdrop-blur-sm h-16">
          <div className="relative h-full flex items-center px-6">
            <nav className="flex items-center gap-12 h-full mx-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === "/" && pathname === "/";
                const hasChildren = "children" in item && item.children;
                const isOpen = openDropdown === item.label;

                return (
                  <div key={item.label} className="relative h-full flex items-center">
                    <button
                      onClick={() => hasChildren ? toggleDropdown(item.label) : undefined}
                      className="relative h-full flex items-center gap-1 text-base text-white/90 hover:text-white transition-colors font-medium"
                    >
                      {hasChildren ? (
                        <span>{item.label}</span>
                      ) : (
                        <a href={item.href}>{item.label}</a>
                      )}
                      {hasChildren && (
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      )}
                      {isActive && (
                        <span className="absolute bottom-2 left-0 right-0 h-0.5 bg-white rounded-full" />
                      )}
                    </button>

                    {/* 드롭다운 */}
                    {hasChildren && isOpen && (
                      <div className="absolute top-full left-0 pt-1 z-50">
                        <ul className="bg-white rounded-xl shadow-lg overflow-hidden min-w-[160px] py-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                className="block px-5 py-3 text-sm text-[#2d5040] hover:bg-[#edf7e3] hover:text-[#5a9478] transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-[#c8e6d5] px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
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

      {/* 드롭다운 닫기용 바깥 클릭 오버레이 */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}

      {/* 사이드바 오버레이 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#c8e6d5]">
          <span className="font-bold text-[#5a9478]">메뉴</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-[#7aab94] hover:text-[#5a9478] text-xl"
            aria-label="사이드바 닫기"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-6 py-4 text-[#2d5040] hover:bg-[#edf7e3] hover:text-[#5a9478] transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

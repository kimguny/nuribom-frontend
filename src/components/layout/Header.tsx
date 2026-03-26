"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebarDropdown, setSidebarDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* 상단 흰색 바 - 로고 */}
        <div className="bg-white shadow-sm h-16">
          <div className="w-full px-6 h-full flex items-center">
            {/* 왼쪽 - 사이드바 버튼 */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="사이드바 열기"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* 가운데 - 로고 + 이름 */}
            <div className="flex-1 flex justify-center items-center gap-3 min-w-0">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="누리봄 아동청소년발달연구소"
                  width={160}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <Link href="/" className="text-sm font-bold no-underline truncate" style={{ color: '#5a7a48' }}>
                누리봄아동청소년발달연구소
              </Link>
            </div>

            <div className="flex-shrink-0 w-6" />
          </div>
        </div>

        {/* 하단 초록 반투명 바 - 네비 */}
        <div className="hidden md:block bg-[#6b9e5a]/70 backdrop-blur-sm h-16">
          <div className="relative h-full flex items-center px-6">
            <nav className="flex items-center gap-12 h-full mx-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === "/" && pathname === "/";
                const hasChildren = "children" in item && item.children;
                const isOpen = openDropdown === item.label;

                const navClass = "relative h-full flex items-center gap-1 px-3 text-base text-white/90 hover:text-white hover:bg-white/10 transition-colors font-medium no-underline";

                return (
                  <div key={item.label} className="relative h-full flex items-center">
                    {hasChildren ? (
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={navClass}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    ) : (
                      <Link href={item.href} className={navClass}>
                        <span>{item.label}</span>
                      </Link>
                    )}

                    {/* 드롭다운 */}
                    {hasChildren && isOpen && (
                      <div className="absolute top-full left-0 pt-1 z-50">
                        <ul className="bg-white shadow-lg overflow-hidden min-w-[160px] w-max py-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </Link>
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
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-bold text-gray-900">메뉴</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-gray-900 text-xl"
            aria-label="사이드바 닫기"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col py-4">
          {NAV_ITEMS.map((item) => {
            const hasChildren = "children" in item && item.children;
            const isOpen = sidebarDropdown === item.label;
            return (
              <div key={item.label}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => setSidebarDropdown((prev) => prev === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="bg-gray-50">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-10 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            onClick={() => { setSidebarOpen(false); setSidebarDropdown(null); }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

import type { NavItem } from "@/types/nav";

export const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "/" },
  {
    label: "누리봄 소개",
    href: "#",
    children: [
      { label: "인사말", href: "/about" },
      { label: "치료사 소개", href: "/therapists" },
      { label: "센터 둘러보기", href: "/tour" },
    ],
  },
  {
    label: "이용 안내",
    href: "#",
    children: [
      { label: "프로그램 프로세스", href: "/process" },
      { label: "오시는 길", href: "/directions" },
    ],
  },
  {
    label: "치료 프로그램",
    href: "#",
    children: [
      { label: "언어치료", href: "/programs/speech-therapy" },
      { label: "놀이치료", href: "/programs/play-therapy" },
      { label: "미술치료", href: "/programs/art-therapy" },
      { label: "인지학습", href: "/programs/cognitive" },
      { label: "사회성 그룹치료", href: "/programs/social-group" },
    ],
  },
  {
    label: "바우처 안내",
    href: "#",
    children: [
      { label: "우리아이심리지원서비스", href: "/voucher/child" },
      { label: "우리가족통합심리지원서비스", href: "/voucher/family" },
      { label: "아동비전형성지원서비스", href: "/voucher/vision" },
    ],
  },
  { label: "검사 프로그램", href: "/assessment" },
];

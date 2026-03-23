export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  {
    label: "누리봄소개",
    href: "#",
    children: [
      { label: "인사말", href: "/about" },
      { label: "치료사 소개", href: "/therapists" },
      { label: "센터 둘러보기", href: "#tour" },
    ],
  },
  {
    label: "이용안내",
    href: "#",
    children: [
      { label: "프로그램 프로세스", href: "#process" },
      { label: "오시는길", href: "#contact" },
    ],
  },
  { label: "치료프로그램", href: "/programs" },
  { label: "바우처 안내", href: "#" },
  { label: "검사프로그램", href: "#" },
  { label: "상담문의", href: "#contact" },
];

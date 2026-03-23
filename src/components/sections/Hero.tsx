const CONTACT_ITEMS = [
  { label: "전화", value: "031.454.9999 / 010.4229.9994" },
  { label: "운영시간", value: "평일 10:00 ~ 20:00 / 토 09:00 ~ 17:00" },
  { label: "초기상담", value: "무료" },
  { label: "주차", value: "지하 9대 / 건물 뒤 공영주차장" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      {/* 배경 영상 히어로 */}
      <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative w-full max-w-5xl px-12 py-20 flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug drop-shadow text-left">
            누리봄 아동청소년발달연구소
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow text-left">
            아이의 성장을 지켜보는 부모의 마음으로<br />
            아이의 손을 잡고, 성장의 길을 함께합니다.
          </p>
        </div>
      </div>

      {/* 2컬럼 안내 카드 */}
      <div className="w-full bg-white flex justify-center px-6 py-14">
        <div className="w-full max-w-sm">
          {/* 찾아오세요 */}
          <a
            href="#contact"
            className="bg-white rounded-2xl p-8 border border-[#d4edd9] hover:shadow-md transition-shadow block"
          >
            <h2 className="text-lg font-bold text-[#5a9478] mb-5 pb-3 border-b border-[#d4edd9]">
              찾아오세요
            </h2>
            <ul className="space-y-3">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <p className="text-xs text-[#7aab94]">{item.label}</p>
                  <p className="text-[#2d5040] font-medium">{item.value}</p>
                </li>
              ))}
            </ul>
          </a>
        </div>
      </div>
    </section>
  );
}

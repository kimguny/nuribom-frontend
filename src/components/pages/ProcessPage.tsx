const STEPS = [
  {
    number: "01",
    title: "전화 예약",
    description: "전화로 상담 예약을 진행합니다.",
    sub: "평일 10:00 ~ 20:00 · 토요일 09:00 ~ 17:00\n031-454-9999 / 010-4229-9994",
  },
  {
    number: "02",
    title: "초기 상담",
    description: "부모 면담을 통해 치료 필요 유·무를 결정합니다.",
    sub: "초기 상담은 무료로 진행됩니다",
  },
  {
    number: "03",
    title: "평가 & 계획 수립",
    description: "영역별 평가를 실시하여 목표를 세우고 부모 상담을 실시합니다.",
    sub: null,
  },
  {
    number: "04",
    title: "교육 및 치료",
    description: "아동에게 적합한 치료 프로그램을 실시합니다.",
    sub: null,
  },
  {
    number: "05",
    title: "사후 평가",
    description: "치료 후 아이의 변화 정도를 파악하고 종결 여부를 결정합니다.",
    sub: null,
  },
  {
    number: "06",
    title: "종결",
    description: "초기 목표 달성 후 부모와 전문가의 합의하에 치료를 마칩니다.",
    sub: null,
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-16 min-h-screen">
      {/* 상단 배너 */}
      <div
        className="relative h-44 md:h-72 md:pt-16 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/shared/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">프로그램 프로세스</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">PROGRAM PROCESS</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-8 py-16">
          <div className="relative">
            {/* 세로 연결선 */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200" />

            <div className="space-y-0">
              {STEPS.map((step, index) => (
                <div key={step.number} className="relative flex gap-8">
                  {/* 번호 원 */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#6b9e5a] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step.number}</span>
                  </div>

                  {/* 내용 */}
                  <div className={`flex-1 ${index < STEPS.length - 1 ? "pb-10" : ""}`}>
                    <h2 className="text-base font-bold text-gray-900 mt-2.5">{step.title}</h2>
                    <p className="text-sm text-gray-900 mt-1 leading-relaxed">{step.description}</p>
                    {step.sub && (
                      <p className="text-xs text-[#6b9e5a] mt-2 whitespace-pre-line">{step.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

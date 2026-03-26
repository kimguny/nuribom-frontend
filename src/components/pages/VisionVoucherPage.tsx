const SERVICE_COSTS = [
  { grade: "1등급", desc: "기초생활수급자, 차상위", government: "126,000원", self: "12,000원" },
  { grade: "2등급", desc: "중위소득 120% 이하", government: "112,000원", self: "28,000원" },
  { grade: "3등급", desc: "중위소득 140% 이하", government: "98,000원", self: "42,000원" },
];

const PRIORITIES = [
  "한부모가정",
  "장애인가정 (부모 또는 형제가 장애인인 경우)",
  "다문화가정",
  "조손가정",
  "위탁가정",
];

const PROGRAMS = [
  "집단 미술치료",
  "집단 주의력 치료",
  "시지각 훈련",
  "보드게임치료",
  "협동놀이작업",
];

export default function VisionVoucherPage() {
  return (
    <main className="pt-16 min-h-screen">
      {/* 상단 배너 */}
      <div
        className="relative h-44 md:h-72 md:pt-16 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">아동비전형성지원서비스</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">CHILD VISION FORMATION SUPPORT</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">

          {/* 서비스 소개 */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              군포시 아동비전형성지원 바우처 전문기관 누리봄아동청소년발달연구소입니다.
              2024년부터 아동비전형성지원 바우처를 다시 진행하게 되었으며,
              중위소득 기준이 120%에서 140%로 확대되어 더 많은 가정이 혜택을 받으실 수 있습니다.
            </p>
            <p>
              아동·청소년 시기의 체계적인 사회·문화 활동 및 자기주도력 향상 프로그램을 통해
              자기에 대한 긍정적 인식과 미래 비전을 형성하고 책임감 있는 사회구성원으로
              성장하도록 지원하는 정부지원 바우처 제도입니다.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 mb-2">신청기준</p>
              <p>중위소득 140% 이하의 가정</p>
              <p className="text-[#6b9e5a] text-xs mt-1">서류 절차 없이 신청서만으로 신청 가능</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 mb-2">서비스 대상</p>
              <p>만 7세 ~ 만 15세</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 mb-2">지원기간</p>
              <p>12개월 (1년 추가 연장 가능, 최대 2년)</p>
              <p className="text-[#6b9e5a] text-xs mt-1">다른 바우처와 중복 사용 가능</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 mb-2">제공 방식</p>
              <p>2~4명 그룹수업</p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 우선순위 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">우선순위</h2>
            <div className="flex flex-wrap gap-2">
              {PRIORITIES.map((item) => (
                <span key={item} className="text-sm border border-gray-200 text-gray-600 px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 서비스 내용 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">서비스 제공 내용</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 mb-2">자기이해</p>
                <p>자신의 강점과 특성을 이해하고 긍정적 자아인식을 형성합니다.</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 mb-2">사회성 향상</p>
                <p>의사소통 능력, 경청기술, 배려심, 대화법을 습득합니다.</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 mb-2">자기주도력 향상</p>
                <p>생활태도 개선, 자기주도학습, 주의력 훈련, 상황인식 훈련을 진행합니다.</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900 mb-3">진행 프로그램</p>
              <div className="flex flex-wrap gap-2">
                {PROGRAMS.map((p) => (
                  <span key={p} className="text-sm bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 비용 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">서비스 비용</h2>
            <div className="border border-gray-200 overflow-hidden">
              <table className="w-full text-sm text-center">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="py-3 px-4 font-medium border-b border-gray-200">등급</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200">기준</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200">정부지원금</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200">본인부담금</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {SERVICE_COSTS.map((row, i) => (
                    <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 font-medium">{row.grade}</td>
                      <td className="py-3 px-4 text-gray-500">{row.desc}</td>
                      <td className="py-3 px-4">{row.government}</td>
                      <td className="py-3 px-4">{row.self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-sm text-gray-500 text-center pb-4">
            관심 있으신 분들은 군포시 당동 누리봄아동청소년발달연구소로 편하게 전화 문의주세요.
          </div>

        </div>
      </div>
    </main>
  );
}

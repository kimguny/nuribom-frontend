const SERVICE_COSTS = [
  { grade: "1등급", government: "162,000원", self: "78,000원" },
  { grade: "2등급", government: "144,000원", self: "96,000원" },
  { grade: "3등급", government: "126,000원", self: "114,000원" },
  { grade: "4등급", government: "90,000원", self: "150,000원" },
  { grade: "5등급", government: "36,000원", self: "204,000원" },
];

const REQUIREMENTS = [
  {
    number: "①",
    criteria: "드림스타트, 정신건강복지센터, 아동보호전문기관, 청소년상담복지센터 등 서비스 연계 의뢰자",
    documents: "추천 공문 또는 기관 추천서 (공인 날인 필요)",
  },
  {
    number: "②",
    criteria: "문제 행동 관련 약물치료 3개월 이상인 자",
    documents: "3개월 이상 약물치료 관련 의료기관의 의사 소견 (담당 의사 직접 작성 필요)",
  },
  {
    number: "③",
    criteria: "각 의료기관 의사",
    documents: "의사의 진료과목 소견서 (소아청소년과, 정신건강의학과, 이비인후과, 재활의학과 포함)",
  },
  {
    number: "④",
    criteria: "학교장, 전문상담교사, 보건교사",
    documents: "해당 기관의 추천서 (직인 날인 필수)",
  },
  {
    number: "⑤",
    criteria: "WEE센터(WEE클래스)",
    documents: "해당 기관의 추천서 (직인 날인 필수)",
  },
  {
    number: "⑥",
    criteria: "정신건강임상상담사, 임상심리사, 언어재활사(1·2급), 청소년상담사(1·2급)",
    documents: "소견서 + 임상심리평가결과 또는 언어평가 관련 검사도구 사용 결과서",
  },
];

const PRIORITIES = [
  "욕구 기준 ① 대상자",
  "욕구 기준 ② 대상자",
  "의사 단서류 제출자",
  "법정한부모, 다문화가정, 가정위탁아동, 조손가정 아동",
  "학교장, 전문상담교사 또는 보건교사 추천자",
  "초·중등교육법 제21조에 따른 자격자의 추천",
  "WEE센터(WEE클래스)",
  "우리아이심리지원서비스를 생애 최초 신청 아동",
  "지역아이심리서비스를 생애 최초 신청 아동",
];

export default function ChildVoucherPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">우리아이심리지원서비스</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">CHILD PSYCHOLOGICAL SUPPORT SERVICE</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">

          {/* 인사 및 서비스 소개 */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              안녕하세요.<br />
              군포 당동에 위치한 누리봄아동청소년발달연구소입니다.
            </p>
            <p>
              저희 연구소는 군포 지역의{" "}
              <span className="font-semibold text-gray-900">우리아이심리지원서비스 제공기관</span>으로,
              주의력 결핍 및 과잉행동장애(ADHD), 정서적 문제, 사회성 결여, 불안하고 예민한 아동,
              발달 지연, 반항 및 품행장애 등 다양한 문제를 겪는 아동·청소년들에게
              전문적인 심리 치료를 제공합니다.
            </p>
            <p>
              저희 누리봄 연구소는{" "}
              <span className="font-semibold text-gray-900">
                우리아이심리지원서비스, 우리가족통합심리지원서비스, 아동비전형성지원서비스
              </span>
              를 제공하고 있습니다.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 우리아이심리지원서비스 상세 */}
          <div className="space-y-8">
            <h2 className="text-lg font-bold text-gray-900">2026년도 우리아이심리지원서비스</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 mb-2">지원자격</p>
                <p>소득기준 상관없이 만 18세 이하의 자녀라면 누구나 지원 가능합니다.</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 mb-2">지원기간</p>
                <p>12개월 / 재판정 1회 (최대 24개월)</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 mb-2">서비스 제공내용</p>
                <p>놀이치료, 언어치료, 인지치료, 미술치료</p>
                <p className="text-gray-400">주 1회 (월 4회)</p>
              </div>
            </div>

            {/* 서비스 비용 */}
            <div>
              <p className="font-semibold text-gray-900 mb-3 text-sm">서비스 비용</p>
              <div className="border border-gray-200 overflow-hidden">
                <table className="w-full text-sm text-center">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      <th className="py-3 px-4 font-medium border-b border-gray-200">등급</th>
                      <th className="py-3 px-4 font-medium border-b border-gray-200">정부지원금</th>
                      <th className="py-3 px-4 font-medium border-b border-gray-200">본인부담금</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {SERVICE_COSTS.map((row, i) => (
                      <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4">{row.grade}</td>
                        <td className="py-3 px-4">{row.government}</td>
                        <td className="py-3 px-4">{row.self}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 욕구 기준 및 제출서류 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">욕구 기준 및 제출서류</h2>
            <div className="space-y-4">
              {REQUIREMENTS.map((req) => (
                <div key={req.number} className="flex gap-4 text-sm">
                  <span className="flex-shrink-0 font-bold text-[#6b9e5a]">{req.number}</span>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">{req.criteria}</p>
                    <p className="text-gray-500">{req.documents}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 우선순위 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">우선순위</h2>
            <ol className="space-y-2">
              {PRIORITIES.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6b9e5a] text-white text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </main>
  );
}

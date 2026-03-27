const ELIGIBILITY = [
  "초중등 교육법에 의한 학교장, 정신건강복지센터장, 가족센터장, 드림스타트센터장, Wee센터장, 청소년상담복지센터, 시군 통합사례관리 추천서를 받은 가족",
  "가족구성원 중 장애인이 있는 가족",
  "부모 중 한명의 정신건강관련 의사 진단서(또는 소견서), 정신건강임상심리사(또는 임상심리사) 소견서 + 임상심리평가 검사결과지를 제출한 가족",
  "재혼가족, 법정한부모가족, 위탁가족, 다문화가족, 북한이탈주민가족, 입양가족, 조손가족, 경계선 지능장애인 자녀가 있는 가족 (증빙서류 제출 필수)",
];

const DOCUMENTS = [
  {
    criteria: "추천서를 받은 가족",
    document: "추천서",
  },
  {
    criteria: "가족구성원 중 장애인이 있는 가족",
    document: "복지카드(등록증)",
  },
  {
    criteria: "진단서/소견서 제출 가족",
    document: "진단서 및 소견서, 검사기록지 (6개월 이내 발급)",
  },
  {
    criteria: "재혼·한부모·위탁·다문화·북한이탈·입양·조손가족",
    document: "가족관계증명서",
  },
  {
    criteria: "경계선 지능장애인 자녀가 있는 가족",
    document: "웩슬러 검사 결과지 (발급일 무관)",
  },
];

const SERVICE_COSTS = [
  { grade: "1등급", desc: "기초생활수급자, 차상위", government: "162,000원", self: "18,000 ~ 88,000원" },
  { grade: "2등급", desc: "기준 중위소득 120% 이하 중 기초생활수급자·차상위가 아닌 자", government: "144,000원", self: "36,000 ~ 106,000원" },
  { grade: "3등급", desc: "기준 중위소득 120% 초과 ~ 140% 이하", government: "126,000원", self: "54,000 ~ 124,000원" },
  { grade: "4등급", desc: "기준 중위소득 140% 초과 ~ 160% 이하", government: "90,000원", self: "90,000 ~ 160,000원" },
  { grade: "5등급", desc: "기준 중위소득 160% 초과", government: "36,000원", self: "144,000 ~ 214,000원" },
];

export default function FamilyVoucherPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">우리가족통합심리지원서비스</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">FAMILY INTEGRATED PSYCHOLOGICAL SUPPORT</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">

          {/* 서비스 소개 */}
          <div className="space-y-4 text-gray-900 leading-relaxed">
            <p>
              심리적·정서적 어려움을 겪는 가정을 대상으로 심리검사와 상담을 지원하는
              국가바우처사업입니다. 가족관계 개선 및 건강한 가족기능 형성을 위한
              맞춤형 상담서비스를 제공합니다.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 지원자격 및 기간 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-900">
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 mb-2">지원자격</p>
              <p>만 24세 이하 아동청소년이 포함된 가정</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 mb-2">지원기간</p>
              <p>12개월 (연장 없음)</p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 욕구기준 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">지원 대상</h2>
            <div className="space-y-3">
              {ELIGIBILITY.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-900">
                  <span className="flex-shrink-0 font-bold text-[#6b9e5a]">·</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 제출서류 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">제출서류</h2>
            <div className="border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="py-3 px-4 font-medium border-b border-gray-200 text-left">구분</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200 text-left">제출서류</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900">
                  {DOCUMENTS.map((doc, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4">{doc.criteria}</td>
                      <td className="py-3 px-4">{doc.document}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 비용 */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">서비스 비용</h2>
            <div className="border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="py-3 px-4 font-medium border-b border-gray-200 text-left">등급</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200 text-left">기준</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200 text-center">정부지원금</th>
                    <th className="py-3 px-4 font-medium border-b border-gray-200 text-center">본인부담금</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900">
                  {SERVICE_COSTS.map((row, i) => (
                    <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 font-medium">{row.grade}</td>
                      <td className="py-3 px-4 text-gray-900">{row.desc}</td>
                      <td className="py-3 px-4 text-center">{row.government}</td>
                      <td className="py-3 px-4 text-center">{row.self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-sm text-gray-900 text-center pb-4">
            궁금하신 사항은 언제든지 누리봄아동청소년발달연구소로 문의 주세요.
          </div>

        </div>
      </div>
    </main>
  );
}

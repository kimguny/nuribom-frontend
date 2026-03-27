const ASSESSMENTS = [
  {
    title: "언어평가",
    subtitle: "LANGUAGE ASSESSMENT",
    description:
      "아동의 언어 이해 및 표현 능력을 체계적으로 평가합니다. 수용언어, 표현언어, 조음·음운, 유창성, 화용언어 등 다양한 영역을 종합적으로 검토하여 언어발달 수준과 지체 여부를 파악하고 적절한 치료 방향을 제시합니다.",
    targets: [
      "또래에 비해 말이 늦거나 발음이 부정확한 아동",
      "문장 이해나 표현에 어려움이 있는 아동",
      "말을 더듬거나 의사소통이 원활하지 않은 아동",
      "언어치료 시작 전 기초 평가가 필요한 아동",
    ],
  },
  {
    title: "심리(놀이)평가",
    subtitle: "PSYCHOLOGICAL (PLAY) ASSESSMENT",
    description:
      "아동이 가장 자연스럽게 자신을 표현하는 놀이 상황을 통해 정서, 행동, 대인관계 특성을 파악하는 평가입니다. 언어적 표현이 어려운 어린 아동에게도 적용 가능하며, 아동의 내면세계와 심리적 갈등을 비언어적 방식으로 이해할 수 있습니다.",
    targets: [
      "정서적으로 불안하거나 위축된 아동",
      "공격적이거나 충동적인 행동을 보이는 아동",
      "또래 관계에 어려움이 있는 아동",
      "심리치료 시작 전 현재 상태 파악이 필요한 아동",
    ],
  },
  {
    title: "지능검사",
    subtitle: "INTELLIGENCE ASSESSMENT",
    description:
      "웩슬러 지능검사(K-WISC)를 통해 언어이해, 지각추론, 작업기억, 처리속도 등 인지 능력의 전반적인 수준과 영역별 강·약점을 파악합니다. 학습 어려움의 원인을 분석하고 아동에게 맞는 교육 및 치료 계획 수립에 활용됩니다.",
    targets: [
      "학습 부진이나 학업 어려움을 겪는 아동",
      "발달 지연이 의심되는 아동",
      "영재성 또는 경계선 지능이 의심되는 아동",
      "특수교육 또는 복지 서비스 신청을 위한 평가가 필요한 아동",
    ],
  },
  {
    title: "발달평가",
    subtitle: "DEVELOPMENTAL ASSESSMENT",
    description:
      "운동, 언어, 인지, 사회성, 자조 등 발달 전 영역을 종합적으로 평가하여 또래와 비교한 발달 수준을 파악합니다. 발달 지연의 영역과 정도를 명확히 하고 조기 개입의 방향을 결정하는 데 중요한 역할을 합니다.",
    targets: [
      "전반적인 발달이 또래보다 느린 아동",
      "운동, 언어, 인지 중 특정 영역의 발달이 지연된 아동",
      "자폐 스펙트럼 또는 발달장애가 의심되는 아동",
      "영·유아기 발달 수준 전반 확인이 필요한 경우",
    ],
  },
  {
    title: "종합심리검사",
    subtitle: "COMPREHENSIVE PSYCHOLOGICAL ASSESSMENT",
    description:
      "지능, 정서, 행동, 성격, 적응 기능 등 심리 전반을 다각도로 평가하는 검사입니다. 다양한 표준화 검사 도구를 조합하여 아동의 심리적 특성을 입체적으로 이해하고, 진단 및 치료 계획 수립에 필요한 종합적인 정보를 제공합니다.",
    targets: [
      "ADHD, 불안, 우울 등 정서·행동 문제가 있는 아동",
      "심리치료 또는 정신건강 서비스 연계 전 종합 평가가 필요한 경우",
      "정확한 진단과 치료 방향 수립이 필요한 아동",
      "바우처 서비스 신청을 위한 임상심리평가가 필요한 경우",
    ],
  },
  {
    title: "감각통합평가",
    subtitle: "SENSORY INTEGRATION ASSESSMENT",
    description:
      "시각, 청각, 촉각, 전정감각, 고유감각 등 다양한 감각 정보를 처리하고 통합하는 능력을 평가합니다. 감각 처리의 어려움이 일상생활, 학습, 행동에 미치는 영향을 파악하여 감각통합치료 또는 작업치료의 필요성을 결정합니다.",
    targets: [
      "감각 자극에 지나치게 예민하거나 둔감한 아동",
      "소근육·대근육 발달이 느리거나 운동 협응이 어려운 아동",
      "집중력이 부족하고 산만한 행동을 보이는 아동",
      "일상적인 감각 자극(소리, 촉감 등)에 심하게 거부반응을 보이는 아동",
    ],
  },
];

export default function AssessmentPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">검사 프로그램</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">ASSESSMENT PROGRAMS</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-0">
          {ASSESSMENTS.map((item, index) => (
            <div key={item.title} className={`py-10 ${index < ASSESSMENTS.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="flex flex-col md:flex-row md:gap-12">
                {/* 제목 */}
                <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                  <p className="text-xs text-gray-900 mt-1 tracking-widest">{item.subtitle}</p>
                </div>

                {/* 내용 */}
                <div className="flex-1 space-y-4">
                  <p className="text-sm text-gray-900 leading-relaxed">{item.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 mb-2">이런 아동에게 필요합니다</p>
                    <ul className="space-y-1">
                      {item.targets.map((target) => (
                        <li key={target} className="flex items-start gap-2 text-sm text-gray-900">
                          <span className="flex-shrink-0 text-[#6b9e5a] mt-0.5">·</span>
                          {target}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

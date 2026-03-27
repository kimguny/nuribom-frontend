export default function HomeIntro() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* 인용구 */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-400 mb-4">ABOUT US</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug break-keep">
            아이를 키우는 부모의 마음으로<br />
            아이와 부모님 곁에 함께합니다.
          </h2>
          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto break-keep">
            2016년 문을 연 이후, 발달과 정서에 어려움을 겪는 아이들 한 명 한 명의 이야기에 귀 기울이며
            가장 알맞은 치료 방향을 함께 찾아왔습니다.
          </p>
        </div>

        {/* 3가지 강점 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "위치 및 규모",
              desc: "경기도 군포시 당동에 자리하고 있습니다. 아이가 편안하게 머물 수 있도록 넓고 쾌적한 60평 규모의 공간을 마련했습니다.",
              icon: "🏢",
            },
            {
              label: "전문 인력",
              desc: "오랜 임상 경험을 가진 석·박사 전문가들이 아이 한 명 한 명을 세심하게 살피며, 가장 알맞은 치료 방향을 안내해 드립니다.",
              icon: "👩‍⚕️",
            },
            {
              label: "함께하는 치료",
              desc: "부모님과 함께 소통하며 아이의 언어, 정서, 신체 능력이 자연스럽게 자랄 수 있도록 언제나 곁에서 돕겠습니다.",
              icon: "🤝",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#f8faf8] rounded-2xl p-8 text-center"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <p className="font-semibold text-gray-900 mb-3">{item.label}</p>
              <p className="text-sm text-gray-500 leading-relaxed break-keep">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

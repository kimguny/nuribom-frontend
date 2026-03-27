export default function AboutPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">인사말</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">GREETING</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-8 py-16 space-y-16">
          <div className="text-gray-900 leading-loose space-y-6">
            <p>
              안녕하세요.<br />
              누리봄아동청소년발달연구소입니다.
            </p>
            <p>
              저희 연구소는 2016년 8월 개소 이후,
              아동과 청소년이 건강하게 성장하고
              내면의 어려움을 안전하게 표현할 수 있는 공간이 되고자 노력해왔습니다.
            </p>
            <p>
              발달과 정서에서 어려움을 겪는 아이들은
              겉으로 보이는 모습보다 그 안의 이유를 이해하는 것이 중요합니다.
            </p>
            <p>
              누리봄은 임상심리사의 체계적인 평가를 바탕으로
              놀이치료, 언어치료, 인지치료 등 각 분야의 석·박사 전문가들이 협력하여
              아이에게 가장 적합한 치료 방향을 제시하고 있습니다.
            </p>
            <p>
              단순한 치료 제공을 넘어,
              아이의 변화를 만들어가는 과정에 함께하는 것을 목표로 합니다.
            </p>
            <p>
              앞으로도 아이를 키우는 부모의 마음으로
              아이와 부모님의 이야기에 귀 기울이며,
              믿고 맡길 수 있는 진정성 있는 동반자가 되겠습니다.
            </p>
            <p>감사합니다.</p>
            <p className="font-semibold text-[#5a9478]">
              누리봄아동청소년발달연구소<br />
              소장 엄은영
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

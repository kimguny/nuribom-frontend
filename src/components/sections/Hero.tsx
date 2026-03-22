export default function Hero() {
  return (
    <section className="min-h-screen bg-[#edf7e3] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5a9478] mb-6 leading-snug">
          누리봄 아동청소년발달연구소
        </h1>
        <p className="text-lg md:text-xl text-[#2d5040] leading-relaxed mb-10">
          아이의 성장을 지켜보는 부모의 마음으로,<br />
          아이와 부모 모두의 마음을 함께 돌봅니다.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#5a9478] text-white px-8 py-3 rounded-full hover:bg-[#4a7d65] transition-colors"
        >
          상담 문의
        </a>
      </div>
    </section>
  );
}

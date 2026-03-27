import Link from "next/link";

export default function HomeTour() {
  return (
    <section
      className="relative py-32 px-6 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/tour/20.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          센터 둘러보기
        </h2>
        <p className="text-white/75 text-sm md:text-base mb-8 leading-relaxed">
          누리봄의 공간을 미리 만나보세요.
        </p>
        <Link
          href="/tour"
          className="inline-block px-8 py-3 rounded-none border border-white text-white text-sm hover:bg-white hover:text-black transition-colors"
        >
          둘러보기
        </Link>
      </div>
    </section>
  );
}

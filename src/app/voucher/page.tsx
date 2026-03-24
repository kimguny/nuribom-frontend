import Image from "next/image";

export default function VoucherPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">바우처 안내</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">VOUCHER INFORMATION</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-10">

          {/* 공지 텍스트 */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              안녕하세요.<br />
              군포 당동에 위치한 누리봄아동청소년발달연구소입니다.
            </p>
            <p>
              2026년 상반기 지역사회서비스 바우처 모집기간이{" "}
              <span className="font-semibold text-gray-900">2월 첫째주 (2월 2일 ~ 2월 6일)</span>에
              예정되어 있으니 관련 서류를 미리 준비하시기 바랍니다.
            </p>
            <p>
              저희 누리봄 연구소는{" "}
              <span className="font-semibold text-gray-900">
                우리아이심리지원서비스, 우리가족통합심리지원서비스, 아동비전형성지원서비스
              </span>
              를 제공하고 있습니다.
            </p>
            <p className="text-gray-400 text-sm">
              각 서비스에 대한 자세한 내용은 아래 공고문을 확인하시기 바랍니다.
            </p>
          </div>

          {/* 구분선 */}
          <hr className="border-gray-100" />

          {/* 공고 이미지 */}
          <div>
            <p className="text-sm text-gray-400 mb-4">2026년 상반기 이용자 모집 공고</p>
            <div className="relative w-full border border-gray-100">
              <Image
                src="/images/voucher-notice.png"
                alt="2026년 상반기 지역사회서비스바우처사업 이용자 모집 공고"
                width={800}
                height={1100}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

import KakaoMap from "@/components/KakaoMap";

export default function DirectionsPage() {
  return (
    <main className="pt-16 min-h-screen">
      {/* 상단 배너 */}
      <div
        className="relative h-56 md:h-72 pt-16 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">오시는 길</h1>
          <p className="text-white/70 text-xs mt-2 tracking-widest">DIRECTIONS</p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-5 text-gray-900 mb-10">
            <div>
              <p className="text-sm text-gray-400 mb-1">주소</p>
              <p className="font-medium">경기도 군포시 당동 971-2번지 4층</p>
              <p className="text-sm text-gray-400">(당동중학교 맞은편 굿모닝 한의원건물 4층)</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">주차</p>
              <p className="font-medium">건물 뒤 공영주차장 이용 가능합니다.</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">전화</p>
              <p className="font-medium">031.454.9999 / 010.4229.9994</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">운영시간</p>
              <p className="font-medium">평일 10:00 ~ 20:00</p>
              <p className="font-medium">토요일 09:00 ~ 17:00</p>
            </div>
          </div>

          <div className="h-80 md:h-96">
            <KakaoMap />
          </div>
        </div>
      </div>
    </main>
  );
}

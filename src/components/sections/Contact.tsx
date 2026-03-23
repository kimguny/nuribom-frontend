import KakaoMap from "@/components/KakaoMap";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          오시는 길
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 지도 */}
          <div className="h-64 md:h-80">
            <KakaoMap />
          </div>
          {/* 연락처 */}
          <div className="flex flex-col gap-5 justify-center text-gray-900">
            <div>
              <p className="text-sm text-gray-400">전화</p>
              <p className="font-medium">031.454.9999 / 010.4229.9994</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">운영시간</p>
              <p className="font-medium">평일 10:00 ~ 20:00</p>
              <p className="font-medium">토요일 09:00 ~ 17:00</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">초기상담</p>
              <p className="font-medium">무료</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">주차</p>
              <p className="font-medium">지하 9대 / 건물 뒤 공영주차장 이용 가능</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">주소</p>
              <p className="font-medium">경기도 군포시 당동 971-2번지 4층</p>
              <p className="text-sm text-gray-400">(당동중학교 맞은편 굿모닝 한의원건물 4층)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

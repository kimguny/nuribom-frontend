export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#5a9478] mb-12 text-center">
          오시는 길
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 지도 자리 */}
          <div className="bg-[#edf8e6] rounded-2xl h-64 flex items-center justify-center text-[#7aab94]">
            지도가 들어올 자리입니다
          </div>
          {/* 연락처 */}
          <div className="flex flex-col gap-5 justify-center text-[#2d5040]">
            <div>
              <p className="text-sm text-[#7aab94]">전화</p>
              <p className="font-medium">031.454.9999 / 010.4229.9994</p>
            </div>
            <div>
              <p className="text-sm text-[#7aab94]">운영시간</p>
              <p className="font-medium">평일 10:00 ~ 20:00</p>
              <p className="font-medium">토요일 09:00 ~ 17:00</p>
            </div>
            <div>
              <p className="text-sm text-[#7aab94]">초기상담</p>
              <p className="font-medium">무료</p>
            </div>
            <div>
              <p className="text-sm text-[#7aab94]">주차</p>
              <p className="font-medium">지하 9대 / 건물 뒤 공영주차장 이용 가능</p>
            </div>
            <div>
              <p className="text-sm text-[#7aab94]">주소</p>
              <p className="font-medium">주소가 들어올 자리입니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const PROGRAMS = [
  {
    title: "놀이치료",
    summary: "아이들에게 놀이는 가장 적극적인 언어입니다. 놀이를 매개로 아동의 내면을 탐색하고 스스로 갈등을 해소할 수 있도록 돕는 치료 프로그램입니다.",
    detail: {
      description: `아이들은 일반적인 대화만으로 자신의 생각이나 감정을 다 전달하고 표현하지 못하는 경우가 많아요. 아이들에겐 놀이가 이 세상의 전부이고, 또 가장 적극적인 언어일 수 있지요.

따라서 놀이치료는 아동에게 가장 친숙한 놀이활동을 매개로 하여 아동의 내면을 탐색하고 경험한 것을 표현하도록 도우면서 이를 통해 아동 스스로 갈등을 해소할 수 있도록 지지하는 가장 역동적이고 자연스러운 치료 프로그램입니다.`,
      targets: [
        "심하게 위축되어 있거나, 자신감이 결여되어 있는 아동",
        "주의가 산만하고 공격적인 성향을 가진 아동",
        "매사에 의욕이 없고 우울이나 불안이 높은 아동",
        "야뇨증이나 유분증이 있는 아동",
        "부모와의 관계에 어려움이 많고 계속 부딪히는 아동",
        "지나치게 고집을 부리거나 짜증이 많은 아동",
        "분리불안(애착문제)이 있는 아동",
        "스트레스성 신체증상 또는 불수의적 움직임(틱)이 있는 아동",
      ],
      images: [
        "/images/play-therapy-room-1.jpg",
        "/images/play-therapy-room-2.jpg",
      ],
    },
  },
  {
    title: "미술치료",
    summary: "미술활동을 통해 정서적 안정 및 성장을 돕는 심리치료입니다. 자신을 드러내는 것에 익숙하지 않은 분들에게 효과적인 접근 방법이 됩니다.",
    detail: {
      description: `미술활동을 통해 정서적 안정 및 성장을 돕는 심리치료의 유형 중 하나입니다.

내담자의 미술창작활동을 통해 마음을 정확하게 읽고, 내담자가 스스로 문제를 들여다 봄으로써 억압된 스트레스를 완화시켜 정서발달과 자아성장을 촉진시킵니다.

미술이 여러 가지 도구를 사용해 표현되기 때문에 자신을 드러내는 것에 익숙하지 않거나 그것을 꺼리는 분들에게 효과적인 접근 방법이 됩니다.

미술치료에서의 미술은 작품의 완성도보다는 과정에서 나타나는 표현에 중심을 둠으로써 내담자 스스로 자신의 내면을 읽어낼 수 있고, 구체적인 결과물이 자료로 남게 됨에 따라 치료의 과정 자체를 객관적으로 관찰할 수 있다는 장점이 있습니다.`,
      targets: [
        "친구들과 잘 어울리지 못하고 자신감이 부족한 아동 또는 청소년",
        "과잉행동이나 주의산만 또는 공격적이고 충동적인 아동 또는 청소년",
        "도벽이나 습관적인 거짓말을 하는 아동",
        "우울하고 의욕이 없어 학습에 어려움을 가지는 아동 또는 청소년",
        "분노 및 심리적 기복이 심해 감정조절이 어려운 아동 또는 청소년",
        "정서장애, 발달장애, 정신지체, 반응성 애착장애 등의 장애가 있는 아동",
        "청소년기 학업, 진로, 따돌림 또는 비행 등으로 부모와의 대화를 거부하는 아동",
        "컴퓨터에만 의존하여 생활하는 아동 또는 청소년",
        "사회 환경적으로 스트레스나 강박이 심한 성인",
      ],
      images: [
        "/images/art-therapy-room-1.jpg",
        "/images/art-therapy-room-2.jpg",
      ],
    },
  },
  {
    title: "심리상담",
    summary: "심리상담 프로그램 설명이 들어올 자리입니다.",
    detail: null,
  },
  {
    title: "언어치료",
    summary: "선천적 또는 환경적 이유로 언어를 이해하고 표현하는 데 어려움이 있는 아동부터 성인까지를 대상으로 합니다. 조기 발견과 치료로 언어발달을 촉진합니다.",
    detail: {
      description: `선천적으로 혹은 환경적 이유로 언어를 이해하고 표현하는 데 어려움이 있는 아동부터 성인까지가 대상이 됩니다.

언어평가를 실시하여 동일 생활연령 평균보다 6개월~1년 이상 지체된다면 언어치료가 필요합니다.

조음기관 및 발성훈련, 문장의 의미관계 구성과 확대, 음운변동, 조사와 어미 등의 문법발달 및 확대, 말소리 발달, 낱말의 이해와 표현, 상황에 맞게 말하기, 상위 언어능력 등이 모두 언어치료에 포함됩니다.

언어의 지연은 조기에 발견하고 치료해야 언어발달의 속도를 촉진시킬 수 있고, 지체나 장애를 줄이는 데 더 큰 도움을 줄 수 있습니다.

아이에게 무조건적으로 말하기를 강요하는 것은 아이 스스로 말에 대한 두려움을 증가시킬 수 있습니다. 따라서 언어치료는 아이가 스스로 언어를 사용하려 하는 욕구를 키워주고, 바르게 습득 및 표현할 수 있도록 지지하는 방식을 습득하는 부모교육이 함께 이루어져야 합니다.`,
      targets: [
        "언어발달지체: 인지 또는 정서장애로 인한 언어발달 지체",
        "조음장애: 단순조음장애, 구개파열로 인한 언어장애",
        "유창성 장애: 말더듬, 말 빠름 (더듬거나, 말이 너무 빠르거나, 막히는 아동)",
        "청각장애: 선천적 또는 후천적인 난청, 인공와우 수술로 인한 언어장애",
        "신경언어장애: 뇌성마비 또는 뇌손상이나 뇌졸중, 치매 등으로 인한 언어장애",
        "음성장애: 비정상적인 음성을 가진 경우, 성대관련 의학적 치료 후의 언어재활",
      ],
      images: [
        "/images/language-therapy-room-1.jpg",
        "/images/language-therapy-room-2.jpg",
      ],
    },
  },
];

export default function Programs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="programs" className="py-24 bg-[#f4fbf7] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#5a9478] mb-12 text-center">
          프로그램
        </h2>

        <div className="flex flex-col gap-4">
          {PROGRAMS.map((program, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={program.title}
                className={`bg-white rounded-2xl border transition-colors overflow-hidden ${
                  isOpen ? "border-[#5a9478]" : "border-[#c8e6d5]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#2d5040]">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#7aab94] mt-1 leading-relaxed">
                      {program.summary}
                    </p>
                  </div>
                  {program.detail && (
                    <span className="ml-6 text-[#5a9478] text-lg flex-shrink-0">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  )}
                </button>

                {isOpen && program.detail && (
                  <div className="px-8 pb-8 text-sm text-[#2d5040] leading-relaxed space-y-6 border-t border-[#c8e6d5]">
                    <p className="whitespace-pre-line pt-6">{program.detail.description}</p>
                    <ul className="space-y-2">
                      {program.detail.targets.map((target) => (
                        <li key={target} className="flex items-start gap-2">
                          <span className="text-[#5a9478] mt-0.5">·</span>
                          {target}
                        </li>
                      ))}
                    </ul>
                    {"images" in program.detail && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {(program.detail as { images: string[] }).images.map((src, i) => (
                          <div key={i} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                            <Image
                              src={src}
                              alt={`${program.title} 치료실 사진 ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

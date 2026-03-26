import Link from "next/link";
import { PROGRAMS } from "@/constants/programs";

export default function HomePrograms() {
  return (
    <section className="bg-[#f2f7f4] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-400 mb-4">PROGRAMS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">치료 프로그램</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PROGRAMS.map((program) => (
            <Link
              key={program.title}
              href={`/programs#${program.title}`}
              className="group bg-white rounded-2xl p-7 hover:shadow-md transition-shadow border border-transparent hover:border-[#c8e6d5]"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-gray-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                {program.summary}
              </p>
              <p className="mt-5 text-xs text-gray-500 font-medium">
                자세히 보기 →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

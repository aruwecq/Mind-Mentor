// components/ProjectCard.tsx

export default function ProjectCard() {
  return (
    <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-6">
      <div className="w-[380px] h-[508px] from-cyan-50 via-emerald-50 to-cyan-100 rounded-3xl shadow-2xl p-3 flex flex-col justify-between overflow-hidden relative bg-white">
        <div className="bg-[#D5F6ED] p-6 border-[#D5F6ED-] rounded-[10px] w-[354px] h-[400px]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50 w-[83px]">
              <span className="text-1xl">😊</span>
              <span className="font-bold text-gray-800 text-lg">4.5</span>
            </div>
            <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-xl hover:bg-gray-800 transition-all duration-200 relative z-10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2">
              Платформа для курсов и менторов
            </h2>
          </div>

          <div className="mt-6 flex-1">
            <p className="text-sm text-gray-900 mb-4 font-medium">
              Для этого проекта нужны специалисты:
            </p>

            <div className="space-y-3">
              <span className="inline-block px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-md border border-cyan-200">
                Дизайнеры
              </span>
              <span className="inline-block px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-md border border-yellow-200">
                Frontend Разработчики
              </span>
              <span className="inline-block px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-md border border-cyan-200">
                Backend Разработчики
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-block px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-md border border-cyan-200">
                  Frontend Разработчики
                </span>
                <span className="inline-block px-3 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold shadow-md border border-cyan-200">
                  +4
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <div className="text-3xl font-bold text-gray-900 tracking-tight">
            2000 С
          </div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95">
            Подробно
          </button>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/30 rounded-full -mr-16 -mt-16 blur-xl"></div>
      </div>

    </div>
  );
}

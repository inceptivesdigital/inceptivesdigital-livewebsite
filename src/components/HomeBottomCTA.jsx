export default function HomeBottomCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a120c] bg-[image:url('/assets/homecta.png')] bg-cover bg-no-repeat bg-right lg:bg-center py-20 sm:py-24 lg:py-28 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#060907] via-[#060907]/90 to-[#060907]/30 pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            While others are busy selling code,{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span> is busy engineering your vision into reality.
          </h2>

          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
            A focused 2-week engagement that produces a validated product roadmap, technical architecture, UX wireframes, and a phased cost estimate. For founders and businesses who want certainty before commitment.
          </p>

          <div>
            <a
              href="#contact"
              className="getintouch inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[16px] sm:text-[18px] tracking-tight transition-all duration-150 active:scale-95 shadow-none cursor-pointer border-0"
            >
              Start My Product Roadmap
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

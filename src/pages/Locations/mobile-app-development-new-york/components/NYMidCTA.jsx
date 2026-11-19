export default function NYMidCTA() {
  return (
    <section className="py-14 sm:py-20 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="w-full rounded-[24px] sm:rounded-[32px] bg-[#00CE44] text-black p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Subtle Background Lighting Accent */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black tracking-tight leading-[1.15] mb-5">
              Your Next Product Deserves a Clear Starting Point
            </h2>

            <p className="text-black/90 text-base sm:text-lg lg:text-[19px] leading-relaxed mb-8 max-w-3xl font-medium">
              Whether you're validating an idea, replacing legacy software, or exploring AI opportunities, we'll help you identify the fastest path to market.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-black hover:bg-[#1a1a1a] text-white font-semibold text-sm sm:text-base transition-colors"
            >
              Discuss Your Product Idea
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

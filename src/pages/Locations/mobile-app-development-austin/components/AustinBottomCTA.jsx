export default function AustinBottomCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="w-full rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#14151a] to-[#0e1014] border border-white/10 p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden">
          {/* Subtle green ambient lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00CE44]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.16] mb-6">
              Want a straight answer on what your product{' '}
              <span className="text-[#00CE44]">actually needs to survive?</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg lg:text-[20px] leading-relaxed mb-8 max-w-3xl mx-auto font-normal">
              Skip the sales pitch. Get a straight answer on what your product actually needs to survive. One conversation. No obligation. Just clarity.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-4 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-base transition-colors"
            >
              Get a Straight Answer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

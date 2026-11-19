import { TrendingUp, ArrowRight } from 'lucide-react'

export default function SFMarketForecast() {
  return (
    <section className="py-20 lg:py-24 bg-[#050608] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="relative rounded-[28px] bg-gradient-to-br from-[#14151b] via-[#101116] to-[#0a0b0e] border border-white/10 p-10 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00CE44]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Eyebrow */}
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Revenue and Growth</span>
            </span>

            {/* Properly sized Number Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00CE44] tracking-tight leading-none mb-6">
              $777.4 Billion{' '}
              <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl block sm:inline mt-2 sm:mt-0">
                in 2032
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-white/85 text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
              Allied Market Research projects the global mobile app market will grow from $208.5 billion in 2022 to $777.4 billion by 2032, a 14.4% compound annual growth rate. San Francisco product teams therefore build for an audience that keeps expanding.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#00CE44]/20"
            >
              <span>Start Your Project in SF</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

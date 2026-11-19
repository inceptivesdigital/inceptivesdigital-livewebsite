import { ArrowRight } from 'lucide-react'

export default function SFDevelopersNearMe() {
  return (
    <section className="py-20 lg:py-24 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto p-8 sm:p-12 lg:p-14 rounded-[28px] bg-gradient-to-br from-[#14151b] via-[#101116] to-[#0c0d10] border border-white/10 shadow-2xl">
          {/* Left Text */}
          <div className="lg:col-span-8 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              San Francisco App Developers for{' '}
              <span className="text-[#00CE44]">Your Next Product</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
              Inceptives Digital provides app development near San Francisco, serving businesses along the Peninsula and across the wider Bay Area. Our engineers build custom iOS, Android, and AI applications, with architecture and integration requirements defined before implementation begins.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#00CE44]/20"
            >
              <span>Discuss Your App Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

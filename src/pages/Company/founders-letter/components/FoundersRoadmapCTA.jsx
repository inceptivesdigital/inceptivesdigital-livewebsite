import { ArrowRight } from 'lucide-react'

export default function FoundersRoadmapCTA() {
  const scrollToForm = () => {
    const el = document.getElementById('consultation-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 sm:py-24 bg-black overflow-hidden border-t border-b border-white/10">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,206,68,0.14),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="p-8 sm:p-14 lg:p-16 rounded-none bg-[#111215] border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Serious products need clear decisions before development starts
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Tell us what the business needs to solve. We will help determine the right product path.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 cursor-pointer shadow-lg shadow-[#00CE44]/20 group"
            >
              <span>Start My Product Roadmap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'

export default function ContactCtaBanner({ title, desc, tag, button = 'Submit Your Brief' }) {
  const goToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Also focus first input in form if available
    setTimeout(() => {
      const firstInput = document.querySelector('form input')
      if (firstInput) firstInput.focus()
    }, 450)
  }

  // Highlight key phrases in title for visual impact
  const renderTitle = (t) => {
    if (!t) return null
    if (t.includes('Next Product')) {
      const parts = t.split('Next Product')
      return (
        <>
          {parts[0]}<span className="text-[#00CE44]">Next Product</span>{parts[1]}
        </>
      )
    }
    if (t.includes("You've Got the Right Partner.")) {
      const parts = t.split("You've Got the Right Partner.")
      return (
        <>
          {parts[0]}<span className="text-[#00CE44]">You've Got the Right Partner.</span>{parts[1]}
        </>
      )
    }
    return t
  }

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#0a0d0b] via-[#0e1410] to-[#070908] border-y border-white/10 overflow-hidden">
      {/* Ambient glowing radial lights */}
      <div className="absolute -top-32 right-10 w-[550px] h-[400px] bg-[#00CE44]/[0.14] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[500px] h-[350px] bg-[#00CE44]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      {/* High-tech subtle dot matrix pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14 text-left">
          <div className="max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 bg-[#00CE44]/10 border border-[#00CE44]/30 text-[#00CE44] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] animate-pulse" />
              <span>{tag || 'Start Your Project'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15] mb-4">
              {renderTitle(title)}
            </h2>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              {desc}
            </p>

            {/* Micro-trust points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#00CE44] font-bold">✓</span>
                <span>24-Hour Scoping & Estimate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00CE44] font-bold">✓</span>
                <span>Strict NDA Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00CE44] font-bold">✓</span>
                <span>Senior Product Engineers</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Button with subtle glow */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
            <button
              type="button"
              onClick={goToForm}
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 cursor-pointer border-0 shadow-[0_0_30px_rgba(0,206,68,0.35)] hover:shadow-[0_0_45px_rgba(0,206,68,0.55)] active:scale-95"
            >
              <span>{button}</span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
            <span className="text-xs text-white/50 font-medium tracking-wide">
              ⚡ Turnaround within 1 business day
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

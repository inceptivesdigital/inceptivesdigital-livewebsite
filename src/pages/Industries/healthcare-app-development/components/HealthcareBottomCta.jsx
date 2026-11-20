import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HealthcareBottomCta() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0c10] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Glow */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00CE44]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-4">
            Start Your Journey
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-4">
            Ready to Launch Your Healthcare App?
          </h2>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00CE44] tracking-tight mb-8">
            Let&apos;s Build It Together!
          </p>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Partner with clinical software architects and mobile engineers who build HIPAA-compliant, clinically accurate applications that scale with confidence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

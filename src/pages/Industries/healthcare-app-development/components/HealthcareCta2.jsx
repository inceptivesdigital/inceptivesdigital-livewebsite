import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HealthcareCta2() {
  return (
    <section
      className="py-20 lg:py-24 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/healthcare/health-cta.webp')`,
      }}
    >
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" aria-hidden="true" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight mb-4">
            Your Sector, Our{' '}
            <span className="text-[#00CE44]">Healthcare App Expertise</span>
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            From diagnostics to digital therapy, we build solutions that improve care and operational efficiency.
          </p>

          <div className="flex justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

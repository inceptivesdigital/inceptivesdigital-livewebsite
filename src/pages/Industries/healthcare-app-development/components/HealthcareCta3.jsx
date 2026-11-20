import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

export default function HealthcareCta3() {
  return (
    <section className="py-16 lg:py-20 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
              Get a Personalized{' '}
              <span className="text-[#00CE44]">Healthcare App Development</span> Cost Breakdown
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Know exactly what it takes to turn your healthcare idea into a fully functional app.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#00CE44] text-white font-medium text-base rounded-none hover:bg-[#00CE44] hover:text-black transition-all duration-200 cursor-pointer shadow-none"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule A Call</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Exact WordPress Tablet/Logs Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/assets/healthcare/lastcta-health.webp"
              alt="Healthcare App Cost Breakdown"
              className="w-full max-w-[480px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

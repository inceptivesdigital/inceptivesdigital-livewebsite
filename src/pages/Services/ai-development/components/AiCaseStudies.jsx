import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

export default function AiCaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      id: 'wordsmith',
      title: 'WordSmith',
      subtitle: 'AI Writing Improvement Platform',
      desc: 'Writing intelligence platform analyzing grammar, tone, clarity, and structure with personalized, actionable feedback.',
      logo: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/carousel3.png',
      mockup: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/WordSmith_-1.png',
      fallbackMockup: '/assets/ai-development/WordSmith_-1.png',
      accentColor: '#E07A2B',
      btnBg: 'bg-[#E07A2B] hover:bg-[#c96a20]',
      link: '/portfolio',
    },
    {
      id: 'dps-airem',
      title: 'DPS Airem',
      subtitle: 'Real-Time Workforce Operations Platform',
      desc: 'Workforce management system that reduced manual paperwork by 90% while improving attendance, reporting, and operational accuracy.',
      logo: '/assets/ai-development/carousel1.png',
      mockup: '/assets/ai-development/dps--1024x636.png',
      accentColor: '#00CE44',
      btnBg: 'bg-[#00CE44] hover:bg-[#00ba3e] text-black',
      link: '/portfolio',
    },
    {
      id: 'pulse-check',
      title: 'Pulse Check',
      subtitle: 'Emergency CPR Timing and Resuscitation Support Platform',
      desc: 'A precision-built mobile application that guides CPR cycles, automates pulse check timing, records critical events, and simplifies emergency documentation.',
      logo: '/assets/ai-development/carousel2.png',
      mockup: '/assets/ai-development/pulse-1024x637.png',
      accentColor: '#E63946',
      btnBg: 'bg-[#E63946] hover:bg-[#d62839]',
      link: '/portfolio',
    },
    {
      id: 'chiropractic',
      title: 'State of the Art Chiropractic',
      subtitle: 'Connected Chiropractic Care and Telehealth Platform',
      desc: 'A secure digital healthcare platform combining appointment scheduling, telehealth consultations, patient communication, online payments, and practice management.',
      logo: '/assets/ai-development/carousel4.png',
      mockup: '/assets/ai-development/stateofart-1024x637.png',
      accentColor: '#00CE44',
      btnBg: 'bg-[#00CE44] hover:bg-[#00ba3e] text-black',
      link: '/portfolio',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const current = caseStudies[currentIndex]

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Header with "View All Case Studies" Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-tight max-w-2xl">
            Your Idea Deserves Better Than Average Execution.
          </h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-sm tracking-tight rounded-none transition-all duration-150 self-start sm:self-auto cursor-pointer"
          >
            View All Case Studies
          </Link>
        </div>

        {/* Big White Card */}
        <div className="relative bg-white text-black rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              {current.logo && (
                <div className="mb-6">
                  <img
                    src={current.logo}
                    alt={current.title}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
              )}

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2"
                style={{ color: current.accentColor }}
              >
                {current.title}
              </h3>

              <h4 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-4">
                {current.subtitle}
              </h4>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                {current.desc}
              </p>

              <div>
                <Link
                  to={current.link}
                  className={`inline-flex items-center gap-2.5 px-7 py-3.5 ${current.btnBg} text-white font-semibold text-sm sm:text-base rounded-none transition-all duration-150 shadow-md cursor-pointer`}
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <img
                src={current.mockup}
                alt={`${current.title} Mockup`}
                className="w-full max-h-[460px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous case study"
            className="w-12 h-12 rounded-full border border-white/20 bg-black/40 hover:bg-[#00CE44] hover:text-black hover:border-[#00CE44] text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next case study"
            className="w-12 h-12 rounded-full border border-white/20 bg-black/40 hover:bg-[#00CE44] hover:text-black hover:border-[#00CE44] text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

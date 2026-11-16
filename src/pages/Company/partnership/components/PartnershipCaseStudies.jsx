import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PartnershipCaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slides = [
    {
      id: 'dps-airem',
      type: 'dps-airem',
      cardBg: 'bg-[#EBF946]',
      textColor: 'text-[#111111]',
      brand: 'DPS Airem',
      logo: '/assets/case-studies/dps-logo.png',
      logoAlt: 'DPS Airem logo',
      titleColor: 'text-[#111111]',
      subtitle: 'Modernizing Security Workforce Operations',
      challenge:
        'DPS Airem wanted live visibility over security personnel spread across multiple locations, without the paper-based attendance and reporting that slowed every shift.',
      buttonText: 'Read Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/dps-mockup.svg',
      mockupAlt: 'DPS Airem App Screens',
    },
    {
      id: 'chiropractic',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'State Of The Art Chiropractic',
      logo: '/assets/case-studies/chiropractic-logo.png',
      logoAlt: 'State of the Art Chiropractic Logo',
      titleColor: 'text-[#8A3FFC]',
      subtitle: 'Connected Chiropractic Care And Telehealth Platform',
      desc: 'A secure digital healthcare platform combining appointment scheduling, telehealth consultations, patient communication, online payments, and practice management.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#8A3FFC] hover:bg-[#7b34e5]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
      mockupAlt: 'State of the Art Chiropractic App Screens',
    },
    {
      id: 'wordsmith',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'WordSmith',
      logo: '/assets/case-studies/wordsmith-logo.png',
      logoAlt: 'WordSmith Pro Logo',
      titleColor: 'text-[#E88B13]',
      subtitle: 'AI Writing Improvement Platform',
      desc: 'Writing intelligence platform analyzing grammar, tone, clarity, and structure with personalized, actionable feedback.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
      mockupAlt: 'WordSmith Pro App Screens',
    },
    {
      id: 'pulse-check',
      type: 'pulse-check',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pulse Check',
      logo: '/assets/case-studies/pulse-logo.png',
      logoAlt: 'Pulse Check Timer Logo',
      titleColor: 'text-[#E53935]',
      subtitle: 'Emergency CPR Timing And Resuscitation Support Platform',
      desc: 'A precision-built mobile application that guides CPR cycles, automates pulse check timing, records critical events, and simplifies emergency documentation.',
      primaryButtonText: 'View Case Study →',
      primaryButtonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      link: '/portfolio',
      mockup: '/assets/case-studies/pulse-mockup.svg',
      mockupAlt: 'Pulse Check Timer App Screens',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide()
    }
  }

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-2">
              Partner Projects Delivered With Precision.
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              Explore digital products engineered for partner agencies and enterprise clients worldwide.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 shadow-none border-0"
            >
              View All Case Studies
            </Link>
          </div>
        </div>

        {/* Main Showcase Container */}
        <div
          className="rounded-[25px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform items-stretch"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[500px] sm:min-h-[540px] lg:min-h-[500px] xl:min-h-[540px] relative ${slide.cardBg} rounded-[25px] overflow-hidden`}
              >
                {/* Left Column */}
                <div className="w-full lg:w-[42%] xl:w-[38%] p-6 sm:p-8 lg:p-9 xl:p-12 xl:pl-16 flex flex-col justify-center text-left shrink-0 z-10">
                  <div className="h-10 sm:h-12 mb-3 sm:mb-4 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.logoAlt || slide.brand}
                      className="max-h-9 sm:max-h-11 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight leading-tight mb-2 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  <h4 className={`text-xs sm:text-sm font-bold tracking-tight mb-3 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  {slide.type === 'dps-airem' && (
                    <div className="space-y-3 mb-6 text-black text-xs sm:text-sm leading-relaxed">
                      <div>
                        <p className="font-bold text-black text-sm mb-1">The Challenge</p>
                        <p className="text-black/85">{slide.challenge}</p>
                      </div>
                    </div>
                  )}

                  {slide.type === 'pulse-check' && (
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {slide.desc}
                      </p>
                      <div>
                        <Link
                          to={slide.link}
                          className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.primaryButtonBg} text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                        >
                          {slide.primaryButtonText}
                        </Link>
                      </div>
                    </div>
                  )}

                  {slide.type === 'standard' && (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-8 max-w-lg">
                      {slide.desc}
                    </p>
                  )}

                  {slide.type === 'standard' && (
                    <div>
                      <Link
                        to={slide.link}
                        className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  )}

                  {slide.type === 'dps-airem' && (
                    <div>
                      <Link
                        to={slide.link}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right Column: Device Mockup */}
                <div className="w-full lg:w-[58%] xl:w-[62%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={slide.mockupAlt}
                    className="w-auto h-auto max-h-[290px] sm:max-h-[350px] md:max-h-[390px] lg:max-h-[440px] max-w-full object-contain object-bottom select-none translate-y-1 sm:translate-y-2"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

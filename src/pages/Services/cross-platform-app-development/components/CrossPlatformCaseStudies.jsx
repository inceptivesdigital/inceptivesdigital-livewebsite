import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CrossPlatformCaseStudies() {
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
      subtitle: 'Modernizing Cross-Platform Security Workforce Operations',
      desc: 'We developed an intuitive cross-platform application with geofenced GPS attendance and offline synchronization, built to give managers reliable oversight across every site.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      link: '/portfolio/digital-property-services',
      mockup: '/assets/case-studies/dps-mockup.svg',
      mockupAlt: 'DPS Airem Screens',
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
      subtitle: 'AI Writing Improvement Platform Across Mobile and Web',
      desc: 'Writing intelligence platform analyzing grammar, tone, clarity, and structure with personalized, actionable feedback and cross-device sync.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      link: '/portfolio/wordsmith',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
      mockupAlt: 'WordSmith Pro App Screens',
    },
    {
      id: 'pulse-check',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pulse Check',
      logo: '/assets/case-studies/pulse-logo.png',
      logoAlt: 'Pulse Check Timer Logo',
      titleColor: 'text-[#E53935]',
      subtitle: 'Emergency CPR Timing And Resuscitation Support Platform',
      desc: 'A precision-built dual-platform mobile application that guides CPR cycles, automates pulse check timing, records critical events, and simplifies emergency documentation.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      buttonTextCol: 'text-white',
      link: '/portfolio/pulse-analytics',
      mockup: '/assets/case-studies/pulse-mockup.svg',
      mockupAlt: 'Pulse Check App Screens',
    },
    {
      id: 'stakbread',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'StakBread',
      logo: '/assets/case-studies/stakbread-logo.png',
      logoAlt: 'StakBread Logo',
      titleColor: 'text-[#0E6937]',
      subtitle: 'AI Financial Intelligence and Personal Wealth Platform',
      desc: 'An intelligent wealth companion that analyzes personal spending, automates savings strategies, and delivers predictive financial coaching.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#0E6937] hover:bg-[#0b542c]',
      buttonTextCol: 'text-white',
      link: '/portfolio/stakbread',
      mockup: '/assets/case-studies/stakbread-mockup.png',
      mockupAlt: 'StakBread App Screens',
    },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide()
    if (touchStartX.current - touchEndX.current < -50) prevSlide()
  }

  return (
    <section id="case-studies" className="py-16 sm:py-24 lg:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
              Cross-Platform Products Built for{' '}
              <span className="text-[#00CE44]">Real-World Growth</span>
            </h2>
            <p className="text-white/75 text-[16px] leading-relaxed">
              See how we turned complex ideas into scalable apps that deliver consistent performance across iOS, Android, and web.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 shadow-none border-0"
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
            className="flex w-full transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform items-stretch"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[520px] sm:min-h-[560px] lg:min-h-[520px] xl:min-h-[560px] 2xl:min-h-[600px] lg:h-[530px] xl:h-[570px] 2xl:h-[610px] relative ${slide.cardBg} rounded-[25px] overflow-hidden`}
              >
                {/* Left Column */}
                <div className="w-full lg:w-[42%] xl:w-[38%] p-6 sm:p-8 lg:p-9 xl:p-12 xl:pl-16 flex flex-col justify-center text-left shrink-0 z-10">
                  <div className="h-10 sm:h-12 lg:h-12 mb-3 sm:mb-4 lg:mb-5 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.logoAlt || slide.brand}
                      className="max-h-9 sm:max-h-11 lg:max-h-12 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-black tracking-tight leading-tight mb-2 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  <h4 className={`text-xs sm:text-sm lg:text-[15px] font-bold tracking-tight mb-3 lg:mb-3.5 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  <p className={`${slide.type === 'dps-airem' ? 'text-black/85' : 'text-slate-600'} text-xs sm:text-sm leading-relaxed font-normal mb-8 max-w-lg`}>
                    {slide.desc}
                  </p>

                  <div>
                    <Link
                      to={slide.link}
                      style={{ fontWeight: 500 }}
                      className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                {/* Right Column: 3D Device Mockup */}
                <div className="w-full lg:w-[58%] xl:w-[62%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={slide.mockupAlt || slide.brand}
                    className="w-auto h-auto max-h-[290px] sm:max-h-[350px] md:max-h-[390px] lg:max-h-[440px] xl:max-h-[490px] 2xl:max-h-[530px] max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-1 sm:translate-y-2"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

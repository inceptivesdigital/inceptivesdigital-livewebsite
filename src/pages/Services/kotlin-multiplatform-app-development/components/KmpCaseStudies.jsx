import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function KmpCaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slides = [
    {
      id: 'dps-airem',
      cardBg: 'bg-[#EBF946]',
      textColor: 'text-[#111111]',
      brand: 'DPS Airem',
      logo: '/assets/case-studies/dps-logo.png',
      titleColor: 'text-[#111111]',
      subtitle: 'Real-Time Workforce Operations Platform',
      desc: 'Workforce management system that reduced manual paperwork by 90% while improving attendance, reporting, and operational accuracy.',
      outcomes: [
        '90% reduction in manual paperwork',
        '1,000+ field operatives tracked in real time',
        '4 role-specific interfaces delivered',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      link: '/portfolio/dps-airem',
      mockup: '/assets/case-studies/dps-mockup.svg',
    },
    {
      id: 'pulse-check',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pulse Check',
      logo: '/assets/case-studies/pulse-logo.png',
      titleColor: 'text-[#E53935]',
      subtitle: 'Emergency CPR Timing and Resuscitation Support Platform',
      desc: 'A precision-built mobile application that guides CPR cycles, automates pulse check timing, records critical events, and simplifies emergency documentation.',
      outcomes: [
        'Automated 2-minute CPR cycles',
        'Hands-free timing prompts during sessions',
        'Offline clinical event logging',
        'PDF and DOCX reports',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      buttonTextCol: 'text-white',
      link: '/portfolio/pulse-check-timer',
      mockup: '/assets/case-studies/pulse-mockup.svg',
    },
    {
      id: 'wordsmith-pro',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'WordSmith',
      logo: '/assets/case-studies/wordsmith-logo.png',
      titleColor: 'text-[#E88B13]',
      subtitle: 'AI Writing Improvement Platform',
      desc: 'Writing intelligence platform analyzing grammar, tone, clarity, and structure with personalized, actionable feedback.',
      outcomes: [
        '3 monetization models supported in one product',
        'Real-time AI writing analysis',
        'OCR-powered document scanning',
        'Cross-platform mobile application live in production',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      link: '/portfolio/wordsmith-pro',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
    },
    {
      id: 'chiropractic',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'State of the art chiropractic',
      logo: '/assets/case-studies/chiropractic-logo.png',
      titleColor: 'text-[#8A3FFC]',
      subtitle: 'Connected Chiropractic Care and Telehealth Platform',
      desc: 'A secure digital healthcare platform combining appointment scheduling, telehealth consultations, patient communication, online payments, and practice management.',
      outcomes: [
        '60% reduction in appointment management time',
        '40% increase in online consultations',
        '3 integrated interfaces for patients, physicians, and administrators',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#8A3FFC] hover:bg-[#7b34e5]',
      buttonTextCol: 'text-white',
      link: '/portfolio/state-of-the-art-chiropractic',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
    },
    {
      id: 'stakbread',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'StakBread',
      logo: '/assets/case-studies/stakbread-logo.png',
      titleColor: 'text-[#0066CC]',
      subtitle: 'Real-Time Workforce Operations Platform',
      desc: 'A creator commerce platform that enables creators to grow audiences, sell digital products, and monetize content through a scalable, production-ready architecture.',
      outcomes: [
        'Multi-tier creator monetization',
        'Digital product storefront & checkout',
        'Cross-platform mobile & web experience',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#0066CC] hover:bg-[#0052a3]',
      buttonTextCol: 'text-white',
      link: '/portfolio/stakbread',
      mockup: '/assets/case-studies/stakbread-mockup.png',
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
    if (touchStartX.current - touchEndX.current > 50) nextSlide()
    if (touchStartX.current - touchEndX.current < -50) prevSlide()
  }

  return (
    <section id="case-studies" className="py-16 sm:py-24 lg:py-28 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-3">
              Our Portfolio of{' '}
              <span className="text-[#00CE44]">Production-Grade KMP Products</span>
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal">
              Production systems engineered across industries with shared business logic, reliable synchronization, and native platform interfaces.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-colors border-0"
            >
              View All Case Studies
            </Link>
          </div>
        </div>

        {/* Main Showcase Container */}
        <div
          className="rounded-[25px] overflow-hidden relative select-none"
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
                className={`w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[520px] sm:min-h-[560px] lg:min-h-[540px] xl:min-h-[570px] relative ${slide.cardBg} rounded-[25px] overflow-hidden`}
              >
                {/* Left Column */}
                <div className="w-full lg:w-[44%] xl:w-[42%] p-6 sm:p-8 lg:p-10 xl:p-12 xl:pl-14 flex flex-col justify-center text-left shrink-0 z-10">
                  <div className="h-10 sm:h-11 mb-3 sm:mb-4 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.brand}
                      className="max-h-9 sm:max-h-11 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-black tracking-tight leading-tight mb-1.5 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  <h4 className={`text-xs sm:text-sm lg:text-[15px] font-bold tracking-tight mb-3 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  <p className={`text-xs sm:text-[13.5px] leading-relaxed font-normal mb-4 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                    {slide.desc}
                  </p>

                  <ul className={`space-y-1 mb-5 text-xs ${slide.cardBg === 'bg-white' ? 'text-slate-700' : 'text-black/90'}`}>
                    {slide.outcomes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={slide.link}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-colors border-0`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                {/* Right Column: 3D Device Mockup */}
                <div className="w-full lg:w-[56%] xl:w-[58%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={`${slide.brand} App Screens`}
                    className="w-auto h-auto max-h-[280px] sm:max-h-[340px] md:max-h-[380px] lg:max-h-[440px] xl:max-h-[490px] max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-1 sm:translate-y-2"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

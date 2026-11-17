import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CrossPlatformCaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slides = [
    // 1. DPS Airem
    {
      id: 'dps-airem',
      cardBg: 'bg-[#EBF946]',
      textColor: 'text-[#111111]',
      brand: 'DPS Airem',
      logo: '/assets/case-studies/dps-logo.png',
      logoAlt: 'DPS Airem Logo',
      titleColor: 'text-[#111111]',
      subtitle: 'Security Workforce Management',
      desc: 'A cross-platform workforce management application reduced manual paperwork by 90% for DPS Airem. GPS-verified attendance and offline synchronization give managers reliable oversight of more than 1,000 security personnel across multiple sites.',
      results: [
        { value: '90%', label: 'Less manual paperwork' },
        { value: '1,000+', label: 'Security personnel managed' },
      ],
      buttonText: 'Read Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio/dps-airem',
      mockup: '/assets/case-studies/dps-mockup.svg',
      mockupAlt: 'DPS Airem App Screens',
    },
    // 2. State of the Art Chiropractic
    {
      id: 'chiropractic',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'State of the Art Chiropractic',
      logo: '/assets/case-studies/chiropractic-logo.png',
      logoAlt: 'State of the Art Chiropractic Logo',
      titleColor: 'text-[#8A3FFC]',
      subtitle: 'Patient Care & Telehealth',
      desc: 'Flutter-powered patient care brought appointment management and virtual consultations into one connected healthcare application. Patients can book visits remotely, while clinical teams spend less time coordinating appointments.',
      results: [
        { value: '60%', label: 'Less appointment administration' },
        { value: '40%', label: 'More online consultations' },
      ],
      buttonText: 'Read Case Study →',
      buttonBg: 'bg-[#8A3FFC] hover:bg-[#7b34e5]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/state-of-the-art-chiropractic/',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
      mockupAlt: 'State of the Art Chiropractic App Screens',
    },
    // 3. Pulse Check Timer
    {
      id: 'pulse-check',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pulse Check Timer',
      logo: '/assets/case-studies/pulse-logo.png',
      logoAlt: 'Pulse Check Timer Logo',
      titleColor: 'text-[#E53935]',
      subtitle: 'CPR Monitoring & Emergency Response',
      desc: 'Pulse Check Timer helps emergency responders maintain accurate CPR timing through a cross-platform mobile application. Voice and visual prompts guide resuscitation intervals, while automatic event logs create timestamped records for clinical review.',
      results: [
        { value: 'PDF + DOCX', label: 'Clinical report exports' },
        { value: 'Timed Logs', label: 'CPR event documentation' },
      ],
      buttonText: 'Read Case Study →',
      buttonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio/pulse-check-timer',
      mockup: '/assets/case-studies/pulse-mockup.svg',
      mockupAlt: 'Pulse Check Timer App Screens',
    },
    // 4. WordSmith Pro
    {
      id: 'wordsmith-pro',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'WordSmith Pro',
      logo: '/assets/case-studies/wordsmith-logo.png',
      logoAlt: 'WordSmith Pro Logo',
      titleColor: 'text-[#E88B13]',
      subtitle: 'AI-Powered Writing Assistant',
      desc: 'WordSmith Pro brings real-time AI writing assistance to iOS and Android through React Native. The app tracks writing progress over time and supports subscription access for individual users and enterprise teams.',
      results: [
        { value: '3', label: 'App monetization models' },
        { value: 'Live', label: 'Production application' },
      ],
      buttonText: 'Read Case Study →',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio/wordsmith-pro',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
      mockupAlt: 'WordSmith Pro App Screens',
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
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              Explore Our Product Engineering in{' '}
              <span className="text-[#00CE44]">Cross-Platform Development</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2.5 leading-relaxed font-normal">
              Flutter and React Native development becomes more valuable when it solves a specific product challenge. These projects demonstrate how shared mobile engineering supports workforce operations, clinical workflows, emergency response, and AI-enabled products.
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 shadow-none border-0"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* Showcase Container */}
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
                  {/* Brand Logo */}
                  <div className="h-10 sm:h-12 lg:h-12 mb-3 sm:mb-4 lg:mb-5 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.logoAlt || slide.brand}
                      className="max-h-9 sm:max-h-11 lg:max-h-12 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Name */}
                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-black tracking-tight leading-tight mb-2 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  {/* Subtitle */}
                  <h4 className={`text-xs sm:text-sm lg:text-[15px] font-bold tracking-tight mb-3 lg:mb-3.5 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-4 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                    {slide.desc}
                  </p>

                  {/* Results Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-1 border-t border-black/10">
                    {slide.results.map((res, i) => (
                      <div key={i}>
                        <span className="block text-lg sm:text-xl font-black text-black leading-tight">
                          {res.value}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-600 font-normal leading-tight">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div>
                    <a
                      href={slide.buttonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-[58%] xl:w-[62%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={slide.mockupAlt || `${slide.brand} App Screens`}
                    className="w-auto h-auto max-h-[340px] sm:max-h-[400px] md:max-h-[460px] lg:max-h-[490px] xl:max-h-[540px] 2xl:max-h-[580px] max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-1 sm:translate-y-2"
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

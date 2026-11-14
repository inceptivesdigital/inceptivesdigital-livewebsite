import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function IosCaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slides = [
    {
      id: 'dps-airem',
      cardBg: 'bg-[#EBF946]',
      textColor: 'text-[#111111]',
      brand: '1. DPS Airem',
      logo: '/assets/case-studies/dps-logo.png',
      titleColor: 'text-[#111111]',
      subtitle: 'Security workforce management',
      desc: 'An iPhone workforce management app developed by Inceptives Digital reduced manual paperwork by 90% for DPS Airem. Its GPS-verified attendance and offline synchronization give managers reliable oversight of more than 1,000 security personnel across multiple sites.',
      results: [
        { stat: '90%', label: 'Less manual paperwork' },
        { stat: '1,000+', label: 'Security personnel managed' },
      ],
      primaryBtnText: 'Read Case Study',
      primaryUrl: 'https://inceptivesdigital.com/portfolio/dps-airem',
      secondaryBtnText: 'View on App Store',
      secondaryUrl: 'https://apps.apple.com/us/app/dps-airem-llc/id6779319337',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/dps-mockup.svg',
    },
    {
      id: 'chiropractic',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: '2. State of the Art Chiropractic',
      logo: '/assets/case-studies/chiropractic-logo.png',
      titleColor: 'text-[#8A3FFC]',
      subtitle: 'Patient Care & Telehealth',
      desc: 'We developed a mobile patient care app that streamlined appointment management and virtual consultations for State of the Art Chiropractic. Patients can book appointments and connect with doctors remotely, while clinic staff spend less time coordinating visits.',
      results: [
        { stat: '60%', label: 'Less appointment admin time' },
        { stat: '40%', label: 'Increase in online consultations' },
      ],
      primaryBtnText: 'Read Case Study',
      primaryUrl: 'https://inceptivesdigital.com/state-of-the-art-chiropractic/',
      buttonBg: 'bg-[#8A3FFC] hover:bg-[#7b34e5]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
    },
    {
      id: 'pulse-check',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: '3. Pulse Check Timer',
      logo: '/assets/case-studies/pulse-logo.png',
      titleColor: 'text-[#E53935]',
      subtitle: 'Clinical CPR Timing & Event Documentation',
      desc: 'The Pulse Check Timer helps emergency responders maintain accurate CPR timing through a dedicated iPhone app. Its Voice and visual prompts keep resuscitation intervals on track, while automatic event logs provide timestamped records for clinical review.',
      results: [
        { stat: 'PDF + DOCX', label: 'Clinical reports exported' },
      ],
      primaryBtnText: 'Read Case Study',
      primaryUrl: 'https://inceptivesdigital.com/portfolio/pulse-check-timer',
      buttonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/pulse-mockup.svg',
    },
    {
      id: 'wordsmith-pro',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: '4. WordSmith Pro',
      logo: '/assets/case-studies/wordsmith-logo.png',
      titleColor: 'text-[#E88B13]',
      subtitle: 'AI-Powered Writing Assistant',
      desc: 'WordSmith Pro brings real-time AI writing assistance to iPhone users through instant feedback and personalized suggestions. The app tracks writing progress over time and supports multiple subscription models for individual users and enterprise teams.',
      results: [
        { stat: '3', label: 'App monetization models' },
      ],
      primaryBtnText: 'Read Case Study',
      primaryUrl: 'https://inceptivesdigital.com/portfolio/wordsmith-pro',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
    },
    {
      id: 'feg',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: '5. Family Entertainment Group',
      logo: '/assets/ios-app/FEG-Logo.png',
      titleColor: 'text-[#0066CC]',
      subtitle: 'IoT and entertainment applications',
      desc: 'We developed a mobile video platform that eliminated manual editing and delivery for Family Entertainment Group. The app automatically turns GoPro footage into branded highlight videos and sends them directly to guests before they leave the venue.',
      results: [
        { stat: '100%', label: 'Automated video production workflow' },
      ],
      primaryBtnText: 'Read Case Study',
      primaryUrl: 'https://inceptivesdigital.com/portfolio/family-entertainment-group',
      buttonBg: 'bg-[#0066CC] hover:bg-[#0052a3]',
      buttonTextCol: 'text-white',
      mockup: '/assets/ios-app/feg-screen.png',
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
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-2">
              Explore the <span className="text-[#00CE44]">iOS Applications We&apos;ve Taken to Market</span>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-colors border-0"
            >
              View Our Full Portfolio
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
                <div className="w-full lg:w-[46%] xl:w-[44%] p-6 sm:p-8 lg:p-10 xl:p-12 xl:pl-14 flex flex-col justify-center text-left shrink-0 z-10">
                  
                  {/* Brand Logo */}
                  <div className="h-10 sm:h-11 mb-3 sm:mb-4 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.brand}
                      className="max-h-9 sm:max-h-11 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Name */}
                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-black tracking-tight leading-tight mb-1.5 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  {/* Subtitle */}
                  <h4 className={`text-xs sm:text-sm lg:text-[15px] font-bold tracking-tight mb-3 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  {/* Description */}
                  <p className={`text-xs sm:text-[13.5px] leading-relaxed font-normal mb-5 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                    {slide.desc}
                  </p>

                  {/* The Results */}
                  <div className="mb-6">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${slide.cardBg === 'bg-white' ? 'text-slate-500' : 'text-black/70'}`}>
                      The Results
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {slide.results.map((res) => (
                        <div key={res.label}>
                          <div className={`text-2xl sm:text-3xl font-black leading-none mb-1 ${slide.titleColor}`}>
                            {res.stat}
                          </div>
                          <div className={`text-xs font-medium ${slide.cardBg === 'bg-white' ? 'text-slate-700' : 'text-black/85'}`}>
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {slide.secondaryUrl && (
                      <a
                        href={slide.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#151515] hover:bg-[#252525] text-white font-medium text-xs sm:text-sm tracking-tight transition-colors border-0"
                      >
                        {slide.secondaryBtnText} →
                      </a>
                    )}

                    <a
                      href={slide.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-colors border-0`}
                    >
                      {slide.primaryBtnText} →
                    </a>
                  </div>
                </div>

                {/* Right Column: 3D Device Mockup */}
                <div className="w-full lg:w-[54%] xl:w-[56%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
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

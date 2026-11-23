import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CaseStudies({
  heading = 'Your Idea Deserves Better Than Average Execution.',
  subtitle = null,
  ctaText = 'View All Case Studies',
} = {}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slides = [
    // Slide 1: State Of The Art Chiropractic
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
      alt: 'State of the Art Chiropractic App Screens'
    },
    // Slide 2: WordSmith
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
      alt: 'WordSmith Pro App Screens'
    },
    // Slide 3: Pulse Check
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
      secondaryButtonText: 'Read Case Study →',
      secondaryButtonBg: 'bg-[#151515] hover:bg-[#252525]',
      results: [
        { value: '90%', label: 'Less manual paperwork' },
        { value: '1,000+', label: 'Security personnel managed' }
      ],
      appStoreBadge: '/assets/case-studies/app-store.png',
      link: '/portfolio',
      mockup: '/assets/case-studies/pulse-mockup.svg',
      mockupAlt: 'Pulse Check Timer App Screens',
      alt: 'Pulse Check Timer App Screens'
    },
    // Slide 4: DPS Airem (Yellow Card)
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
      challenge: 'DPS Airem wanted live visibility over security personnel spread across multiple locations, without the paper-based attendance and reporting that slowed every shift.',
      howWeHelped: 'We developed an Android app with geofenced GPS attendance and offline synchronization, built to give managers reliable oversight at every site.',
      outcomeBullets: [
        '90% reduction in manual paperwork',
        '1,000+ security personnel supported',
        'Better visibility across field operations'
      ],
      buttonText: 'Read Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      playStoreBadge: '/assets/case-studies/play-store.png',
      link: '/portfolio',
      mockup: '/assets/case-studies/dps-mockup.svg',
      mockupAlt: 'DPS Airem App Screens',
      alt: 'DPS Airem App Screens'
    },
    // Slide 5: Family Entertainment Group
    {
      id: 'feg',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Family Entertainment Group',
      logo: '/assets/case-studies/feg-logo.png',
      logoAlt: 'Family Entertainment Group (FEG) Logo',
      titleColor: 'text-[#0066CC]',
      subtitle: 'Automated Experience Capture And Delivery',
      desc: 'IoT-powered video platform using synchronized cameras, automated processing, and instant memory delivery.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#0066CC] hover:bg-[#0052a3]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/feg-mockup.png',
      mockupAlt: 'Family Entertainment Group (FEG) App Screens',
      alt: 'Family Entertainment Group (FEG) App Screens'
    },
    // Slide 6: StakBread
    {
      id: 'stakbread',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'StakBread',
      logo: '/assets/case-studies/stakbread-logo.png',
      logoAlt: 'StakBread Logo',
      titleColor: 'text-[#16A34A]',
      subtitle: 'Real-Time Workforce Operations Platform',
      desc: 'A creator commerce platform that enables creators to grow audiences, sell digital products, and monetize content through a scalable, production-ready architecture.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#16A34A] hover:bg-[#15803d]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/stakbread-mockup.png',
      mockupAlt: 'StakBread App Screens',
      alt: 'StakBread App Screens'
    },
    // Slide 7: My Tango Event
    {
      id: 'mytango',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'My Tango Event',
      logo: '/assets/case-studies/mytango-logo.png',
      logoAlt: 'MY TANGO EVENT',
      titleColor: 'text-[#8B008B]',
      subtitle: 'Global Event Discovery And Community Engagement Platform',
      desc: 'A real-time workforce management platform that cut manual paperwork by 90%, streamlining operations and improving accuracy.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#8B008B] hover:bg-[#700070]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/mytango-mockup.png',
      mockupAlt: 'My Tango Event App Screens',
      alt: 'My Tango Event App Screens'
    },
    // Slide 8: Pets B4 Profit
    {
      id: 'pets',
      type: 'standard',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pets B4 Profit',
      logo: '/assets/case-studies/pets-logo.png',
      logoAlt: 'Pets B4 Profit Logo',
      titleColor: 'text-[#6B46C1]',
      subtitle: 'Automated Experience Capture And Delivery',
      desc: 'An AI-assisted veterinary intelligence platform that analyzes pet medical bills, explains treatment costs, and provides healthcare insights to improve pricing transparency for pet owners.',
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#6B46C1] hover:bg-[#553c9a]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/pets-mockup.png',
      mockupAlt: 'Pets B4 Profit App Screens',
      alt: 'Pets B4 Profit App Screens'
    }
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
    <section id="case-studies" className="py-16 sm:py-24 lg:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        
        {/* Top Header Row: Headline on Left, Green CTA on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-white/80 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mt-3">
                {subtitle}
              </p>
            )}
          </div>

          <div className="shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 shadow-none border-0"
            >
              {ctaText}
            </Link>
          </div>
        </div>

        {/* Main Showcase Container with Equal Dimensions and Zero Height Jumps */}
        <div 
          className="rounded-[25px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Continuous Sliding Horizontal Track */}
          <div 
            className="flex w-full transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform items-stretch"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[520px] sm:min-h-[560px] lg:min-h-[520px] xl:min-h-[560px] 2xl:min-h-[600px] lg:h-[530px] xl:h-[570px] 2xl:h-[610px] relative ${slide.cardBg} rounded-[25px] overflow-hidden`}
              >
                {/* Left Column: Brand Info, Title, Copy, CTA Button (padded generously & vertically centered) */}
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

                  {/* Brand Name / Title */}
                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-black tracking-tight leading-tight mb-2 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  {/* Subtitle / Category */}
                  <h4 className={`text-xs sm:text-sm lg:text-[15px] font-bold tracking-tight mb-3 lg:mb-3.5 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  {/* TYPE 1: DPS Airem (Yellow Card Layout) */}
                  {slide.type === 'dps-airem' && (
                    <div className="space-y-3 mb-6 text-black text-xs sm:text-sm leading-relaxed">
                      <div>
                        <p className="font-bold text-black text-sm mb-1">The Challenge</p>
                        <p className="text-black/85">{slide.challenge}</p>
                      </div>
                      {/* <div>
                        <p className="font-bold text-black text-sm mb-1">How We Helped</p>
                        <p className="text-black/85">{slide.howWeHelped}</p>
                      </div> */}
                      {/* <div>
                        <p className="font-bold text-black text-sm mb-1">The Outcome</p>
                        <ul className="space-y-1 text-black/85">
                          {slide.outcomeBullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </div>
                  )}

                  {/* TYPE 2: Pulse Check (Results + Dual Buttons) */}
                  {slide.type === 'pulse-check' && (
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {slide.desc}
                      </p>
                      <div>
                        <Link
                          to={slide.link}
                          style={{ fontWeight: 500 }}
                          className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.primaryButtonBg} text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                        >
                          {slide.primaryButtonText}
                        </Link>
                      </div>
                      {/* <div>
                        <p className="font-bold text-black text-sm mb-2">The Results</p>
                        <div className="grid grid-cols-2 gap-4">
                          {slide.results.map((res, i) => (
                            <div key={i}>
                              <span className="block text-xl sm:text-2xl font-black text-black leading-none mb-1">
                                {res.value}
                              </span>
                              <span className="text-[11px] sm:text-xs text-slate-600 font-normal leading-tight">
                                {res.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  )}

                  {/* TYPE 3: Standard Cards (WordSmith, FEG, StakBread, etc.) */}
                  {slide.type === 'standard' && (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-8 max-w-lg">
                      {slide.desc}
                    </p>
                  )}

                  {/* Action Row for Standard */}
                  {slide.type === 'standard' && (
                    <div>
                      <Link
                        to={slide.link}
                        style={{ fontWeight: 500 }}
                        className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  )}

                  {/* Action Row for DPS */}
                  {slide.type === 'dps-airem' && (
                    <div className="flex items-center gap-4">
                      <Link
                        to={slide.link}
                        style={{ fontWeight: 500 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                      >
                        {slide.buttonText}
                      </Link>
                      {/* {slide.playStoreBadge && (
                        <div className="w-10 h-10 flex items-center justify-center">
                          <img
                            src={slide.playStoreBadge}
                            alt="Google Play"
                            className="w-7 h-7 object-contain select-none"
                          />
                        </div>
                      )} */}
                    </div>
                  )}

                  {/* Action Row for Pulse Check */}
                  {slide.type === 'pulse-check' && (
                    <div className="flex items-center gap-4 pt-1">
                      {/* <Link
                        to={slide.link}
                        style={{ fontWeight: 500 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-none ${slide.secondaryButtonBg} text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                      >
                        {slide.secondaryButtonText}
                      </Link>
                      {slide.appStoreBadge && (
                        <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center p-1.5 shadow-sm">
                          <img
                            src={slide.appStoreBadge}
                            alt="App Store"
                            className="w-full h-full object-contain select-none brightness-0 invert"
                          />
                        </div>
                      )} */}
                    </div>
                  )}

                </div>

                {/* Right Column: 3D Device Mockup Graphic anchored to the bottom right edge */}
                <div className="w-full lg:w-[58%] xl:w-[62%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={slide.mockupAlt || slide.alt}
                    className="w-auto h-auto max-h-[290px] sm:max-h-[350px] md:max-h-[390px] lg:max-h-[440px] xl:max-h-[490px] 2xl:max-h-[530px] max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-1 sm:translate-y-2"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Carousel Controls: Centered Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-12 h-12 p-0 shrink-0 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 shrink-0" strokeWidth={2.2} />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="w-12 h-12 p-0 shrink-0 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={2.2} />
          </button>

        </div>

      </div>
    </section>
  )
}

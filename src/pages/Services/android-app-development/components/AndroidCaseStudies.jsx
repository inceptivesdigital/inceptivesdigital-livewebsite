import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AndroidCaseStudies() {
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
      subtitle: 'Modernizing Security Workforce Operations',
      challenge:
        'DPS Airem wanted live visibility over security personnel spread across multiple locations, without the paper-based attendance and reporting that slowed every shift.',
      howWeHelped:
        'We developed an Android app with geofenced GPS attendance and offline synchronization, built to give managers reliable oversight at every site.',
      outcomes: [
        '90% reduction in manual paperwork',
        '1,000+ security personnel supported',
        'Better visibility across field operations',
      ],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.app.dpsariemllc&hl=en',
      caseStudyUrl: 'https://inceptivesdigital.com/portfolio/dps-airem',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/dps-mockup.svg',
    },
    {
      id: 'halwar-connect',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Halwar Connect',
      logo: '/assets/case-studies/mytango-logo.png',
      titleColor: 'text-[#8B008B]',
      subtitle: 'Connecting Customers with Local Service Providers',
      challenge:
        'Halwar Connect set out to rebuild an outdated service marketplace into one trusted place where local customers and providers connect and complete bookings with confidence.',
      howWeHelped:
        'Our team built a bilingual Flutter marketplace for Android and iOS, with real-time messaging and voice calls built in. Live location tracking and Stripe Connect payments keep every booking secure from request to payout.',
      outcomes: [
        'Easier access to local service providers',
        'Faster booking and provider communication',
        'Streamlined payments to service providers',
      ],
      caseStudyUrl: 'https://inceptivesdigital.com/portfolio/halwar-connect',
      buttonBg: 'bg-[#8B008B] hover:bg-[#700070]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/mytango-mockup.png',
    },
    {
      id: 'chiropractic',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'State of the Art Chiropractic',
      logo: '/assets/case-studies/chiropractic-logo.png',
      titleColor: 'text-[#8A3FFC]',
      subtitle: 'Bringing Chiropractic Care Online',
      challenge:
        'State of the Art Chiropractic needed a secure way to keep patients connected to their care beyond the clinic, while cutting the time spent on appointment administration.',
      howWeHelped:
        'We delivered a HIPAA-aligned platform with appointment management and encrypted video consultations. Progress tracking keeps patients engaged between visits, and the practice’s existing workflows stay intact.',
      outcomes: [
        '60% reduction in appointment administration',
        '40% increase in online consultations',
        'Easier access to remote patient care',
      ],
      caseStudyUrl: 'https://inceptivesdigital.com/portfolio/state-of-the-art-chiropractic',
      buttonBg: 'bg-[#8A3FFC] hover:bg-[#7b34e5]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
    },
    {
      id: 'wordsmith-pro',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'WordSmith Pro',
      logo: '/assets/case-studies/wordsmith-logo.png',
      titleColor: 'text-[#E88B13]',
      subtitle: 'Turning Writing Feedback Into Lasting Improvement',
      challenge:
        'WordSmith Pro aimed to give writers instant feedback that explains each change and shows, over time, whether their writing is improving.',
      howWeHelped:
        'We built a React Native app for Android and iOS that streams OpenAI-powered suggestions as the writer types, with LanguageTool handling grammar. Progress dashboards show which mistakes keep returning and how the writing improves.',
      outcomes: [
        'Real-time feedback on grammar, tone, clarity and structure',
        'Progress tracking that shows writing improvement over time',
        'OCR scanning for printed and photographed text',
        'Free, subscription and enterprise licensing in one product, live in production',
      ],
      caseStudyUrl: 'https://inceptivesdigital.com/portfolio/wordsmith-pro',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
    },
    {
      id: 'pulse-check',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pulse Check Timer',
      logo: '/assets/case-studies/pulse-logo.png',
      titleColor: 'text-[#E53935]',
      subtitle: 'Supporting CPR Timing and Documentation',
      challenge:
        'Healthcare professionals running CPR faced tight timing and documentation demands, often with no internet connection to rely on.',
      howWeHelped:
        'We created a Flutter app that times every two-minute CPR cycle automatically. Events log offline, then export as timestamped PDF and DOCX clinical reports.',
      outcomes: [
        'Automated two-minute CPR cycle tracking',
        'Offline resuscitation event documentation',
        'Exportable PDF and DOCX clinical reports',
      ],
      caseStudyUrl: 'https://inceptivesdigital.com/portfolio/pulse-check-timer',
      buttonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      buttonTextCol: 'text-white',
      mockup: '/assets/case-studies/pulse-mockup.svg',
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
              Our Portfolio <span className="text-[#00CE44]">Backed by Real Android Engineering</span>
            </h2>
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
                className={`w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[540px] sm:min-h-[580px] relative ${slide.cardBg} rounded-[25px] overflow-hidden`}
              >
                {/* Left Column */}
                <div className="w-full lg:w-[48%] xl:w-[46%] p-6 sm:p-8 lg:p-10 xl:p-12 xl:pl-14 flex flex-col justify-center text-left shrink-0 z-10">
                  
                  {/* Brand Logo */}
                  <div className="h-10 sm:h-11 mb-3 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.brand}
                      className="max-h-9 sm:max-h-11 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Name */}
                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-black tracking-tight leading-tight mb-1 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  {/* Subtitle */}
                  <h4 className={`text-xs sm:text-sm lg:text-[15px] font-bold tracking-tight mb-3.5 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  {/* The Challenge & How We Helped */}
                  <div className="space-y-2.5 mb-4">
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${slide.cardBg === 'bg-white' ? 'text-slate-500' : 'text-black/70'}`}>
                        The Challenge
                      </span>
                      <p className={`text-xs sm:text-[13px] leading-relaxed font-normal ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                        {slide.challenge}
                      </p>
                    </div>

                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${slide.cardBg === 'bg-white' ? 'text-slate-500' : 'text-black/70'}`}>
                        How We Helped
                      </span>
                      <p className={`text-xs sm:text-[13px] leading-relaxed font-normal ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                        {slide.howWeHelped}
                      </p>
                    </div>
                  </div>

                  {/* The Outcome */}
                  <div className="mb-5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${slide.cardBg === 'bg-white' ? 'text-slate-500' : 'text-black/70'}`}>
                      The Outcome
                    </span>
                    <ul className={`space-y-1 text-xs ${slide.cardBg === 'bg-white' ? 'text-slate-700' : 'text-black/90'}`}>
                      {slide.outcomes.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons (Sharp Corners) */}
                  <div className="flex flex-wrap items-center gap-3">
                    {slide.playStoreUrl && (
                      <a
                        href={slide.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#151515] hover:bg-[#252525] text-white font-medium text-xs sm:text-sm tracking-tight transition-colors border-0"
                      >
                        View on Google Play Store →
                      </a>
                    )}

                    <a
                      href={slide.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-colors border-0`}
                    >
                      Read Full Case Study →
                    </a>
                  </div>
                </div>

                {/* Right Column: 3D Device Mockup */}
                <div className="w-full lg:w-[52%] xl:w-[54%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
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

        {/* Bottom Carousel Controls (Sharp Corners) */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-12 h-12 rounded-none bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="w-12 h-12 rounded-none bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  )
}

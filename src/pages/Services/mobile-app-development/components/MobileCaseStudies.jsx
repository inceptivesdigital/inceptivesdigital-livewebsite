import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileCaseStudies() {
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
      subtitle: 'Mobile Workforce Management for Distributed Security Operations',
      desc: 'We engineered a React Native mobile application with GPS geofencing and offline-first architecture. Guards can record attendance and report incidents without continuous connectivity. A Node.js backend synchronizes field activity with the management dashboard, while role-based access supports different operational responsibilities.',
      outcomes: [
        '90% reduction in manual paperwork',
        '1,000+ field operatives tracked in real time',
        '4 role-specific interfaces delivered',
      ],
      platforms: 'iOS, Android, Web',
      techStack: 'React Native, Node.js, GPS Geofencing',
      buttonText: 'Read the DPS Airem Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio/dps-airem',
      mockup: '/assets/case-studies/dps-mockup.svg',
      mockupAlt: 'DPS Airem App Screens',
    },
    // 2. Fitness360 Tracker
    
    // 3. Cost Effective Energy
   
    // 4. State of the Art Chiropractic
    {
      id: 'chiropractic',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'State of the Art Chiropractic',
      logo: '/assets/case-studies/chiropractic-logo.png',
      logoAlt: 'State of the Art Chiropractic Logo',
      titleColor: 'text-[#8A3FFC]',
      subtitle: 'Connected Mobile Healthcare Beyond Clinic Appointments',
      desc: 'A Flutter mobile application brings appointment scheduling and telehealth into the patient experience. We connected it with a physician portal and administration dashboard. The platform incorporates role-based access and HIPAA-focused security controls.',
      outcomes: [
        '60% reduction in appointment management time',
        '40% increase in online consultations',
        '3 integrated interfaces for patients, physicians, and administrators',
      ],
      platforms: 'Mobile, Web',
      techStack: 'Flutter, React.js, Stripe, Twilio, AWS',
      buttonText: 'Read the State of the Art Chiropractic Case Study →',
      buttonBg: 'bg-[#8A3FFC] hover:bg-[#7b34e5]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio/state-of-the-art-chiropractic',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
      mockupAlt: 'State of the Art Chiropractic App Screens',
    },
    // 5. Halwar Connect
    
    // 6. WordSmith Pro
    {
      id: 'wordsmith-pro',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'WordSmith Pro',
      logo: '/assets/case-studies/wordsmith-logo.png',
      logoAlt: 'WordSmith Pro Logo',
      titleColor: 'text-[#E88B13]',
      subtitle: 'AI-Powered Writing Assistance With Real-Time Feedback',
      desc: 'Our React Native engineers integrated OpenAI APIs with LanguageTool to deliver real-time writing feedback. Streaming responses keep suggestions available during composition, while OCR adds printed-document analysis. The React.js admin dashboard manages enterprise accounts and subscription activity through a connected platform.',
      outcomes: [
        '3 monetization models supported in one product',
        'Real-time AI writing analysis',
        'OCR-powered document scanning',
        'Cross-platform mobile application live in production',
      ],
      platforms: 'iOS, Android, Web',
      techStack: 'React Native, OpenAI APIs, LanguageTool, OCR, RevenueCat',
      buttonText: 'Explore WordSmith Pro →',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
      mockupAlt: 'WordSmith Pro App Screens',
    },
    // 7. Pulse Check Timer
    {
      id: 'pulse-check',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pulse Check Timer',
      logo: '/assets/case-studies/pulse-logo.png',
      logoAlt: 'Pulse Check Timer Logo',
      titleColor: 'text-[#E53935]',
      subtitle: 'Clinical CPR Timing and Event Documentation',
      desc: 'We developed a Flutter clinical application around automated two-minute CPR cycles. Audible prompts guide protocol timing, while offline event logging records critical interventions. The reporting engine generates timestamped PDF and DOCX documents.',
      outcomes: [
        'Automated 2-minute CPR cycles',
        'Hands-free timing prompts during sessions',
        'Offline clinical event logging',
        'PDF and DOCX reports',
      ],
      platforms: 'Flutter Mobile Application',
      techStack: 'Flutter, Offline Storage, PDF/DOCX Generation',
      buttonText: 'Read the Pulse Check Timer Case Study →',
      buttonBg: 'bg-[#E53935] hover:bg-[#d32f2f]',
      buttonTextCol: 'text-white',
      buttonUrl: 'https://inceptivesdigital.com/portfolio/pulse-check-timer',
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
    if (touchStartX.current - touchEndX.current > 50) nextSlide()
    if (touchStartX.current - touchEndX.current < -50) prevSlide()
  }

  return (
    <section id="case-studies" className="py-16 sm:py-24 lg:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Top Header Row: Headline on Left, Green CTA on Right (Exact 1:1 match with homepage CaseStudies) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              From Idea to Launch: <span className="text-[#00CE44]">Custom Apps We’ve Built</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2.5 leading-relaxed font-normal">
              See how we've helped businesses transform ideas into mobile apps through thoughtful product strategy and scalable development. Our custom mobile app development portfolio spans enterprise mobility and AI-powered products, shaping the architecture around its industry requirements.
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 shadow-none border-0"
            >
              View Our Full Portfolio
            </Link>
          </div>
        </div>

        {/* Main Showcase Container with Equal Dimensions and Zero Height Jumps (Identical to CaseStudies.jsx) */}
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
                {/* Left Column: Brand Info, Title, Copy, Bullets, Meta & CTA Buttons */}
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

                  {/* Solution / Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-3 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                    {slide.desc}
                  </p>

                  {/* Outcomes Bullets */}
                  <ul className={`space-y-1 mb-3.5 text-xs sm:text-[13px] ${slide.cardBg === 'bg-white' ? 'text-slate-700' : 'text-black/90'}`}>
                    {slide.outcomes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Platforms & Tech Stack Meta */}
                  <div className={`text-[11px] sm:text-xs space-y-0.5 mb-5 ${slide.cardBg === 'bg-white' ? 'text-slate-500' : 'text-black/75'}`}>
                    <p><span className="font-semibold text-black">Platforms:</span> {slide.platforms}</p>
                    <p><span className="font-semibold text-black">Tech Stack:</span> {slide.techStack}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {slide.buttonUrl && (
                      <a
                        href={slide.buttonUrl}
                        target={slide.buttonUrl.startsWith('http') ? '_blank' : undefined}
                        rel={slide.buttonUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ fontWeight: 500 }}
                        className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                      >
                        {slide.buttonText}
                      </a>
                    )}

                    {slide.secondaryButtonUrl && (
                      <a
                        href={slide.secondaryButtonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 500 }}
                        className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#151515] hover:bg-[#252525] text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0"
                      >
                        {slide.secondaryButtonText}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: 3D Device Mockup (Exact 1:1 match with homepage CaseStudies) */}
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

        {/* Bottom Carousel Controls: Centered Arrows (Exact 1:1 match with homepage CaseStudies) */}
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

import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ReactNativeCaseStudies() {
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
      subtitle: 'Mobile Workforce Management for Distributed Security Operations',
      desc: 'Security teams across many client sites needed dependable attendance and safety control. The React Native app we delivered handles geofenced clock-in and SOS alerts offline, then syncs once connectivity returns.',
      outcomes: [
        '90% reduction in manual paperwork',
        '1,000+ field operatives tracked in real time',
        '4 role-specific interfaces, from guard to super admin',
      ],
      engineeringFocus: 'Offline caching with background sync, GPS geofencing, and role-based access control',
      platforms: 'iOS, Android, Web',
      techStack: 'React Native, Node.js, GPS Geofencing',
      buttonText: 'Read the DPS Airem Case Study →',
      buttonBg: 'bg-[#151515] hover:bg-[#252525]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/dps-mockup.svg',
    },
    {
      id: 'wordsmith-pro',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'WordSmith Pro',
      logo: '/assets/case-studies/wordsmith-logo.png',
      titleColor: 'text-[#E88B13]',
      subtitle: 'AI Writing Platform Built to Improve Writers, Not Just Documents',
      desc: 'Most writing tools correct a document and move on. WordSmith Pro streams AI feedback as users type and tracks their progress, so it coaches writers rather than only proofreading.',
      outcomes: [
        'Feedback arrives while writing, with no waiting after submission',
        'Free, subscription, and enterprise pricing run inside one product',
        'Progress tracking turns one-off corrections into measurable improvement',
      ],
      engineeringFocus: 'Streaming AI responses, OpenAI with LanguageTool validation, and native OCR scanning',
      platforms: 'iOS, Android, Admin Dashboard',
      techStack: 'React Native, React.js, OpenAI APIs, LanguageTool, RevenueCat, OCR',
      buttonText: 'Read the WordSmith Pro Case Study →',
      buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
    },
    {
      id: 'pets-b4-profit',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pets B4 Profit',
      logo: '/assets/case-studies/pets-logo.png',
      titleColor: 'text-[#6B46C1]',
      subtitle: 'AI-Powered Veterinary Cost Transparency Platform for Pet Owners',
      desc: 'Pet owners rarely understand a veterinary estimate before they approve treatment. We built the app to scan invoices and explain charges against market prices, with human review of AI output.',
      outcomes: [
        'Owners see independent cost visibility before committing to treatment',
        'Paper invoices and digital estimates become usable with a single scan',
        'Medical history stays in one place across multiple clinics',
      ],
      engineeringFocus: 'OCR invoice processing, AI analysis with admin moderation, and subscription management',
      platforms: 'iOS, Android, Web',
      techStack: 'React Native, Node.js, OpenAI APIs, RevenueCat, Google Cloud',
      buttonText: 'Read the Pets B4 Profit Case Study →',
      buttonBg: 'bg-[#6B46C1] hover:bg-[#553c9a]',
      buttonTextCol: 'text-white',
      link: '/portfolio',
      mockup: '/assets/case-studies/pets-mockup.png',
    },
    {
      id: 'stakbread',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'StakBread',
      logo: '/assets/case-studies/stakbread-logo.png',
      titleColor: 'text-[#00CE44]',
      subtitle: 'Social Commerce Platform for Creator Storefronts and Video Shopping',
      desc: 'Creators often depend on separate tools for content and sales. StakBread joins short-form video and creator storefronts in one product, with Stripe Connect handling payouts.',
      outcomes: [
        'Viewers move from watching a creator to buying in one flow',
        'Creator payouts run through Stripe Connect without extra tooling',
        'AI-powered profiles support professional discovery',
      ],
      engineeringFocus: 'Stripe Connect payouts, real-time chat infrastructure, and AI-powered profiles',
      platforms: 'Mobile app, creator storefronts, admin dashboard',
      techStack: 'React Native, Stripe Connect, OpenAI APIs, real-time chat',
      buttonText: 'Read the StakBread Case Study →',
      buttonBg: 'bg-[#00CE44] hover:bg-[#00b83d]',
      buttonTextCol: 'text-black',
      link: '/portfolio',
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
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide()
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-[#151515] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
              React Native Applications <span className="text-[#00CE44]">We&apos;ve Developed</span>
            </h2>
            <p className="text-white/80 text-[16px] leading-relaxed font-normal">
              Behind every successful mobile product lies an engineering challenge worth solving. Our React Native portfolio brings those decisions into focus through proven delivery experience.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-sm sm:text-base tracking-tight transition-colors border-0"
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
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[520px] sm:min-h-[560px] lg:min-h-[540px] xl:min-h-[580px] relative ${slide.cardBg} rounded-[25px] overflow-hidden`}
              >
                {/* Left Column: Complete Content */}
                <div className="w-full lg:w-[48%] xl:w-[46%] p-6 sm:p-8 lg:p-10 xl:p-12 xl:pl-14 flex flex-col justify-center text-left shrink-0 z-10">
                  <div className="h-10 sm:h-11 mb-3 sm:mb-4 flex items-center justify-start">
                    <img
                      src={slide.logo}
                      alt={slide.brand}
                      className="max-h-9 sm:max-h-11 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className={`text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight leading-tight mb-1 ${slide.titleColor}`}>
                    {slide.brand}
                  </h3>

                  <h4 className={`text-xs sm:text-sm font-bold tracking-tight mb-2.5 ${slide.textColor}`}>
                    {slide.subtitle}
                  </h4>

                  <p className={`text-xs sm:text-[13px] leading-relaxed font-normal mb-3 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                    {slide.desc}
                  </p>

                  <div className="mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-black/90">
                      Outcome
                    </span>
                    <ul className={`space-y-0.5 text-xs ${slide.cardBg === 'bg-white' ? 'text-slate-700' : 'text-black/90'}`}>
                      {slide.outcomes.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {slide.engineeringFocus && (
                    <p className={`text-xs leading-relaxed mb-1 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                      <strong className="text-black font-bold">Engineering Focus:</strong> {slide.engineeringFocus}
                    </p>
                  )}

                  {slide.platforms && (
                    <p className={`text-xs leading-relaxed mb-1 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                      <strong className="text-black font-bold">Platforms:</strong> {slide.platforms}
                    </p>
                  )}

                  {slide.techStack && (
                    <p className={`text-xs leading-relaxed mb-4 ${slide.cardBg === 'bg-white' ? 'text-slate-600' : 'text-black/85'}`}>
                      <strong className="text-black font-bold">Tech Stack:</strong> {slide.techStack}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={slide.link}
                      className={`inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-semibold text-xs sm:text-sm tracking-tight transition-colors border-0`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                {/* Right Column: 3D Device Mockup (Properly Placed at Bottom Edge) */}
                <div className="w-full lg:w-[52%] xl:w-[54%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={`${slide.brand} App Screens`}
                    className="w-auto h-auto max-h-[300px] sm:max-h-[360px] md:max-h-[420px] lg:max-h-[480px] xl:max-h-[520px] max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-1 sm:translate-y-2"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-12 h-12 rounded-full bg-transparent text-white border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
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

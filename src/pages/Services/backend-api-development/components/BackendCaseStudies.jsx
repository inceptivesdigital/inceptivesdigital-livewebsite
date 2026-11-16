import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BackendCaseStudies() {
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
      id: 'feg',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Family Entertainment Group',
      logo: '/assets/case-studies/feg-logo.png',
      titleColor: 'text-[#008C45]',
      subtitle: 'Arcade Entertainment and Cashless Loyalty Platform',
      desc: 'A multi-venue entertainment platform integrating digital cards, mobile payments, rewards, and real-time balance tracking across arcade locations.',
      outcomes: [
        'Unified arcade card and balance tracking',
        'Seamless mobile payment and top-up integrations',
        'Multi-location loyalty and reward system',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#008C45] hover:bg-[#007338]',
      buttonTextCol: 'text-white',
      link: '/portfolio/family-entertainment-group',
      mockup: '/assets/case-studies/feg-mockup.png',
    },
    {
      id: 'stakbread',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'StakBread',
      logo: '/assets/case-studies/stakbread-logo.png',
      titleColor: 'text-[#0E6937]',
      subtitle: 'AI Financial Intelligence and Personal Wealth Platform',
      desc: 'An intelligent wealth companion that analyzes personal spending, automates savings strategies, and delivers predictive financial coaching.',
      outcomes: [
        'Real-time bank aggregation and cashflow analysis',
        'Automated micro-savings and goal tracking',
        'AI-driven financial health insights',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#0E6937] hover:bg-[#0b542c]',
      buttonTextCol: 'text-white',
      link: '/portfolio/stakbread',
      mockup: '/assets/case-studies/stakbread-mockup.png',
    },
    {
      id: 'tango',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'My Tango Event',
      logo: '/assets/case-studies/mytango-logo.png',
      titleColor: 'text-[#C62828]',
      subtitle: 'Global Tango Event Discovery and Ticketing Platform',
      desc: 'A community-focused platform for discovering tango festivals, booking workshops, and managing event passes worldwide.',
      outcomes: [
        'Global event directory with smart filtering',
        'Integrated ticket and workshop booking engine',
        'Real-time schedule updates for attendees',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#C62828] hover:bg-[#a91f1f]',
      buttonTextCol: 'text-white',
      link: '/portfolio/my-tango-event',
      mockup: '/assets/case-studies/mytango-mockup.png',
    },
    {
      id: 'vetcheck',
      cardBg: 'bg-white',
      textColor: 'text-[#111215]',
      brand: 'Pets B4 Profit',
      logo: '/assets/case-studies/pets-logo.png',
      titleColor: 'text-[#1E88E5]',
      subtitle: 'Veterinary Care and Pet Wellness Management App',
      desc: 'A comprehensive pet healthcare application connecting pet owners with veterinary clinics, vaccination records, and tele-triage.',
      outcomes: [
        'Digital pet health records and reminders',
        'Direct clinic appointment and tele-vet booking',
        'Streamlined prescription and wellness tracking',
      ],
      buttonText: 'View Case Study →',
      buttonBg: 'bg-[#1E88E5] hover:bg-[#1565c0]',
      buttonTextCol: 'text-white',
      link: '/portfolio/pets-b4-profit',
      mockup: '/assets/case-studies/pets-mockup.png',
    },
  ]

  const totalSlides = slides.length
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
  }

  return (
    <section
      id="case-studies"
      className="py-16 sm:py-24 bg-[#191919] relative overflow-hidden"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header + Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-left max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Built and Shipped:{' '}
              <span className="text-[#00CE44]">Backend Systems</span> from Our Portfolio
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-end">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Case Study"
              className="w-11 h-11 rounded-none bg-[#232323] hover:bg-[#00CE44] text-white hover:text-black border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Case Study"
              className="w-11 h-11 rounded-none bg-[#232323] hover:bg-[#00CE44] text-white hover:text-black border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          className="overflow-hidden rounded-[24px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full shrink-0">
                <div
                  className={`${slide.cardBg} ${slide.textColor} rounded-[24px] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center`}
                >
                  <div className="lg:col-span-6 text-left">
                    <div className="mb-5">
                      <img
                        src={slide.logo}
                        alt={slide.brand}
                        className="h-9 sm:h-11 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className={`text-xl sm:text-2xl lg:text-[28px] font-bold mb-3 ${slide.titleColor}`}>
                      {slide.subtitle}
                    </h3>
                    <p className="text-sm sm:text-base opacity-85 leading-relaxed mb-6">
                      {slide.desc}
                    </p>
                    <ul className="space-y-2 mb-7 text-xs sm:text-sm font-medium">
                      {slide.outcomes.map((out) => (
                        <li key={out} className="flex items-start gap-2.5">
                          <span className="text-[#00CE44] font-bold">✓</span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={slide.link}
                      className={`inline-flex items-center justify-center px-7 py-3.5 rounded-none ${slide.buttonBg} ${slide.buttonTextCol} font-medium text-sm sm:text-base transition-colors`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>

                  <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <img
                      src={slide.mockup}
                      alt={slide.brand}
                      className="w-full max-w-[460px] h-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

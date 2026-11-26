import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const SLIDES = [
  {
    id: 'wordsmith-pro',
    name: 'WordSmith Pro',
    subtitle: 'AI-Powered Writing Assistant',
    description:
      'Real-time AI writing feedback helps users improve grammar and writing skills. The platform also tracks writing progress and supports subscription-based access.',
    technology: 'React Native, React.js, OpenAI APIs, LanguageTool, OCR',
    outcome:
      'Cross-platform app launched with AI writing analysis, progress tracking, and three monetization models.',
    link: '/portfolio/wordsmith-pro',
    logo: '/assets/case-studies/wordsmith-logo.png',
    mockup: '/assets/case-studies/wordsmith-mockup.png',
    titleColor: 'text-[#E88B13]',
    buttonBg: 'bg-[#E88B13] hover:bg-[#d47d0e]',
  },
  {
    id: 'zoom-read',
    name: 'Zoom Read',
    subtitle: 'Digital Reading Platform',
    description:
      'Built for focused reading, Zoom Read gives users personalized reading controls and access to documents across multiple formats.',
    technology: (
      <>
        <Link
          to="/flutter-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Flutter
        </Link>
        , iOS, Android
      </>
    ),
    outcome:
      'Cross-platform reading app with PDF, DOCX, and EPUB support, plus reading progress tracking.',
    link: '/portfolio/zoom-read',
    logo: null,
    mockup: '/assets/portfolio/zoom-read/zoom-banner.png',
    titleColor: 'text-[#16A34A]',
    buttonBg: 'bg-[#16A34A] hover:bg-[#15803d]',
  },
]

export default function EducationCaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1))
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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        {/* Top Header Row: Exact Homepage CaseStudies Layout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl text-left">
            <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[31px] xl:text-[35px] font-bold text-white tracking-tight leading-tight">
              Products We’ve Delivered as an Education App Development Company
            </h2>
            <p className="text-white/80 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mt-3">
              Explore how Inceptives Digital applies mobile engineering and{' '}
              <Link
                to="/ai-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
              >
                AI development
              </Link>{' '}
              to build learning-focused products with practical user experiences.
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

        {/* Homepage-Style Sliding White Showcase Card */}
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
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full shrink-0 min-w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[520px] sm:min-h-[560px] lg:min-h-[520px] xl:min-h-[560px] 2xl:min-h-[600px] lg:h-[530px] xl:h-[570px] 2xl:h-[610px] relative bg-white text-[#111215] rounded-[25px] overflow-hidden"
              >
                {/* Left Column */}
                <div className="w-full lg:w-[46%] xl:w-[44%] p-6 sm:p-8 lg:p-9 xl:p-12 xl:pl-14 flex flex-col justify-center text-left shrink-0 z-10">
                  {slide.logo ? (
                    <div className="h-14 sm:h-16 lg:h-[68px] mb-4 sm:mb-5 flex items-center justify-start">
                      <img
                        src={slide.logo}
                        alt={`${slide.name} Logo`}
                        className="max-h-12 sm:max-h-14 lg:max-h-[64px] max-w-[200px] sm:max-w-[220px] w-auto object-contain select-none"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="mb-3">
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#16A34A]">
                        {slide.name}
                      </span>
                    </div>
                  )}

                  <h3
                    className={`text-xl sm:text-2xl xl:text-[26px] font-bold leading-snug mb-3 ${slide.titleColor}`}
                  >
                    {slide.subtitle}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-4 max-w-lg">
                    {slide.description}
                  </p>

                  <div className="space-y-2 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-7 max-w-lg">
                    <p>
                      <strong className="text-[#111215] font-semibold">Technology:</strong>{' '}
                      {slide.technology}
                    </p>
                    <p>
                      <strong className="text-[#111215] font-semibold">Outcome:</strong>{' '}
                      {slide.outcome}
                    </p>
                  </div>

                  <div>
                    <Link
                      to={slide.link}
                      style={{ fontWeight: 500 }}
                      className={`inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none ${slide.buttonBg} text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-none border-0`}
                    >
                      Explore Case Study →
                    </Link>
                  </div>
                </div>

                {/* Right Column: Mockup Graphic */}
                <div className="w-full lg:w-[54%] xl:w-[56%] flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-6 pb-0 self-end overflow-hidden h-full">
                  <img
                    src={slide.mockup}
                    alt={slide.name}
                    className="w-auto h-auto max-h-[290px] sm:max-h-[350px] md:max-h-[390px] lg:max-h-[440px] xl:max-h-[490px] 2xl:max-h-[530px] max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-1 sm:translate-y-2"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Controls: Exact Homepage Slider Controls */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="w-11 h-11 rounded-full bg-[#1a1c20] hover:bg-[#00CE44] text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer border border-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to ${s.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? 'w-8 bg-[#00CE44]'
                    : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="w-11 h-11 rounded-full bg-[#1a1c20] hover:bg-[#00CE44] text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer border border-white/10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

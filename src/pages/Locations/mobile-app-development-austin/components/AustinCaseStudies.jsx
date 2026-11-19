import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AustinCaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slides = [
    // Slide 1: Pulse Check Timer (Featured in Austin docx)
    {
      id: 'pulse-check',
      brand: 'Pulse Check Timer',
      category: 'Healthcare Mobile Application',
      subtitle: 'Clinical Emergency Timer & Rhythm Logging Platform',
      desc: 'Learn how our healthcare app development company transforms healthcare challenges into intuitive, high-impact applications. Live in active clinical production with real-time logs and HIPAA compliance.',
      buttonText: 'View Case Study',
      link: '/portfolio',
      mockup: '/assets/locations/austin/image15.png',
      mockupAlt: 'Pulse Check Timer App Screens',
    },
    // Slide 2: StakBread
    {
      id: 'stakbread',
      brand: 'StakBread',
      category: 'Commerce & Creator Platform',
      subtitle: 'Real-Time Workforce Operations Platform',
      desc: 'A creator commerce platform that enables creators to grow audiences, sell digital products, and monetize content through a scalable, production-ready architecture.',
      buttonText: 'View Case Study',
      link: '/portfolio',
      mockup: '/assets/case-studies/stakbread-mockup.png',
      mockupAlt: 'StakBread App Screens',
    },
    // Slide 3: State Of The Art Chiropractic
    {
      id: 'chiropractic',
      brand: 'State Of The Art Chiropractic',
      category: 'Telehealth & Clinical Care',
      subtitle: 'Connected Chiropractic Care And Telehealth Platform',
      desc: 'A secure digital healthcare platform combining appointment scheduling, telehealth consultations, patient communication, online payments, and practice management.',
      buttonText: 'View Case Study',
      link: '/portfolio',
      mockup: '/assets/case-studies/chiropractic-mockup.png',
      mockupAlt: 'State of the Art Chiropractic App Screens',
    },
    // Slide 4: WordSmith Pro
    {
      id: 'wordsmith',
      brand: 'WordSmith Pro',
      category: 'AI & Machine Learning',
      subtitle: 'AI Writing Improvement Platform',
      desc: 'Writing intelligence platform analyzing grammar, tone, clarity, and structure with personalized, actionable feedback and multi-model processing.',
      buttonText: 'View Case Study',
      link: '/portfolio',
      mockup: '/assets/case-studies/wordsmith-mockup.png',
      mockupAlt: 'WordSmith Pro App Screens',
    },
  ]

  const totalSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
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
    <section className="py-20 lg:py-28 bg-[#050608] relative overflow-hidden text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Production-Ready Mobile Apps Delivered Across{' '}
            <span className="text-[#00CE44]">Every Major Sector</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile applications are built across industries and markets. Every product below is live, in active production, and built to the compliance and performance standards the brief demanded.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full shrink-0 px-2 sm:px-4">
                  <div className="bg-[#12141a] border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                    {/* Ambient green glow behind mockup */}
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#00CE44]/15 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      {/* Left: Info */}
                      <div className="lg:col-span-6 text-left">
                        <span className="inline-block px-3.5 py-1 mb-4 bg-[#00CE44]/10 border border-[#00CE44]/30 text-[#00CE44] text-xs font-bold uppercase tracking-wider">
                          {slide.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                          {slide.brand}
                        </h3>
                        <p className="text-[#00CE44] text-base sm:text-lg font-semibold mb-4">
                          {slide.subtitle}
                        </p>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                          {slide.desc}
                        </p>
                        <Link
                          to={slide.link}
                          className="inline-flex items-center justify-center px-7 py-3 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
                        >
                          {slide.buttonText} →
                        </Link>
                      </div>

                      {/* Right: Mockup */}
                      <div className="lg:col-span-6 flex justify-center items-center">
                        <img
                          src={slide.mockup}
                          alt={slide.mockupAlt}
                          className="max-h-[320px] sm:max-h-[380px] w-auto object-contain select-none"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-none border border-white/20 bg-[#12141a] hover:bg-[#00CE44] hover:text-black hover:border-[#00CE44] flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 transition-all ${
                    currentSlide === i ? 'w-8 bg-[#00CE44]' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-11 h-11 rounded-none border border-white/20 bg-[#12141a] hover:bg-[#00CE44] hover:text-black hover:border-[#00CE44] flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

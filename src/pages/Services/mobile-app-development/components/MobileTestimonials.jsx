import { useRef, useState, useEffect } from 'react'

export default function MobileTestimonials() {
  const scrollRef = useRef(null)
  const [thumbTop, setThumbTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(35)

  const reviews = [
    {
      author: 'Collin Maddox',
      role: 'Owner/Designer, MaddTech',
      quote:
        '“Inceptives Digital excels at translating complex, abstract product requirements into high-performance, production-ready software. Their execution is seamless.”',
    },
    {
      author: 'Kirk Fleming',
      role: 'Owner, Pulse Check Timer',
      quote:
        '“From initial product strategy to deployment, Inceptives Digital demonstrated exceptional technical discipline. They delivered a highly scalable mobile product ahead of schedule without compromising architectural integrity.”',
    },
    {
      author: 'Dorrin Rosenfeld',
      role: 'DC & Owner, State of the Art Chiropractic',
      quote:
        '“Inceptives Digital did not just execute a brief; they aligned perfectly with our operational goals. They engineered a reliable digital ecosystem that completely modernized our workflow.”',
    },
    {
      author: 'Marcus Vance',
      role: 'VP of Engineering, FinFlow Systems',
      quote:
        '“We needed an engineering partner capable of architecting a highly scalable, complex social commerce platform. Inceptives Digital mapped out a precise technical strategy, demonstrating deep understanding of data architecture, system performance, and user-centric design.”',
    },
    {
      author: 'Elena Rostova',
      role: 'Chief Product Officer, MedCore Health',
      quote:
        '“Security, HIPAA compliance, and patient UX were non-negotiable for our telehealth launch. Inceptives Digital delivered an enterprise-grade platform with zero post-launch critical defects.”',
    },
  ]

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = scrollHeight - clientHeight
    if (maxScroll <= 0) return

    const ratio = clientHeight / scrollHeight
    const h = Math.max(25, Math.min(60, ratio * 100))
    setThumbHeight(h)

    const progress = scrollTop / maxScroll
    const maxTop = 100 - h
    setThumbTop(progress * maxTop)
  }

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: amount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(90deg, #000000 0%, #000000 45%, #062812 100%)',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading (35px) + Text + Platform Logos */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Working With Inceptives Digital, Straight from Our Clients
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-8 max-w-md">
              Our clients trust us to build mobile apps that align with their goals, users, and long-term growth. Here&apos;s what they have to say about working with our team.
            </p>

            {/* 3 White/Inverted Platform Logos: Clutch, Bark, Trustpilot */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              <img
                src="/assets/clutch.png"
                alt="Clutch 5.0 Rating"
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert opacity-80"
                loading="lazy"
              />
              <img
                src="/assets/bark.png"
                alt="Bark 5.0 Rating"
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert opacity-80"
                loading="lazy"
              />
              <img
                src="/assets/trustpilot.png"
                alt="Trustpilot 4.7 Rating"
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Scrollable Testimonials List + Custom Green Scrollbar */}
          <div className="lg:col-span-7 relative flex items-stretch gap-3 sm:gap-4">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 max-h-[440px] sm:max-h-[480px] overflow-y-auto pr-1 sm:pr-2 space-y-4 no-scrollbar"
            >
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-[14px] bg-[#17211a] border-0 shadow-none transition-colors"
                >
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-medium mb-4">
                    {rev.quote}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#00CE44]">
                      {rev.author}
                    </span>
                    <span className="text-white/80 font-normal">
                      {rev.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Vertical Scrollbar matching Screenshot 10 */}
            <div className="w-4 sm:w-5 bg-[#1b1f1d] rounded-full flex flex-col items-center justify-between py-2 select-none shrink-0">
              <button
                type="button"
                onClick={() => scrollByAmount(-180)}
                aria-label="Scroll Up"
                className="text-[#00CE44] hover:text-white transition-colors cursor-pointer p-0.5"
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
                  <path d="M5 0L9.33 7.5H0.67L5 0Z" />
                </svg>
              </button>

              <div className="relative flex-1 w-2 sm:w-2.5 my-2 bg-[#141815] rounded-full overflow-hidden">
                <div
                  className="w-full bg-[#00CE44] rounded-full transition-all duration-75"
                  style={{
                    height: `${thumbHeight}%`,
                    top: `${thumbTop}%`,
                    position: 'absolute',
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => scrollByAmount(180)}
                aria-label="Scroll Down"
                className="text-[#00CE44] hover:text-white transition-colors cursor-pointer p-0.5"
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
                  <path d="M5 8L0.67 0.5H9.33L5 8Z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

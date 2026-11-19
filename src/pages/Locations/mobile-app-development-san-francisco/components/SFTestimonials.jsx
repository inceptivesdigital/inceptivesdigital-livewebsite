import { useRef, useState, useEffect } from 'react'

export default function SFTestimonials() {
  const scrollRef = useRef(null)
  const [thumbTop, setThumbTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(35)

  const reviews = [
    {
      author: 'Collis Maddox',
      role: 'Owner/Designer, MaddTech',
      quote:
        '“Inceptives Digital excels at translating complex, abstract product requirements into high-performance, production-ready software. Their execution is seamless.”',
    },
    {
      author: 'Kirk Flaming',
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
      author: 'Gary Dixon',
      role: 'Founder, StakBread',
      quote:
        '“We needed an engineering partner capable of architecting a highly scalable, complex social commerce platform. Inceptives Digital mapped out a precise technical strategy demonstrating deep understanding of data architecture, system performance, and user-centric design.”',
    },
    {
      author: 'Ariel Rodriguez',
      role: 'Founder, Dropryde',
      quote:
        '“The engineering rigor at Inceptives Digital is outstanding. They managed our complex scope of work with meticulous precision from initial system architecture to the final deployment phases.”',
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
      className="py-20 lg:py-28 relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(275deg, rgba(0, 206, 68, 0.45) 0%, #000000 51%)',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subtext & Badges (CLIENT TESTIMONIALS removed) */}
          <div className="flex flex-col justify-start text-left max-w-xl">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-tight mb-4 sm:mb-6">
              Verified Client Reviews for Our Mobile App Development Work
            </h2>
            <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-10 font-normal">
              Every successful product starts with alignment between the people building it and the people who need it. These stories reflect the collaboration, trust, and product decisions behind our work.
            </p>

            {/* Badges */}
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
              <a
                href="https://clutch.co/profile/inceptives-digital"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/assets/clutch.png"
                  alt="Clutch 5.0 Rating"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a
                href="https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/assets/bark.png"
                  alt="Bark 5.0 Rating"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a
                href="https://www.trustpilot.com/review/inceptivesdigital.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/assets/trustpilot.png"
                  alt="Trustpilot 4.7 Rating"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Scrollable Testimonial Cards with Track */}
          <div className="relative flex items-stretch">
            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="w-full space-y-4 max-h-[460px] overflow-y-auto pr-6 no-scrollbar select-none"
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-[18px] bg-[#14151a]/90 backdrop-blur border border-white/10 hover:border-[#00CE44]/40 transition-colors text-left"
                >
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 font-normal">
                    {r.quote}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                    <span className="font-bold text-[#00CE44]">{r.author}</span>
                    <span className="text-white/60">{r.role}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Green Scroll Track */}
            <div className="w-1.5 bg-white/10 rounded-full relative overflow-hidden my-2 shrink-0">
              <div
                className="w-full bg-[#00CE44] rounded-full transition-all duration-150 absolute top-0"
                style={{
                  height: `${thumbHeight}%`,
                  top: `${thumbTop}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

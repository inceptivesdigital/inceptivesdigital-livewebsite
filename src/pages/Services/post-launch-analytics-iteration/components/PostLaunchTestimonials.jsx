import { useRef, useState, useEffect } from 'react'

export default function PostLaunchTestimonials() {
  const scrollRef = useRef(null)
  const [thumbTop, setThumbTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(35)

  const reviews = [
    {
      author: 'Collis Maddox',
      role: 'Owner/Designer, MaddTech',
      quote:
        '“Inceptives Digital excels at translating complex behavioral data into clear, high-impact iteration cycles. Their post-launch analytics turned our retention metrics completely around.”',
    },
    {
      author: 'Kirk Fleming',
      role: 'Owner, Pulse Check Timer',
      quote:
        '“The post-launch team at Inceptives Digital uncovered critical drop-off points in our onboarding funnel within the first 14 days. Their structured A/B tests increased our completion rates by over 40%.”',
    },
    {
      author: 'Dorrin Rosenfeld',
      role: 'DC & Owner, State of the Art Chiropractic',
      quote:
        '“Their disciplined analytics framework stopped us from guessing what features to build next. Every roadmap change was backed by hard usage numbers and demonstrable ROI.”',
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

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(275deg, rgba(0, 206, 68, 0.45) 0%, #000000 51%)',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            What Product Teams Say About{' '}
            <span className="text-[#00CE44]">Post-Launch Work</span> at Inceptives Digital
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Feedback from founders and product leads who ran post-launch analytics and iteration engagements with the studio.
          </p>
        </div>

        {/* Reviews Layout */}
        <div className="max-w-4xl mx-auto relative flex gap-6 items-stretch">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex-1 space-y-6 max-h-[460px] overflow-y-auto pr-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="p-8 sm:p-9 rounded-[20px] bg-[#141414] border-0 text-left"
              >
                <p className="text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-6 italic">
                  {rev.quote}
                </p>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">
                    {rev.author}
                  </h4>
                  <p className="text-[#00CE44] text-xs sm:text-sm font-medium">
                    {rev.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Scrollbar */}
          <div className="w-2 bg-[#222222] rounded-full relative self-stretch overflow-hidden hidden sm:block">
            <div
              className="w-full bg-[#00CE44] rounded-full absolute transition-all duration-100"
              style={{
                top: `${thumbTop}%`,
                height: `${thumbHeight}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

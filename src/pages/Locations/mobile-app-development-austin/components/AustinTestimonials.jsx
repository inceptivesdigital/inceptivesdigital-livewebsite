import { useRef, useState, useEffect } from 'react'

export default function AustinTestimonials() {
  const scrollRef = useRef(null)
  const [thumbTop, setThumbTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(35)

  const reviews = [
    {
      author: 'Kirk Flaming',
      role: 'Owner, Pulse Check Timer',
      quote:
        '“From initial product strategy to deployment, Inceptives Digital demonstrated exceptional technical discipline. They delivered a highly scalable mobile product ahead of schedule without compromising architectural integrity.”',
    },
    {
      author: 'Collis Maddox',
      role: 'Owner/Designer, MaddTech',
      quote:
        '“Inceptives Digital excels at translating complex, abstract product requirements into high-performance, production-ready software. Their execution is seamless.”',
    },
    {
      author: 'Gary Dixon',
      role: 'Founder, StakBread',
      quote:
        '“We needed an engineering partner capable of architecting a highly scalable, complex social commerce platform. Inceptives Digital mapped out a precise technical strategy demonstrating deep understanding of data architecture, system performance, and user-centric design.”',
    },
    {
      author: 'Dorrin Rosenfeld',
      role: 'DC & Owner, State of the Art Chiropractic',
      quote:
        '“Inceptives Digital did not just execute a brief; they aligned perfectly with our operational goals. They engineered a reliable digital ecosystem that completely modernized our workflow.”',
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

    const scrollFraction = scrollTop / maxScroll
    const availableTrack = 100 - h
    setThumbTop(scrollFraction * availableTrack)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Client <span className="text-[#00CE44]">Testimonials</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            The Best Measure of Our Work Comes From the People We Build It For
          </p>
        </div>

        {/* Testimonials List */}
        <div className="max-w-4xl mx-auto relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-6 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-[#12141a] border border-white/10 p-7 sm:p-8 text-left transition-colors hover:border-[#00CE44]/40"
              >
                <div className="flex items-center gap-1 text-[#00CE44] mb-4">
                  {'★★★★★'}
                </div>
                <p className="text-white/90 text-base sm:text-lg italic leading-relaxed mb-6 font-normal">
                  {r.quote}
                </p>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">
                    {r.author}
                  </h4>
                  <p className="text-[#00CE44] text-xs sm:text-sm font-medium">
                    {r.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

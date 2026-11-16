import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function CompanyJourney() {
  const [activeIdx, setActiveIdx] = useState(0)

  const milestones = [
    {
      year: '2018',
      num: '01',
      title: 'The Beginning',
      desc: 'Inceptives Digital started with a handful of projects and a simple standard: make the work useful. Every early client placed their time and trust in a small, unproven team. That trust shaped how the founders approached every deadline from day one.',
      highlight: 'Handful of projects, one uncompromising standard.',
      img: '/assets/about-us/about1.png',
    },
    {
      year: '2019',
      num: '02',
      title: 'A New Chapter',
      desc: 'The team grew stronger, and friends became business partners. New people joined across design and development, adding depth to a group that had already been working together. This shift marked the start of a longer journey, one built on shared ownership rather than a single person carrying every decision.',
      highlight: 'Shared ownership and interdisciplinary depth.',
      img: '/assets/about-us/about-men.png',
    },
    {
      year: '2023',
      num: '03',
      title: 'Becoming a Digital Product Studio',
      desc: 'Inceptives Digital formally repositioned itself as a full-service digital product studio, spanning strategy, design, engineering, and AI. Each discipline now works toward the same outcome: products that solve a real problem and remain useful long after launch.',
      highlight: 'Full-service strategy, design, engineering, and AI.',
      img: '/assets/about-us/about-img1.png',
    },
    {
      year: '2024',
      num: '04',
      title: 'Expanding Into New Markets',
      desc: "The studio grew beyond its original base and established a presence in additional markets. This expansion reflected a broader client base and a growing demand for the studio's product-first approach.",
      highlight: 'Global presence across US, UK, and Middle East.',
      img: '/assets/about-us/about-img2.png',
    },
    {
      year: '2025',
      num: '05',
      title: 'Scaling Into Platforms and Systems',
      desc: "The studio's scope extended past individual apps into business platforms and connected systems. Clients brought more complex problems, and the studio matched that complexity with deeper technical and strategic capability.",
      highlight: 'Enterprise platforms, complex systems, and AI workflows.',
      img: '/assets/about-us/about-img3.png',
    },
    {
      year: '2026',
      num: '06',
      title: '70+ Products, Recognized Industry-Wide',
      desc: "The studio surpassed 70 delivered products, each backed by a satisfied client relationship. Clutch and RightFirms recognized this track record, confirming the studio's place among trusted, full-service digital product partners.",
      highlight: '70+ shipped digital products and top Clutch rankings.',
      img: '/assets/about-us/image13.png',
    },
  ]

  const current = milestones[activeIdx]

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % milestones.length)
  }

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length)
  }

  return (
    <section id="our-journey" className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Our Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            Built Through Every <span className="text-[#00CE44]">Milestone</span> Along the Way
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            From our founding in 2018 to delivering 70+ recognized digital products worldwide, here is how Inceptives Digital evolved.
          </p>
        </div>

        {/* Horizontal Year Timeline Bar */}
        <div className="relative max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0 hidden sm:block" />
          <div className="flex items-center justify-between gap-2 overflow-x-auto sm:overflow-visible px-1 py-2 relative z-10 no-scrollbar">
            {milestones.map((m, idx) => {
              const isActive = activeIdx === idx
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#00CE44] text-black border-[#00CE44] scale-110 shadow-[0_0_20px_rgba(0,206,68,0.4)]'
                      : 'bg-[#151515] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {m.year}
                </button>
              )
            })}
          </div>
        </div>

        {/* Milestone Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-[28px] bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Calendar Card Styled Content */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#00CE44] tracking-tight leading-none">
                  {current.year}
                </span>
               
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white mb-4 tracking-tight leading-snug">
                {current.title}
              </h3>

              <p className="text-[#00CE44] text-sm sm:text-base font-semibold mb-6">
                {current.highlight}
              </p>

              <p className="text-white/80 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8">
                {current.desc}
              </p>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous Milestone"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/15 text-white hover:bg-[#00CE44] hover:text-black hover:border-[#00CE44] flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next Milestone"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/15 text-white hover:bg-[#00CE44] hover:text-black hover:border-[#00CE44] flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Graphic / Team Snapshot */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[400px] h-[300px] sm:h-[360px] rounded-[20px] overflow-hidden border border-white/10 bg-black/60 relative group">
                <img
                  src={current.img}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="inline-block px-3 py-1 rounded bg-[#00CE44] text-black text-xs font-bold uppercase tracking-wider mb-1">
                    {current.year} Focus
                  </span>
                  <p className="text-white font-semibold text-xs sm:text-sm line-clamp-1">
                    {current.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

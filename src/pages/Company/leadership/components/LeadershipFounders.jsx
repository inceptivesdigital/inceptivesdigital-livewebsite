import { useState } from 'react'

const LEADERS = [
  {
    id: 'hannan-shahnoor',
    tag: 'CHIEF EXECUTIVE',
    name: 'Hannan Shahnoor',
    role: 'Chief Executive Officer',
    image: '/assets/leadership/live/hannan-shahnoor.png',
    focus:
      'Company direction, leadership development, business standards, client value, long-term growth',
    belief: '“The company should never depend on one important person.”',
  },
  {
    id: 'areeb-rehman',
    tag: 'CHIEF OPERATING',
    name: 'Areeb Rehman',
    role: 'Chief Operating Officer',
    image: '/assets/leadership/live/areeb-rehman.png',
    focus:
      'Sales operations, commercial process, opportunity coordination, pre-onboarding readiness',
    belief: '“Clear expectations create stronger client relationships.”',
  },
  {
    id: 'aaron-francis',
    tag: 'REVOPS & DEVOPS',
    name: 'Aaron Francis',
    role: 'Vice President RevOps | DevOps',
    image: '/assets/leadership/live/aaron-francis.jpg',
    focus:
      'Sales Strategy, Revenue Growth, Pipeline Management, Client Acquisition',
    belief: '“Strong Sales Strategies Turn Opportunities Into Lasting Partnerships”',
  },
]

export default function LeadershipFounders() {
  const [openIds, setOpenIds] = useState({})

  const toggleCard = (id) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const closeCard = (id, e) => {
    e.stopPropagation()
    setOpenIds((prev) => ({ ...prev, [id]: false }))
  }

  const handleKeyDown = (id, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleCard(id)
    } else if (e.key === 'Escape' && openIds[id]) {
      e.preventDefault()
      setOpenIds((prev) => ({ ...prev, [id]: false }))
    }
  }

  return (
    <section
      className="py-16 sm:py-24 bg-[#111214] text-white"
      aria-labelledby="clear-ownership-title"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[24px] bg-[#16181a] border border-white/[0.08] p-6 sm:p-10 lg:p-14 xl:p-16 shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
          {/* Decorative Concentric Rings matching interactive HTML template */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[150px] -top-[190px] w-[420px] h-[420px] rounded-full border border-[#00CE44]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[90px] -top-[130px] w-[300px] h-[300px] rounded-full border border-[#00CE44]/15"
          />

          {/* Section Intro */}
          <header className="relative z-10 max-w-[770px] mb-8 sm:mb-11">
            <p className="text-[11px] tracking-[0.2em] font-extrabold uppercase text-[#00CE44] mb-3.5">
              INCEPTIVES DIGITAL / LEADERSHIP
            </p>
            <h2
              id="clear-ownership-title"
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-4"
            >
              Clear Ownership Starts at the Top
            </h2>
            <p className="text-white/70 text-[15px] sm:text-[17px] leading-[1.65] max-w-[680px]">
              Meet the leaders who set our standards, own outcomes, and build
              high-trust teams across every client engagement.
            </p>
          </header>

          {/* 2-Column Interactive Profile Grid (Hover on Desktop + Tap/Keyboard Support) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {LEADERS.map((leader) => {
              const isOpen = !!openIds[leader.id]
              return (
                <article
                  key={leader.id}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-label={`View ${leader.name} profile`}
                  onClick={() => toggleCard(leader.id)}
                  onMouseLeave={() =>
                    setOpenIds((prev) =>
                      prev[leader.id] ? { ...prev, [leader.id]: false } : prev
                    )
                  }
                  onKeyDown={(e) => handleKeyDown(leader.id, e)}
                  className={`group relative h-[520px] sm:h-[560px] lg:h-[580px] min-w-0 rounded-[16px] bg-[#1f2225] overflow-hidden isolate cursor-pointer outline-none border transition-all duration-400 focus-visible:ring-2 focus-visible:ring-[#00CE44] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16181a] ${
                    isOpen
                      ? 'border-[#00CE44]/55 shadow-[0_20px_45px_rgba(0,206,68,0.12)] -translate-y-[3px]'
                      : 'border-white/[0.1] hover:border-[#00CE44]/55 hover:shadow-[0_20px_45px_rgba(0,206,68,0.12)] hover:-translate-y-[3px]'
                  }`}
                >
                  {/* Full-bleed Grayscale Portrait (fades out on hover / open) */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover object-[center_20%] select-none transition-all duration-500 ease-out ${
                      isOpen
                        ? 'grayscale-0 opacity-0 scale-[1.06]'
                        : 'grayscale opacity-100 scale-100 group-hover:grayscale-0 group-hover:opacity-0 group-hover:scale-[1.06]'
                    }`}
                  />

                  {/* Bottom Gradient Shade */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 top-[38%] bg-gradient-to-t from-[#0b100e]/95 via-[#0b100e]/60 to-transparent transition-opacity duration-400 ${
                      isOpen ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                  />

                  {/* Teaser Overlay (Default State) */}
                  <div
                    className={`absolute left-6 sm:left-8 right-6 bottom-7 text-white transition-all duration-300 ${
                      isOpen
                        ? 'opacity-0 translate-y-3 pointer-events-none'
                        : 'opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-3 group-hover:pointer-events-none'
                    }`}
                  >
                    <h3 className="text-[26px] sm:text-[32px] font-bold tracking-[-0.03em] leading-tight mb-1.5">
                      {leader.name}
                    </h3>
                    <p className="text-white/85 text-[15px] sm:text-[16px] mb-4">
                      {leader.role}
                    </p>
                    <span className="inline-flex items-center gap-2.5 text-[#00CE44] text-[12px] tracking-[0.14em] font-extrabold uppercase">
                      View Profile
                      <span className="text-[17px] leading-none font-normal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>

                  {/* Expanded Details Panel (Visible on Hover / Open) */}
                  <div
                    className={`absolute inset-0 bg-[#1a1d20] flex flex-col p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-out ${
                      isOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible translate-y-6 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-auto">
                      <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#00CE44] uppercase pt-2">
                        {leader.tag}
                      </span>
                      <img
                        src={leader.image}
                        alt={`${leader.name} portrait`}
                        loading="lazy"
                        className="w-[96px] h-[108px] sm:w-[116px] sm:h-[128px] lg:w-[128px] lg:h-[140px] object-cover object-[center_20%] rounded-[8px] border-[3px] border-[#111214] shadow-[8px_8px_0_rgba(0,206,68,0.35)] translate-x-2 -translate-y-2 shrink-0 select-none"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="text-[26px] sm:text-[34px] font-bold text-white tracking-[-0.04em] leading-[1.06] mb-1.5">
                        {leader.name}
                      </h3>
                      <p className="text-[#00CE44] text-[14px] sm:text-[15px] font-bold mb-5">
                        {leader.role}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/50 mb-1">
                            Primary Focus
                          </div>
                          <p className="text-white/85 text-[13.5px] sm:text-[15px] leading-[1.6]">
                            {leader.focus}
                          </p>
                        </div>

                        <div>
                          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/50 mb-1">
                            Operating Belief
                          </div>
                          <p className="text-white/95 text-[14px] sm:text-[15.5px] leading-[1.6] italic">
                            {leader.belief}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/[0.1] pt-4 mt-6 flex items-center justify-between gap-3">
                      <span className="text-[#00CE44] text-[12px] font-bold tracking-[0.06em] uppercase">
                        Inceptives Digital Leadership
                      </span>
                      <button
                        type="button"
                        onClick={(e) => closeCard(leader.id, e)}
                        aria-label={`Close ${leader.name} profile`}
                        className="md:hidden w-9 h-9 rounded-full bg-[#00CE44]/15 text-[#00CE44] hover:bg-[#00CE44] hover:text-black flex items-center justify-center text-[20px] leading-none transition-colors cursor-pointer"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <p className="relative z-10 mt-5 text-white/45 text-[12px]">
            Hover over any leadership card (or tap on mobile) to view their
            primary focus and operating belief.
          </p>
        </div>
      </div>
    </section>
  )
}

import { useState, useRef } from 'react'

export default function AsoProcess() {
  const [activeTab, setActiveTab] = useState(0)
  const tabsRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasMovedRef = useRef(false)

  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    hasMovedRef.current = false
    startXRef.current = e.pageX - (tabsRef.current ? tabsRef.current.offsetLeft : 0)
    scrollLeftRef.current = tabsRef.current ? tabsRef.current.scrollLeft : 0
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !tabsRef.current) return
    const x = e.pageX - tabsRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.5
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true
    }
    tabsRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleWheel = (e) => {
    if (tabsRef.current && tabsRef.current.scrollWidth > tabsRef.current.clientWidth) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        tabsRef.current.scrollLeft += e.deltaY * 0.8
      }
    }
  }

  const handleTabClick = (idx, e) => {
    if (hasMovedRef.current) {
      e.preventDefault()
      return
    }
    setActiveTab(idx)
  }

  const steps = [
    {
      num: '01.',
      tabTitle: 'Audit & Baseline',
      tabIcon: '/assets/process/tab-1.png',
      cardTitle: 'Store Audit and Baseline Assessment',
      cardDesc:
        'The engagement starts with an honest look at where the app stands. Keyword gaps, conversion weaknesses, and metadata issues get identified and ranked by impact before any optimization work begins.',
    },
    {
      num: '02.',
      tabTitle: 'Competitor & Keywords',
      tabIcon: '/assets/process/tab-2.png',
      cardTitle: 'Competitive and Keyword Research',
      cardDesc:
        'The category landscape gets mapped before a single keyword decision is made. Competitor positions, search volume distribution, and ranking gaps inform the keyword architecture that drives the rest of the engagement.',
    },
    {
      num: '03.',
      tabTitle: 'Creative & Metadata',
      tabIcon: '/assets/process/tab-3.png',
      cardTitle: 'Creative and Metadata Development',
      cardDesc:
        'Audit findings and research translate into platform-specific creative and copy. App Store and Google Play behave differently, so each gets assets built around its own user behavior and conversion patterns.',
    },
    {
      num: '04.',
      tabTitle: 'Testing & Iteration',
      tabIcon: '/assets/process/tab-4.png',
      cardTitle: 'Testing and Iteration',
      cardDesc:
        'The creative and keyword decision gets validated against real user traffic. Results feed directly into the next round of work, so the engagement improves continuously rather than running on its opening assumptions.',
    },
    {
      num: '05.',
      tabTitle: 'Reporting & Roadmap',
      tabIcon: '/assets/process/tab-5.png',
      cardTitle: 'Reporting and Roadmap',
      cardDesc:
        'Each reporting cycle answers three things: what moved, why it moved, and what gets prioritized next. The roadmap stays connected to live performance data throughout the engagement, not just at the start.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          How an ASO Engagement Works at{' '}
          <span className="text-[#00CE44]">Inceptives Digital</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-white/90 text-[16px] font-normal text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Our five-step ASO engagement process at Inceptives Digital follows a structured process built around your app&apos;s category, current store performance, and growth stage.
        </p>

        {/* Interactive Step Navigation Tabs (5 Steps) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 overflow-x-auto lg:overflow-visible no-scrollbar mb-10 sm:mb-14 pt-4 pb-4 lg:pt-3 lg:pb-0 scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((st, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={st.tabTitle}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className="shrink-0 min-w-[135px] sm:min-w-[150px] lg:min-w-0 group flex flex-col items-center text-center focus:outline-none cursor-pointer transition-all duration-300 pt-1"
              >
                {/* Circular Icon with Number Badge */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center rounded-full mb-3.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00CE44] scale-105'
                      : 'bg-[#202125] hover:bg-[#282a30] hover:scale-105'
                  }`}
                >
                  <img
                    src={st.tabIcon}
                    alt={st.tabTitle}
                    className={`w-7 h-7 sm:w-8 sm:h-8 object-contain transition-all duration-300 ${
                      isActive ? 'brightness-0' : ''
                    }`}
                  />

                  <span
                    className={`absolute -top-1 -right-3.5 sm:-right-4.5 z-10 text-[11px] sm:text-[12px] font-mono font-medium px-2 sm:px-2.5 py-0.5 rounded-[50px] border whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-black text-[#00CE44] border-[#00CE44]'
                        : 'bg-black text-[#00CE44] border-[#00CE44]/60 group-hover:border-[#00CE44]'
                    }`}
                  >
                    {st.num}
                  </span>
                </div>

                {/* Tab Label */}
                <span
                  className={`text-[14px] sm:text-[15px] font-normal transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {st.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Card Box */}
        <div className="bg-[#1b1c20] border-0 rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 lg:p-11 shadow-none transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#00CE44] flex items-center justify-center shrink-0 shadow-none">
              <img
                src={current.tabIcon}
                alt={current.cardTitle}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain brightness-0"
              />
            </div>

            <div className="text-left flex-1">
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] leading-tight mb-2.5 sm:mb-3">
                {current.cardTitle}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed font-normal max-w-4xl">
                {current.cardDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

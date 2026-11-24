import { useState, useRef } from 'react'

export default function CrossPlatformProcess() {
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
    if (hasMovedRef.current) return
    setActiveTab(idx)
    if (tabsRef.current && e?.currentTarget) {
      const container = tabsRef.current
      const target = e.currentTarget
      container.scrollTo({
        left: target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2,
        behavior: 'smooth',
      })
    }
  }

  const steps = [
    {
      num: '01',
      tabTitle: 'Discovery',
      cardTitle: 'Discovery and Roadmapping',
      cardDesc: (
        <>
          Every engagement begins with a{' '}
          <a
            href="https://inceptivesdigital.com/discovery-sprint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-colors"
          >
            discovery sprint
          </a>{' '}
          that documents technical scope, feature priorities, and stack selection. A locked functional specification, fixed timeline, and confirmed cost are produced before the first sprint begins.
        </>
      ),
    },
    {
      num: '02',
      tabTitle: 'UI/UX Design',
      cardTitle: 'UI/UX Design and Prototyping',
      cardDesc:
        'To validate the real-world layouts and user journeys across both platforms, high-fidelity interactive prototypes are built around a unified component architecture before a single line of shared code is written.',
    },
    {
      num: '03',
      tabTitle: 'Agile Sprints',
      cardTitle: 'Agile Development Sprints',
      cardDesc:
        'Every two weeks, engineering runs take place, and at each cycle close, a functional build is delivered. Continuous feedback shapes the shared codebase throughout the engagement rather than arriving when it is costly to act on.',
    },
    {
      num: '04',
      tabTitle: 'QA & Testing',
      cardTitle: 'Multi-Platform QA and Testing',
      cardDesc:
        'The unified codebase is verified on physical device grids across screen resolutions, chipsets, and active OS versions on both iOS and Android before either platform receives a release candidate.',
    },
    {
      num: '05',
      tabTitle: 'Deployment',
      cardTitle: 'Deployment and Post-Launch Support',
      cardDesc:
        'Both store submissions are managed in-house. Throughout each iOS and Android release cycle after launch, a designated engineer keeps an eye on production performance, applies security updates, and implements feature iterations throughout the shared codebase.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Our 5-Step{' '}
            <span className="text-[#00CE44]">Cross-Platform App Development</span> Framework
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Every cross-platform app development project at Inceptives Digital begins with a technical scope that accounts for both operating systems. Our five-stage process connects product decisions to working builds, giving your team clear checkpoints from discovery through deployment.
          </p>
        </div>

        {/* Single-Line Pill Tabs Bar (Exact Blockchain / Industries Style) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-4 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-full shrink-0 lg:shrink min-w-[180px] lg:min-w-0 lg:w-full flex items-center justify-start gap-3 py-1.5 pl-1.5 pr-5 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-white font-semibold'
                    : 'bg-[#2c2c2c] hover:bg-[#383838] text-white/90 font-medium'
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <span className="text-sm sm:text-[15px] whitespace-nowrap">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Single Wide Dark Grey Content Panel (Exact Blockchain / Industries Style) */}
        <div className="bg-[#333333] rounded-[14px] px-7 sm:px-10 lg:px-12 py-10 sm:py-12 min-h-[210px] flex flex-col justify-center text-left border-0">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#00CE44] tracking-tight mb-3">
            {current.cardTitle}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-5xl">
            {current.cardDesc}
          </p>
        </div>
      </div>
    </section>
  )
}

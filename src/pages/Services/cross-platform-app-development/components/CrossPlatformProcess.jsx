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

  const handleTabClick = (idx, e) => {
    if (hasMovedRef.current) return
    setActiveTab(idx)
    if (tabsRef.current && e?.currentTarget) {
      const container = tabsRef.current
      const target = e.currentTarget
      const targetLeft = target.offsetLeft
      const targetWidth = target.offsetWidth
      const containerWidth = container.offsetWidth
      container.scrollTo({
        left: targetLeft - containerWidth / 2 + targetWidth / 2,
        behavior: 'smooth',
      })
    }
  }

  const steps = [
    {
      num: '01.',
      tabTitle: 'Discovery',
      cardTitle: 'Discovery and Roadmapping',
      cardDesc: (
        <>
          Every engagement begins with a{' '}
          <a
            href="https://inceptivesdigital.com/discovery-sprint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            discovery sprint
          </a>{' '}
          that documents technical scope, feature priorities, and stack selection. A locked functional specification, fixed timeline, and confirmed cost are produced before the first sprint begins.
        </>
      ),
    },
    {
      num: '02.',
      tabTitle: 'UI/UX Design',
      cardTitle: 'UI/UX Design and Prototyping',
      cardDesc:
        'To validate the real-world layouts and user journeys across both platforms, high-fidelity interactive prototypes are built around a unified component architecture before a single line of shared code is written.',
    },
    {
      num: '03.',
      tabTitle: 'Agile Sprints',
      cardTitle: 'Agile Development Sprints',
      cardDesc:
        'Every two weeks, engineering runs take place, and at each cycle close, a functional build is delivered. Continuous feedback shapes the shared codebase throughout the engagement rather than arriving when it is costly to act on.',
    },
    {
      num: '04.',
      tabTitle: 'QA & Testing',
      cardTitle: 'Multi-Platform QA and Testing',
      cardDesc:
        'The unified codebase is verified on physical device grids across screen resolutions, chipsets, and active OS versions on both iOS and Android before either platform receives a release candidate.',
    },
    {
      num: '05.',
      tabTitle: 'Deployment',
      cardTitle: 'Deployment and Post-Launch Support',
      cardDesc:
        'Both store submissions are managed in-house. Throughout each iOS and Android release cycle after launch, a designated engineer keeps an eye on production performance, applies security updates, and implements feature iterations throughout the shared codebase.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0c] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4 text-center">
            Our 5-Step{' '}
            <span className="text-[#00CE44]">Cross-Platform App Development</span> Framework
          </h2>
          <p className="text-white/85 text-[16px] leading-relaxed font-normal text-center">
            Every cross-platform app development project at Inceptives Digital begins with a technical scope that accounts for both operating systems. Our five-stage process connects product decisions to working builds, giving your team clear checkpoints from discovery through deployment.
          </p>
        </div>

        {/* Process Tabs Row */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto pb-4 mb-8 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {steps.map((st, i) => (
            <button
              key={st.num}
              onClick={(e) => handleTabClick(i, e)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 border cursor-pointer ${
                activeTab === i
                  ? 'bg-[#00CE44] text-black border-[#00CE44]'
                  : 'bg-[#18191e] text-white/80 border-white/10 hover:border-white/30'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                activeTab === i ? 'bg-black text-white' : 'bg-white/10 text-white'
              }`}>
                {i + 1}
              </span>
              <span>{st.tabTitle}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content Box */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-[24px] bg-[#14151a] border border-white/10 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00CE44] mb-2">
            Step {steps[activeTab].num}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
            {steps[activeTab].cardTitle}
          </h3>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            {steps[activeTab].cardDesc}
          </p>
        </div>
      </div>
    </section>
  )
}

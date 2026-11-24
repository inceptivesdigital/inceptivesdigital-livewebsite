import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ReactNativeProcess() {
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
      return
    }
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
      num: '01',
      tabTitle: 'Discovery and Scoping',
      cardTitle: 'Discovery and Scoping',
      cardDesc: (
        <>
          Define the right development scope before committing your budget. Our React Native consultants run a{' '}
          <Link
            to="/discovery-sprint"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            discovery sprint
          </Link>{' '}
          that assesses product requirements and technical dependencies to establish architecture priorities and a realistic delivery estimate.
        </>
      ),
    },
    {
      num: '02',
      tabTitle: 'UI/UX Design',
      cardTitle: 'UI/UX Design and Prototype',
      cardDesc: (
        <>
          The approved scope guides our UI/UX designers as they develop{' '}
          <Link
            to="/interactive-prototyping"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            interactive prototypes
          </Link>{' '}
          in Figma. You can review navigation and critical user journeys before engineering begins, reducing avoidable design revisions during development.
        </>
      ),
    },
    {
      num: '03',
      tabTitle: 'Agile Development',
      cardTitle: 'Agile Development Sprints',
      cardDesc:
        'Our React Native engineers turn approved designs into working builds through two-week development sprints. At each checkpoint, clients review completed functionality and provide feedback before the next development milestone.',
    },
    {
      num: '04',
      tabTitle: 'QA & Testing',
      cardTitle: 'QA and Pre-Launch Testing',
      cardDesc: (
        <>
          Our QA engineers apply{' '}
          <Link
            to="/blog/mobile-app-testing-strategies"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            mobile app testing strategies
          </Link>{' '}
          to React Native builds on real iOS and Android devices across supported screen sizes, device tiers, and OS versions. They investigate compatibility issues and performance gaps, while security tests check readiness against agreed release criteria.
        </>
      ),
    },
    {
      num: '05',
      tabTitle: 'Deployment & Support',
      cardTitle: 'Dual-Platform Deployment and Support',
      cardDesc: (
        <>
          Following QA approval, our release engineers prepare production builds for{' '}
          <Link
            to="/blog/publish-update-an-app-on-app-store-google-play"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            App Store and Google Play submission
          </Link>
          . The team handles store metadata and ASO requirements, while post-launch support addresses OS compatibility as platform updates roll out.
        </>
      ),
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            From Discovery to Deployment,{' '}
            <span className="text-[#00CE44]">Our React Native App Development Process</span>
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            As an experienced React Native app development company, Inceptives Digital tailors each project roadmap to its technical scope and business priorities. Our engineers follow defined milestones, with regular client reviews keeping development aligned with project goals.
          </p>
        </div>

        {/* Single-Line Pill Tabs Bar */}
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
                <span className="text-sm sm:text-[15px] whitespace-nowrap lg:truncate">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Single Wide Dark Grey Content Panel */}
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

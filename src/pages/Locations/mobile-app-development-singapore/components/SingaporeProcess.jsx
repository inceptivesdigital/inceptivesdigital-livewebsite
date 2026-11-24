import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function SingaporeProcess() {
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
      num: '01.',
      tabTitle: 'Discovery and Strategy',
      cardTitle: '1. Discovery and Strategy',
      desc: (
        <>
          A{' '}
          <Link to="/discovery-sprint" className="text-[#00CE44] font-medium underline underline-offset-4">
            discovery sprint
          </Link>{' '}
          combines business analysis, competitor research, user persona mapping, and feature prioritization to deliver a clear product roadmap and technical blueprint aligned with commercial objectives before a single screen gets designed.
        </>
      ),
    },
    {
      num: '02.',
      tabTitle: 'Design and Validation',
      cardTitle: '2. Design and Validation',
      desc: (
        <>
          <Link to="/interactive-prototyping" className="text-[#00CE44] font-medium underline underline-offset-4">
            Interactive prototyping
          </Link>{' '}
          puts prototypes in front of real users before development starts, validating user journeys, platform consistency, and accessibility compliance. Costly revisions get caught early, before they become expensive engineering problems.
        </>
      ),
    },
    {
      num: '03.',
      tabTitle: 'Engineering and Development',
      cardTitle: '3. Engineering and Development',
      desc: (
        <>
          Two-week sprints with continuous integration and automated deployment pipelines keep the{' '}
          <Link to="/blog/app-development-timeline" className="text-[#00CE44] font-medium underline underline-offset-4">
            app development timeline
          </Link>{' '}
          predictable. Every milestone reduces uncertainty before the next investment decision, so progress stays visible instead of arriving as one big reveal.
        </>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Quality and Security Testing',
      cardTitle: '4. Quality and Security Testing',
      desc: (
        <>
          Our{' '}
          <Link to="/blog/mobile-app-testing-strategies" className="text-[#00CE44] font-medium underline underline-offset-4">
            mobile app testing strategies
          </Link>{' '}
          cover functionality, usability, security, performance, API reliability, and cross-device compatibility against production standards before anything reaches a real user.
        </>
      ),
    },
    {
      num: '05.',
      tabTitle: 'Launch and Support',
      cardTitle: '5. Launch and Support',
      desc: (
        <>
          Full App Store and Google Play release management with{' '}
          <Link to="/app-store-optimization" className="text-[#00CE44] font-medium underline underline-offset-4">
            app store optimization
          </Link>
          , cloud configuration, and the first 30 days of post-launch support included. Ongoing monitoring, patching, and feature releases are covered under What Makes Us Different, below.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching AustinProcess */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Execution Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile App Development Process Followed by{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            The optimum path from product idea to launch depends on making the right decisions at the right time. Each stage of the development process here provides the clarity needed to keep business goals, user needs, and engineering moving in the same direction.
          </p>
        </div>

        {/* Process Tabs: Full-width 5-column grid on desktop, scrollable on mobile */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 items-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto no-scrollbar py-2 mb-10 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`w-auto lg:w-full rounded-full shrink-0 flex items-center justify-start gap-2 sm:gap-2.5 py-2 pl-2 pr-4 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-black'
                    : 'bg-[#1e2025] hover:bg-[#272931] text-white/90'
                }`}
              >
                {/* White Circle with Step Number */}
                <span className="w-7 h-7 rounded-full bg-white text-black font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {step.num}
                </span>

                {/* Tab Label */}
                <span
                  className={`text-[12px] sm:text-[13px] xl:text-[14px] whitespace-nowrap truncate ${
                    isActive ? 'font-bold text-black' : 'font-medium text-white/90'
                  }`}
                >
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Content Card Box: Exactly matching Austin design */}
        <div className="w-full bg-[#1b1c20] rounded-[24px] sm:rounded-[28px] p-7 sm:p-10 lg:p-12 shadow-none transition-all duration-300 text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            {steps[activeTab].cardTitle}
          </h3>
          <div className="text-white/85 text-base sm:text-[17px] leading-relaxed font-normal max-w-4xl">
            {steps[activeTab].desc}
          </div>
        </div>
      </div>
    </section>
  )
}

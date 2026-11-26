import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function AustinProcess() {
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
      tabTitle: 'Product Brief & Scope',
      cardTitle: '1. Product Brief & Scope',
      desc: 'Business objectives, target users, compliance requirements, and technical constraints are defined before design begins. The outcome is a confirmed roadmap, platform recommendation, and delivery plan with realistic timelines.',
    },
    {
      num: '02.',
      tabTitle: 'Architecture & Compliance',
      cardTitle: '2. Architecture & Compliance Planning',
      desc: (
        <>
          Platform architecture, data flows, and compliance frameworks are mapped before development starts. TDPSA, SOC 2, and PCI-DSS requirements, along with{' '}
          <Link
            to="/blog/hipaa-compliant-app-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            HIPAA-compliant app development
          </Link>{' '}
          standards, are addressed at the foundation stage, not before launch.
        </>
      ),
    },
    {
      num: '03.',
      tabTitle: 'Experience Design',
      cardTitle: '3. Experience Design & Validation',
      desc: (
        <>
          Our mobile app{' '}
          <Link
            to="/ui-ux-design"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            UI/UX design
          </Link>{' '}
          process turns user requirements into wireframes and{' '}
          <Link
            to="/interactive-prototyping"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            interactive prototypes
          </Link>
          . We test navigation, screen layouts, and essential workflows before development, helping Austin businesses identify usability problems before they become expensive engineering changes.
        </>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Engineering Sprints',
      cardTitle: '4. Engineering Sprints',
      desc: 'Development progresses through transparent two-week sprint cycles with working software delivered to a live staging environment. Every milestone is reviewable, testable, and approved before moving forward.',
    },
    {
      num: '05.',
      tabTitle: 'QA & Launch Readiness',
      cardTitle: '5. Quality Assurance & Launch Readiness',
      desc: (
        <>
          <Link
            to="/blog/mobile-app-testing-strategies"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            Mobile app testing
          </Link>{' '}
          covers functionality, performance, security, and usability across supported devices and operating systems. QA engineers identify release-blocking issues and verify fixes before the application reaches users.
        </>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Deployment & Growth',
      cardTitle: '6. Deployment & Growth Support',
      desc: (
        <>
          App Store and Google Play submissions and{' '}
          <Link
            to="/app-store-optimization"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            optimization
          </Link>{' '}
          are managed end-to-end, followed by a dedicated post-launch support period covering monitoring, stability, and critical updates.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile App Development Process Built Around{' '}
            <span className="text-[#00CE44]">Better Decisions</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Every stage exists to remove uncertainty before it becomes cost, delay, or technical debt later in the project lifecycle.
          </p>
        </div>

        {/* Process Tabs: Scrollable without visible scrollbar, matching SF style and Homepage drag/wheel scroll */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 lg:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 mb-10 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`rounded-full shrink-0 flex items-center gap-1.5 sm:gap-2 py-1.5 pl-1.5 pr-3 sm:pr-3.5 xl:pr-4 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-black'
                    : 'bg-[#1e2025] hover:bg-[#272931] text-white/90'
                }`}
              >
                {/* White Circle with Step Number: Exactly matching San Francisco design */}
                <span className="w-6 h-6 rounded-full bg-white text-black font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {step.num}
                </span>

                {/* Tab Label */}
                <span
                  className={`text-[12px] sm:text-xs xl:text-[13px] whitespace-nowrap ${
                    isActive ? 'font-bold text-black' : 'font-medium text-white/90'
                  }`}
                >
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Content Card Box: Clean container with zero border, no 01 circle, matching container radius */}
        <div className="w-full bg-[#1b1c20] rounded-[24px] sm:rounded-[28px] p-7 sm:p-10 lg:p-12 shadow-none transition-all duration-300 text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            {steps[activeTab].cardTitle}
          </h3>
          <p className="text-white/85 text-base sm:text-[17px] leading-relaxed font-normal max-w-4xl">
            {steps[activeTab].desc}
          </p>
        </div>
      </div>
    </section>
  )
}

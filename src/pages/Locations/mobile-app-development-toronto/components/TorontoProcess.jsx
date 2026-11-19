import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function TorontoProcess() {
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
      tabTitle: 'Product Validation',
      cardTitle: '1. Product Validation',
      desc: 'Before planning features, we validate assumptions, identify customer needs, and evaluate business risks. This ensures that development focuses on solving the right problem rather than simply building more features.',
    },
    {
      num: '02.',
      tabTitle: 'Discovery Sprint & Planning',
      cardTitle: '2. Discovery Sprint & Planning',
      desc: (
        <>
          With a focused{' '}
          <Link to="/discovery-sprint" className="text-[#00CE44] hover:underline font-medium">
            Discovery Sprint
          </Link>
          , we define business goals, users, technical requirements, and competitive opportunities. The outcome is a focused roadmap that prioritizes valuable features and creates alignment before engineering begins.
        </>
      ),
    },
    {
      num: '03.',
      tabTitle: 'UX/UI Design & Prototyping',
      cardTitle: '3. UX/UI Design & Prototyping',
      desc: (
        <>
          <Link to="/ui-ux-design" className="text-[#00CE44] hover:underline font-medium">
            UX/UI Design
          </Link>{' '}
          transforms ideas into experiences. User journeys, wireframes, and{' '}
          <Link to="/interactive-prototyping" className="text-[#00CE44] hover:underline font-medium">
            interactive prototypes
          </Link>{' '}
          help teams test concepts, refine interactions, and create intuitive products before development starts.
        </>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Agile Development',
      cardTitle: '4. Agile Development',
      desc: 'Engineering follows an iterative approach with scalable architecture, continuous integration, and regular reviews. Teams stay aligned through development cycles while adapting quickly to valuable product feedback.',
    },
    {
      num: '05.',
      tabTitle: 'Quality Assurance & Optimization',
      cardTitle: '5. Quality Assurance & Optimization',
      desc: (
        <>
          <Link to="/blog/mobile-app-testing-strategies" className="text-[#00CE44] hover:underline font-medium">
            Testing strategies
          </Link>{' '}
          cover functionality, performance, security, and usability across real devices. Automated and manual QA processes identify issues early and help deliver stable, production-ready applications.
        </>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Product Launch & Immediate Support',
      cardTitle: '6. Product Launch & Immediate Support',
      desc: (
        <>
          Through structured{' '}
          <Link to="/product-launch-strategy" className="text-[#00CE44] hover:underline font-medium">
            Product Launch
          </Link>{' '}
          planning, we manage App Store and Google Play deployment, release preparation, and early monitoring. Post-launch performance data and user feedback guide subsequent product updates.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading: Matching Homepage ProcessSection.jsx Font Sizes */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          Our Mobile App Development Process Built Around{' '}
          <span className="text-[#00CE44]">Toronto&apos;s Businesses</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-slate-300 text-[16px] sm:text-[18px] font-normal text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Successful products begin with clarity. Our process reduces uncertainty by validating ideas, aligning teams, and creating a structured path from concept to launch.
        </p>

        {/* Process Tabs: Full width on desktop, horizontal scroll on small devices, 14px/15px font size matching Homepage */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex items-center justify-start lg:justify-between gap-2 sm:gap-2.5 lg:gap-3 overflow-x-auto no-scrollbar py-2 mb-10 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`rounded-full shrink-0 lg:flex-1 flex items-center justify-start gap-2 py-2.5 pl-2.5 pr-3.5 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-black'
                    : 'bg-[#1e2025] hover:bg-[#272931] text-white/90'
                }`}
              >
                {/* White Circle with Step Number */}
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black font-extrabold text-[12px] sm:text-[13px] flex items-center justify-center shrink-0">
                  {step.num}
                </span>

                {/* Tab Label: Exact Homepage Process font-size (14px/15px) */}
                <span
                  className={`text-[14px] sm:text-[15px] whitespace-nowrap truncate ${
                    isActive ? 'font-bold text-black' : 'font-normal text-white'
                  }`}
                >
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Content Card Box: Exact Homepage ProcessSection.jsx Typography (H3 22px/25px, P 15px/16px) */}
        <div className="w-full bg-[#1b1c20] rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 lg:p-11 border-0 shadow-none transition-all duration-300 text-left">
          <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] leading-tight mb-2.5 sm:mb-3">
            {steps[activeTab].cardTitle}
          </h3>
          <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed font-normal max-w-4xl">
            {steps[activeTab].desc}
          </p>
        </div>
      </div>
    </section>
  )
}

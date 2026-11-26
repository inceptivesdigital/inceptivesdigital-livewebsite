import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function DubaiProcess() {
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
      tabTitle: 'Discovery & Scoping',
      cardTitle: '1. Discovery and Technical Scoping',
      desc: (
        <>
          Every successful product starts with understanding the business behind it. A{' '}
          <Link to="/discovery-sprint" className="text-[#00CE44] font-medium underline underline-offset-4">
            discovery sprint
          </Link>{' '}
          brings product goals, user needs, feature priorities, technical constraints, and integration requirements together to define a realistic roadmap before development begins. Where applicable, early planning also considers UAE PDPL requirements and regional platform integrations.
        </>
      ),
    },
    {
      num: '02.',
      tabTitle: 'UX & UI Design',
      cardTitle: '2. UX and UI Design',
      desc: (
        <>
          <Link to="/ui-ux-design" className="text-[#00CE44] font-medium underline underline-offset-4">
            UI/UX design
          </Link>
          , wireframes, and prototypes bring product ideas into a tangible experience before engineering begins. In this phase,{' '}
          <Link to="/interactive-prototyping" className="text-[#00CE44] font-medium underline underline-offset-4">
            interactive prototyping
          </Link>{' '}
          lets us explore user flows, interface decisions, and interaction patterns to create a stronger foundation for development that feels natural from the first release.
        </>
      ),
    },
    {
      num: '03.',
      tabTitle: 'Engineering & Development',
      cardTitle: '3. Engineering and Development',
      desc: (
        <>
          Validated designs move into structured engineering sprints across iOS, Android, cross-platform, and backend systems. Code reviews, architecture checks, and regular build demonstrations keep technical decisions aligned with the agreed scope throughout development.
        </>
      ),
    },
    {
      num: '04.',
      tabTitle: 'QA & Testing',
      cardTitle: '4. Quality Assurance and Testing',
      desc: (
        <>
          Every release undergoes validation beyond functional testing, using proven{' '}
          <Link to="/blog/mobile-app-testing-strategies" className="text-[#00CE44] font-medium underline underline-offset-4">
            mobile app testing strategies
          </Link>
          . Performance, security, device compatibility, payment workflows, and user journeys are assessed under conditions that reflect real-world usage before deployment across the UAE&apos;s diverse device ecosystem.
        </>
      ),
    },
    {
      num: '05.',
      tabTitle: 'Deployment & Launch',
      cardTitle: '5. Deployment and Launch',
      desc: (
        <>
          This is where months of engineering come together, and the preparation behind the release matters as much as the launch itself. Platform submissions supported by{' '}
          <Link to="/app-store-optimization" className="text-[#00CE44] font-medium underline underline-offset-4">
            app store optimization
          </Link>
          , production configuration, monitoring, and final validation create a predictable rollout while providing immediate visibility into application performance.
        </>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Post-Launch Support',
      cardTitle: '6. Post-Launch Support',
      desc: (
        <>
          The work continues after your application goes live. Performance monitoring,{' '}
          <Link to="/post-launch-analytics-iteration" className="text-[#00CE44] font-medium underline underline-offset-4">
            post-launch analytics iteration
          </Link>
          , feature enhancements, security updates, and technical optimisation keep the product aligned with evolving user expectations, business priorities, and long-term expansion goals.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Workflow &amp; Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Every App Follows a{' '}
            <span className="text-[#00CE44]">Defined Engineering Workflow</span>
          </h2>
          <p className="text-slate-300 text-[16px] sm:text-[18px] font-normal leading-relaxed">
            Inceptives Digital, regarded as a leading mobile app development company in Dubai, moves through six defined stages, each clearing technical review before the next starts, so a scope gap surfaces during discovery rather than at launch.
          </p>
        </div>

        {/* Process Tabs: horizontal scroll on mobile, centered wrapping pills on md+ */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex flex-nowrap md:flex-wrap md:justify-center items-center gap-2.5 sm:gap-3 overflow-x-auto md:overflow-visible no-scrollbar py-2 mb-10 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`rounded-full shrink-0 w-auto max-w-full overflow-hidden flex items-center justify-start gap-2.5 py-2 pl-2 pr-4 sm:pr-5 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-bold'
                    : 'bg-[#181a20] hover:bg-[#22252e] text-white/90 font-medium'
                }`}
              >
                {/* White circle with number matching screenshot */}
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-black font-bold text-[11px] sm:text-[12px] flex items-center justify-center shrink-0">
                  {step.num}
                </span>

                <span
                  className={`text-[13px] sm:text-[14px] whitespace-nowrap truncate ${
                    isActive ? 'font-bold text-black' : 'font-normal text-white'
                  }`}
                >
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Content Card Box */}
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

import { useState, useRef } from 'react'

export default function FlutterProcess() {
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
      container.scrollTo({
        left: target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2,
        behavior: 'smooth',
      })
    }
  }

  const steps = [
    {
      num: '01',
      tabTitle: 'Discovery and Strategy',
      cardTitle: '1. Discovery and Strategy',
      cardDesc:
        "We first establish what your product needs to achieve and where Flutter fits the requirements. Our consultants examine platform constraints and integration feasibility before defining the development scope. You'll have a clear roadmap with delivery priorities and realistic timelines.",
    },
    {
      num: '02',
      tabTitle: 'UI/UX Design',
      cardTitle: '2. UI/UX Design',
      cardDesc:
        'Product requirements take shape through interactive Figma prototypes, giving clients an early view of the intended experience. Our designers refine screen behavior for supported devices and establish the visual system that guides Flutter widget development.',
    },
    {
      num: '03',
      tabTitle: 'Flutter Development',
      cardTitle: '3. Flutter Development',
      cardDesc:
        'Using the approved interface system, our Flutter engineers develop application functionality in Dart. Reusable widgets support consistent screen behavior, while state management handles interactions across the product. Clients review functional builds as development progresses.',
    },
    {
      num: '04',
      tabTitle: 'QA & Deployment',
      cardTitle: '4. Quality Assurance and Deployment',
      cardDesc:
        "Testing covers actual device behavior alongside Flutter's rendering performance. Our QA engineers run widget and integration tests, then check supported screen sizes and OS versions. Once the application meets release criteria, the team prepares production builds for deployment.",
    },
    {
      num: '05',
      tabTitle: 'Ongoing Support',
      cardTitle: '5. Ongoing Support',
      cardDesc:
        'Flutter SDK releases and platform updates can affect existing application behavior. Through ongoing maintenance, our engineers review dependency compatibility and resolve production issues. Future enhancements follow the product roadmap and agreed support scope.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.16] mb-4">
            How We Approach{' '}
            <span className="text-[#00CE44]">Flutter App Development From Strategy to Launch</span>
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Each Flutter project brings different interface requirements and technical considerations. Our development process accounts for these early, giving businesses a practical route from product planning to a production-ready application.
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

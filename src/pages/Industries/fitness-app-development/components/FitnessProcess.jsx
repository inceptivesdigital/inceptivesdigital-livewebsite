import { useState, useRef } from 'react'

export default function FitnessProcess() {
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
      tabTitle: 'Discovery',
      title: 'Product Discovery and Strategy',
      description:
        'Business objectives, target users, and market positioning are defined before development begins. Feature set, tech stack, and monetisation model confirmed through research and feasibility assessment specific to your fitness context.',
    },
    {
      num: '02',
      tabTitle: 'UI/UX Design',
      title: 'UI/UX Design',
      description:
        'User journeys are designed around the moments that matter: tracking a run, logging a meal, joining a live class. Every screen is built to motivate, retain, and convert users from the first session to a long-term habit.',
    },
    {
      num: '03',
      tabTitle: 'Development',
      title: 'Development and Integration',
      description:
        'Flutter, React Native, Swift, and Kotlin are used to build high-performance cross-platform and native fitness applications. AI coaching, wearable integrations, IoT devices, and gamification are built in during development, not added afterward.',
    },
    {
      num: '04',
      tabTitle: 'QA & Testing',
      title: 'Testing and Quality Assurance',
      description:
        'Usability, API performance, and security audits are completed across every build. Every version is tested before it reaches users. No shortcuts before production deployment.',
    },
    {
      num: '05',
      tabTitle: 'Optimisation',
      title: 'Deployment and Store Optimisation',
      description:
        'App store submissions, performance tuning, and compliance checks are managed at launch. App listing optimised for visibility and organic downloads from day one.',
    },
    {
      num: '06',
      tabTitle: 'Launch',
      title: 'Post-Launch Growth and Support',
      description:
        'Performance monitored, user feedback captured, and updates delivered continuously after launch. New features, data analytics, and scaling support are provided as the product grows.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            How Our{' '}
            <span className="text-[#00CE44]">Fitness App Development Company</span>{' '}
            Takes a Product From Brief to Launch
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Every stage is designed around user engagement, technical performance, and post-launch growth.
          </p>
        </div>

        {/* Single-Line 6 Pill Tabs Bar */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-6 items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-4 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-full shrink-0 lg:shrink min-w-[175px] lg:min-w-0 lg:w-full flex items-center justify-start gap-2.5 py-1.5 pl-1.5 pr-4 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-white font-semibold'
                    : 'bg-[#2c2c2c] hover:bg-[#383838] text-white/90 font-medium'
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <span className="text-xs sm:text-sm whitespace-nowrap">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Single Wide Dark Grey Content Panel */}
        <div className="bg-[#333333] rounded-[14px] px-7 sm:px-10 lg:px-12 py-10 sm:py-12 min-h-[210px] flex flex-col justify-center text-left border-0">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#00CE44] tracking-tight mb-3">
            {current.title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-5xl">
            {current.description}
          </p>
        </div>
      </div>
    </section>
  )
}

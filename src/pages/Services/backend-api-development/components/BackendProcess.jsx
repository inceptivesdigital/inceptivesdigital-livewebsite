import { useState, useRef } from 'react'

export default function BackendProcess() {
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
      tabTitle: 'Architecture Planning',
      tabIcon: '/assets/process/tab-1.png',
      cardTitle: 'Requirements & Architecture Planning',
      cardDesc:
        'Every successful backend begins with understanding product goals, technical constraints, projected growth, and integration requirements. These insights shape the architectural blueprint, defining service boundaries, data ownership, and system interactions before development begins.',
    },
    {
      num: '02.',
      tabTitle: 'Database & API Design',
      tabIcon: '/assets/process/tab-2.png',
      cardTitle: 'Database & API Design',
      cardDesc:
        'With the architecture established, database models and API contracts are designed together to ensure efficient data flow, consistent communication, and long-term flexibility. This alignment creates a solid foundation before implementation starts.',
    },
    {
      num: '03.',
      tabTitle: 'Development & Integration',
      tabIcon: '/assets/process/tab-3.png',
      cardTitle: 'Development & Integration',
      cardDesc:
        'Once the foundation is validated, our engineers build backend services in iterative milestones while integrating databases, third-party platforms, and frontend applications. Continuous technical reviews ensure every component remains aligned with the original architecture.',
    },
    {
      num: '04.',
      tabTitle: 'Security & Performance',
      tabIcon: '/assets/process/tab-4.png',
      cardTitle: 'Security & Performance Validation',
      cardDesc:
        'Before deployment, the complete system undergoes rigorous security assessments, load testing, and performance optimization. This stage verifies that the backend can withstand real-world traffic, protect sensitive data, and maintain consistent reliability under scale.',
    },
    {
      num: '05.',
      tabTitle: 'Deployment & Support',
      tabIcon: '/assets/process/tab-5.png',
      cardTitle: 'Deployment & Ongoing Support',
      cardDesc: (
        <>
          After successful validation, the backend is deployed through automated CI/CD pipelines with comprehensive technical documentation. Our{' '}
          <a
            href="https://inceptivesdigital.com/post-launch-analytics-iteration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            post-launch analytics iteration
          </a>{' '}
          team continues supporting the product beyond launch, ensuring the architecture adapts smoothly as user demands emerge.
        </>
      ),
    },
  ]

  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Our{' '}
            <span className="text-[#00CE44]">Backend &amp; API</span> Development Process
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every backend engagement follows a defined path from architecture to deployment. Each phase builds on validated decisions from the one before it, so nothing gets built on an assumption that hasn&apos;t been confirmed.
          </p>
        </div>

        {/* Exact Homepage Circular Process Tabs */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="flex items-center justify-start lg:justify-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar pb-4 mb-10 cursor-grab active:cursor-grabbing select-none"
        >
          {steps.map((step, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`group flex flex-col items-center shrink-0 transition-all duration-300 cursor-pointer ${
                  isActive ? 'opacity-100 scale-105' : 'opacity-65 hover:opacity-95'
                }`}
              >
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center p-3 border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00CE44] border-[#00CE44] text-black shadow-lg'
                      : 'bg-[#1a1c20] border-white/15 text-white group-hover:border-[#00CE44]/60'
                  }`}
                >
                  <img
                    src={step.tabIcon}
                    alt={step.tabTitle}
                    className={`w-7 h-7 sm:w-8 sm:h-8 object-contain mb-1.5 transition-all ${
                      isActive ? 'brightness-0' : ''
                    }`}
                    loading="lazy"
                  />
                  <span className="text-[11px] sm:text-xs font-bold leading-tight text-center">
                    {step.num} {step.tabTitle}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Step Content Card */}
        <div className="max-w-4xl mx-auto rounded-[24px] bg-[#18191d] border border-white/10 p-8 sm:p-10 lg:p-12 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl sm:text-3xl font-bold text-[#00CE44]">
              {steps[activeTab].num}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white">
              {steps[activeTab].cardTitle}
            </h3>
          </div>
          <p className="text-white/90 text-sm sm:text-[16px] leading-relaxed font-normal">
            {steps[activeTab].cardDesc}
          </p>
        </div>
      </div>
    </section>
  )
}

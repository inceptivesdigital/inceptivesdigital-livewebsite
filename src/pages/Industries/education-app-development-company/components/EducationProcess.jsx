import { useState, useRef } from 'react'

export default function EducationProcess() {
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
      title: 'Discovery and Requirement Analysis',
      description:
        'Business objectives, target users, and regulatory requirements are defined before development begins. Market research, competitor analysis, and technical feasibility were completed to produce a clear project roadmap specific to your educational context.',
    },
    {
      num: '02',
      tabTitle: 'UI/UX Design',
      title: 'Instructional and UX Design',
      description:
        'Learning paths, interactive lessons, and interfaces designed around real learner behaviour. Every screen is built to reduce cognitive load, maintain engagement, and support effective content delivery across device types.',
    },
    {
      num: '03',
      tabTitle: 'Development',
      title: 'Prototype and MVP Development',
      description:
        'A working prototype validates learning experiences before full-scale development begins. Early learner testing confirms engagement, usability, and performance before significant development investment is made.',
    },
    {
      num: '04',
      tabTitle: 'QA & Testing',
      title: 'Full-Scale Development',
      description:
        'AI-powered adaptive learning, gamification, assessments, AR/VR experiences, and LMS integrations built in agile sprints. Security, scalability, and offline support were built in from the first sprint, not added at the end.',
    },
    {
      num: '05',
      tabTitle: 'Security Validation',
      title: 'Quality Assurance and Testing',
      description:
        'Functionality, usability, performance, and accessibility were tested across every module. Load testing was completed for live classroom scenarios before deployment.',
    },
    {
      num: '06',
      tabTitle: 'Launch',
      title: 'Deployment and Launch',
      description:
        'App store submission, web deployment, and teacher and student onboarding were managed at launch. Analytics dashboards configured to monitor engagement and learning outcomes from day one.',
    },
    {
      num: '07',
      tabTitle: 'Optimisation',
      title: 'Continuous Support and Optimisation',
      description:
        'Performance monitored, user feedback analysed, and updates delivered continuously after launch. Content quality, user engagement, and platform performance are refined as the product grows.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            How We Approach{' '}
            <span className="text-[#00CE44]">Educational App Development</span>{' '}
            From Discovery to Deployment
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Every stage designed around learner engagement, institutional compliance, and production-ready delivery.
          </p>
        </div>

        {/* Single-Line 7 Pill Tabs Bar */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex xl:grid xl:grid-cols-7 items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-4 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-full shrink-0 xl:shrink min-w-[175px] xl:min-w-0 xl:w-full flex items-center justify-start gap-2.5 py-1.5 pl-1.5 pr-4 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-white font-semibold'
                    : 'bg-[#2c2c2c] hover:bg-[#383838] text-white/90 font-medium'
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-xs flex items-center justify-center shrink-0">
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

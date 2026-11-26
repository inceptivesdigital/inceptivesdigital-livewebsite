import { useState, useRef } from 'react'

export default function HealthcareProcess() {
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
      title: 'Discovery and Research',
      description:
        'Business objectives, target users, and clinical workflows are mapped before development begins. Market research, competitor analysis, and feasibility assessment were completed to produce a clear project roadmap specific to your healthcare context.',
    },
    {
      num: '02',
      tabTitle: 'UI/UX Design',
      title: 'UI/UX Design',
      description:
        'Patient-centred, clinician-optimised interfaces designed around usability and workflow efficiency. HIPAA, GDPR, and PHIPA compliance requirements are built into every design decision before development begins.',
    },
    {
      num: '03',
      tabTitle: 'Development',
      title: 'Development and Integration',
      description:
        'Functional applications built and integrated with EHR/EMR systems, third-party APIs, telemedicine infrastructure, and AI-powered features. Scalable, secure, and compliant from the first line of code.',
    },
    {
      num: '04',
      tabTitle: 'QA & Testing',
      title: 'Testing and Quality Assurance',
      description:
        'Every module is validated for reliability, security, and regulatory compliance. Rigorous testing is completed before any healthcare application reaches production.',
    },
    {
      num: '05',
      tabTitle: 'Launch',
      title: 'Deployment and Support',
      description:
        'App store submissions, server configuration, and user access were managed at launch. Ongoing updates, feature improvements, and technical support are provided after deployment.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.16] mb-4">
            Healthcare App Development Process Designed Around Compliance, Accuracy, and Delivery
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Every stage is designed around clinical accuracy, regulatory compliance, and production-ready delivery.
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
                <span className="text-sm sm:text-[15px] whitespace-nowrap">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Single Wide Dark Grey Content Panel matching Screenshot 5 */}
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

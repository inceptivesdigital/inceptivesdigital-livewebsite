import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function PostLaunchProcess() {
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
      e.preventDefault()
      return
    }
    setActiveTab(idx)
  }

  const steps = [
    {
      num: '01.',
      title: 'Launch Audit & Baseline Review',
      tagline: 'Establish ground truth performance indicators',
      desc: (
        <>
          The engagement opens with a thorough read of live performance data. Retention curves, funnel completion rates, error logs, and early cohort behavior establish the baseline that every subsequent iteration cycle measures against.
        </>
      ),
      deliverables: [
        'Cohort retention baseline & churn points',
        'Drop-off mapping across key conversion funnels',
        'Error, crash, and latency benchmark logs',
        'Initial KPI dashboard setup',
      ],
    },
    {
      num: '02.',
      title: 'Hypothesis Formation & Prioritization',
      tagline: 'Structure ranked experiments based on expected ROI',
      desc: (
        <>
          Audit findings translate into a ranked list of iteration hypotheses, each connected to a specific metric, a proposed change, and an expected directional outcome. Priority follows potential impact on defined KPIs, not convenience.
        </>
      ),
      deliverables: [
        'Impact vs effort ICE prioritization scoring',
        'Defined single-variable hypotheses',
        'Sample size & statistical significance targets',
        'Sprint iteration roadmap',
      ],
    },
    {
      num: '03.',
      title: 'Experimentation & Development Cycles',
      tagline: 'Controlled implementation and staging verification',
      desc: (
        <>
          High-priority hypotheses move into the testing and development cycle. Experiments run with controlled variables and defined success criteria, and development changes are validated in staging before moving to production once those criteria are met.
        </>
      ),
      deliverables: [
        'A/B experiment variant builds',
        'Staging QA and multi-device verification',
        'Feature flagging and phased rollout controls',
        'Live production telemetry',
      ],
    },
    {
      num: '04.',
      title: 'Measurement & Learning Extraction',
      tagline: 'Statistical verification of metric movement',
      desc: (
        <>
          Each iteration cycle closes with a formal measurement phase. What moved, by how much, and in what direction gets documented alongside the reasoning behind each change, forming the inputs that shape the next cycle.
        </>
      ),
      deliverables: [
        'Directional metric delta documentation',
        'Cohort retention shift reports',
        'Behavioral session recording review',
        'Refined hypothesis database',
      ],
    },
    {
      num: '05.',
      title: 'Roadmap Recalibration & Forward Planning',
      tagline: 'Continuous strategic adaptation from observed data',
      desc: (
        <>
          Cycle results feed directly back into the product roadmap, shifting priorities based on what the data confirmed or contradicted. The roadmap stays a working document throughout rather than a fixed plan built before launch, keeping the{' '}
          <Link
            to="/blog/app-development-timeline"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            app development timeline
          </Link>{' '}
          aligned with real product needs.
        </>
      ),
      deliverables: [
        'Backlog re-prioritization around live signals',
        'Feature abandonment / scaling decisions',
        'Next cycle experiment schedule',
        'Executive biweekly performance summaries',
      ],
    },
  ]

  const activeStep = steps[activeTab]

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            How Post-Launch Analytics and Iteration{' '}
            <span className="text-[#00CE44]">Engagement Run at Our Studio</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            A structured five-step cycle drives each engagement, with every priority set by what the product's analytics reveal, not assumptions.
          </p>
        </div>

        {/* Draggable Tab Bar */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {steps.map((step, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={idx}
                onClick={(e) => handleTabClick(idx, e)}
                className={`shrink-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-none font-bold text-sm sm:text-base transition-all duration-200 border-0 ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-none'
                    : 'bg-[#161616] text-white/80 hover:bg-[#222222] hover:text-white'
                }`}
              >
                <span className="mr-2 opacity-60">{step.num}</span>
                {step.title}
              </button>
            )
          })}
        </div>

        {/* Active Step Content Card */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#141414] border-0 text-left relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
                Step {activeStep.num}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight mb-4">
                {activeStep.title}
              </h3>
              <p className="text-[#00CE44] text-sm sm:text-base font-medium mb-6">
                {activeStep.tagline}
              </p>
              <div className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
                {activeStep.desc}
              </div>
            </div>

            {/* Right Deliverables Column */}
            <div className="lg:col-span-5 bg-[#1b1b1b] p-6 sm:p-8 rounded-[18px]">
              <h4 className="text-white text-base sm:text-lg font-bold mb-4 tracking-tight">
                Key Cycle Deliverables:
              </h4>
              <ul className="space-y-3 text-white/85 text-xs sm:text-sm leading-relaxed">
                {activeStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, useRef } from 'react'

function DiscoveryIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeDasharray="2 2.5" opacity="0.55" />
      <path d="M9.5 14.5c-.9-.7-1.5-1.8-1.5-3a4 4 0 1 1 8 0c0 1.2-.6 2.3-1.5 3l-.5 1.5h-4l-.5-1.5Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M10.5 17.5h3" />
      <circle cx="12" cy="3" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="4" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="4" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function DataArchIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="9.5" y="3" width="5" height="3.5" rx="0.8" fill="currentColor" />
      <path d="M12 6.5v3.5M5 10h14M5 10v3M12 10v3M19 10v3" />
      <rect x="3" y="13" width="4" height="3" rx="0.6" fill="currentColor" />
      <rect x="10" y="13" width="4" height="3" rx="0.6" fill="currentColor" />
      <rect x="17" y="13" width="4" height="3" rx="0.6" fill="currentColor" />
      <path d="M12 16v2.5M8 18.5h8M8 18.5v1.5M16 18.5v1.5" />
      <rect x="6.5" y="19.5" width="3" height="2" rx="0.5" fill="currentColor" />
      <rect x="14.5" y="19.5" width="3" height="2" rx="0.5" fill="currentColor" />
    </svg>
  )
}

function AiModelIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M12 2.5 20 7l-8 4.5L4 7l8-4.5Z" />
      <path d="M12 11.5v10" />
      <path d="M16 11.5c0 2-1.8 3.5-1.8 3.5s1.8 1.5 1.8 3.5c0-2 1.8-3.5 1.8-3.5s-1.8-1.5-1.8-3.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function DevelopmentIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6.5 15h11a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 8.2 6.5a4 4 0 0 0-1.7 8.5Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M9 15v4M12 15v5M15 15v4" />
      <circle cx="9" cy="19.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="20.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="19.5" r="1" fill="currentColor" stroke="none" />
      <path d="M10.2 11.8 11.4 8.6l1.2 3.2M10.5 11h1.8M14.2 8.6v3.2" strokeWidth="1.6" />
    </svg>
  )
}

function DeploymentIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 14h10a3.2 3.2 0 0 0 .4-6.38A4.6 4.6 0 0 0 8.5 6.2a3.7 3.7 0 0 0-1.5 7.8Z" fill="currentColor" />
      <path d="M12 14v5M8.5 16.5H5.5M15.5 16.5h3" />
      <circle cx="12" cy="19.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="16.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="16.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MonitoringIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      <path d="M10.5 11.2 9.3 12l1.2.8M13.5 11.2l1.2.8-1.2.8" strokeWidth="1.6" />
    </svg>
  )
}

export default function AiProcess() {
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
        behavior: 'smooth'
      })
    }
  }

  const steps = [
    {
      num: '01.',
      tabTitle: 'Discovery',
      Icon: DiscoveryIcon,
      cardTitle: 'Discovery and AI Opportunity Assessment',
      cardDesc:
        'We map your business processes, evaluate data readiness across structured and unstructured sources, and define the system architecture before development begins. This is where the Discovery Sprint produces a clear build plan — scope defined, architecture confirmed, timeline set.'
    },
    {
      num: '02.',
      tabTitle: 'Data Architecture',
      Icon: DataArchIcon,
      cardTitle: 'Data Architecture and Engineering Foundation',
      cardDesc:
        'We build ETL pipelines, data transformation workflows, and storage architecture around the AI requirements from day one. On high-volume systems, distributed infrastructure like Apache Spark or Kafka is built in from the start, not retrofitted afterward.'
    },
    {
      num: '03.',
      tabTitle: 'AI Model',
      Icon: AiModelIcon,
      cardTitle: 'AI Model Design and Development',
      cardDesc:
        'Models are selected for your specific use case. LLMs like GPT and Claude for generative tasks. Fine-tuned Hugging Face models for domain-specific applications. RAG architectures with Pinecone or Weaviate for knowledge-grounded systems. XGBoost or Random Forest, where prediction is the requirement.'
    },
    {
      num: '04.',
      tabTitle: 'Development',
      Icon: DevelopmentIcon,
      cardTitle: 'AI Product and Application Development',
      cardDesc:
        'We build the application layer, REST APIs, and intelligent interfaces that turn trained models into products people actually use. Built on FastAPI or Node.js, integrated with your existing software ecosystem from the start.'
    },
    {
      num: '05.',
      tabTitle: 'Deployment',
      Icon: DeploymentIcon,
      cardTitle: 'Production Deployment and System Integration',
      cardDesc:
        'Deployed on AWS SageMaker, Google Vertex AI, or Azure ML. Containerised with Docker, orchestrated with Kubernetes. SOC 2, GDPR, and HIPAA compliance are built in at this stage, not added afterward.'
    },
    {
      num: '06.',
      tabTitle: 'Monitoring',
      Icon: MonitoringIcon,
      cardTitle: 'Monitoring, Optimization, and Continuous Improvement',
      cardDesc:
        'Models drift. Data distributions shift. We monitor performance with MLflow, retrain when degradation is detected, and optimise inference pipelines for latency and throughput over time.'
    }
  ]

  const current = steps[activeTab]
  const ActiveCardIcon = current.Icon

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          How We Deliver Custom{' '}
          <span className="text-[#00CE44] font-bold">
            AI Development Services
          </span>
        </h2>

        {/* Bottom Text */}
        <p className="mt-3 sm:mt-4 text-slate-300 text-[16px] sm:text-[18px] font-normal text-center max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          No shortcuts. No retrofitting. No surprises after launch.
        </p>

        {/* Interactive Step Navigation Tabs (6 Steps) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-8 overflow-x-auto lg:overflow-visible no-scrollbar mb-10 sm:mb-12 pt-4 pb-4 lg:pt-3 lg:pb-0 scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((st, idx) => {
            const isActive = activeTab === idx
            const StepIcon = st.Icon
            return (
              <button
                key={st.tabTitle}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className="shrink-0 min-w-[125px] sm:min-w-[140px] lg:min-w-0 group flex flex-col items-center text-center focus:outline-none cursor-pointer transition-colors duration-200 pt-1"
              >
                {/* Crisp Circular Icon Container (Zero Shadow) */}
                <div className="relative flex items-center justify-center mb-4">
                  <div
                    className={`w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#00CE44] text-black'
                        : 'bg-[#383838] text-[#00CE44] group-hover:bg-[#444444]'
                    }`}
                  >
                    <StepIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Step Number Pill Badge */}
                  <span
                    className={`absolute -top-1 -right-3.5 z-10 text-[11px] sm:text-[12px] font-mono font-medium px-2.5 py-0.5 rounded-full border whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-black text-white border-[#00CE44]'
                        : 'bg-black text-white border-[#00CE44]/80 group-hover:border-[#00CE44]'
                    }`}
                  >
                    {st.num}
                  </span>
                </div>

                {/* Tab Label */}
                <span
                  className={`text-[14px] sm:text-[15px] font-normal transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {st.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Card Box (Zero Shadow) */}
        <div className="bg-[#383838] border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-9 lg:p-11 shadow-none transition-colors duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Left: Crisp Circular Green Icon Container (Zero Shadow) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#00CE44] text-black flex items-center justify-center shrink-0">
              <ActiveCardIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11" />
            </div>

            {/* Right: Heading H3 + Description */}
            <div className="text-left flex-1">
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] leading-tight mb-2.5 sm:mb-3">
                {current.cardTitle}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-white/90 font-normal leading-relaxed">
                {current.cardDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

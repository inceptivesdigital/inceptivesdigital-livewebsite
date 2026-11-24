import React, { useState, useRef } from 'react'

const steps = [
  {
    num: '01',
    tabTitle: 'Discovery & Strategy',
    cardTitle: 'Discovery & Strategy',
    bullets: [
      {
        lead: 'Vision Mapping',
        text: 'We transform your business idea into blockchain possibilities.',
      },
      {
        lead: 'Feasibility Study',
        text: 'We validate use cases, ROI, and regulatory fit.',
      },
      {
        lead: 'Solution Blueprint',
        text: 'We create a custom architecture for long-term scalability.',
      },
    ],
  },
  {
    num: '02',
    tabTitle: 'Development',
    cardTitle: 'Development',
    bullets: [
      {
        lead: 'Smart Contract Engineering',
        text: 'We create tamper-proof contracts, powering your ecosystem.',
      },
      {
        lead: 'Feature Innovation',
        text: 'From wallets to cross-chain integrations, we will bring your product to life.',
      },
      {
        lead: 'Agile Delivery',
        text: 'Incremental builds will keep you in control of your progress.',
      },
    ],
  },
  {
    num: '03',
    tabTitle: 'Deployment',
    cardTitle: 'Deployment',
    bullets: [
      {
        lead: 'Security Assurance',
        text: 'Penetration tests and audits safeguard your platform.',
      },
      {
        lead: 'Seamless Rollout',
        text: 'We ensure smooth deployment on chosen networks.',
      },
      {
        lead: 'Ecosystem Integration',
        text: 'Your app connects with APIs, payment gateways, and other systems.',
      },
    ],
  },
  {
    num: '04',
    tabTitle: 'Ongoing Support',
    cardTitle: 'Ongoing Support',
    bullets: [
      {
        lead: 'Continuous Monitoring',
        text: 'Real-time insights keep performance optimized.',
      },
      {
        lead: 'User-Centric Scaling',
        text: 'We expand capacity as your audience grows.',
      },
      {
        lead: 'Trust Maintenance',
        text: 'Regular upgrades and compliance updates strengthen reliability.',
      },
    ],
  },
]

export default function BlockchainProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabsRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasMovedRef = useRef(false)

  const activeStep = steps[activeIndex]

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
    if (Math.abs(walk) > 4) hasMovedRef.current = true
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
    if (hasMovedRef.current) return
    setActiveIndex(idx)
    if (tabsRef.current && e?.currentTarget) {
      const container = tabsRef.current
      const target = e.currentTarget
      container.scrollTo({
        left: target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full bg-[#000000] text-white py-20 lg:py-24 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Comprehensive Blockchain Development Process We Follow
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            We deliver top-notch blockchain software development services through a structured, transparent, and client-focused approach that ensures measurable business value.
          </p>
        </div>

        {/* Single-Line Pill Tabs Bar (Exact Industries Style) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-4 items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-4 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`rounded-full shrink-0 lg:shrink min-w-[200px] lg:min-w-0 lg:w-full flex items-center justify-start gap-3 py-1.5 pl-1.5 pr-5 transition-all duration-200 cursor-pointer border-0 select-none ${
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

        {/* Single Wide Dark Grey Content Panel (Exact Industries Style) */}
        <div className="bg-[#333333] rounded-[14px] px-7 sm:px-10 lg:px-12 py-10 sm:py-12 min-h-[210px] flex flex-col justify-center text-left border-0">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#00CE44] tracking-tight mb-4">
            {activeStep.cardTitle}
          </h3>

          <ul className="space-y-3.5">
            {activeStep.bullets.map((b) => (
              <li
                key={b.lead}
                className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                <span className="text-white/90">
                  <strong className="text-[#00CE44] font-bold">{b.lead}</strong> – {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

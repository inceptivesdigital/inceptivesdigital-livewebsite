import React, { useState, useRef } from 'react'

const steps = [
  {
    num: '01.',
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
    num: '02.',
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
    num: '03.',
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
    num: '04.',
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
    <section className="w-full bg-[#202020] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Comprehensive Blockchain Development Process We Follow
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            We deliver top-notch blockchain software development services through a structured, transparent, and client-focused approach that ensures measurable business value.
          </p>
        </div>

        {/* 4 Single-Line Numbered Step Pills (Full Container Width on Desktop, Hidden-Scrollbar Scroll on Mobile) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full flex lg:grid lg:grid-cols-4 gap-4 mb-8 overflow-x-auto lg:overflow-visible no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className={`flex-1 shrink-0 min-w-max lg:min-w-0 lg:shrink flex items-center gap-3.5 px-5 py-4 rounded-[16px] transition-all duration-200 cursor-pointer border-0 focus:outline-none text-left whitespace-nowrap lg:w-full ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-bold'
                    : 'bg-[#333333] hover:bg-[#3e3e3e] text-white font-medium'
                }`}
              >
                <span className="w-9 h-9 rounded-full bg-white text-black font-extrabold text-[13px] flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <span className="text-[15px] sm:text-[16px] leading-snug">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Wide Dark Detail Card */}
        <div className="w-full bg-[#2b2b2b] rounded-[24px] p-8 sm:p-10 lg:p-12 text-left border border-white/10">
          <h3 className="text-white text-[26px] sm:text-[32px] font-bold leading-tight mb-6">
            {activeStep.cardTitle}
          </h3>

          <ul className="space-y-4">
            {activeStep.bullets.map((b) => (
              <li
                key={b.lead}
                className="flex items-start gap-3 text-[15px] sm:text-[17px] leading-relaxed"
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

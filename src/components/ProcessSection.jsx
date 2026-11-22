import { useState, useRef } from 'react'
import tab1Icon from '../assets/process/tab-1.png'
import tab2Icon from '../assets/process/tab-2.png'
import tab3Icon from '../assets/process/tab-3.png'
import tab4Icon from '../assets/process/tab-4.png'
import tab5Icon from '../assets/process/tab-5.png'
import tab6Icon from '../assets/process/tab-6.png'

export default function ProcessSection() {
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
      tabTitle: 'Product Intelligence',
      tabIcon: tab1Icon,
      cardIcon: tab1Icon,
      cardTitle: 'Product Intelligence',
      cardDesc: 'CTO-led analysis of your business model, user psychology, and market landscape before anything else. Where AI can solve a problem better than conventional logic, we identify that early. The output is a roadmap with real opinions, grounded in evidence.'
    },
    {
      num: '02.',
      tabTitle: 'Design',
      tabIcon: tab2Icon,
      cardIcon: tab2Icon,
      cardTitle: 'Design with Intent',
      cardDesc: 'Every screen is stress-tested against real user behaviour before development begins. Designed for clarity, the person using it for the first time should never have to think twice.'
    },
    {
      num: '03.',
      tabTitle: 'Engineering',
      tabIcon: tab3Icon,
      cardIcon: tab3Icon,
      cardTitle: 'Precision Engineering',
      cardDesc: 'Senior engineers own the core. Architecture decisions made on day one are the ones your product lives with for years. Clean, documented, built to be handed over.'
    },
    {
      num: '04.',
      tabTitle: 'Testing',
      tabIcon: tab4Icon,
      cardIcon: tab4Icon,
      cardTitle: 'Adversarial Testing',
      cardDesc: 'Edge cases, stress loads, and unexpected inputs are tested before your users encounter them. Every failure mode we can anticipate gets found in our environment, not yours.'
    },
    {
      num: '05.',
      tabTitle: 'Launch',
      tabIcon: tab5Icon,
      cardIcon: tab5Icon,
      cardTitle: 'Precision Launch',
      cardDesc: 'Launch day is an engineering event, managed with the same rigour as the build itself. Infrastructure, configuration, and production stability were handed over cleanly and stably.'
    },
    {
      num: '06.',
      tabTitle: 'Partnership',
      tabIcon: tab6Icon,
      cardIcon: tab6Icon,
      cardTitle: 'Continuous Partnership',
      cardDesc: 'The most important version of your product is the one shaped by real users after launch. We stay in, monitoring, refining, and evolving as the business changes.'
    }
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Top Heading: H2, 40px bold, text-center */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          Senior minds on your product.{' '}
          <span className="text-[#00CE44] italic font-bold">
            Every stage. Every decision.
          </span>
        </h2>

        {/* Bottom Text: 18px font-size, 400 font-weight, text-center */}
        <p className="mt-3 sm:mt-4 text-slate-300 text-[16px] sm:text-[18px] font-normal text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          See how our team solves complex business problems with innovative web, mobile, and AI-powered solutions.
        </p>

        {/* Interactive Step Navigation Tabs (6 Steps): Flex scrollable with drag-to-scroll & wheel scroll on small devices */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-8 overflow-x-auto lg:overflow-visible no-scrollbar mb-10 sm:mb-14 pt-4 pb-4 lg:pt-3 lg:pb-0 scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((st, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={st.tabTitle}
                onClick={(e) => handleTabClick(idx, e)}
                className="shrink-0 min-w-[125px] sm:min-w-[140px] lg:min-w-0 group flex flex-col items-center text-center focus:outline-none cursor-pointer transition-all duration-300 pt-1"
              >
                {/* Circular Icon with Number Badge (No shadow on icon) */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center rounded-full mb-3.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00CE44] scale-105'
                      : 'bg-[#202125] hover:bg-[#282a30] hover:scale-105'
                  }`}
                >
                  <img
                    src={st.tabIcon}
                    alt={st.tabTitle}
                    className={`w-7 h-7 sm:w-8 sm:h-8 object-contain transition-all duration-300 ${
                      isActive ? 'brightness-0' : ''
                    }`}
                  />

                  {/* Step Number Badge with 50px border-radius: fully visible and never obscured */}
                  <span
                    className={`absolute -top-1 -right-3.5 sm:-right-4.5 z-10 text-[11px] sm:text-[12px] font-mono font-medium px-2 sm:px-2.5 py-0.5 rounded-[50px] border whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-black text-[#00CE44] border-[#00CE44]'
                        : 'bg-black text-[#00CE44] border-[#00CE44]/60 group-hover:border-[#00CE44]'
                    }`}
                  >
                    {st.num}
                  </span>
                </div>

                {/* Tab Label: Active is purely text-white without bold weight */}
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

        {/* Content Card Box: Rounded, with exact matching Tab Icon on Left, H3 Title 25px & Text 16px on Right (Zero Shadows) */}
        <div className="bg-[#1b1c20] border border-[#2d2f36] rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 lg:p-11 shadow-none transition-all duration-300 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left: Green Circle with exact matching Tab Icon (Zero shadow, black icon) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#00CE44] flex items-center justify-center shrink-0 shadow-none">
              <img
                key={current.num}
                src={current.tabIcon}
                alt={current.cardTitle}
                loading="eager"
                decoding="sync"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain brightness-0"
              />
            </div>

            {/* Right: Heading H3 (25px) + Text P (16px) */}
            <div className="text-left flex-1">
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] leading-tight mb-2.5 sm:mb-3">
                {current.cardTitle}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed font-normal max-w-4xl">
                {current.cardDesc}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

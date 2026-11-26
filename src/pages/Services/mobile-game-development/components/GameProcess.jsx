import { useState, useRef } from 'react'

const STEPS = [
  {
    num: '01',
    tabTitle: 'Discover',
    title: 'Discover',
    description:
      "Our process for mobile game development begins by understanding the game's concept and its target market. Here, we dive deep into your target market, gather insights, and form a strategy that we will follow till the launch.",
  },
  {
    num: '02',
    tabTitle: 'Design',
    title: 'Design',
    description:
      'Our game designers craft core gameplay loops, level architecture, character art, UI/UX wireframes, and interactive prototypes so you can experience the look and feel of the game before full production begins.',
  },
  {
    num: '03',
    tabTitle: 'Develop',
    title: 'Develop',
    description:
      'Our engineers bring the design to life using Unity, Unreal Engine, Godot, or native iOS and Android stacks—building responsive mechanics, multiplayer backends, physics systems, and monetization features in Agile sprints.',
  },
  {
    num: '04',
    tabTitle: 'Test',
    title: 'Test',
    description:
      'Every build goes through thorough real-device QA testing across iOS and Android tiers for frame rate stability, memory usage, gameplay balance, edge-case bugs, and store compliance before release.',
  },
  {
    num: '05',
    tabTitle: 'Launch',
    title: 'Launch',
    description:
      'We manage Apple App Store and Google Play submission, store optimization, and post-launch live operations—monitoring player analytics, shipping updates, and keeping retention high after day one.',
  },
]

export default function GameProcess() {
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
    if (hasMovedRef.current) return
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

  const current = STEPS[activeTab]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.16] mb-4">
            Our End-to-End Mobile Game Development Process
          </h2>
        </div>

        {/* Single-Line Pill Tabs Bar (Exact HealthcareProcess Design) */}
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
          {STEPS.map((step, idx) => {
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

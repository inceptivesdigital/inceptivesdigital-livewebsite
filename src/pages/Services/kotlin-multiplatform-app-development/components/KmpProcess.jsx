import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function KmpProcess() {
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
      tabTitle: 'Module Boundary',
      cardTitle: 'Defining the Shared Module Boundary',
      cardDesc: (
        <>
          The{' '}
          <Link
            to="/discovery-sprint"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            discovery sprint
          </Link>{' '}
          defines the shared module boundary before any product code is written. Which layers belong in shared code, where platform logic begins, and the interface contracts between them are all resolved here.
        </>
      ),
    },
    {
      num: '02',
      tabTitle: 'Shared Module',
      cardTitle: 'Shared Module Development',
      cardDesc:
        'Domain models, networking, persistence, and state management take shape inside the shared Kotlin module. Every component is tested at this layer first, so bugs surface where they are cheapest to fix.',
    },
    {
      num: '03',
      tabTitle: 'Platform Integration',
      cardTitle: 'Platform Integration',
      cardDesc:
        'The shared module moves into each platform layer next. On iOS, types are mapped to idiomatic Swift, and coroutines bridge to async/await. On Android, the module is consumed directly, no translation layer is involved.',
    },
    {
      num: '04',
      tabTitle: 'Platform UI',
      cardTitle: 'Platform UI Development',
      cardDesc: (
        <>
          With the shared module stable, the platform UI runs in parallel. Jetpack Compose drives Android, and whichever side of the{' '}
          <Link
            to="/blog/swiftui-vs-uikit"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            SwiftUI vs UIKit
          </Link>{' '}
          decision fits your product drives iOS, both consuming shared state and domain logic through clean interfaces.
        </>
      ),
    },
    {
      num: '05',
      tabTitle: 'QA & Testing',
      cardTitle: 'QA and Integration Testing',
      cardDesc: (
        <>
          The product is tested on both platforms with deliberate attention to logic output, offline behaviour, sync accuracy, and edge cases that surface differently across OS versions and devices. Structured{' '}
          <Link
            to="/blog/mobile-app-testing-strategies"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            mobile app testing strategies
          </Link>{' '}
          verify both shared logic and platform-specific behavior.
        </>
      ),
    },
    {
      num: '06',
      tabTitle: 'Deployment & Support',
      cardTitle: 'Deployment and Ongoing Support',
      cardDesc: (
        <>
          <Link
            to="/blog/publish-update-an-app-on-app-store-google-play"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            App Store and Play Store submission
          </Link>
          , CI/CD configuration for multiplatform builds, and engineering documentation come together here. The shared module stays supported well past launch through{' '}
          <Link
            to="/post-launch-analytics-iteration"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            post-launch analytics iteration
          </Link>
          , not handed off and forgotten.
        </>
      ),
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.16] mb-4">
            Our{' '}
            <span className="text-[#00CE44]">Kotlin Multiplatform Development</span> Process
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Inceptives Digital approaches Kotlin Multiplatform development services with a clear delivery plan tailored to your product. Our Kotlin app development team defines the shared architecture first, then advances through native integration and testing toward production release.
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
                className={`rounded-full shrink-0 lg:shrink min-w-[175px] lg:min-w-0 lg:w-full flex items-center justify-start gap-3 py-1.5 pl-1.5 pr-4 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-white font-semibold'
                    : 'bg-[#2c2c2c] hover:bg-[#383838] text-white/90 font-medium'
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <span className="text-sm sm:text-[14px] whitespace-nowrap lg:truncate">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Single Wide Dark Grey Content Panel */}
        <div className="bg-[#333333] rounded-[14px] px-7 sm:px-10 lg:px-12 py-10 sm:py-12 min-h-[210px] flex flex-col justify-center text-left border-0">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#00CE44] tracking-tight mb-3">
            {current.cardTitle}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-5xl">
            {current.cardDesc}
          </p>
        </div>
      </div>
    </section>
  )
}

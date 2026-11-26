import { useState, useRef } from 'react'

export default function LocationProcessLayout({
  eyebrow = 'Execution Methodology',
  heading,
  subtitle,
  steps = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabsRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasMovedRef = useRef(false)

  if (!steps.length) return null

  const activeStep = steps[activeIndex] || steps[0]

  const gridColsClass =
    steps.length === 7
      ? 'xl:grid xl:grid-cols-7 xl:overflow-visible'
      : steps.length === 5
      ? 'lg:grid lg:grid-cols-5 lg:overflow-visible'
      : steps.length === 4
      ? 'lg:grid lg:grid-cols-4 lg:overflow-visible'
      : 'lg:grid lg:grid-cols-6 lg:overflow-visible'

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

  const handleTabClick = (index, e) => {
    if (hasMovedRef.current) return
    setActiveIndex(index)
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
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {eyebrow && (
            <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Single-Line Pill Tabs (Horizontal swipe on mobile, centered wrapping pills on md+) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full flex flex-nowrap md:flex-wrap md:justify-center gap-3 mb-6 overflow-x-auto md:overflow-visible no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = index === activeIndex
            const numLabel = String(step.num || `0${index + 1}`).replace(/\.$/, '')
            const tabLabel = step.tabTitle || step.title
            return (
              <button
                key={numLabel + tabLabel}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`rounded-full shrink-0 w-auto max-w-full overflow-hidden flex items-center justify-start gap-2.5 py-2 pl-2 pr-4 sm:pr-5 transition-all duration-200 cursor-pointer border-0 focus:outline-none select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-white font-semibold'
                    : 'bg-[#2c2c2c] hover:bg-[#383838] text-white/90 font-medium'
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                  {numLabel}
                </span>
                <span className="text-sm sm:text-[15px] whitespace-nowrap truncate">
                  {tabLabel}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Card */}
        <div className="w-full bg-[#333333] rounded-[14px] px-7 sm:px-10 lg:px-12 py-10 sm:py-12 min-h-[210px] flex flex-col justify-center text-left border-0">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#00CE44] tracking-tight mb-3">
            {activeStep.cardTitle || activeStep.title}
          </h3>
          <p className="text-white/85 text-base sm:text-[17px] leading-relaxed font-normal max-w-4xl">
            {activeStep.desc || activeStep.description}
          </p>
        </div>
      </div>
    </section>
  )
}

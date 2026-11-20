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

        {/* Single-Line Pill Tabs (Horizontal hidden-scrollbar scroll on mobile/tablet, full-width grid on lg+) */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className={`w-full flex ${gridColsClass} gap-3 mb-6 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing select-none`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = index === activeIndex
            const numLabel = step.num || `0${index + 1}.`
            const tabLabel = step.tabTitle || step.title
            return (
              <button
                key={numLabel + tabLabel}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`flex-1 shrink-0 min-w-max lg:min-w-0 lg:shrink flex items-center gap-2.5 px-4 lg:px-3.5 py-2.5 rounded-full transition-all duration-200 cursor-pointer border-0 focus:outline-none text-left whitespace-nowrap lg:w-full ${
                  isActive
                    ? 'bg-[#00CE44] text-black'
                    : 'bg-[#1e2025] hover:bg-[#272931] text-white/90'
                }`}
              >
                <span className="w-7 h-7 rounded-full bg-white text-black font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0">
                  {numLabel}
                </span>
                <span
                  className={`text-xs xl:text-[13px] tracking-tight leading-snug lg:truncate ${
                    isActive ? 'font-bold text-black' : 'font-medium text-white/90'
                  }`}
                >
                  {tabLabel}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Card */}
        <div
          className={`w-full bg-[#1b1c20] rounded-[24px] sm:rounded-[28px] p-7 sm:p-10 lg:p-12 text-left ${
            activeStep.image ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_160px] gap-8 items-center' : ''
          }`}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              {activeStep.cardTitle || activeStep.title}
            </h3>
            <p className="text-white/85 text-base sm:text-[17px] leading-relaxed font-normal max-w-4xl">
              {activeStep.desc || activeStep.description}
            </p>
          </div>
          {activeStep.image && (
            <img
              src={activeStep.image}
              alt={activeStep.imageAlt || ''}
              className="w-28 h-28 lg:w-36 lg:h-36 object-contain justify-self-center"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  )
}

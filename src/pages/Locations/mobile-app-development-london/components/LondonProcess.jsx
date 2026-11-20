import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function LondonProcess() {
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
      num: '01.',
      tabTitle: 'Product Validation',
      cardTitle: '1. Product Validation',
      desc: (
        <>
          We{' '}
          <Link to="/blog/how-to-validate-your-mobile-app-idea" className="text-[#00CE44] hover:underline font-medium">
            validate your app idea
          </Link>{' '}
          by testing the assumptions it rests on, starting with the riskiest. Confirming direction early keeps a course correction to the cost of a conversation.
        </>
      ),
    },
    {
      num: '02.',
      tabTitle: 'Product Discovery & Planning',
      cardTitle: '2. Product Discovery & Planning',
      desc: (
        <>
          A{' '}
          <Link to="/discovery-sprint" className="text-[#00CE44] hover:underline font-medium">
            discovery sprint
          </Link>{' '}
          maps what to keep and what to set aside for later. A focused roadmap of the features that carry real weight sets the order of work from day one.
        </>
      ),
    },
    {
      num: '03.',
      tabTitle: 'UX/UI Design & Prototyping',
      cardTitle: '3. UX/UI Design & Prototyping',
      desc: (
        <>
          <Link to="/ui-ux-design" className="text-[#00CE44] hover:underline font-medium">
            UI/UX design
          </Link>{' '}
          shapes the experience before development begins. Flows, wireframes, and clickable prototypes show how the product works and smooth rough edges while changes stay cheap.
        </>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Agile Development',
      cardTitle: '4. Agile Development',
      desc: (
        <>
          Engineering moves in short cycles that keep the{' '}
          <Link to="/blog/app-development-timeline" className="text-[#00CE44] hover:underline font-medium">
            app development timeline
          </Link>{' '}
          on track, on an architecture built to grow. Working software arrives early and often, keeping the product close to real feedback and the original intent.
        </>
      ),
    },
    {
      num: '05.',
      tabTitle: 'Quality Assurance & Optimisation',
      cardTitle: '5. Quality Assurance & Optimisation',
      desc: (
        <>
          Our{' '}
          <Link to="/blog/mobile-app-testing-strategies" className="text-[#00CE44] hover:underline font-medium">
            mobile app testing strategies
          </Link>{' '}
          reflect how people actually use the product on real devices under real conditions. We resolve performance, security, and edge cases here, and the experience holds from launch day.
        </>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Launch & Ongoing Support',
      cardTitle: '6. Launch & Ongoing Support',
      desc: (
        <>
          Launch marks a milestone, and the work continues past it. The release goes to the App Store and Google Play with{' '}
          <Link to="/app-store-optimization" className="text-[#00CE44] hover:underline font-medium">
            app store optimization
          </Link>
          , and then we monitor performance closely to guide the next round of improvements.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading: Matching Homepage ProcessSection.jsx Font Sizes */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          Our Approach to Take Your App{' '}
          <span className="text-[#00CE44]">From Idea to Launch</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-slate-300 text-[16px] sm:text-[18px] font-normal text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Successful mobile products begin with informed decisions. Our process reduces uncertainty by validating ideas, aligning stakeholders, and creating a structured path from concept to launch.
        </p>

        {/* Process Tabs: Full width 5-col grid on desktop, draggable hidden-scrollbar horizontal scroll on small devices */}
        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 items-center gap-2 sm:gap-2.5 lg:gap-3 overflow-x-auto no-scrollbar py-2 mb-10 select-none scroll-smooth cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={step.num}
                type="button"
                onClick={(e) => handleTabClick(index, e)}
                className={`rounded-full shrink-0 lg:shrink min-w-[200px] lg:min-w-0 lg:w-full flex items-center justify-start gap-2 py-2.5 pl-2.5 pr-3.5 transition-all duration-200 cursor-pointer border-0 select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-black'
                    : 'bg-[#1e2025] hover:bg-[#272931] text-white/90'
                }`}
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black font-extrabold text-[12px] sm:text-[13px] flex items-center justify-center shrink-0">
                  {step.num}
                </span>

                <span
                  className={`text-[14px] sm:text-[15px] whitespace-nowrap truncate ${
                    isActive ? 'font-bold text-black' : 'font-normal text-white'
                  }`}
                >
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Content Card Box: Exact Homepage ProcessSection.jsx Typography */}
        <div className="w-full bg-[#1b1c20] rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 lg:p-11 border-0 shadow-none transition-all duration-300 text-left">
          <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] leading-tight mb-2.5 sm:mb-3">
            {steps[activeTab].cardTitle}
          </h3>
          <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed font-normal max-w-4xl">
            {steps[activeTab].desc}
          </p>
        </div>
      </div>
    </section>
  )
}

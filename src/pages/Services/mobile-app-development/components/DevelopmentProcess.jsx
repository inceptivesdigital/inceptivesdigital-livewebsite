import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function DevelopmentProcess() {
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
      tabTitle: 'Discovery',
      tabIcon: '/assets/process/tab-1.png',
      cardTitle: 'Product Discovery & Technical Scoping',
      cardDesc:
        'We examine your business requirements and existing system dependencies before defining the application scope. Senior engineers then assess platform feasibility and establish the architecture that will guide development.',
    },
    {
      num: '02.',
      tabTitle: 'UI/UX Design',
      tabIcon: '/assets/process/tab-2.png',
      cardTitle: 'UI/UX Design & Interactive Prototyping',
      cardDesc: (
        <>
          With the product scope in place, designers translate critical user journeys into{' '}
          <a
            href="https://inceptivesdigital.com/interactive-prototyping"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            interactive Figma prototypes
          </a>
          . Client reviews help refine the interface before mobile engineers begin production development.
        </>
      ),
    },
    {
      num: '03.',
      tabTitle: 'Development',
      tabIcon: '/assets/process/tab-3.png',
      cardTitle: 'Mobile App Development & API Integration',
      cardDesc: (
        <>
          Once the team approves the designs, our developers begin native or cross-platform engineering in two-week sprints. Our{' '}
          <a
            href="https://inceptivesdigital.com/backend-api-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            backend API development
          </a>{' '}
          specialists integrate the required APIs, while regular working builds give clients visibility into implementation.
        </>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Testing & QA',
      tabIcon: '/assets/process/tab-4.png',
      cardTitle: 'Quality Assurance & Device Testing',
      cardDesc:
        'As development progresses, QA engineers test completed functionality on supported iOS and Android devices. They also validate API behavior and resolve release-blocking issues before the application enters production.',
    },
    {
      num: '05.',
      tabTitle: 'Deployment',
      tabIcon: '/assets/process/tab-5.png',
      cardTitle: 'App Store Deployment & Release Management',
      cardDesc: (
        <>
          Following QA approval, the release team prepares production builds for{' '}
          <a
            href="https://inceptivesdigital.com/blog/publish-update-an-app-on-app-store-google-play"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Apple App Store and Google Play submission
          </a>
          . We coordinate store requirements with backend deployment to complete the planned release.
        </>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Optimization',
      tabIcon: '/assets/process/tab-6.png',
      cardTitle: 'Post-Launch Monitoring & Optimization',
      cardDesc:
        'After deployment, the team monitors application performance through tools such as Firebase Crashlytics. Usage analytics then inform future development priorities, while the agreed maintenance plan covers ongoing technical support.',
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Top Heading: H2, 40px bold, text-center */}
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          Our <span className="text-[#00CE44]">Mobile App Development Process,</span>{' '}
          From Discovery to Deployment
        </h2>

        {/* Bottom Text: 16px font-size, 400 font-weight, text-center */}
        <p className="mt-3 sm:mt-4 text-white/90 text-[16px] font-normal text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Every custom mobile app development project starts with a clear technical scope. Our process connects product requirements with engineering milestones, giving clients direct visibility into development progress and the decisions behind each release.
        </p>

        {/* Interactive Step Navigation Tabs (6 Steps): Exact Clone of Homepage ProcessSection.jsx */}
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
                type="button"
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

                  {/* Step Number Badge with 50px border-radius */}
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

        {/* Content Card Box: Exact Clone of Homepage ProcessSection.jsx (Zero Borders, Zero Shadows) */}
        <div className="bg-[#1b1c20] border-0 rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 lg:p-11 shadow-none transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left: Green Circle with exact matching Tab Icon (Zero shadow, black icon) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#00CE44] flex items-center justify-center shrink-0 shadow-none">
              <img
                src={current.tabIcon}
                alt={current.cardTitle}
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

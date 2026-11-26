import { useState, useRef } from 'react'
import tab1Icon from '../../../../assets/process/tab-1.png'
import tab2Icon from '../../../../assets/process/tab-2.png'
import tab3Icon from '../../../../assets/process/tab-3.png'
import tab4Icon from '../../../../assets/process/tab-4.png'
import tab5Icon from '../../../../assets/process/tab-5.png'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery & Assessment',
    tabIcon: tab1Icon,
    cardTitle: '1. Discovery & Assessment',
    cardDesc: (
      <>
        As outlined in our{' '}
        <Link
          to="/blog/ai-mvp-development-guide"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI MVP development guide
        </Link>
        , the visual task, deployment environment, and available data are evaluated before development begins. Technical constraints identified at this stage are significantly less expensive to address than after training.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Data Preparation',
    tabIcon: tab2Icon,
    cardTitle: '2. Data Preparation',
    cardDesc:
      'Training data is curated and annotated to reflect real operating conditions. Coverage gaps, class imbalance, and missing edge cases are addressed before model development begins.',
  },
  {
    num: '03.',
    tabTitle: 'Model Training',
    tabIcon: tab3Icon,
    cardTitle: '3. Model Training',
    cardDesc: (
      <>
        <Link
          to="/ai-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI development
        </Link>{' '}
        for computer vision starts with deep learning architectures selected for the specific visual task and deployment requirements. Models are validated against operational data, not idealised testing conditions.
      </>
    ),
  },
  {
    num: '04.',
    tabTitle: 'Integration & Deploy',
    tabIcon: tab4Icon,
    cardTitle: '4. Integration & Deployment',
    cardDesc:
      'Computer vision outputs are integrated into existing systems and workflows. Accuracy, latency, throughput, and infrastructure compatibility are verified before release.',
  },
  {
    num: '05.',
    tabTitle: 'Monitor & Optimize',
    tabIcon: tab5Icon,
    cardTitle: '5. Monitoring & Optimization',
    cardDesc: (
      <>
        Operational conditions change over time.{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Post-launch analytics and iteration
        </Link>{' '}
        use performance monitoring and retraining pipelines to keep model accuracy stable as data and environments evolve.
      </>
    ),
  },
]

export default function ComputerVisionProcess() {
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

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl mx-auto">
          Computer Vision Development from{' '}
          <span className="text-[#00CE44] italic font-bold">Data to Deployment</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-slate-300 text-[16px] sm:text-[18px] font-normal text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Every step exists because skipping it costs more than doing it.
        </p>

        <div
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          className="w-full max-w-full flex lg:grid lg:grid-cols-5 gap-6 sm:gap-8 overflow-x-auto lg:overflow-visible no-scrollbar mb-10 sm:mb-14 pt-4 pb-4 lg:pt-3 lg:pb-0 scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((st, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={st.tabTitle}
                type="button"
                onClick={(e) => handleTabClick(idx, e)}
                className="shrink-0 min-w-[140px] lg:min-w-0 group flex flex-col items-center text-center focus:outline-none cursor-pointer transition-all duration-300 pt-1"
              >
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

                <span
                  className={`text-[14px] sm:text-[15px] font-normal transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {st.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        <div className="bg-[#1b1c20] border border-[#2d2f36] rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 lg:p-11 shadow-none transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
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

            <div className="text-left flex-1">
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] leading-tight mb-2.5 sm:mb-3">
                {current.cardTitle}
              </h3>
              <div className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed font-normal max-w-4xl">
                {current.cardDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

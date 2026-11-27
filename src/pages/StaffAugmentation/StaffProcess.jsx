import { useState } from 'react'

const STEPS = [
  {
    num: '01',
    tabTitle: 'Requirements Analysis',
    cardTitle: 'Requirements Analysis',
    cardDesc:
      'We analyze your project needs, technical requirements, and the structure of your team. In this way, we can ascertain the exact skills and expertise you need.',
  },
  {
    num: '02',
    tabTitle: 'Talent Sourcing',
    cardTitle: 'Talent Sourcing',
    cardDesc:
      'Our extensive talent network across the USA, UK, and Pakistan helps us source and screen the best professionals who have the right skills and experience to match your project.',
  },
  {
    num: '03',
    tabTitle: 'Onboarding and Integration',
    cardTitle: 'Onboarding and Integration',
    cardDesc:
      'Selected candidates will be integrated into your team with speed. They will adapt quickly to your tools, workflows, and methodologies for maximum effectiveness in collaboration.',
  },
  {
    num: '04',
    tabTitle: 'Ongoing Support & Management',
    cardTitle: 'Ongoing Support & Management',
    cardDesc:
      'We offer ongoing, continuous support with regular check-ins, performance reviews on productivity, and quality aligned to your business goals.',
  },
]

export default function StaffProcess() {
  const [activeTab, setActiveTab] = useState(0)
  const current = STEPS[activeTab] || STEPS[0]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Execution Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Simple And Secure{' '}
            <span className="text-[#00CE44]">Staff Augmentation Process</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal">
            From requirements analysis to seamless integration and ongoing support.
          </p>
        </div>

        {/* Full-Width Pill Tabs Row matching Content Card Width */}
        <div className="w-full flex flex-nowrap lg:grid lg:grid-cols-4 gap-3 sm:gap-4 mb-6 overflow-x-auto lg:overflow-visible no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {STEPS.map((step, index) => {
            const isActive = index === activeTab
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`w-auto lg:w-full shrink-0 lg:shrink whitespace-nowrap rounded-full flex items-center justify-start gap-3 py-2.5 pl-2.5 pr-5 transition-all duration-200 cursor-pointer border-0 focus:outline-none select-none ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-semibold'
                    : 'bg-[#2c2c2c] hover:bg-[#383838] text-white/90 font-medium'
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <span className="text-sm sm:text-[15px] text-left leading-tight">
                  {step.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Card */}
        <div className="w-full bg-[#383838] rounded-[14px] px-7 sm:px-10 lg:px-12 py-10 sm:py-12 min-h-[200px] flex flex-col justify-center text-left border-0">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#00CE44] tracking-tight mb-3">
            {current.cardTitle}
          </h3>
          <p className="text-white/90 text-base sm:text-[17px] leading-relaxed font-normal max-w-4xl">
            {current.cardDesc}
          </p>
        </div>
      </div>
    </section>
  )
}

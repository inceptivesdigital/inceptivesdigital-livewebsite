import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Process Section matching media_1794918328260_16fd4863.jpg
// Header: "How Our Mobile App Development Company Builds High-Performing Apps"
// Tabs: 6 Pill-shaped buttons with white number circles (01., 02., etc.)
// Active Pill: Vibrant Green (#00CE44) with black text
// Inactive Pill: Dark Charcoal (#1e2025) with white text
// Content: Wide dark rounded box with bold card title and detailed description

export default function SFProcess() {
  const [activeTab, setActiveTab] = useState(0)
  const tabsRef = useRef(null)

  const steps = [
    {
      num: '01.',
      tabTitle: 'Product Brief & Scope',
      cardTitle: '1. Product Brief & Scope',
      renderDesc: () => (
        <p>
          A focused{' '}
          <Link
            to="/product-strategy-consulting"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            product strategy
          </Link>{' '}
          brief sets out the business problem, customer audience, essential workflows, and release constraints. We document technical dependencies, feature priorities, budget assumptions, compliance needs, and acceptance criteria before internal approval of the delivery roadmap.
        </p>
      ),
    },
    {
      num: '02.',
      tabTitle: 'Architecture & Compliance',
      cardTitle: '2. Architecture & Compliance Planning',
      renderDesc: () => (
        <p>
          Our app developers in San Francisco establish application architecture, APIs, data flows, and cloud infrastructure before actual mobile implementation begins. Applicable HIPAA, PCI DSS, SOC 2, and California privacy requirements inform access controls, auditability, technical design, and ongoing operational readiness from the outset.
        </p>
      ),
    },
    {
      num: '03.',
      tabTitle: 'UX/UI Design',
      cardTitle: '3. UX/UI Design & Validation',
      renderDesc: () => (
        <p>
          User journeys, wireframes, and{' '}
          <Link
            to="/interactive-prototyping"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            interactive prototypes
          </Link>{' '}
          are designed around validated product requirements. Every interaction is reviewed, refined, and approved before development, reducing rework and keeping the product aligned with user expectations.
        </p>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Agile Sprints',
      cardTitle: '4. Agile Engineering Sprints',
      renderDesc: () => (
        <p>
          Engineering progresses through structured two-week sprints with production-ready software delivered for regular review. Continuous collaboration, code reviews, and iterative releases keep quality high while maintaining development momentum.
        </p>
      ),
    },
    {
      num: '05.',
      tabTitle: 'QA & Launch',
      cardTitle: '5. Quality Assurance & Launch Readiness',
      renderDesc: () => (
        <p>
          Every release undergoes functional, performance, security, compatibility, and usability{' '}
          <Link
            to="/blog/mobile-app-testing-strategies"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            testing strategies
          </Link>{' '}
          across devices and operating systems. Issues are resolved before deployment to deliver a reliable App Store and Google Play release.
        </p>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Deployment & Support',
      cardTitle: '6. Deployment & Ongoing Product Support',
      renderDesc: () => (
        <p>
          We manage App Store and Google Play submissions, release monitoring, and production deployment end-to-end. After launch, ongoing maintenance, performance optimization, security updates, and feature enhancements keep your mobile application stable as your business evolves.
        </p>
      ),
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            A Structured Approach to{' '}
            <span className="text-[#00CE44]">San Francisco Mobile App Development</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] font-normal leading-relaxed max-w-4xl mx-auto">
            Our mobile app development process covers discovery, architecture, UX/UI design, engineering sprints, QA, and launch. Written scope and regular reviews keep founders, product managers, and enterprise stakeholders aligned on critical dependencies, acceptance criteria, and upcoming release decisions throughout delivery.
          </p>
        </div>

        {/* 6 Pill-Shaped Step Tabs: Strictly 1 Single Line, Perfectly Fitted */}
        <div
          ref={tabsRef}
          className="w-full flex items-center justify-start lg:justify-center gap-1 sm:gap-1.5 lg:gap-2 xl:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 select-none"
        >
          {steps.map((st, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={st.tabTitle}
                onClick={() => setActiveTab(idx)}
                className={`rounded-full shrink-0 flex items-center gap-1.5 sm:gap-2 py-1.5 pl-1.5 pr-2.5 sm:pr-3 xl:pr-4 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#00CE44] text-black border border-transparent shadow-lg shadow-[#00CE44]/20'
                    : 'bg-[#1e2025] hover:bg-[#272931] text-white border border-white/5'
                }`}
              >
                {/* White Circle with Step Number */}
                <span className="w-6 h-6 rounded-full bg-white text-black font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {st.num}
                </span>

                {/* Tab Label */}
                <span
                  className={`text-[11.5px] sm:text-xs xl:text-[13px] whitespace-nowrap ${
                    isActive ? 'font-bold text-black' : 'font-medium text-white/90'
                  }`}
                >
                  {st.tabTitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Box: Wide Dark Rounded Card Matching media_1794918328260_16fd4863.jpg */}
        <div className="mt-8 sm:mt-10 bg-[#18191e] border border-white/5 rounded-[18px] sm:rounded-[22px] p-7 sm:p-10 lg:p-12 text-left shadow-xl transition-all duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            {current.cardTitle}
          </h3>
          <div className="text-white/85 text-base sm:text-[17px] leading-relaxed font-normal">
            {current.renderDesc()}
          </div>
        </div>
      </div>
    </section>
  )
}

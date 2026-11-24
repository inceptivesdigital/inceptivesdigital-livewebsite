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
      tabTitle: 'Exploration & Planning',
      cardTitle: 'Exploration & Planning',
      renderDesc: () => (
        <div className="space-y-3">
          <p>
            First of all, we analyze your business objectives, audience, and competitors. To do so, we utilize tools such as Jira, Confluence, and Miro to determine app architecture, database structure, API integrations, and feature timeline. Such practices during this phase guarantee that your mobile app development project is in sync with measurable KPIs and future-proof scalability.
          </p>
          <p className="text-white/70 text-sm sm:text-[15px]">
            A focused{' '}
            <Link
              to="/product-strategy-consulting"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              product strategy
            </Link>{' '}
            brief sets out the business problem, customer audience, essential workflows, and release constraints. We document technical dependencies, feature priorities, budget assumptions, and acceptance criteria before internal approval of the delivery roadmap.
          </p>
        </div>
      ),
    },
    {
      num: '02.',
      tabTitle: 'UI/UX Design',
      cardTitle: 'UI/UX Design & Prototyping',
      renderDesc: () => (
        <div className="space-y-3">
          <p>
            User journeys, wireframes, and{' '}
            <Link
              to="/interactive-prototyping"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              interactive prototypes
            </Link>{' '}
            are designed around validated product requirements. Every screen is stress-tested against real user behavior before development begins, ensuring clarity so first-time users navigate intuitively without friction.
          </p>
          <p className="text-white/70 text-sm sm:text-[15px]">
            Interactive Figma prototypes allow stakeholders to click through real workflows, test accessibility contrast, and refine interface states before engineering sprints commence, eliminating costly mid-build redesigns.
          </p>
        </div>
      ),
    },
    {
      num: '03.',
      tabTitle: 'Development',
      cardTitle: 'Agile Engineering & Development Sprints',
      renderDesc: () => (
        <div className="space-y-3">
          <p>
            Engineering progresses through structured two-week sprints with production-ready software delivered for regular review. Senior mobile engineers write clean, documented Swift, SwiftUI, Kotlin, or React Native / Flutter code built on scalable architectural foundations.
          </p>
          <p className="text-white/70 text-sm sm:text-[15px]">
            Continuous collaboration, pull request peer reviews, and automated CI/CD pipelines keep code quality high while maintaining rapid engineering momentum toward milestone deliverables.
          </p>
        </div>
      ),
    },
    {
      num: '04.',
      tabTitle: 'Quality Assurance & Testing',
      cardTitle: 'Quality Assurance & Testing',
      renderDesc: () => (
        <div className="space-y-3">
          <p>
            Every release undergoes functional, performance, security, compatibility, and usability{' '}
            <a
              href="https://inceptivesdigital.com/blog/mobile-app-testing-strategies"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              testing strategies
            </a>{' '}
            across real physical iOS and Android devices, screen sizes, and operating system versions.
          </p>
          <p className="text-white/70 text-sm sm:text-[15px]">
            Automated regression suites, network latency simulation, API edge-case stress testing, and California privacy compliance checks ensure all defects are detected and resolved before launch.
          </p>
        </div>
      ),
    },
    {
      num: '05.',
      tabTitle: 'Release',
      cardTitle: 'App Store & Google Play Release',
      renderDesc: () => (
        <div className="space-y-3">
          <p>
            Launch day is managed as a mission-critical engineering event. We manage end-to-end Apple App Store and Google Play compliance reviews, provisioning profiles, security certificates, privacy manifests, and store listings.
          </p>
          <p className="text-white/70 text-sm sm:text-[15px]">
            Production cloud infrastructure, multi-region database scaling, and crash reporting telemetry (Sentry, Firebase) are verified in real time to ensure flawless launch day performance.
          </p>
        </div>
      ),
    },
    {
      num: '06.',
      tabTitle: 'Post-Release Optimization',
      cardTitle: 'Post-Release Optimization & Ongoing Support',
      renderDesc: () => (
        <div className="space-y-3">
          <p>
            The most impactful version of your application is the one shaped by real-world user metrics after launch. We monitor production performance, user session drop-offs, and crash-free rates, deploying continuous optimizations.
          </p>
          <p className="text-white/70 text-sm sm:text-[15px]">
            Ongoing SLA support includes OS version compatibility updates, third-party API deprecation monitoring, security patches, and iterative roadmap enhancements as your business scales.
          </p>
        </div>
      ),
    },
  ]

  const current = steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0c0d10] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Matching media_1794918328260_16fd4863.jpg */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            How Our Mobile App Development Company Builds{' '}
            <span className="text-[#00CE44]">High-Performing Apps</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] font-normal leading-relaxed max-w-4xl mx-auto">
            Our mobile app development company believes in building scalable digital solutions rather than just building an ordinary app. Our mobile app development process takes raw ideas and builds them into performance-driven digital products. Merging tactics, imagination, and cutting-edge tech, we make sure that the whole process is valuable, resulting in apps that are successful, interactive, and long-lasting.
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

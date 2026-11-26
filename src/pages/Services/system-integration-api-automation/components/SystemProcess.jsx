import { useState } from 'react'
import { Activity, GitBranch, Network, Search, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: Search,
    tab: 'Discovery',
    title: 'Integration Discovery',
    description: (
      <>
        A{' '}
        <Link
          to="/discovery-sprint"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Discovery Sprint
        </Link>{' '}
        maps current systems, identifies data flows, and confirms integration requirements before development begins. For a startup or early-stage product,{' '}
        <Link
          to="/startup-product-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          startup product development
        </Link>{' '}
        benefits from defining exactly which systems must connect, what data must move, and how frequently it needs to move before engineering begins.
      </>
    ),
  },
  {
    icon: GitBranch,
    tab: 'Architecture',
    title: 'Architecture Blueprint',
    description: (
      <>
        <Link
          to="/product-strategy-consulting"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Product strategy consulting
        </Link>{' '}
        can define the API structure, middleware requirements, data transformation logic, and integration approach before engineering begins. A strong integration blueprint helps avoid the architectural issues that are among the common reasons{' '}
        <Link
          to="/blog/common-reasons-digital-products-fail"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          digital products fail
        </Link>{' '}
        after moving into production.
      </>
    ),
  },
  {
    icon: Network,
    tab: 'Connection Build',
    title: 'Connection Build',
    description: (
      <>
        APIs, middleware, and system connectors are developed around the requirements of existing{' '}
        <Link
          to="/web-app-development-company"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          web applications
        </Link>
        ,{' '}
        <Link
          to="/mobile-app-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          mobile applications
        </Link>
        , and enterprise platforms. REST APIs, GraphQL, or middleware layers are selected based on the systems being connected and the data flows being automated.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    tab: 'Validation',
    title: 'Validation Gate',
    description: (
      <>
        For an early AI product, the validation principles in our{' '}
        <Link
          to="/blog/ai-mvp-development-guide"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI MVP development guide
        </Link>{' '}
        also apply to integration testing: data flow must be checked for accuracy, latency, and reliability across every critical connection. Real-time synchronisation validated. Error handling and failover logic confirmed before production deployment.
      </>
    ),
  },
  {
    icon: Activity,
    tab: 'Live & Monitor',
    title: 'Live and Monitor',
    description: (
      <>
        After deployment,{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          post-launch analytics and iteration
        </Link>{' '}
        monitor data flows, surface integration errors early, and optimize connections as system requirements and data volumes evolve.
      </>
    ),
  },
]

export default function SystemProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = steps[activeIndex]

  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            How We Structure System Connectivity
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Every integration is designed around system behavior, data flow requirements, and real-time operational reliability across connected platforms.
          </p>
        </div>
        <div role="tablist" aria-label="System integration process" className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ icon: Icon, tab }, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={tab}
                id={`system-process-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="system-process-panel"
                onClick={() => setActiveIndex(index)}
                className="group flex min-w-0 flex-col items-center gap-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00CE44]"
              >
                <span
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full transition-colors ${
                    isActive ? 'bg-[#00CE44] text-black ring-4 ring-[#00CE44]/25' : 'bg-[#2b2c30] text-[#00CE44]'
                  }`}
                >
                  <Icon className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
                  <span className="absolute -right-2 top-1 flex h-7 min-w-10 items-center justify-center rounded-full border border-[#00CE44] bg-black px-2 text-[11px] font-bold text-white">
                    0{index + 1}.
                  </span>
                </span>
                <span className={`text-sm leading-snug sm:text-base ${isActive ? 'font-semibold text-white' : 'text-white/60 group-hover:text-white'}`}>
                  {tab}
                </span>
              </button>
            )
          })}
        </div>
        <div
          id="system-process-panel"
          role="tabpanel"
          aria-labelledby={`system-process-tab-${activeIndex}`}
          className="min-h-[205px] rounded-2xl bg-[#303033] p-7 sm:p-10 lg:flex lg:items-center lg:gap-7 lg:px-12"
        >
          <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#00CE44] text-black ring-4 ring-[#00CE44]/20 lg:mb-0">
            <activeStep.icon className="h-9 w-9" strokeWidth={2} aria-hidden="true" />
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold leading-tight text-[#00CE44] sm:text-2xl">
              {activeIndex + 1}. {activeStep.title}
            </h3>
            <p className="max-w-5xl text-sm leading-relaxed text-white/90 sm:text-base">{activeStep.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

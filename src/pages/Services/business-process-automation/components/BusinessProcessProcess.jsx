import { useState } from 'react'
import { Activity, GitBranch, Network, Search, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: Search,
    tab: 'Discovery',
    title: 'Process Discovery',
    description: (
      <>
        <Link
          to="/product-strategy-consulting"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Product strategy consulting
        </Link>{' '}
        helps map current workflows, identify manual touchpoints, and determine automation suitability before development begins. We leave this stage knowing exactly which processes are ready to automate and which need redesigning first.
      </>
    ),
  },
  {
    icon: GitBranch,
    tab: 'Standardisation',
    title: 'Workflow Standardisation',
    description: (
      <>
        Every process step is documented, every business rule defined, and complex workflow paths can be validated through{' '}
        <Link
          to="/interactive-prototyping"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          interactive prototyping
        </Link>{' '}
        before automation is built. The standardised workflow design that determines whether the automation executes consistently or breaks at the first variation.
      </>
    ),
  },
  {
    icon: Settings,
    tab: 'Automation Build',
    title: 'Automation Build',
    description: (
      <>
        Automation systems are built around the standardised workflow design, with{' '}
        <Link
          to="/ai-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI development
        </Link>{' '}
        added where the process requires learned decision-making rather than fixed rules alone. Microsoft Power Automate, UiPath, Automation Anywhere, or low-code platforms are selected based on the specific process requirements and existing enterprise stack.
      </>
    ),
  },
  {
    icon: Network,
    tab: 'System Connection',
    title: 'System Connection',
    description: (
      <>
        Automation connects ERP, CRM, ServiceNow, Salesforce, internal platforms,{' '}
        <Link
          to="/web-app-development-company"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          web applications
        </Link>
        , and{' '}
        <Link
          to="/mobile-app-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          mobile applications
        </Link>{' '}
        through API integrations. End-to-end workflow execution is verified across every system the process touches before deployment.
      </>
    ),
  },
  {
    icon: Activity,
    tab: 'Live & Optimise',
    title: 'Live and Optimise',
    description: (
      <>
        Automation deployed to production.{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Post-launch analytics and iteration
        </Link>{' '}
        track workflow performance, monitor exceptions, and refine processes as operational requirements evolve. Treating launch as the finished state is one of the common reasons{' '}
        <Link
          to="/blog/common-reasons-digital-products-fail"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          digital products fail
        </Link>
        ; automation should continue evolving as real operational conditions change.
      </>
    ),
  },
]

export default function BusinessProcessProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = steps[activeIndex]

  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            How We Design and Deploy Business Process Automation Systems
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Every automation system follows a structured{' '}
            <Link
              to="/blog/what-is-digital-product-development"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              digital product development process
            </Link>{' '}
            designed to ensure workflows operate reliably across real operational conditions.
          </p>
        </div>
        <div role="tablist" aria-label="Business process automation stages" className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ icon: Icon, tab }, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={tab}
                id={`business-process-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="business-process-panel"
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
          id="business-process-panel"
          role="tabpanel"
          aria-labelledby={`business-process-tab-${activeIndex}`}
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

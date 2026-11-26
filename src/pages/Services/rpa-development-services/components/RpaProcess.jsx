import { useState } from 'react'
import { Activity, Bot, GitBranch, Network, Search, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: Search,
    tab: 'Discovery',
    title: 'Process Discovery',
    description: (
      <>
        A{' '}
        <Link
          to="/discovery-sprint"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Discovery Sprint
        </Link>{' '}
        identifies operational workflows, confirms automation suitability, and defines process boundaries before engineering begins. We leave this stage knowing exactly which workflows are ready to automate and which need restructuring first.
      </>
    ),
  },
  {
    icon: GitBranch,
    tab: 'Blueprint',
    title: 'Workflow Blueprint',
    description: (
      <>
        Our{' '}
        <Link
          to="/digital-product-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          digital product development
        </Link>{' '}
        process documents each workflow step, defines business rules, and maps exception paths before automation is built. The blueprint that determines whether the automation performs in production or fails at the first edge case.
      </>
    ),
  },
  {
    icon: Bot,
    tab: 'Engineering',
    title: 'Bot Engineering',
    description:
      'RPA bots are designed and built around the specific workflow requirements, system architecture, and operational constraints. UiPath, Automation Anywhere, Blue Prism, or Power Automate is selected based on your existing enterprise stack.',
  },
  {
    icon: Network,
    tab: 'Connection',
    title: 'System Connection',
    description: (
      <>
        RPA bots can connect SAP, Oracle ERP, Salesforce, internal platforms,{' '}
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
        through APIs and direct system connectors. For user-facing automation,{' '}
        <Link
          to="/ai-app-development-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI app development
        </Link>{' '}
        can expose cross-system workflows through intelligent digital interfaces while RPA handles structured execution behind the scenes.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    tab: 'Validation',
    title: 'Validation Gate',
    description:
      'End-to-end workflow testing for accuracy, reliability, and exception handling under real operational conditions. Every rule validated. Every exception path is tested. No surprises after deployment.',
  },
  {
    icon: Activity,
    tab: 'Live Optimisation',
    title: 'Live Optimisation',
    description: (
      <>
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Post-launch analytics and iteration
        </Link>{' '}
        track bot performance after deployment and surface workflow exceptions in real time.{' '}
        <Link
          to="/product-rescue-scaling"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Product scaling
        </Link>{' '}
        keeps RPA workflows aligned with increasing execution volumes and changing operational requirements. The automation that launches is the starting point, not the finished state.
      </>
    ),
  },
]

export default function RpaProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = steps[activeIndex]
  const ActiveIcon = activeStep.icon

  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-semibold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            How Our RPA Development Company Builds and Deploys Workflow Automation Systems
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Every step exists because skipping it produces an automation that breaks under real operational conditions.
          </p>
        </div>
        <div role="tablist" aria-label="RPA development stages" className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-6">
          {steps.map(({ icon: Icon, tab }, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={tab}
                id={`rpa-process-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="rpa-process-panel"
                onClick={() => setActiveIndex(index)}
                className="group flex min-w-0 flex-col items-center gap-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00CE44]"
              >
                <span
                  className={`relative flex h-16 w-16 items-center justify-center rounded-full transition-colors sm:h-[76px] sm:w-[76px] ${
                    isActive ? 'bg-[#00CE44] text-black ring-4 ring-[#00CE44]/25' : 'bg-[#2b2c30] text-[#00CE44]'
                  }`}
                >
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} aria-hidden="true" />
                  <span className="absolute -right-2 top-1 flex h-7 min-w-10 items-center justify-center rounded-full border border-[#00CE44] bg-black px-2 text-[11px] font-bold text-white">
                    {String(index + 1).padStart(2, '0')}.
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
          id="rpa-process-panel"
          role="tabpanel"
          aria-labelledby={`rpa-process-tab-${activeIndex}`}
          className="min-h-[205px] rounded-2xl bg-[#303033] p-7 sm:p-10 lg:flex lg:items-center lg:gap-7 lg:px-12"
        >
          <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#00CE44] text-black ring-4 ring-[#00CE44]/20 lg:mb-0">
            <ActiveIcon className="h-9 w-9" strokeWidth={2} aria-hidden="true" />
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

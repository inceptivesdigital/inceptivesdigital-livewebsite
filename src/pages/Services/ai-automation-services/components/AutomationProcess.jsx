import { useState } from 'react'
import { Activity, BrainCircuit, Network, Rocket, Search } from 'lucide-react'

const steps = [
  {
    icon: Search,
    tab: 'Discovery',
    title: 'Discovery & Assessment',
    description:
      'Business processes are mapped, operational bottlenecks identified, and automation feasibility confirmed before a clear implementation plan is defined.',
  },
  {
    icon: Network,
    tab: 'Data Architecture',
    title: 'Data Preparation & Process Mapping',
    description:
      'Data flows and operational steps are cleaned, structured, and annotated. Exceptions, rules, and dependencies are captured before automation starts.',
  },
  {
    icon: BrainCircuit,
    tab: 'AI Model',
    title: 'Automation Design & Development',
    description:
      'AI development combines custom AI and RPA pipelines with decision rules, ML-enhanced logic, and exception handling to create production-ready automation around your workflows.',
  },
  {
    icon: Rocket,
    tab: 'Development',
    title: 'Integration & Deployment',
    description:
      'Automation systems integrate into existing web applications, mobile applications, APIs, and enterprise platforms. They are tested for accuracy, latency, and operational reliability, then deployed to cloud or on-prem environments.',
  },
  {
    icon: Activity,
    tab: 'Monitoring',
    title: 'Monitoring & Continuous Optimization',
    description:
      'Post-launch analytics and iteration monitor automated workflows, flag exceptions, optimize processes, and guide model retraining as operational conditions change.',
  },
]

export default function AutomationProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = steps[activeIndex]

  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            End-to-End AI Automation Services for Operational Excellence
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Every step is designed to eliminate inefficiency, prevent errors, and ensure reliable, production-ready automation.
          </p>
        </div>

        <div role="tablist" aria-label="AI automation development process" className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ icon: Icon, tab }, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={tab}
                id={`automation-process-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="automation-process-panel"
                onClick={() => setActiveIndex(index)}
                className="group flex min-w-0 flex-col items-center gap-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00CE44]"
              >
                <span
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full transition-colors sm:h-20 sm:w-20 ${
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
          id="automation-process-panel"
          role="tabpanel"
          aria-labelledby={`automation-process-tab-${activeIndex}`}
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

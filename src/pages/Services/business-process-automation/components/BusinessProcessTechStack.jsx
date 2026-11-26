import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Automation Platforms',
    description: 'The execution layer for structured business process automation.',
    items: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'ServiceNow'],
  },
  {
    name: 'Low-Code and Integration Tools',
    description: 'The rapid configuration layer for connecting systems and automating workflows without heavy development overhead.',
    items: ['Zapier', 'Make', 'n8n', 'MuleSoft', 'Boomi'],
  },
  {
    name: 'Enterprise Systems',
    description: 'The platforms your automation connects to and operates within.',
    items: ['SAP', 'Oracle ERP', 'Salesforce', 'Microsoft Dynamics', 'ServiceNow'],
  },
  {
    name: 'Backend and API Engineering',
    description: 'The custom development layer for complex integrations and workflow logic that standard platforms cannot handle.',
    items: ['Python', 'Node.js', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Cloud and Infrastructure',
    description: (
      <>
        <Link
          to="/product-rescue-scaling"
          className="underline font-semibold"
>
          Product scaling
        </Link>{' '}
        requires deployment, monitoring, and infrastructure capable of supporting growing production automation workloads.
      </>
    ),
    items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
  },
]

export default function BusinessProcessTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)
  const active = categories[activeCategory]

  return (
    <section className="bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            Core Technologies We Use in Workflow Automation Systems
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
            Every platform is selected based on your existing enterprise stack, process requirements, and integration environment.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div role="tablist" aria-label="Workflow automation technology categories" className="flex flex-col gap-1 rounded-2xl bg-[#00CE44] p-4 lg:col-span-4">
            {categories.map(({ name }, index) => {
              const isActive = activeCategory === index
              return (
                <button
                  key={name}
                  id={`business-process-tech-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="business-process-tech-panel"
                  onClick={() => setActiveCategory(index)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    isActive
                      ? 'rounded-md bg-black font-semibold text-white'
                      : 'border-b border-black/10 text-black hover:bg-black/10'
                  }`}
                >
                  <span>{name}</span>
                  {isActive && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              )
            })}
          </div>
          <div
            id="business-process-tech-panel"
            role="tabpanel"
            aria-labelledby={`business-process-tech-tab-${activeCategory}`}
            className="grid grid-cols-2 content-start gap-3 rounded-2xl bg-[#00CE44] p-5 sm:grid-cols-3 sm:gap-4 sm:p-7 lg:col-span-8 lg:grid-cols-4 lg:p-8"
          >
            {active.items.map((technology) => (
              <div
                key={technology}
                className="flex min-h-[88px] items-center justify-center rounded-xl bg-white px-3 py-4 text-center text-sm font-semibold leading-tight text-[#141414] sm:min-h-[96px] sm:text-base"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

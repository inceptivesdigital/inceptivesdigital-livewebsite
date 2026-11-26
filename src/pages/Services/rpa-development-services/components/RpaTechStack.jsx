import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Core RPA Platforms',
    items: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate'],
  },
  {
    name: 'Programming & Automation Logic',
    items: ['Python', 'Node.js', 'JavaScript', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'System Integration Layer',
    items: ['API Integrations', 'Webhooks', 'ERP/CRM Connectors', 'Database Connectivity Layers'],
  },
  {
    name: 'Document Processing',
    items: ['OCR Engines', 'Document Parsing Systems', 'Intelligent Data Extraction Tools'],
  },
  {
    name: 'Data & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Monitoring & Execution Control',
    items: ['Workflow Logging Systems', 'Error Tracking Tools', 'Automation Monitoring Dashboards'],
  },
]

export default function RpaTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)
  const active = categories[activeCategory]

  return (
    <section className="bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            RPA Development Stack and Automation Infrastructure
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
            Technologies used to build and deploy workflow automation systems across tools, workflows, and execution environments.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div role="tablist" aria-label="RPA technology categories" className="flex flex-col gap-1 rounded-2xl bg-[#00CE44] p-4 lg:col-span-4">
            {categories.map(({ name }, index) => {
              const isActive = activeCategory === index
              return (
                <button
                  key={name}
                  id={`rpa-tech-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="rpa-tech-panel"
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
            id="rpa-tech-panel"
            role="tabpanel"
            aria-labelledby={`rpa-tech-tab-${activeCategory}`}
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

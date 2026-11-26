import { Activity, Database, GitBranch, Network, RefreshCw, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const problems = [
  {
    icon: Database,
    title: 'Manual Data Transfer Between Systems',
    description:
      'Data is repeatedly copied between applications like CRM, ERP, and internal tools without direct system communication.',
    impacts: ['Time-consuming operations', 'High error rates', 'Delayed updates across systems'],
    solution: 'Automated API connections that move data directly between systems.',
  },
  {
    icon: Network,
    title: 'Fragmented Application Ecosystems',
    description:
      'Business tools operate in isolation, creating disconnected workflows across departments.',
    impacts: ['Operational silos', 'Duplicate work', 'Inconsistent data across platforms'],
    solution: 'System-level integrations that unify application communication.',
  },
  {
    icon: RefreshCw,
    title: 'Delayed Data Synchronization',
    description:
      'Critical business data is updated manually or in batches instead of real time.',
    impacts: ['Outdated reporting', 'Slow decision-making', 'Misaligned operations'],
    solution: 'Real-time API-based synchronization across systems.',
  },
  {
    icon: GitBranch,
    title: 'Integration Dependency on Manual Work',
    description: (
      <>
        Teams often rely on exports, imports, and manual system interactions where{' '}
        <Link
          to="/rpa-development-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          RPA development services
        </Link>{' '}
        can automate repetitive transfer and processing tasks.
      </>
    ),
    impacts: ['Operational overhead', 'Process delays', 'Increased dependency on technical staff'],
    solution: (
      <>
        Direct system-to-system connections eliminate manual intervention and create the connected infrastructure required for{' '}
        <Link
          to="/ai-automation-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI automation
        </Link>
        .
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Inconsistent Data Across Platforms',
    description:
      'Different systems store different versions of the same data, creating operational mismatches.',
    impacts: ['Reporting inconsistencies', 'Compliance risks', 'Data integrity issues'],
    solution: 'Centralized integration logic ensures consistent data flow across systems.',
  },
  {
    icon: Activity,
    title: 'Lack of Workflow Connectivity',
    description:
      'Processes are split across multiple tools without an automated flow between steps.',
    impacts: ['Broken workflows', 'Manual handoffs', 'Reduced operational efficiency'],
    solution: (
      <>
        Connected workflows built through structured API integration layers allow{' '}
        <Link
          to="/ai-agent-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI agents
        </Link>{' '}
        to access data and act across multiple business systems.
      </>
    ),
  },
]

export default function SystemProblems() {
  return (
    <section className="bg-[#0d0e11] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            Operational Gaps Created by Disconnected Systems
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Disconnected systems create operational inefficiencies and limit{' '}
            <Link
              to="/business-process-automation"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              business process automation
            </Link>{' '}
            by forcing teams to move data manually between tools, platforms, and databases.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, description, impacts, solution }) => (
            <article key={title} className="rounded-2xl border border-white/5 bg-[#191a1e] p-6 sm:p-7">
              <Icon className="mb-5 h-9 w-9 text-[#00CE44]" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mb-4 text-lg font-bold leading-tight text-white sm:text-xl">{title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-white/75">{description}</p>
              <p className="mb-2 text-sm font-semibold text-[#00CE44]">Impact</p>
              <ul className="mb-5 space-y-1.5 text-sm leading-relaxed text-white/75">
                {impacts.map((impact) => <li key={impact}>• {impact}</li>)}
              </ul>
              <p className="mb-1 text-sm font-semibold text-[#00CE44]">Solution</p>
              <p className="text-sm leading-relaxed text-white/80">{solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

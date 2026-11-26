import { Activity, ArrowLeftRight, GitBranch, RefreshCw, ShieldAlert, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const problems = [
  {
    icon: ArrowLeftRight,
    title: '1. Manual Data Movement',
    description: (
      <>
        <Link
          to="/system-integration-api-automation"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          System integration and API automation
        </Link>{' '}
        reduce the need for teams to manually transfer data between disconnected ERP, CRM, and internal systems.
      </>
    ),
    impacts: ['Increased operational cost', 'Higher error probability', 'Slower reporting cycles'],
    solution: 'Automated system-to-system data transfer across enterprise platforms without human intervention.',
  },
  {
    icon: RefreshCw,
    title: '2. Repetitive Work',
    description:
      'High-volume operational tasks like data entry, invoice handling, and reporting consume skilled workforce capacity that should be focused on higher-value operations.',
    impacts: ['Resource inefficiency', 'High operational cost', 'Low team productivity'],
    solution: (
      <>
        RPA can combine{' '}
        <Link
          to="/machine-learning-development-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          machine learning
        </Link>{' '}
        with{' '}
        <Link
          to="/generative-ai-development-company"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          generative AI development
        </Link>{' '}
        when workflows involve variable data, unstructured content, or decisions that fixed rules alone cannot handle.
      </>
    ),
  },
  {
    icon: Activity,
    title: '3. Workflow Delays',
    description:
      'Business processes slow down when execution depends on manual handoffs between departments and systems.',
    impacts: ['Delayed decision cycles', 'Operational bottlenecks', 'Reduced customer responsiveness'],
    solution: 'Cross-system workflow automation removes manual handoffs and executes processes instantly.',
  },
  {
    icon: ShieldAlert,
    title: '4. Human Errors',
    description:
      'Repetitive structured processes introduce avoidable errors in finance, compliance, HR, and reporting operations.',
    impacts: ['Compliance risks', 'Data inconsistencies', 'Financial inaccuracies'],
    solution: 'Automated rule-based execution ensures consistent and error-free process handling.',
  },
  {
    icon: UsersRound,
    title: '5. Dependency Bottlenecks',
    description:
      'Workflows depend on specific individuals or teams to proceed, limiting scalability and operational continuity.',
    impacts: ['Process stagnation', 'Resource dependency', 'Reduced scalability'],
    solution: 'Automation systems ensure workflows run independently of human availability.',
  },
  {
    icon: GitBranch,
    title: '6. System Fragmentation',
    description:
      'Enterprise systems like ERP, CRM, and internal tools operate in isolation, requiring manual reconciliation and duplication of effort.',
    impacts: ['Data duplication', 'Reconciliation overhead', 'Operational inefficiency'],
    solution: 'Integrated automation connects systems and synchronizes data across platforms in real time.',
  },
]

export default function RpaProblems() {
  return (
    <section className="bg-[#0d0e11] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            Operational Problems Our RPA Development Services Are Built to Fix
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Most operational inefficiencies come from structured processes still being executed manually across disconnected systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, description, impacts, solution }) => (
            <article key={title} className="rounded-2xl border border-white/5 bg-[#191a1e] p-6 sm:p-7">
              <Icon className="mb-5 h-9 w-9 text-[#00CE44]" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">{title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-white/75">{description}</p>
              <p className="mb-2 text-sm font-semibold text-[#00CE44]">Impact</p>
              <ul className="mb-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/75">
                {impacts.map((impact) => <li key={impact}>{impact}</li>)}
              </ul>
              <p className="mb-1 text-sm font-semibold text-[#00CE44]">RPA Solution</p>
              <p className="text-sm leading-relaxed text-white/80">{solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

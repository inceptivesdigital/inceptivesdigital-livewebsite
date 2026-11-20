import { Activity, GitBranch, Network, RefreshCw, ShieldCheck, Users } from 'lucide-react'

const problems = [
  {
    icon: Network,
    title: 'Manual Work Across Systems',
    description:
      'Workflows require data to be entered, copied, or updated across multiple tools without a direct system connection.',
    impacts: ['Time loss across operations', 'High error probability', 'Repeated manual effort'],
    outcome: 'Process steps are executed directly between systems without manual handling.',
  },
  {
    icon: RefreshCw,
    title: 'Repetitive Operational Work',
    description:
      'Daily tasks like approvals, reporting, and updates are strong candidates for RPA development services when the execution logic remains consistent.',
    impacts: ['Reduced team capacity', 'Operational slowdown', 'Low process efficiency'],
    outcome: 'Rule-based workflows execute without repeated human input.',
  },
  {
    icon: Activity,
    title: 'Delayed Workflow Execution',
    description:
      'AI automation can keep processes moving between steps when execution would otherwise depend on manual triggers or human availability.',
    impacts: ['Slower turnaround time', 'Process bottlenecks', 'Delayed decisions'],
    outcome: 'Workflows progress automatically based on defined triggers.',
  },
  {
    icon: ShieldCheck,
    title: 'Inconsistent Process Execution',
    description:
      'The same workflow produces different results depending on who executes it and when.',
    impacts: ['Process variation', 'Compliance risks', 'Reduced reliability'],
    outcome: 'Standardized execution logic is applied across all process runs.',
  },
  {
    icon: GitBranch,
    title: 'System Gaps Between Tools',
    description:
      'Tools operate independently, forcing teams to bridge gaps manually between platforms.',
    impacts: ['Fragmented operations', 'Duplicate work', 'Data inconsistencies'],
    outcome: 'Systems operate as a connected execution flow.',
  },
  {
    icon: Users,
    title: 'Execution Dependency on People',
    description:
      'AI agents can execute defined actions across a workflow so processes do not depend on specific individuals being available at every step.',
    impacts: ['Process dependency risk', 'Limited scalability', 'Workflow interruptions'],
    outcome: 'Processes execute independently of individual availability.',
  },
]

export default function BusinessProcessProblems() {
  return (
    <section className="bg-[#0d0e11] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            Operational Bottlenecks That Break Process Execution
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Most operational issues come from processes that were never designed for manual execution at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, description, impacts, outcome }) => (
            <article key={title} className="rounded-2xl border border-white/5 bg-[#191a1e] p-6 sm:p-7">
              <Icon className="mb-5 h-9 w-9 text-[#00CE44]" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">{title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-white/75">{description}</p>
              <p className="mb-2 text-sm font-semibold text-[#00CE44]">Impact</p>
              <ul className="mb-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/75">
                {impacts.map((impact) => <li key={impact}>{impact}</li>)}
              </ul>
              <p className="mb-1 text-sm font-semibold text-[#00CE44]">Automation Outcome</p>
              <p className="text-sm leading-relaxed text-white/80">{outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

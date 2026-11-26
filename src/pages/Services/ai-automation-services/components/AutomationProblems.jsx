import { Activity, FileText, Network, ShieldCheck, Timer, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const problems = [
  {
    icon: FileText,
    title: 'High-Volume Repetitive Tasks',
    description: (
      <>
        High-volume processes such as data entry, document processing, and report generation are strong candidates for{' '}
        <Link
          to="/rpa-development-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          RPA development services
        </Link>
        , freeing skilled teams from repetitive work.
      </>
    ),
  },
  {
    icon: Timer,
    title: 'Slow Decision-Making',
    description: (
      <>
        <Link
          to="/ai-agent-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI agent development
        </Link>{' '}
        can reduce decisions waiting for human review at every step, helping remove bottlenecks that slow operations and delay responses.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Human Error in Critical Processes',
    description:
      'Manual processes introduce inconsistency and error into workflows where accuracy is non-negotiable. Payroll, compliance, and financial operations cannot afford mistakes.',
  },
  {
    icon: TrendingUp,
    title: 'Inability to Scale Operations',
    description: (
      <>
        Manual processes do not scale. Adding volume often means adding headcount, while{' '}
        <Link
          to="/product-rescue-scaling"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          product scaling
        </Link>{' '}
        with AI automation enables higher operational volume without proportional increases in manual effort.
      </>
    ),
  },
  {
    icon: Network,
    title: 'Disconnected Systems and Data Silos',
    description: (
      <>
        Business data sitting in disconnected systems creates manual reconciliation work.{' '}
        <Link
          to="/system-integration-api-automation"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          System integration and API automation
        </Link>{' '}
        connect systems, move data, and trigger actions across the full technology stack.
      </>
    ),
  },
  {
    icon: Activity,
    title: 'Slow Response to Exceptions',
    description:
      'Exceptions and edge cases that require human attention get buried in queues. AI automation identifies, routes, and escalates exceptions in real time without manual triage.',
  },
]

export default function AutomationProblems() {
  return (
    <section className="bg-[#0d0e11] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            Business Problems We Solve With AI Automation
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Every problem below is a process that currently depends on manual effort to function. AI automation removes that dependency.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-white/5 bg-[#191a1e] p-6 sm:p-7">
              <Icon className="mb-5 h-9 w-9 text-[#00CE44]" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">{title}</h3>
              <p className="text-sm leading-relaxed text-white/75 sm:text-[15px]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

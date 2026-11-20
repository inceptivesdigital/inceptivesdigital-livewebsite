import { Bot, GitBranch, Workflow } from 'lucide-react'

const points = [
  {
    icon: Bot,
    title: 'What Makes an AI Agent Different',
    description:
      'A chatbot answers questions. An AI agent executes tasks. It takes an instruction, breaks it into steps, interacts with the necessary systems, makes decisions along the way, and completes the workflow without waiting for human input at each stage.',
  },
  {
    icon: Workflow,
    title: 'Where AI Agents Create Real Operational Value',
    description: (
      <>
        The highest-value use cases are high-volume, multi-step operational processes that currently depend on manual effort: data ingestion, exception detection,{' '}
        <a href="https://inceptivesdigital.com/business-process-automation">business process automation</a>, and cross-system workflow orchestration. These are tasks that repeat at volume and cannot afford human handling at every step.
      </>
    ),
  },
  {
    icon: GitBranch,
    title: 'Why Agent Architecture Is Different',
    description:
      'An agent needs to reason across steps, maintain state across interactions, and handle exceptions without breaking the workflow. The architecture decisions that determine whether the system performs in production are made before development begins.',
  },
]

export default function AgentDifference() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24 [&_a]:text-[#00CE44] [&_a]:underline [&_a:hover]:text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Understanding the Difference Between an AI Agent and Every Other AI Tool
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Most{' '}
            <a href="https://inceptivesdigital.com/blog/ai-app-builders-vs-human-developers">
              AI app builders
            </a>{' '}
            and tools respond to instructions. An AI agent acts on them. The architecture, integration layer, and decision logic all follow from that single difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="bg-[#1b1c21] rounded-2xl p-7 sm:p-8 border border-white/5"
            >
              <Icon className="w-10 h-10 text-[#00CE44] mb-5" strokeWidth={1.7} />
              <h3 className="text-[#00CE44] text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

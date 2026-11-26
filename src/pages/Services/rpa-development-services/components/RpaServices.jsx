import { Bot, BrainCircuit, FileSearch, GitBranch, Map, Network, Route, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Bot,
    title: 'Custom RPA Bot Development',
    description: (
      <>
        Our{' '}
        <Link
          to="/custom-software-development"
          className="text-white underline group-hover:text-black"
>
          custom software development
        </Link>{' '}
        approach creates RPA bots that execute defined workflows across systems based on structured rules, triggers, and process logic.
      </>
    ),
  },
  {
    icon: Workflow,
    title: 'Cross-System Workflow Automation',
    description:
      'Execution pipelines that connect disconnected systems into a single flow, removing manual transfer between tools and platforms.',
  },
  {
    icon: FileSearch,
    title: 'Document and Data Process Automation',
    description: (
      <>
        Automated document processing can combine{' '}
        <Link
          to="/nlp-development-services"
          className="text-white underline group-hover:text-black"
>
          natural language processing
        </Link>{' '}
        with{' '}
        <Link
          to="/computer-vision-development-services"
          className="text-white underline group-hover:text-black"
>
          computer vision
        </Link>{' '}
        to extract, validate, and structure information from text, scanned forms, and other operational inputs.
      </>
    ),
  },
  {
    icon: GitBranch,
    title: 'Rule-Based Decision Automation',
    description:
      'Business logic is encoded into deterministic systems that evaluate inputs and trigger actions without manual review.',
  },
  {
    icon: Network,
    title: 'System Integration Automation',
    description: (
      <>
        <Link
          to="/backend-api-development"
          className="text-white underline group-hover:text-black"
>
          Backend API development
        </Link>{' '}
        enables direct data movement between tools, removing manual synchronization steps from RPA workflows.
      </>
    ),
  },
  {
    icon: BrainCircuit,
    title: 'AI-Enhanced RPA Development',
    description: (
      <>
        <Link
          to="/ai-automation-services"
          className="text-white underline group-hover:text-black"
>
          AI automation
        </Link>{' '}
        extends RPA with intelligent processing for workflows involving variability, exceptions, or unstructured inputs.
      </>
    ),
  },
  {
    icon: Route,
    title: 'Exception Handling Automation',
    description: (
      <>
        For more complex exceptions,{' '}
        <Link
          to="/ai-agent-development"
          className="text-white underline group-hover:text-black"
>
          AI agents
        </Link>{' '}
        can support real-time detection, classification, routing, and action while maintaining workflow continuity.
      </>
    ),
  },
  {
    icon: Map,
    title: 'RPA Consulting and Process Mapping',
    description: (
      <>
        <Link
          to="/product-strategy-consulting"
          className="text-white underline group-hover:text-black"
>
          Product strategy consulting
        </Link>{' '}
        helps identify automation opportunities and define the execution architecture before RPA development begins.
      </>
    ),
  },
]

export default function RpaServices() {
  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-[1000px] text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">
            RPA Development Services Engineered Around Your Workflows and Enterprise Systems
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Capabilities focused on automating structured workflows, connecting systems, and executing repeatable business processes with consistency.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group rounded-2xl bg-[#1b1c21] p-6 transition-colors duration-200 hover:bg-[#00CE44] sm:p-7"
            >
              <Icon className="mb-5 h-9 w-9 text-[#00CE44] transition-colors group-hover:text-black" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mb-3 text-lg font-bold leading-tight text-[#00CE44] transition-colors group-hover:text-black sm:text-xl">
                {index + 1}. {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80 transition-colors group-hover:text-black/85">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Activity, BrainCircuit, FileText, Layers, Network, Settings, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom AI Automation Development',
    description: (
      <>
        Our{' '}
        <Link
          to="/custom-software-development"
          className="text-white underline group-hover:text-black"
>
          custom software development
        </Link>{' '}
        approach builds automation systems around your specific processes, data sources, and operational requirements rather than relying on generic{' '}
        <Link
          to="/blog/ai-app-builders-vs-human-developers"
          className="text-white underline group-hover:text-black"
>
          AI app builders
        </Link>
        .
      </>
    ),
  },
  {
    icon: Network,
    title: 'Workflow Automation',
    description:
      'End-to-end automation of multi-step business workflows. AI makes the decisions, routes the work, and escalates only the exceptions that require human attention.',
  },
  {
    icon: FileText,
    title: 'Document Process Automation',
    description: (
      <>
        Intelligent systems combine{' '}
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
        where needed to extract, classify, validate, and route information from documents without manual handling at every stage.
      </>
    ),
  },
  {
    icon: Activity,
    title: 'Decision Automation',
    description: (
      <>
        AI systems use{' '}
        <Link
          to="/machine-learning-development-services"
          className="text-white underline group-hover:text-black"
>
          machine learning
        </Link>{' '}
        to evaluate inputs alongside business rules and make decisions in real time without waiting for human review at every step.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: 'AI Automation Consulting',
    description: (
      <>
        <Link
          to="/product-strategy-consulting"
          className="text-white underline group-hover:text-black"
>
          Product strategy consulting
        </Link>{' '}
        helps identify automation opportunities, assess feasibility, and define the implementation roadmap. Built for businesses that need clarity before committing to a full automation build.
      </>
    ),
  },
  {
    icon: Settings,
    title: 'Robotic Process Automation With AI',
    description: (
      <>
        <Link
          to="/rpa-development-services"
          className="text-white underline group-hover:text-black"
>
          RPA development services
        </Link>{' '}
        combine rule-based automation with machine learning for workflows involving unstructured data, variability, and complex decision logic.
      </>
    ),
  },
  {
    icon: Layers,
    title: 'AI Automation Integration Services',
    description: (
      <>
        <Link
          to="/backend-api-development"
          className="text-white underline group-hover:text-black"
>
          Backend API development
        </Link>{' '}
        connects automation systems with your CRM, ERP, databases, and business software, while{' '}
        <Link
          to="/ai-app-development-services"
          className="text-white underline group-hover:text-black"
>
          AI app development
        </Link>{' '}
        embeds intelligent automation into the products your teams already use.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Intelligent Exception Management',
    description:
      'AI systems that identify, classify, and route exceptions in real time. Built for high-volume operational processes where manual exception handling creates bottlenecks.',
  },
]

export default function AutomationServices() {
  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-[1000px] text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">
            AI Automation Services Built Around the Workflows Your Business Runs On
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Eight capabilities. Each one is scoped in Discovery and built around your workflows, systems, and operational requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group rounded-2xl bg-[#1b1c21] p-6 transition-colors duration-200 hover:bg-[#00CE44] sm:p-7"
            >
              <Icon
                className="mb-5 h-9 w-9 text-[#00CE44] transition-colors group-hover:text-black"
                strokeWidth={1.7}
                aria-hidden="true"
              />
              <h3 className="mb-3 text-lg font-bold leading-tight text-[#00CE44] transition-colors group-hover:text-black sm:text-xl">
                {title}
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

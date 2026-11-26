import { Activity, Database, FileText, GitBranch, Network, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: GitBranch,
    title: 'End-to-End Process Automation',
    description:
      'Complete business workflows are automated from trigger to completion without manual intervention between steps.',
  },
  {
    icon: Network,
    title: 'Approval Workflow Automation',
    description:
      'Structured approval chains are executed automatically based on predefined conditions, rules, and hierarchy logic.',
  },
  {
    icon: Database,
    title: 'Data Movement Automation',
    description: (
      <>
        <Link
          to="/backend-api-development"
          className="text-white underline group-hover:text-black"
>
          Backend API development
        </Link>{' '}
        enables automated data transfer across systems, eliminating manual updates between tools and platforms.
      </>
    ),
  },
  {
    icon: FileText,
    title: 'Reporting Process Automation',
    description: (
      <>
        <Link
          to="/generative-ai-development-company"
          className="text-white underline group-hover:text-black"
>
          Generative AI development
        </Link>{' '}
        can produce narrative summaries and report content, while automated workflows distribute them based on scheduled or event-based triggers.
      </>
    ),
  },
  {
    icon: Users,
    title: 'Customer Operations Automation',
    description: (
      <>
        <Link
          to="/ai-app-development-services"
          className="text-white underline group-hover:text-black"
>
          AI app development
        </Link>{' '}
        can embed automated customer workflows into digital products, while{' '}
        <Link
          to="/ai-chatbot-development-services"
          className="text-white underline group-hover:text-black"
>
          AI chatbots
        </Link>{' '}
        can handle onboarding questions, requests, and routine updates within those flows.
      </>
    ),
  },
  {
    icon: Activity,
    title: 'Internal Operations Automation',
    description: (
      <>
        <Link
          to="/custom-software-development"
          className="text-white underline group-hover:text-black"
>
          Custom software development
        </Link>{' '}
        can automate internal HR, finance, and administrative workflows without manual coordination between steps.
      </>
    ),
  },
]

export default function BusinessProcessServices() {
  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-[1000px] text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">
            Business Process Automation Services Built Around Operational Workflows
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Our{' '}
            <Link
              to="/digital-product-development"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              digital product development
            </Link>{' '}
            approach designs automation systems that remove manual execution from structured business processes and run them as defined operational flows across tools and systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group rounded-2xl bg-[#1b1c21] p-6 transition-colors duration-200 hover:bg-[#00CE44] sm:p-7"
            >
              <Icon className="mb-5 h-9 w-9 text-[#00CE44] transition-colors group-hover:text-black" strokeWidth={1.7} aria-hidden="true" />
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

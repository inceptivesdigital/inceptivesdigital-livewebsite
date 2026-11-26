import {
  AudioLines,
  Bot,
  BriefcaseBusiness,
  Database,
  Headset,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const agentTypes = [
  {
    icon: Workflow,
    title: 'Workflow Automation Agents',
    description:
      'Agents that execute multi-step operational processes, route decisions, and complete tasks across enterprise systems without manual intervention at every stage.',
    bullets: [
      'Multi-step task execution and process orchestration',
      'Cross-system workflow routing and exception handling',
      'Automated reporting and performance tracking',
    ],
  },
  {
    icon: Database,
    title: 'Knowledge Retrieval and RAG Agents',
    description:
      "Agents connected to your company's knowledge base, databases, and APIs for context-aware decision support and precise information retrieval.",
    bullets: [
      'RAG architecture for knowledge-grounded responses',
      'Structured and unstructured data retrieval',
      'Source traceability for regulated industries',
    ],
  },
  {
    icon: Bot,
    title: 'AI Copilots and Productivity Agents',
    description:
      'Intelligent agents embedded into internal tools to assist teams with recommendations, task prioritisation, and workflow automation.',
    bullets: [
      'Task management and workflow prioritisation',
      'Context-aware recommendations and decision support',
      'Integration with existing enterprise tools and dashboards',
    ],
  },
  {
    icon: AudioLines,
    title: 'Voice-Enabled Agents',
    description:
      'AI agents built for voice interactions, call automation, and IVR workflows in operational contexts where real-time speech is the interface.',
    bullets: [
      'Natural language voice recognition and understanding',
      'Automated call routing and IVR workflow management',
      'Telephony platform integration and real-time assistance',
    ],
  },
  {
    icon: Headset,
    title: 'Customer Engagement and Sales Agents',
    description: (
      <>
        <Link to="/ai-app-development-services">AI app development services</Link> support agents, combining intelligent automation with <Link to="/ui-ux-design">UI/UX design</Link> to engage prospects, qualify leads, and manage customer interactions across web and mobile platforms.
      </>
    ),
    bullets: [
      'Lead capture, scoring, and automated follow-up',
      'Context-aware recommendations and escalation',
      <>
        CRM integration and <Link to="/blog/ai-powered-mobile-apps-uae-business-operations">AI-powered mobile apps</Link> for multi-channel engagement
      </>,
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Internal Operations Agents',
    description:
      'Agents embedded into internal systems for workflow automation, document processing, analytics, and cross-department task orchestration.',
    bullets: [
      <>
        <Link to="/computer-vision-development-services">Computer vision</Link> for document processing and knowledge summarisation
      </>,
      <>
        <Link to="/rpa-development-services">RPA development services</Link> for workflow automation across departments
      </>,
      'Analytics dashboards and operational reporting',
    ],
  },
]

export default function AgentTypes() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24 [&_a]:text-[#00CE44] [&_a]:underline [&_a:hover]:text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Operational Agent Solutions From Our AI Agent Development Company
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Workflow automation, knowledge retrieval, voice-enabled, and customer-facing. Each one is built for a specific operational context and the systems it needs to run on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentTypes.map(({ icon: Icon, title, description, bullets }) => (
            <article
              key={title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-7 sm:p-8 transition-colors duration-200 [&_a]:text-[#00CE44] [&_a]:underline group-hover:[&_a]:text-black"
            >
              <Icon
                className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors"
                strokeWidth={1.7}
              />
              <h3 className="text-[#00CE44] group-hover:text-black text-xl font-bold mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-white/80 group-hover:text-black text-[15px] leading-relaxed mb-5 transition-colors">
                {description}
              </p>
              <ul className="space-y-2.5">
                {bullets.map((bullet, bulletIdx) => (
                  <li
                    key={bulletIdx}
                    className="flex items-start gap-2.5 text-white/80 group-hover:text-black text-sm leading-relaxed transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-2 shrink-0 transition-colors" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

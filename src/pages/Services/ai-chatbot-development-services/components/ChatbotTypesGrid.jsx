import React from 'react'
import { Link } from 'react-router-dom'
import {
  Headphones,
  BookOpen,
  TrendingUp,
  Database,
  Mic,
  Briefcase,
} from 'lucide-react'

const botTypes = [
  {
    icon: Headphones,
    title: 'Customer Support Chatbots',
    description:
      'Chatbots that handle routine queries, provide instant responses, and escalate complex issues to human agents. Built to reduce support workload without reducing support quality.',
    bullets: [
      'Instant query resolution and FAQ automation',
      'CRM and helpdesk platform integration',
      'Intelligent escalation to human agents',
    ],
  },
  {
    icon: BookOpen,
    title: 'Enterprise Knowledge Assistants',
    description:
      'Internal chatbots that give employees real-time access to company documentation and surface relevant information from large knowledge bases.',
    bullets: [
      'RAG architecture for knowledge-grounded responses',
      'Document retrieval and summarisation',
      'Workflow automation and task management',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Lead Qualification and Sales Bots',
    description:
      'Conversational bots that engage website visitors, qualify leads automatically, and connect with CRM and sales systems.',
    bullets: [
      'Visitor engagement and lead scoring',
      'CRM integration and automated follow-up',
      'Conversational sales workflow automation',
    ],
  },
  {
    icon: Database,
    title: 'RAG-Based AI Chatbots',
    description:
      "Chatbots are grounded in your company's knowledge base and APIs. Built for products where generic model knowledge is not precise enough and source traceability matters.",
    bullets: [
      'Enterprise knowledge base integration',
      'Real-time data retrieval and contextual responses',
      'Source traceability for regulated industries',
    ],
  },
  {
    icon: Mic,
    title: 'Voice-Enabled Chatbots and IVR Systems',
    description:
      'Conversational AI built for voice interactions, call automation, and intelligent IVR experiences.',
    bullets: [
      'Natural language voice recognition',
      'Call routing and IVR automation',
      'Telephony platform integration',
    ],
  },
  {
    icon: Briefcase,
    title: 'Internal Productivity Bots',
    description: (
      <>
        Bots are embedded into internal systems for{' '}
        <Link
          to="/business-process-automation"
          className="text-[#00CE44] group-hover:text-black underline"
>
          business process automation
        </Link>
        , document processing, and employee productivity.
      </>
    ),
    bullets: [
      <>
        <Link
          to="/rpa-development-services"
          className="text-[#00CE44] group-hover:text-black underline"
>
          RPA development services
        </Link>{' '}
        for workflow automation and process orchestration
      </>,
      'Analytics dashboards and reporting',
      <>
        <Link
          to="/computer-vision-development-services"
          className="text-[#00CE44] group-hover:text-black underline"
>
          Computer vision
        </Link>{' '}
        for document processing and data extraction
      </>,
    ],
  },
]

export default function ChatbotTypesGrid() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Solutions Our AI Chatbot Development Company Offers{' '}
            <span className="text-[#00CE44]">for Every Use Case</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Each one is built through{' '}
            <Link
              to="/custom-software-development"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
            >
              custom software development
            </Link>{' '}
            for a specific operational context, not a generic template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {botTypes.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[18px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.65] font-normal mb-5 transition-colors duration-200">
                  {item.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-white/90 group-hover:text-black text-[14px] leading-snug transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-1.5 shrink-0 transition-colors duration-200" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

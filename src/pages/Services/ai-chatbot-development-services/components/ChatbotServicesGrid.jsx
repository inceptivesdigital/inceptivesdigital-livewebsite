import React from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Headphones,
  BookOpen,
  Mic,
  TrendingUp,
  Database,
  Layers,
  SlidersHorizontal,
} from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: '1. Custom AI Chatbot Development',
    description:
      'Conversational systems designed around your specific business workflows, user needs, and operational requirements. Built from the architecture up, not assembled from generic components.',
  },
  {
    icon: Headphones,
    title: '2. Customer Support Chatbots',
    description: (
      <>
        <a
          href="https://inceptivesdigital.com/ai-automation-services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          AI automation services
        </a>{' '}
        power chatbots that resolve routine queries, provide instant responses, and escalate complex issues to human agents. Built to reduce support workload without reducing support quality.
      </>
    ),
  },
  {
    icon: BookOpen,
    title: '3. Enterprise Knowledge Assistants',
    description: (
      <>
        <a
          href="https://inceptivesdigital.com/ai-agent-development"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          AI agent development
        </a>{' '}
        for internal knowledge assistants gives employees real-time access to documentation, automates workflows, and surfaces relevant information from large knowledge bases using RAG architecture.
      </>
    ),
  },
  {
    icon: Mic,
    title: '4. Voice-Enabled Chatbots and IVR Systems',
    description:
      'Conversational AI built for voice interactions, call automation, and intelligent IVR experiences. Built for products where typing is not the interface.',
  },
  {
    icon: TrendingUp,
    title: '5. Lead Qualification and Conversational Sales Bots',
    description:
      'Chatbots that engage website visitors, qualify leads automatically, and connect with CRM and sales systems. Built to convert conversations into a pipeline without manual intervention.',
  },
  {
    icon: Database,
    title: '6. RAG-Based AI Chatbots',
    description:
      'Retrieval-augmented chatbots connected to your enterprise knowledge bases, databases, and APIs. Built for products where accuracy and source traceability are non-negotiable.',
  },
  {
    icon: Layers,
    title: '7. Multi-Platform Chatbot Integration',
    description: (
      <>
        Our{' '}
        <Link
          to="/ai-app-development-services"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          AI app development services
        </Link>{' '}
        deploy chatbots across web, mobile, SaaS, and messaging platforms with consistent functionality. Built for businesses developing{' '}
        <a
          href="https://inceptivesdigital.com/blog/ai-powered-mobile-apps-uae-business-operations"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          AI-powered mobile apps
        </a>{' '}
        and other conversational experiences wherever their users are.
      </>
    ),
  },
  {
    icon: SlidersHorizontal,
    title: '8. AI Model Training and Fine-Tuning',
    description:
      'LLMs and NLP models trained and fine-tuned on your domain-specific data for context-aware, personalised conversations. Built for products where a general model is not precise enough.',
  },
]

export default function ChatbotServicesGrid() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            AI Chatbot Development Services Built for{' '}
            <span className="text-[#00CE44]">Every Conversational Use Case</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Eight capabilities. Each one is scoped precisely in Discovery and built for the specific context of your product and your users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon
            return (
              <div
                key={srv.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 flex flex-col items-start text-left transition-colors duration-200 cursor-pointer"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[18px] sm:text-[19px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {srv.title}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[14px] leading-[1.68] font-normal transition-colors duration-200">
                  {srv.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

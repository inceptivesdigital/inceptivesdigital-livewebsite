import React from 'react'
import { Link } from 'react-router-dom'
import {
  BrainCircuit,
  Smartphone,
  Globe,
  BarChart3,
  Sparkles,
  MessageSquare,
  Database,
  Eye,
  Plug,
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom AI App Development',
    internalLink: '/ai-development',
    description:
      'Applications designed around your workflows, user needs, and operational requirements. Built from the architecture up, not assembled from generic components.',
  },
  {
    icon: Smartphone,
    title: 'AI Mobile App Development',
    description:
      'Intelligent iOS and Android apps with ML, predictive analytics, and conversational AI built into the core for real user load.',
  },
  {
    icon: Globe,
    title: 'AI Web App Development',
    description:
      'Scalable web apps with AI models, automation, and real-time intelligence integrated from the start.',
  },
  {
    icon: BarChart3,
    title: 'Machine Learning App Development',
    internalLink: '/machine-learning-development-services',
    description:
      'Applications built on predictive models, classification engines, and recommendation systems trained on your data.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI App Development',
    description:
      'Apps that generate content, summarize data, automate workflows, and enable intelligent user interactions using LLMs.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot & Virtual Assistant Integration',
    internalLink: '/ai-chatbot-development-services',
    description:
      'Conversational AI integrated for support, lead qualification, internal knowledge access, and task automation.',
  },
  {
    icon: Database,
    title: 'RAG-Based AI App Development',
    description:
      'Applications connected to structured and unstructured data sources for real-time, knowledge-grounded AI responses.',
  },
  {
    icon: Eye,
    title: 'Computer Vision App Development',
    internalLink: '/computer-vision-development-services',
    description:
      'AI-powered applications for image/video analysis, object detection, visual inspection, and monitoring.',
  },
  {
    icon: Plug,
    title: 'Existing App AI Integration',
    description:
      'Add AI capabilities to your current application without rebuilding it — chatbots, recommendation engines, predictive analytics, and smart search integrated into your system.',
  },
]

export default function AiAppServicesGrid() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Custom AI App Development Services for{' '}
            <span className="text-[#00CE44]">Web and Mobile Products</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Eleven capabilities. Each one is scoped precisely in Discovery and built for the specific requirements of your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon
            const titleEl = srv.internalLink ? (
              <Link
                to={srv.internalLink}
                className="underline decoration-[#00CE44]/60 group-hover:decoration-black"
              >
                {srv.title}
              </Link>
            ) : (
              srv.title
            )

            return (
              <div
                key={srv.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 cursor-pointer"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {titleEl}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.68] font-normal transition-colors duration-200">
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

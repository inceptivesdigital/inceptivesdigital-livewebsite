import {
  FileImage,
  FileSearch,
  FileText,
  Layers3,
  Network,
  Settings2,
  Sparkles,
  Workflow,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sparkles,
    title: 'Custom Generative AI Development',
    description: (
      <>
        Our <Link className="text-white underline group-hover:text-black" to="/custom-software-development">custom software development</Link> approach creates purpose-built generative AI applications around your specific workflows, users, data sources, and operational requirements. Built from the architecture up rather than assembled with generic{' '}
        <Link className="text-white underline group-hover:text-black" to="/blog/ai-app-builders-vs-human-developers">AI app builders</Link> or adapted from a template.
      </>
    ),
  },
  {
    icon: Layers3,
    title: 'Generative AI Application Development',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/ai-app-development-services">AI app development</Link> for web, mobile, and SaaS products brings generation, summarisation, search, analysis, and conversational features into the core product architecture.
      </>
    ),
  },
  {
    icon: FileSearch,
    title: 'RAG System Development',
    description:
      'Retrieval-augmented generation systems connected to your documents, databases, and knowledge bases. Built for products where responses need to be grounded in your data, not general model knowledge.',
  },
  {
    icon: Settings2,
    title: 'LLM Integration and Fine-Tuning',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/nlp-development-services">Natural language processing</Link>, foundation model selection, prompt architecture, fine-tuning, evaluation, and LLM integration are configured around your specific domain and task requirements.
      </>
    ),
  },
  {
    icon: FileText,
    title: 'Generative AI for Content Creation',
    description:
      'Systems for drafting, editing, summarising, and repurposing content across marketing, operations, and product teams. Built for organisations where content volume outpaces manual production capacity.',
  },
  {
    icon: FileImage,
    title: 'Generative AI for Image Creation',
    description:
      'Image generation and editing workflows for product visuals, creative production, and brand-controlled visual content. Built for teams that need consistent, scalable visual output.',
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence Solutions',
    description:
      'Applications that extract, classify, summarise, compare, and generate information from contracts, reports, forms, and records. Built for organisations that run on documents.',
  },
  {
    icon: Workflow,
    title: 'Generative AI Workflow Automation',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/ai-agent-development">AI agent development</Link> extends generative AI into workflows that connect foundation models with APIs, business rules, approval steps, and internal software. Built for{' '}
        <Link className="text-white underline group-hover:text-black" to="/business-process-automation">business process automation</Link> across multi-stage knowledge work that currently depends on manual effort.
      </>
    ),
  },
  {
    icon: Network,
    title: 'Generative AI Integration Services',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/system-integration-api-automation">System integration and API automation</Link> connect generative AI capabilities with CRM, ERP, CMS, data warehouses, and existing digital products. Built for businesses that need intelligence inside the tools they already run on.
      </>
    ),
  },
]

export default function GenerativeServices() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Generative AI Development Services With Impact From Day One
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Nine capabilities. Each one was scoped precisely in Discovery and built around the data, controls, and software already in place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-7 sm:p-8 transition-colors duration-200"
            >
              <Icon className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors" strokeWidth={1.7} />
              <h3 className="text-[#00CE44] group-hover:text-black text-xl font-bold mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-white/80 group-hover:text-black text-[15px] leading-relaxed transition-colors">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Activity, BookOpen, BrainCircuit, FileText, Network, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const industries = [
  {
    icon: Activity,
    title: 'Fintech',
    items: [
      'Fraud detection model validation on real transaction data',
      'Credit scoring MVP using structured and alternative data',
      'Automated compliance workflow proof of concept',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Healthcare',
    items: [
      <>
        Clinical decision support MVP using{' '}
        <Link to="/machine-learning-development-services">
          machine learning development
        </Link>{' '}
        for predictive models
      </>,
      <>
        <Link to="/ai-chatbot-development-services">
          AI chatbot development
        </Link>{' '}
        for patient assistance using RAG architecture
      </>,
      'Medical document processing and summarisation proof',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce',
    items: [
      'Recommendation engine MVP trained on behavioural data',
      <>
        <Link to="/blog/ai-powered-mobile-apps-uae-business-operations">
          AI-powered mobile apps
        </Link>{' '}
        for search and personalisation proof of concept
      </>,
      'Customer sentiment analysis and segmentation MVP',
    ],
  },
  {
    icon: Network,
    title: 'SaaS and Technology',
    items: [
      <>
        Embedded copilots and{' '}
        <Link to="/ai-agent-development">
          AI agent development
        </Link>{' '}
        MVPs for existing SaaS products
      </>,
      'Generative AI feature validation before platform build',
      'Predictive analytics MVP for in-product intelligence',
    ],
  },
  {
    icon: FileText,
    title: 'Legal and Professional Services',
    items: [
      'Contract analysis and clause extraction proof of concept',
      <>
        Legal document summarisation MVP using{' '}
        <Link to="/nlp-development-services">
          natural language processing
        </Link>{' '}
        and LLMs
      </>,
      'Knowledge retrieval MVP built on RAG architecture',
    ],
  },
  {
    icon: BookOpen,
    title: 'Education',
    items: [
      'Intelligent tutoring MVP powered by LLM-based models',
      'Automated assessment and grading proof of concept',
      'Personalised learning path MVP using ML algorithms',
    ],
  },
]

export default function AiMvpIndustries() {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0e11] text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1040px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-tight tracking-tight mb-4">
            Industries Where Our AI MVP Development Company Delivers Validated Concepts
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-relaxed">
            Every industry has different validation requirements, compliance considerations, and data constraints. We scope the MVP around the specific context.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch auto-rows-fr">
          {industries.map(({ icon: Icon, title, items }) => (
            <article key={title} className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-6 sm:p-7 transition-colors duration-200 h-full">
              <Icon className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] group-hover:text-black text-xl sm:text-2xl font-bold mb-4 transition-colors leading-tight">
                {title}
              </h3>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-white/80 group-hover:text-black text-[14px] sm:text-[15px] leading-relaxed transition-colors [&_a]:text-white [&_a]:underline group-hover:[&_a]:text-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-2 shrink-0 transition-colors" />
                    <span>{item}</span>
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

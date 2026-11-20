import { Activity, BookOpen, BrainCircuit, FileText, Network, ShoppingCart } from 'lucide-react'

const industries = [
  {
    icon: Activity,
    title: '1. Fintech',
    items: [
      'Fraud detection model validation on real transaction data',
      'Credit scoring MVP using structured and alternative data',
      'Automated compliance workflow proof of concept',
    ],
  },
  {
    icon: BrainCircuit,
    title: '2. Healthcare',
    items: [
      <>
        Clinical decision support MVP using{' '}
        <a href="https://inceptivesdigital.com/machine-learning-development-services" target="_blank" rel="noopener noreferrer">
          machine learning development
        </a>{' '}
        for predictive models
      </>,
      <>
        <a href="https://inceptivesdigital.com/ai-chatbot-development-services" target="_blank" rel="noopener noreferrer">
          AI chatbot development
        </a>{' '}
        for patient assistance using RAG architecture
      </>,
      'Medical document processing and summarisation proof',
    ],
  },
  {
    icon: ShoppingCart,
    title: '3. Ecommerce',
    items: [
      'Recommendation engine MVP trained on behavioural data',
      <>
        <a href="https://inceptivesdigital.com/blog/ai-powered-mobile-apps-uae-business-operations" target="_blank" rel="noopener noreferrer">
          AI-powered mobile apps
        </a>{' '}
        for search and personalisation proof of concept
      </>,
      'Customer sentiment analysis and segmentation MVP',
    ],
  },
  {
    icon: Network,
    title: '4. SaaS and Technology',
    items: [
      <>
        Embedded copilots and{' '}
        <a href="https://inceptivesdigital.com/ai-agent-development" target="_blank" rel="noopener noreferrer">
          AI agent development
        </a>{' '}
        MVPs for existing SaaS products
      </>,
      'Generative AI feature validation before platform build',
      'Predictive analytics MVP for in-product intelligence',
    ],
  },
  {
    icon: FileText,
    title: '5. Legal and Professional Services',
    items: [
      'Contract analysis and clause extraction proof of concept',
      'Legal document summarisation MVP using natural language processing and LLMs',
      'Knowledge retrieval MVP built on RAG architecture',
    ],
  },
  {
    icon: BookOpen,
    title: '6. Education',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map(({ icon: Icon, title, items }) => (
            <article key={title} className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-6 sm:p-7 transition-colors duration-200">
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

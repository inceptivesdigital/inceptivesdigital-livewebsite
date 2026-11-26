import { Activity, FileSearch, FileText, Network, Search, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

const useCases = [
  {
    icon: Workflow,
    title: '1. Customer Support Automation',
    description: (
      <>
        <Link
          to="/ai-automation-services"
          className="text-white underline group-hover:text-black"
>
          AI automation
        </Link>{' '}
        uses language understanding to classify customer intent, resolve routine queries, and route requests without manual handling at every interaction.
      </>
    ),
  },
  {
    icon: FileText,
    title: '2. Document Intelligence',
    description:
      'Extract, classify, and summarise information from contracts, reports, forms, and records at a speed no human team can match.',
  },
  {
    icon: Activity,
    title: '3. Sentiment Analysis',
    description:
      'Analyse customer feedback, reviews, and social data to surface actionable insights about how people feel about your product or brand.',
  },
  {
    icon: Search,
    title: '4. Semantic Search',
    description:
      'Search systems that understand meaning rather than keywords. Built for products where users need to find relevant information from large unstructured datasets.',
  },
  {
    icon: FileSearch,
    title: '5. Text Classification',
    description: (
      <>
        Automatically categorise incoming emails, tickets, documents, and messages to support{' '}
        <Link
          to="/business-process-automation"
          className="text-white underline group-hover:text-black"
>
          business process automation
        </Link>{' '}
        and route information without manual intervention.
      </>
    ),
  },
  {
    icon: Network,
    title: '6. Speech Recognition',
    description: (
      <>
        Convert spoken language into structured data for transcription,{' '}
        <Link
          to="/blog/ai-powered-mobile-apps-uae-business-operations"
          className="text-white underline group-hover:text-black"
>
          AI-powered mobile apps
        </Link>{' '}
        with voice interfaces, and call centre automation.
      </>
    ),
  },
]

export default function NlpUseCases() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Business Problems We Solve With NLP Development
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Language sits at the centre of most business operations. These are the problems NLP solves when the architecture is right.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-7 sm:p-8 transition-colors duration-200"
            >
              <Icon className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors" strokeWidth={1.7} aria-hidden="true" />
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

import {
  Activity,
  BrainCircuit,
  FileSearch,
  FileText,
  Network,
  Search,
  Speech,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom NLP Model Development',
    description: (
      <>
        Our{' '}
        <Link className="text-white underline group-hover:text-black" to="/custom-software-development">
          custom software development
        </Link>{' '}
        approach builds NLP models around your specific language data, domain context, and performance requirements, then built for production rather than assembled through generic{' '}
        <Link className="text-white underline group-hover:text-black" to="/blog/ai-app-builders-vs-human-developers">
          AI app builders
        </Link>.
      </>
    ),
  },
  {
    icon: Activity,
    title: 'Text Classification and Categorisation',
    description: (
      <>
        Models automatically categorise text across emails, tickets, documents, and messages so{' '}
        <Link className="text-white underline group-hover:text-black" to="/rpa-development-services">
          RPA development services
        </Link>{' '}
        can route and act on structured language data at scale.
      </>
    ),
  },
  {
    icon: FileSearch,
    title: 'Named Entity Recognition and Extraction',
    description:
      'NLP pipelines that identify and extract people, organisations, locations, dates, and domain-specific entities from unstructured text at scale.',
  },
  {
    icon: Activity,
    title: 'Sentiment Analysis and Opinion Mining',
    description:
      'Models that analyse customer feedback, reviews, and social data to surface actionable insights about perception, satisfaction, and brand sentiment.',
  },
  {
    icon: Search,
    title: 'Semantic Search and Information Retrieval',
    description:
      'Search systems that understand meaning rather than keywords. Built for products where users need to find relevant information from large unstructured datasets.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence and Processing',
    description: (
      <>
        NLP systems, often paired with{' '}
        <Link className="text-white underline group-hover:text-black" to="/computer-vision-development-services">
          computer vision
        </Link>{' '}
        for scanned forms and records, extract, classify, summarise, and compare information from business documents.
      </>
    ),
  },
  {
    icon: Speech,
    title: 'NLP Chatbot Development',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/ai-chatbot-development-services">
          AI chatbot development
        </Link>{' '}
        uses NLP pipelines to understand intent, retain context, and respond accurately across customer support, sales, and internal knowledge use cases.
      </>
    ),
  },
  {
    icon: Network,
    title: 'Speech Recognition and Voice Intelligence',
    description: (
      <>
        Systems convert spoken language into structured data for transcription,{' '}
        <Link className="text-white underline group-hover:text-black" to="/mobile-app-development">
          mobile applications
        </Link>{' '}
        with voice interfaces, IVR automation, and call centre intelligence.
      </>
    ),
  },
  {
    icon: Workflow,
    title: 'NLP Integration Services',
    description: (
      <>
        For{' '}
        <Link className="text-white underline group-hover:text-black" to="/ai-app-development-services">
          AI app development
        </Link>
        , NLP models and pipelines can be integrated into existing software, APIs, CRM platforms, and business workflows. Built for businesses that need language intelligence inside the systems they already run on.
      </>
    ),
  },
]

export default function NlpServices() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            NLP Development Services That Go Beyond Generic Model Wrappers
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Nine capabilities. Each one is scoped in Discovery and built around your data, your domain, and your specific language requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={index}
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

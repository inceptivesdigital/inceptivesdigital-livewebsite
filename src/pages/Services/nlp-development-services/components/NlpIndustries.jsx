import { Activity, BrainCircuit, FileSearch, FileText, Network, Workflow } from 'lucide-react'

const industries = [
  {
    icon: BrainCircuit,
    name: '1. Fintech',
    bullets: [
      'Financial report analysis and summarisation',
      'Fraud detection through communication monitoring',
      <>
        <a
          href="https://inceptivesdigital.com/ai-agent-development"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline group-hover:text-black"
        >
          AI agent development
        </a>{' '}
        for customer query automation and intent classification
      </>,
    ],
  },
  {
    icon: Activity,
    name: '2. Healthcare',
    bullets: ['Clinical note processing and summarisation', 'Medical entity extraction and classification', 'Patient support and symptom triage automation'],
  },
  {
    icon: FileText,
    name: '3. Legal and Professional Services',
    bullets: ['Contract analysis and clause extraction', 'Legal document summarisation and comparison', 'Research assistance and precedent retrieval'],
  },
  {
    icon: FileSearch,
    name: '4. Ecommerce',
    bullets: ['Semantic search and product recommendation', 'Customer review analysis and sentiment classification', 'Support query automation and intent routing'],
  },
  {
    icon: Network,
    name: '5. Media and Publishing',
    bullets: ['Content classification and tagging automation', 'Semantic search across large content libraries', 'Automated summarisation and content repurposing'],
  },
  {
    icon: Workflow,
    name: '6. Customer Service and Support',
    bullets: ['Intent classification and automated query resolution', 'Support ticket routing and prioritisation', 'Knowledge base search and agent assistance'],
  },
]

export default function NlpIndustries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-5 max-w-4xl mx-auto">
          Industries Where Our NLP Development Company Delivers Language Intelligence
        </h2>
        <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] text-center max-w-[960px] mx-auto mb-12 sm:mb-16">
          Every industry has different language patterns, document types, and accuracy requirements. We build for the specific context.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] overflow-hidden shadow-2xl items-stretch auto-rows-fr">
          {industries.map(({ icon: Icon, name, bullets }) => (
            <article
              key={name}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col bg-[#18191d] hover:bg-[#00CE44] transition-colors duration-300 min-h-[280px] h-full"
            >
              <Icon className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-6 transition-colors" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] group-hover:text-black transition-colors leading-tight mb-3">
                {name}
              </h3>
              <ul className="space-y-2">
                {bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-slate-300 group-hover:text-black transition-colors leading-relaxed"
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

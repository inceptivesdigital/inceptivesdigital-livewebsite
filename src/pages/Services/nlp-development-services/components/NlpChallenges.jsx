import { Activity, BrainCircuit, FileSearch, Network, ShieldCheck, TriangleAlert } from 'lucide-react'

const challenges = [
  {
    icon: BrainCircuit,
    title: '1. Domain-Specific Language',
    description:
      'Generic models trained on general text fail when applied to specialised business language. We build and fine-tune models on your domain-specific data before deployment.',
  },
  {
    icon: FileSearch,
    title: '2. Data Quality and Preparation',
    description: (
      <>
        NLP systems are only as accurate as the text data behind them. We clean, structure, and prepare language datasets before{' '}
        <a className="text-[#00CE44] underline hover:opacity-80 transition-colors" href="https://inceptivesdigital.com/ai-development">
          AI development
        </a>{' '}
        and model training begin.
      </>
    ),
  },
  {
    icon: TriangleAlert,
    title: '3. Ambiguity and Context',
    description:
      'Natural language is ambiguous. We build context management and disambiguation logic into NLP pipelines to handle the edge cases that break generic models.',
  },
  {
    icon: Network,
    title: '4. Multilingual Requirements',
    description:
      'Businesses operating across languages need NLP systems that perform consistently in every language they serve. We build multilingual pipelines from the architecture stage.',
  },
  {
    icon: ShieldCheck,
    title: '5. Integration Complexity',
    description: (
      <>
        NLP outputs need{' '}
        <a className="text-[#00CE44] underline hover:opacity-80 transition-colors" href="https://inceptivesdigital.com/system-integration-api-automation">
          system integration and API automation
        </a>{' '}
        to connect language intelligence with the systems that act on it without disrupting existing workflows.
      </>
    ),
  },
  {
    icon: Activity,
    title: '6. Model Drift and Accuracy Degradation',
    description:
      'Language evolves. Business terminology changes. We build monitoring pipelines that detect accuracy degradation before it affects operational outcomes.',
  },
]

export default function NlpChallenges() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1040px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Challenges Our NLP Development Company Addresses Before They Reach Production
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Many{' '}
            <a
              href="https://inceptivesdigital.com/blog/common-reasons-digital-products-fail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
            >
              digital products fail
            </a>{' '}
            when predictable NLP issues such as poor data, ambiguity, integration gaps, and model drift are not addressed before development begins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-[#1b1c21] rounded-2xl p-7 sm:p-8 border border-white/5">
              <Icon className="w-10 h-10 text-[#00CE44] mb-5" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import {
  Activity,
  CircleDollarSign,
  Database,
  LockKeyhole,
  Network,
  Scale,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const challenges = [
  {
    icon: Target,
    title: 'Output Accuracy',
    description:
      'Hallucinations, inconsistent responses, and unreliable outputs are addressed through grounded retrieval, structured prompts, and evaluation pipelines before deployment.',
  },
  {
    icon: Database,
    title: 'Data Quality',
    description: (
      <>
        AI systems are only as good as the data behind them. We prepare, clean, classify, and secure the information used for training, retrieval, and generation before{' '}
        <Link
          to="/ai-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI development
        </Link>{' '}
        begins.
      </>
    ),
  },
  {
    icon: Network,
    title: 'Model Selection',
    description:
      'Choosing between proprietary and open-source models depends on latency, privacy, context length, and operating cost. We make that decision in Discovery based on your specific requirements.',
  },
  {
    icon: CircleDollarSign,
    title: 'Cost Control',
    description:
      'Inference costs, token usage, and infrastructure expenses are tracked and optimised from the architecture stage. Production costs should never be a surprise.',
  },
  {
    icon: LockKeyhole,
    title: 'Security and Access',
    description:
      'Sensitive data is protected through encryption, role-based permissions, private deployment options, and controlled model access built into the architecture from day one.',
  },
  {
    icon: Network,
    title: 'Integration Complexity',
    description:
      'Connecting generative AI with CRM, ERP, CMS, and internal software requires careful architecture planning. We map integration requirements before development begins to avoid disruption to existing workflows.',
  },
  {
    icon: Scale,
    title: 'Ethical Issues in Generative AI',
    description:
      'Moderation, audit trails, human review workflows, and bias testing are built into systems where harmful, biased, or non-compliant outputs carry real risk.',
  },
  {
    icon: Activity,
    title: 'Long-Term Reliability',
    description: (
      <>
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Post-launch analytics and iteration
        </Link>{' '}
        monitor retrieval quality, prompt performance, drift, and latency after deployment. Systems are updated as requirements change and usage grows.
      </>
    ),
  },
]

export default function GenerativeChallenges() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Challenges Our Generative AI Development Company Addresses Before They Become Problems
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Most generative AI challenges appear after launch, when they are expensive to fix. We address them during planning and architecture before development begins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {challenges.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-[#1b1c21] rounded-2xl p-6 sm:p-7 border border-white/5">
              <Icon className="w-9 h-9 text-[#00CE44] mb-4" strokeWidth={1.7} />
              <h3 className="text-[#00CE44] text-lg font-bold mb-3">{title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

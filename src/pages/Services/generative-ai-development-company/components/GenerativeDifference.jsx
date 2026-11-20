import { BrainCircuit, TriangleAlert, Workflow } from 'lucide-react'

const points = [
  {
    icon: BrainCircuit,
    title: 'Generative AI vs Traditional AI',
    description:
      'Traditional AI classifies and predicts. Generative AI creates. Text, images, summaries, and decisions are produced from patterns learned during training and context supplied at runtime. That difference changes how the system is designed and governed.',
  },
  {
    icon: TriangleAlert,
    title: 'Where Most Generative AI Projects Go Wrong',
    description:
      'The model is rarely the problem. Weak retrieval pipelines, missing governance controls, and no evaluation framework are challenges that often appear after launch, when they are expensive to fix.',
  },
  {
    icon: Workflow,
    title: 'What Production-Ready Generative AI Requires',
    description:
      'Grounded retrieval connected to your data. Secure integrations with your existing software. Evaluation pipelines that catch hallucinations before they reach users.',
  },
]

export default function GenerativeDifference() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Why Generative AI Projects Fail to Deliver and What It Takes to Build One That Does
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Most generative AI projects underperform not because the model is wrong, but because the production engineering around it was underbuilt—one reason the debate about{' '}
            <a
              href="https://inceptivesdigital.com/blog/will-ai-really-replace-app-developers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              AI replacing developers
            </a>{' '}
            misses what it takes to ship reliable systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-[#1b1c21] rounded-2xl p-7 sm:p-8 border border-white/5">
              <Icon className="w-10 h-10 text-[#00CE44] mb-5" strokeWidth={1.7} />
              <h3 className="text-[#00CE44] text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

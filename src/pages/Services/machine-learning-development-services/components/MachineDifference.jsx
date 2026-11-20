import { BrainCircuit, TriangleAlert, Workflow } from 'lucide-react'

const points = [
  {
    icon: BrainCircuit,
    title: 'How Machine Learning Adds Value',
    description: (
      <>
        ML systems learn patterns from data to make predictions, recommendations, and decisions. The real value is automating tasks your team currently handles manually, including workflows where{' '}
        <a
          href="https://inceptivesdigital.com/ai-agent-development"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] underline hover:text-white transition-colors"
        >
          AI agents
        </a>{' '}
        act on ML predictions and decisions.
      </>
    ),
  },
  {
    icon: TriangleAlert,
    title: 'Common Failure Points in ML Projects',
    description: (
      <>
        Poorly prepared data, weak features, no post-deployment monitoring, and outdated training data are common reasons{' '}
        <a
          href="https://inceptivesdigital.com/blog/common-reasons-digital-products-fail"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] underline hover:text-white transition-colors"
        >
          digital products fail
        </a>{' '}
        when machine learning reaches production. These issues are expensive to fix after launch.
      </>
    ),
  },
  {
    icon: Workflow,
    title: 'What Production-Ready Machine Learning Requires',
    description:
      'Clean, structured data pipelines. Features aligned with business operations. Scalable deployment infrastructure. Continuous monitoring to catch drift before it impacts results.',
  },
]

export default function MachineDifference() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            What Makes a Machine Learning Model Truly Effective
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Most models perform well in testing but fail in production. The difference lies in data quality, deployment, and monitoring, not the algorithm itself—a reality often missed in discussions about{' '}
            <a
              href="https://inceptivesdigital.com/blog/will-ai-really-replace-app-developers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              AI replacing app developers
            </a>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, description }) => (
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

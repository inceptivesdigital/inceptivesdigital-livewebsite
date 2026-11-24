import { Activity, BrainCircuit, FileSearch, FileText, Network, Workflow } from 'lucide-react'

const modelTypes = [
  {
    icon: BrainCircuit,
    title: '1. Supervised Learning Models',
    description:
      'Models trained on labeled data to classify, predict, and score outcomes with measurable accuracy for structured business problems.',
    examples: ['Predict customer churn', 'Assess credit risk and fraud', 'Forecast demand and sales'],
  },
  {
    icon: Network,
    title: '2. Unsupervised Learning Models',
    description:
      'Models that identify hidden patterns, clusters, and anomalies without labeled examples, providing actionable insights from raw data.',
    examples: ['Segment customers by behavior', 'Detect operational anomalies', 'Discover market basket patterns'],
  },
  {
    icon: Workflow,
    title: '3. Reinforcement Learning Models',
    description:
      'Models that learn optimal decisions through trial and error in dynamic environments, adapting continuously to changing conditions.',
    examples: ['Optimize dynamic pricing', 'Allocate resources efficiently', 'Adaptive recommendation systems'],
  },
  {
    icon: Activity,
    title: '4. Deep Learning Models',
    description:
      'Neural network architectures capable of recognizing complex patterns across images, text, audio, and high-dimensional datasets.',
    examples: ['Classify images and videos', 'Speech recognition and audio analysis', 'Advanced NLP tasks'],
  },
  {
    icon: FileText,
    title: '5. Natural Language Models',
    description: (
      <>
        ML systems can support{' '}
        <a
          href="https://inceptivesdigital.com/generative-ai-development-company"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          generative AI development
        </a>{' '}
        by understanding, classifying, and generating text at scale for language-driven automation and insights.
      </>
    ),
    examples: [
      'Sentiment analysis and intent classification',
      'Named entity recognition',
      <>
        Semantic search, Q&A systems, and{' '}
        <a
          href="https://inceptivesdigital.com/ai-chatbot-development-services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          AI chatbots
        </a>
      </>,
    ],
  },
  {
    icon: FileSearch,
    title: '6. Computer Vision Models',
    description:
      'Models designed for visual data at scale, enabling automated inspection, classification, and monitoring in operational contexts.',
    examples: ['Object detection and visual inspection', 'Image classification and tagging', 'Real-time video monitoring'],
  },
]

export default function MachineModels() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Machine Learning Models Built Around Your Business
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            We select the right model type for each business problem to deliver production-ready performance and measurable outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelTypes.map(({ icon: Icon, title, description, examples }) => (
            <article key={title} className="bg-[#1b1c21] border border-white/5 rounded-2xl p-7 sm:p-8">
              <Icon className="w-9 h-9 text-[#00CE44] mb-5" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2">
                {examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-white/75 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{example}</span>
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

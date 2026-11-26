import {
  Activity,
  Clock,
  Database,
  Network,
  Smartphone,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const risks = [
  {
    icon: Database,
    title: '1. Training Data Quality',
    description:
      'Models trained on unrepresentative data fail when real-world conditions differ from training conditions. We curate and annotate datasets that reflect the actual operational environment before training begins.',
  },
  {
    icon: Target,
    title: '2. Edge Case Accuracy',
    description:
      'Lighting variations, occlusions, and motion blur break models that performed well in testing. We test against real edge cases before deployment.',
  },
  {
    icon: Clock,
    title: '3. Inference Latency',
    description: (
      <>
        Real-time video and high-volume image processing have strict latency requirements. For{' '}
        <Link
          to="/product-rescue-scaling"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          product scaling
        </Link>
        , we optimise inference pipelines for the throughput the deployment environment demands.
      </>
    ),
  },
  {
    icon: Smartphone,
    title: '4. Edge Device Deployment',
    description: (
      <>
        Many computer vision systems, including{' '}
        <Link
          to="/blog/ai-powered-mobile-apps-uae-business-operations"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI-powered mobile apps
        </Link>{' '}
        and edge deployments, run on hardware with limited compute. We select and optimise model architectures for the specific constraints of the deployment environment.
      </>
    ),
  },
  {
    icon: Activity,
    title: '5. Model Drift',
    description:
      'Lighting, equipment, and operational conditions shift over time and degrade accuracy quietly. We build monitoring pipelines that detect degradation before it affects outcomes.',
  },
  {
    icon: Network,
    title: '6. System Integration',
    description: (
      <>
        Computer vision outputs need{' '}
        <Link
          to="/system-integration-api-automation"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          system integration and API automation
        </Link>{' '}
        to connect to{' '}
        <Link
          to="/ai-agent-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI agents
        </Link>{' '}
        and operational systems that can act on what the model detects. Integration architecture is defined before development begins.
      </>
    ),
  },
]

export default function ComputerVisionChallenges() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Common Computer Vision Risks We Eliminate Early
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Most computer vision failures are predictable. We address them during architecture and data preparation before development begins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-[#1b1c21] rounded-2xl p-6 sm:p-7 border border-white/5">
              <Icon className="w-9 h-9 text-[#00CE44] mb-4" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] text-lg font-bold mb-3">{title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import LocationProcessLayout from '../../../../components/LocationProcessLayout'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01.',
    tabTitle: 'Use Case Discovery',
    cardTitle: '1. Use Case Discovery',
    image: '/assets/ai-development/dis.png',
    imageAlt: 'Generative AI use case discovery',
    desc: (
      <>
        Following the{' '}
        <Link to="/blog/ai-mvp-development-guide" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          AI MVP development guide
        </Link>
        , we map business objectives, identify workflows where generative AI creates leverage, define user roles, and review data sources before development begins. This{' '}
        <Link to="/product-strategy-consulting" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          product strategy consulting
        </Link>{' '}
        stage creates a clear build plan before a line of code is written.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Data & Architecture',
    cardTitle: '2. Data Readiness and Architecture',
    image: '/assets/ai-development/presstwo.png',
    imageAlt: 'Generative AI data readiness and architecture',
    desc:
      'Data quality assessed and prepared for retrieval, training, or generation. RAG, fine-tuning, or prompt engineering approach determined. Tech stack, integration requirements, and deployment environment defined upfront.',
  },
  {
    num: '03.',
    tabTitle: 'Model Integration',
    cardTitle: '3. Model Development and Integration',
    image: '/assets/ai-development/proess3.png',
    imageAlt: 'Generative AI model development and integration',
    desc:
      'Foundation models configured or fine-tuned for your specific domain and task requirements. RAG pipelines, embedding workflows, and retrieval logic built. Connected to CRM, ERP, CMS, and internal software from the start.',
  },
  {
    num: '04.',
    tabTitle: 'Testing & Deploy',
    cardTitle: '4. Evaluation, Testing, and Deployment',
    image: '/assets/ai-development/process5.png',
    imageAlt: 'Generative AI evaluation and deployment',
    desc:
      'Factual accuracy, retrieval quality, hallucination risk, and latency were tested before deployment. Unit, integration, and security testing completed. Deployed on AWS, Google Cloud, or Azure with monitoring in place from day one.',
  },
  {
    num: '05.',
    tabTitle: 'Optimize & Support',
    cardTitle: '5. Optimization and Support',
    image: '/assets/ai-development/process6.png',
    imageAlt: 'Generative AI optimization and support',
    desc: (
      <>
        Prompt performance, retrieval accuracy, and operating costs tracked post-launch. Models, datasets, and workflows updated as requirements change.{' '}
        <Link to="/product-rescue-scaling" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          Product scaling
        </Link>{' '}
        keeps infrastructure aligned as usage and generative AI workloads grow.
      </>
    ),
  },
]

export default function GenerativeProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Generative AI Development Process Designed to Deliver{' '}
          <span className="text-[#00CE44]">Production-Ready AI Systems</span>
        </>
      }
      subtitle="Every step exists because skipping it costs more than doing it."
      steps={steps}
    />
  )
}

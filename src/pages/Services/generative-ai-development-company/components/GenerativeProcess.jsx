import LocationProcessLayout from '../../../../components/LocationProcessLayout'

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
        <a href="https://inceptivesdigital.com/blog/ai-mvp-development-guide" target="_blank" rel="noopener noreferrer" className="text-[#00CE44] underline hover:text-white transition-colors">
          AI MVP development guide
        </a>
        , we map business objectives, identify workflows where generative AI creates leverage, define user roles, and review data sources before development begins. This{' '}
        <a href="https://inceptivesdigital.com/product-strategy-consulting" target="_blank" rel="noopener noreferrer" className="text-[#00CE44] underline hover:text-white transition-colors">
          product strategy consulting
        </a>{' '}
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
      'Data quality is assessed and prepared for retrieval, training, or generation. RAG, fine-tuning, or prompt engineering approaches are determined. The tech stack, integration requirements, and deployment environment are defined upfront.',
  },
  {
    num: '03.',
    tabTitle: 'Model Integration',
    cardTitle: '3. Model Development and Integration',
    image: '/assets/ai-development/proess3.png',
    imageAlt: 'Generative AI model development and integration',
    desc:
      'Foundation models are configured or fine-tuned for your domain and task requirements. RAG pipelines, embedding workflows, and retrieval logic are built and connected to CRM, ERP, CMS, and internal software from the start.',
  },
  {
    num: '04.',
    tabTitle: 'Testing & Deploy',
    cardTitle: '4. Evaluation, Testing, and Deployment',
    image: '/assets/ai-development/process5.png',
    imageAlt: 'Generative AI evaluation and deployment',
    desc:
      'Factual accuracy, retrieval quality, hallucination risk, and latency are tested before deployment. Unit, integration, and security testing are completed. Systems are deployed on AWS, Google Cloud, or Azure with monitoring in place from day one.',
  },
  {
    num: '05.',
    tabTitle: 'Optimize & Support',
    cardTitle: '5. Optimization and Support',
    image: '/assets/ai-development/process6.png',
    imageAlt: 'Generative AI optimization and support',
    desc: (
      <>
        Prompt performance, retrieval accuracy, and operating costs are tracked post-launch. Models, datasets, and workflows are updated as requirements change.{' '}
        <a href="https://inceptivesdigital.com/product-rescue-scaling" target="_blank" rel="noopener noreferrer" className="text-[#00CE44] underline hover:text-white transition-colors">
          Product scaling
        </a>{' '}
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

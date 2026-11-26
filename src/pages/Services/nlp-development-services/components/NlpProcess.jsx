import LocationProcessLayout from '../../../../components/LocationProcessLayout'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery & Assessment',
    cardTitle: '1. Discovery & Assessment',
    image: '/assets/ai-development/dis.png',
    imageAlt: 'NLP discovery and language data assessment',
    desc: (
      <>
        As outlined in our{' '}
        <Link to="/blog/ai-mvp-development-guide" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          AI MVP development guide
        </Link>
        , business problems are defined, language data sources identified, data quality evaluated, and NLP feasibility confirmed before development. Clear build plan before a model is selected.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Data Preparation',
    cardTitle: '2. Data Preparation',
    image: '/assets/ai-development/presstwo.png',
    imageAlt: 'NLP text data preparation and annotation',
    desc:
      'Text datasets cleaned, normalised, and annotated for model training. Domain-specific terminology and language patterns are identified before development begins.',
  },
  {
    num: '03.',
    tabTitle: 'Model Training',
    cardTitle: '3. Model Training',
    image: '/assets/ai-development/proess3.png',
    imageAlt: 'NLP model development and training',
    desc: (
      <>
        <Link to="/machine-learning-development-services" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          Machine learning development
        </Link>{' '}
        for NLP starts with an architecture selected for the specific task, using transformer models, custom pipelines, or fine-tuned LLMs validated against real business language data.
      </>
    ),
  },
  {
    num: '04.',
    tabTitle: 'Integration & Deployment',
    cardTitle: '4. Integration & Deployment',
    image: '/assets/ai-development/process5.png',
    imageAlt: 'NLP system integration and deployment',
    desc:
      'NLP models are integrated into existing software, APIs, and business workflows. Tested for accuracy, latency, and edge case performance. Deployed on AWS, Google Cloud, or Azure.',
  },
  {
    num: '05.',
    tabTitle: 'Monitoring & Optimization',
    cardTitle: '5. Monitoring & Optimization',
    image: '/assets/ai-development/process6.png',
    imageAlt: 'NLP monitoring and language drift detection',
    desc: (
      <>
        <Link to="/post-launch-analytics-iteration" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          Post-launch analytics and iteration
        </Link>{' '}
        track model performance and detect language drift before it affects accuracy. Models are retrained as business language and terminology evolve.
      </>
    ),
  },
]

export default function NlpProcess() {
  return (
    <LocationProcessLayout
      eyebrow=""
      heading={
        <>
          Steps Our NLP Development Company Follows to Ship{' '}
          <span className="text-[#00CE44]">Language Intelligence</span>
        </>
      }
      subtitle="Every step exists because skipping it costs more than doing it."
      steps={steps}
    />
  )
}

import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Problem Definition',
    cardTitle: '1. Problem Definition and Data Assessment',
    image: '/assets/ai-development/dis.png',
    imageAlt: 'Machine learning problem definition and data assessment',
    desc: (
      <>
        Business problem defined, data sources identified, data quality evaluated, and ML feasibility confirmed. As outlined in our{' '}
        <a href="https://inceptivesdigital.com/blog/ai-mvp-development-guide" target="_blank" rel="noopener noreferrer" className="text-[#00CE44] underline hover:text-white transition-colors">
          AI MVP development guide
        </a>
        , this stage creates a clear build plan with defined performance targets before a model is selected.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Data Engineering',
    cardTitle: '2. Data Engineering and Feature Development',
    image: '/assets/ai-development/presstwo.png',
    imageAlt: 'Machine learning data engineering and feature development',
    desc:
      'Data pipelines built, cleaned, and structured for model training. Features engineered to reflect how the business actually operates, not just what the raw data contains.',
  },
  {
    num: '03.',
    tabTitle: 'Model Training',
    cardTitle: '3. Model Development and Training',
    image: '/assets/ai-development/proess3.png',
    imageAlt: 'Machine learning model development and training',
    desc:
      'Model architecture selected based on the business problem, data type, and performance requirements. XGBoost, Random Forest, deep learning, or custom architectures are selected for the specific use case.',
  },
  {
    num: '04.',
    tabTitle: 'Integration & Deploy',
    cardTitle: '4. Integration, Testing, and Deployment',
    image: '/assets/ai-development/process5.png',
    imageAlt: 'Machine learning integration, testing, and deployment',
    desc:
      'Model integrated into existing software and APIs. Tested for accuracy, latency, and reliability. Deployed on AWS SageMaker, Google Vertex AI, or Azure ML with Docker and Kubernetes.',
  },
  {
    num: '05.',
    tabTitle: 'Monitor & Optimize',
    cardTitle: '5. Monitoring, Drift Detection and Optimization',
    image: '/assets/ai-development/process6.png',
    imageAlt: 'Machine learning monitoring and drift detection',
    desc: (
      <>
        <a href="https://inceptivesdigital.com/post-launch-analytics-iteration" target="_blank" rel="noopener noreferrer" className="text-[#00CE44] underline hover:text-white transition-colors">
          Post-launch analytics and iteration
        </a>{' '}
        track model performance with MLflow after deployment. Drift is detected before it affects business outcomes. Models are retrained on updated data when performance degrades.
      </>
    ),
  },
]

export default function MachineProcess() {
  return (
    <LocationProcessLayout
      eyebrow=""
      heading={
        <>
          Custom Machine Learning Development for{' '}
          <span className="text-[#00CE44]">Scalable, Operational Models</span>
        </>
      }
      subtitle="From problem definition to deployment and monitoring, every step is designed to deliver reliable, scalable, and impactful machine learning."
      steps={steps}
    />
  )
}

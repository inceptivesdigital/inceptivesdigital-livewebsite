import LocationProcessLayout from '../../../../components/LocationProcessLayout'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery and Use Case Definition',
    image: '/assets/ai-development/dis.png',
    imageAlt: 'AI agent opportunity discovery',
    desc: (
      <>
        The{' '}
        <Link
          to="/product-strategy-consulting"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          product strategy consulting
        </Link>{' '}
        process maps business objectives, identifies agent use cases, and defines system touchpoints before development begins. KPIs, compliance requirements, and integration points are scoped in this stage. A clear build plan is established before a line of code is written.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Architecture',
    cardTitle: '2. Agent Architecture Planning',
    image: '/assets/ai-development/presstwo.png',
    imageAlt: 'AI agent architecture planning',
    desc:
      'Agent logic, backend infrastructure, data pipelines, and integration requirements are defined upfront. AI agent frameworks, vector databases, and cloud infrastructure are selected based on the specific operational requirements of the agent.',
  },
  {
    num: '03.',
    tabTitle: 'Agent Build',
    cardTitle: '3. Model Development and Agent Build',
    image: '/assets/ai-development/proess3.png',
    imageAlt: 'AI model and agent development',
    desc: (
      <>
        ML models and{' '}
        <Link
          to="/nlp-development-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          NLP
        </Link>{' '}
        pipelines are trained and integrated for decision-making and context management. Multi-step reasoning, state management, and exception handling are built into the agent architecture before deployment.
      </>
    ),
  },
  {
    num: '04.',
    tabTitle: 'Integration & QA',
    cardTitle: '4. Integration, Testing, and QA',
    image: '/assets/ai-development/process5.png',
    imageAlt: 'AI agent integration and testing',
    desc:
      'Agent connected to CRM, ERP, databases, and existing systems. Unit, integration, and system testing completed before deployment. Agent outputs are validated against real operational workflows to ensure accuracy and reliability.',
  },
  {
    num: '05.',
    tabTitle: 'Deploy & Optimize',
    cardTitle: '5. Deployment and Optimization',
    image: '/assets/ai-development/process6.png',
    imageAlt: 'AI agent deployment and optimization',
    desc: (
      <>
        Deployed on AWS SageMaker, Google Vertex AI, or Azure ML. Containerised with Docker, orchestrated with Kubernetes. MLflow tracks performance and detects drift.{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Post-launch analytics and iteration
        </Link>{' '}
        guide model retraining and workflow refinement based on real operational data.
      </>
    ),
  },
]

export default function AgentProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Delivery Process Our{' '}
          <span className="text-[#00CE44]">AI Agent Development Company</span> Follows
        </>
      }
      subtitle={
        <>
          The{' '}
          <Link
            to="/digital-product-development"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            digital product development
          </Link>{' '}
          process follows every step because skipping one usually costs more than doing it
        </>
      }
      steps={steps}
    />
  )
}

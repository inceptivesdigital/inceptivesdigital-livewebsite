import { Link } from 'react-router-dom'
import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery and App Strategy',
    desc: 'We map your business objectives, evaluate data readiness, and define AI feasibility before development begins. The output is a clear build plan before a line of code is written.',
  },
  {
    num: '02.',
    tabTitle: 'Architecture',
    cardTitle: '2. Architecture and Technology Planning',
    desc: 'Frontend, backend, AI layer, and data pipeline architecture defined around the app requirements. Flutter or React Native for mobile. FastAPI or Node.js for backend. PyTorch, TensorFlow, or HuggingFace for the AI layer.',
  },
  {
    num: '03.',
    tabTitle: 'AI & Build',
    cardTitle: '3. AI Model Selection and App Development',
    desc: 'Models selected for your specific use case. LLMs for generative applications. Predictive ML for recommendation and classification. Computer vision for image and video intelligence. Application layer and REST APIs were built simultaneously.',
  },
  {
    num: '04.',
    tabTitle: 'Testing & QA',
    cardTitle: '4. Testing, Integration, and Quality Assurance',
    desc: 'AI features are tested for accuracy, performance, and security. Model outputs are validated against real data before deployment to ensure the app performs under production conditions.',
  },
  {
    num: '05.',
    tabTitle: 'Deploy & MLOps',
    cardTitle: '5. Deployment, Monitoring and Optimization',
    desc: (
      <>
        Deployed on AWS SageMaker, Google Vertex AI, or Azure ML. Containerised with Docker, orchestrated with Kubernetes. MLflow tracks model performance and detects drift{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          post-launch
        </Link>
        .
      </>
    ),
  },
]

export default function AiAppProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          How We Approach AI App Development{' '}
          <span className="text-[#00CE44]">From Strategy to Production</span>
        </>
      }
      subtitle="We move fast because we know exactly where we are going before we start."
      steps={steps}
    />
  )
}

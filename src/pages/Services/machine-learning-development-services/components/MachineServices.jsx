import {
  Activity,
  BrainCircuit,
  FileSearch,
  FileText,
  Network,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: BrainCircuit,
    title: '1. Custom Machine Learning Model Development',
    description: (
      <>
        Design and build ML models for your specific business problem, dataset, and performance targets. Built from the architecture up using PyTorch, TensorFlow, or Scikit-learn rather than assembled through generic{' '}
        <Link className="text-white underline group-hover:text-black" to="/blog/ai-app-builders-vs-human-developers">
          AI app builders
        </Link>{' '}
        or templates.
      </>
    ),
  },
  {
    icon: Activity,
    title: '2. Predictive Analytics and Forecasting',
    description:
      'Identify patterns in historical data to produce accurate forecasts for demand, revenue, risk, and operational performance. Models include time-series forecasting, regression, and ensemble methods for actionable predictions.',
  },
  {
    icon: Sparkles,
    title: '3. Recommendation Engine Development',
    description:
      'Deliver personalized recommendations using collaborative filtering, content-based filtering, and hybrid models. Optimized for eCommerce, SaaS, and content platforms to increase engagement and conversions.',
  },
  {
    icon: ShieldCheck,
    title: '4. Anomaly Detection and Fraud Prevention',
    description: (
      <>
        Detect unusual patterns, flag suspicious activity, and use{' '}
        <Link className="text-white underline group-hover:text-black" to="/ai-automation-services">
          AI automation
        </Link>{' '}
        to trigger responses in real time. Techniques include isolation forests, autoencoders, and real-time scoring pipelines for financial services and operational monitoring.
      </>
    ),
  },
  {
    icon: FileText,
    title: (
      <>
        5.{' '}
        <Link
          className="text-[#00CE44] underline group-hover:text-black"
          to="/nlp-development-services"
>
          Natural Language Processing
        </Link>{' '}
        and Text Intelligence
      </>
    ),
    description:
      'Understand, classify, and extract insights from text data using NLP techniques and transformer models (BERT, GPT variants, Hugging Face). Applications include semantic search, sentiment analysis, entity extraction, and document classification.',
  },
  {
    icon: FileSearch,
    title: (
      <>
        6.{' '}
        <Link
          className="text-[#00CE44] underline group-hover:text-black"
          to="/computer-vision-development-services"
>
          Computer Vision
        </Link>{' '}
        and Image Intelligence
      </>
    ),
    description:
      'Analyze images and video for object detection, classification, and inspection tasks. Built with OpenCV, TensorFlow, PyTorch, and Vision Transformers for industrial, healthcare, and surveillance applications.',
  },
  {
    icon: Network,
    title: '7. Machine Learning Integration Services',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/system-integration-api-automation">
          System integration and API automation
        </Link>{' '}
        embed ML models into your software, APIs, and data pipelines. Integration includes{' '}
        <Link className="text-white underline group-hover:text-black" to="/backend-api-development">
          backend API development
        </Link>{' '}
        with REST and GraphQL, cloud deployment, and connections to data warehouses like Snowflake, BigQuery, and Redshift for real-time intelligence.
      </>
    ),
  },
  {
    icon: Settings2,
    title: '8. Model Deployment and MLOps',
    description: (
      <>
        Deploy production ML systems with full monitoring, drift detection, and retraining pipelines. For existing products,{' '}
        <Link className="text-white underline group-hover:text-black" to="/product-rescue-scaling">
          product scaling
        </Link>{' '}
        is supported by Kubernetes, Docker, MLflow, and automated CI/CD for resilient and reliable ML performance.
      </>
    ),
  },
  {
    icon: Workflow,
    title: '9. Machine Learning Consulting',
    description: (
      <>
        <Link className="text-white underline group-hover:text-black" to="/product-strategy-consulting">
          Product strategy consulting
        </Link>{' '}
        for ML covers use cases, data readiness, feature engineering, model selection, and the implementation roadmap. Ensures teams understand operational requirements, risk mitigation, and ROI before committing to full development.
      </>
    ),
  },
]

export default function MachineServices() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Machine Learning Development Services Built for Real Business Impact
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Nine capabilities. Each one is scoped in Discovery and built around your data, your operational requirements, and your deployment environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={index}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-7 sm:p-8 transition-colors duration-200"
            >
              <Icon className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] group-hover:text-black text-xl font-bold mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-white/80 group-hover:text-black text-[15px] leading-relaxed transition-colors">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

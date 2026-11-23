import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Frameworks and Libraries',
    description: 'The core layer for model development, training, and evaluation.',
    items: [
      { name: 'PyTorch', image: '/assets/ai-development/steck01.png', alt: 'PyTorch deep learning framework' },
      { name: 'TensorFlow', image: '/assets/ai-development/02stack.png', alt: 'TensorFlow machine learning platform' },
      { name: 'Scikit-learn', image: '/assets/education/tech/scikit-learn.jpg', alt: 'Scikit-learn machine learning library' },
      { name: 'XGBoost' },
      { name: 'LightGBM' },
      { name: 'Keras' },
    ],
  },
  {
    name: 'Data Engineering and Pipelines',
    description: 'The infrastructure that prepares, structures, and delivers data for model training and inference.',
    items: [
      { name: 'Apache Spark', image: '/assets/ai-development/03stack-3-14.jpg', alt: 'Apache Spark data processing engine' },
      { name: 'Kafka', image: '/assets/ai-development/03stack-3-15.jpg', alt: 'Apache Kafka event streaming platform' },
      { name: 'Airflow', image: '/assets/ai-development/New-Project-5-1.png', alt: 'Apache Airflow workflow orchestration' },
      { name: 'dbt' },
      { name: 'BigQuery' },
      { name: 'Snowflake' },
      { name: 'Redshift' },
    ],
  },
  {
    name: 'MLOps and Model Lifecycle',
    description: 'The systems that deploy, monitor, and maintain ML models in production environments.',
    items: [
      { name: 'MLflow', image: '/assets/ai-development/New-Project-2.jpg', alt: 'MLflow machine learning lifecycle platform' },
      { name: 'Kubeflow', image: '/assets/ai-development/New-Project-3.png', alt: 'Kubeflow machine learning platform' },
      { name: 'DVC', image: '/assets/ai-development/New-Project-6.png', alt: 'DVC data version control' },
      { name: 'Weights and Biases' },
      { name: 'Model monitoring pipelines' },
    ],
  },
  {
    name: 'Cloud and Infrastructure',
    description: 'Deployment, scaling, and serving infrastructure for production ML systems.',
    items: [
      { name: 'AWS SageMaker', image: '/assets/ai-development/03stack-1.png', alt: 'AWS cloud and SageMaker' },
      { name: 'Google Vertex AI', image: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Cloud Vertex AI' },
      { name: 'Azure ML', image: '/assets/ai-development/03stack-4-1.jpg', alt: 'Microsoft Azure machine learning' },
      { name: 'Docker', image: '/assets/ai-development/03stack-5-2.png', alt: 'Docker container platform' },
      { name: 'Kubernetes', image: '/assets/ai-development/03stack-3-7.jpg', alt: 'Kubernetes container orchestration' },
    ],
  },
  {
    name: 'Programming and Backend',
    description: (
      <>
        <a href="https://inceptivesdigital.com/ai-app-development-services" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          AI app development
        </a>{' '}
        uses these languages and APIs to connect ML models to the products and systems they serve.
      </>
    ),
    items: [
      { name: 'Python', image: '/assets/ai-development/Python.jpg', alt: 'Python programming language' },
      { name: 'FastAPI', image: '/assets/ai-development/03stack-3-10.jpg', alt: 'FastAPI framework' },
      { name: 'REST APIs', image: '/assets/ai-development/03stack-3-13.jpg', alt: 'REST API architecture' },
      { name: 'SQL' },
      { name: 'GraphQL', image: '/assets/healthcare/tech/graphQL.jpg', alt: 'GraphQL API query language' },
    ],
  },
]

export default function MachineTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-4">
            The Technology Stack Behind{' '}
            <span className="text-[#00CE44]">Production-Ready Machine Learning</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
            The frameworks, pipelines, and infrastructure behind our machine learning development services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 rounded-2xl bg-[#00CE44] p-4 flex flex-col gap-1">
            {categories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between text-sm ${
                  activeCategory === index
                    ? 'bg-black text-white font-semibold'
                    : 'text-black font-medium hover:bg-black/10 border-b border-black/10'
                }`}
              >
                <span>{category.name}</span>
                {activeCategory === index && <ArrowRight className="w-4 h-4 text-white shrink-0" aria-hidden="true" />}
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 rounded-2xl bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-4 sm:gap-5">
            {categories[activeCategory].items.map((technology) => (
              <div key={technology.name} className="flex flex-col items-center w-28 sm:w-32 text-center">
                <div className="w-28 sm:w-32 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-3 mb-2">
                  {technology.image ? (
                    <img
                      src={technology.image}
                      alt={technology.alt || `${technology.name} logo`}
                      className="w-full h-full object-contain select-none"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-black text-sm font-semibold leading-tight">
                      {technology.name}
                    </span>
                  )}
                </div>
                <span className="text-black text-xs sm:text-sm leading-tight">{technology.name}</span>
              </div>
            ))}
            <p className="w-full border-t border-black/20 pt-5 text-black text-sm leading-relaxed">
              {categories[activeCategory].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

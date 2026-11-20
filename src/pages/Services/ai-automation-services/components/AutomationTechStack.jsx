import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Frameworks and Libraries',
    items: ['Python', 'Node.js', 'FastAPI', 'Flask', 'UiPath', 'Automation Anywhere', 'Blue Prism', 'Airflow', 'Prefect'],
  },
  {
    name: 'ML & AI Models',
    items: ['XGBoost', 'Random Forest', 'CatBoost', 'scikit-learn', 'Hugging Face Transformers', 'Custom LLMs', 'Reinforcement Learning'],
  },
  {
    name: 'Vector Databases & Search',
    items: ['Pinecone', 'Weaviate', 'FAISS', 'ChromaDB', 'Elasticsearch'],
  },
  {
    name: 'MLOps & Monitoring',
    items: ['MLflow', 'Kubeflow', 'DVC', 'Airflow', 'Custom monitoring pipelines'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS SageMaker', 'AWS Lambda', 'AWS EC2', 'Google Vertex AI', 'Google GKE', 'Azure ML', 'Azure AKS', 'Docker', 'Kubernetes', 'Serverless architectures'],
  },
]

export default function AutomationTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[40px]">
            AI Automation Frameworks and Infrastructure Behind Our Development Services
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
            The frameworks, models, and infrastructure behind every AI automation system we have built and deployed in production.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div role="tablist" aria-label="AI automation technology categories" className="flex flex-col gap-1 rounded-2xl bg-[#00CE44] p-4 lg:col-span-4">
            {categories.map(({ name }, index) => {
              const isActive = activeCategory === index
              return (
                <button
                  key={name}
                  id={`automation-tech-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="automation-tech-panel"
                  onClick={() => setActiveCategory(index)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    isActive
                      ? 'rounded-md bg-black font-semibold text-white'
                      : 'border-b border-black/10 text-black hover:bg-black/10'
                  }`}
                >
                  <span>{name}</span>
                  {isActive && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              )
            })}
          </div>
          <div
            id="automation-tech-panel"
            role="tabpanel"
            aria-labelledby={`automation-tech-tab-${activeCategory}`}
            className="grid min-h-[300px] grid-cols-2 content-start gap-3 rounded-2xl bg-[#00CE44] p-5 sm:grid-cols-3 sm:gap-4 sm:p-7 lg:col-span-8 lg:grid-cols-4 lg:p-8"
          >
            {categories[activeCategory].items.map((technology) => (
              <div
                key={technology}
                className="flex min-h-[88px] items-center justify-center rounded-xl bg-white px-3 py-4 text-center text-sm font-semibold leading-tight text-[#141414] sm:min-h-[96px] sm:text-base"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

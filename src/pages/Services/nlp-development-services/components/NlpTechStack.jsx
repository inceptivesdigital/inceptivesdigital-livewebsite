import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Frameworks and Libraries',
    description: 'The core layer for text processing, model development, and language intelligence.',
    items: [
      { name: 'spaCy' },
      { name: 'NLTK' },
      { name: 'HuggingFace Transformers', image: '/assets/ai-development/03stack.png', alt: 'Hugging Face Transformers' },
      { name: 'Gensim' },
      { name: 'Stanford NLP' },
    ],
  },
  {
    name: 'LLMs',
    description: (
      <>
        Foundation models for{' '}
        <a href="https://inceptivesdigital.com/generative-ai-development-company" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          generative AI development
        </a>
        , conversational systems, and reasoning-heavy NLP applications.
      </>
    ),
    items: [
      { name: 'GPT-4o', image: '/assets/ai-development/openai.png', alt: 'OpenAI GPT models' },
      { name: 'Claude' },
      { name: 'Gemini', image: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Gemini' },
      { name: 'LLaMA 3', image: '/assets/ai-development/07stack-1.png', alt: 'Meta LLaMA' },
      { name: 'Mistral' },
    ],
  },
  {
    name: 'Vector Databases and Search',
    description: 'The retrieval infrastructure that powers semantic search and knowledge-grounded NLP systems.',
    items: [
      { name: 'Pinecone', image: '/assets/ai-development/06stack.png', alt: 'Pinecone vector database' },
      { name: 'Weaviate', image: '/assets/ai-development/07stack.png', alt: 'Weaviate vector search' },
      { name: 'FAISS', image: '/assets/ai-development/07stack-1.png', alt: 'FAISS similarity search' },
      { name: 'Elasticsearch', image: '/assets/ai-development/08stack.png', alt: 'Elasticsearch search engine' },
      { name: 'ChromaDB', image: '/assets/ai-development/New-Project-1.png', alt: 'Chroma vector database' },
    ],
  },
  {
    name: 'MLOps',
    description: 'The systems that deploy, monitor, and maintain NLP models in production environments.',
    items: [
      { name: 'MLflow', image: '/assets/ai-development/New-Project-2.jpg', alt: 'MLflow model lifecycle platform' },
      { name: 'Airflow', image: '/assets/ai-development/New-Project-5-1.png', alt: 'Apache Airflow workflow orchestration' },
      { name: 'DVC', image: '/assets/ai-development/New-Project-6.png', alt: 'DVC data version control' },
      { name: 'Model monitoring pipelines' },
    ],
  },
  {
    name: 'Cloud and Infrastructure',
    description: (
      <>
        <a href="https://inceptivesdigital.com/product-rescue-scaling" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          Product scaling
        </a>{' '}
        requires deployment, serving, and infrastructure designed for production NLP workloads.
      </>
    ),
    items: [
      { name: 'AWS SageMaker', image: '/assets/ai-development/03stack-1.png', alt: 'AWS SageMaker' },
      { name: 'Google Vertex AI', image: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Vertex AI' },
      { name: 'Azure ML', image: '/assets/ai-development/03stack-4-1.jpg', alt: 'Azure Machine Learning' },
      { name: 'Docker', image: '/assets/ai-development/03stack-5-2.png', alt: 'Docker' },
      { name: 'Kubernetes', image: '/assets/ai-development/03stack-3-7.jpg', alt: 'Kubernetes' },
    ],
  },
]

export default function NlpTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-4">
            NLP Frameworks and Infrastructure Behind Our{' '}
            <span className="text-[#00CE44]">Development Services</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
            The frameworks, models, and infrastructure behind every NLP system we have built and deployed in production.
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
          <div className="lg:col-span-8 rounded-2xl bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-4 sm:gap-5 min-h-[320px]">
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

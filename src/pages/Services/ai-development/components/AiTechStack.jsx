import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const aiTechStackCategories = [
  {
    name: 'AI Frameworks',
    items: [
      { name: 'PyTorch', img: '/assets/ai-development/steck01.png', alt: 'PyTorch Deep Learning Framework' },
      { name: 'TensorFlow', img: '/assets/ai-development/02stack.png', alt: 'TensorFlow Machine Learning Platform' },
      { name: 'Hugging Face', img: '/assets/ai-development/03stack.png', alt: 'Hugging Face Transformer Models' },
      { name: 'LangChain', img: '/assets/ai-development/04stack.png', alt: 'LangChain LLM Application Framework' },
      { name: 'LlamaIndex', img: '/assets/ai-development/05stack.png', alt: 'LlamaIndex Data Framework for LLMs' },
    ],
  },
  {
    name: 'Vector Databases & Retrieval Systems',
    items: [
      { name: 'Pinecone', img: '/assets/ai-development/06stack.png', alt: 'Pinecone Managed Vector Database' },
      { name: 'Weaviate', img: '/assets/ai-development/07stack.png', alt: 'Weaviate Open-Source Vector Search' },
      { name: 'FAISS (Meta)', img: '/assets/ai-development/07stack-1.png', alt: 'Meta FAISS Similarity Search' },
      { name: 'Milvus', img: '/assets/ai-development/New-Project.png', alt: 'Milvus Cloud-Native Vector Database' },
      { name: 'Chroma', img: '/assets/ai-development/New-Project-1.png', alt: 'Chroma AI-Native Embeddings Database' },
      { name: 'Elasticsearch', img: '/assets/ai-development/08stack.png', alt: 'Elasticsearch Distributed Search Engine' },
    ],
  },
  {
    name: 'MLOps & Model Lifecycle Management',
    items: [
      { name: 'MLflow', img: '/assets/ai-development/New-Project-2.jpg', alt: 'MLflow Machine Learning Lifecycle Platform' },
      { name: 'Kubeflow', img: '/assets/ai-development/New-Project-3.png', alt: 'Kubeflow Machine Learning on Kubernetes' },
      { name: 'Apache Airflow', img: '/assets/ai-development/New-Project-5-1.png', alt: 'Apache Airflow Workflow Orchestration' },
      { name: 'DVC', img: '/assets/ai-development/New-Project-6.png', alt: 'Data Version Control for Machine Learning' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', img: '/assets/ai-development/03stack-1.png', alt: 'Amazon Web Services SageMaker & Cloud' },
      { name: 'Google Cloud', img: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Cloud Platform Vertex AI' },
      { name: 'Microsoft Azure', img: '/assets/ai-development/03stack-4-1.jpg', alt: 'Microsoft Azure AI Solutions' },
      { name: 'Docker', img: '/assets/ai-development/03stack-5-2.png', alt: 'Docker Containerized AI Deployment' },
      { name: 'Kubernetes', img: '/assets/ai-development/03stack-3-7.jpg', alt: 'Kubernetes Container Orchestration' },
    ],
  },
  {
    name: 'Programming & Backend Engineering',
    items: [
      { name: 'Python', img: '/assets/ai-development/Python.jpg', alt: 'Python Core AI Development' },
      { name: 'Node.js', img: '/assets/ai-development/03stack-3.jpg', alt: 'Node.js Server Runtime' },
      { name: 'FastAPI', img: '/assets/ai-development/03stack-3-10.jpg', alt: 'FastAPI High-Performance API Framework' },
      { name: 'Flask', img: '/assets/ai-development/03stack-3-11.jpg', alt: 'Flask Python Web Framework' },
      { name: 'Java', img: '/assets/ai-development/03stack-3-12.jpg', alt: 'Java Enterprise Systems' },
      { name: 'REST API', img: '/assets/ai-development/03stack-3-13.jpg', alt: 'REST API Architecture' },
    ],
  },
  {
    name: 'Data Engineering & Pipelines',
    items: [
      { name: 'Apache Spark', img: '/assets/ai-development/03stack-3-14.jpg', alt: 'Apache Spark Large-Scale Data Processing' },
      { name: 'Apache Kafka', img: '/assets/ai-development/03stack-3-15.jpg', alt: 'Apache Kafka Event Streaming' },
      { name: 'Kubeflow', img: '/assets/ai-development/New-Project-3.png', alt: 'Kubeflow Pipelines' },
      { name: 'DVC', img: '/assets/ai-development/New-Project-6.png', alt: 'DVC Data Pipelines' },
    ],
  },
]

export default function AiTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            What Powers Our{' '}
            <span className="text-[#00CE44]">AI Development Services</span> Under the Hood
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            A tech stack is only as credible as the products built on it. These are the frameworks, models, and infrastructure behind our AI development services.
          </p>
        </div>

        {/* Two Solid Green Panels Matching Mobile-App TechStackTabs Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Green Panel: Category List */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
            {aiTechStackCategories.map((cat, idx) => {
              const isActive = activeCategory === idx
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'bg-transparent text-black font-medium hover:bg-black/10 border-b border-black/10'
                  }`}
                >
                  <span>{cat.name}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-white shrink-0" />}
                </button>
              )
            })}
          </div>

          {/* Right Green Panel: White Tech Logo Boxes (Icons Crisp & Full Fill) */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
            {aiTechStackCategories[activeCategory].items.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2 mb-2.5 border-0 shadow-none overflow-hidden">
                  <img
                    src={tech.img}
                    alt={tech.alt || tech.name}
                    className="w-full h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-black text-xs sm:text-[14px] font-medium leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowRight, Bot } from 'lucide-react'

const categories = [
  {
    name: 'Frameworks & Libraries',
    items: [
      { name: 'PyTorch', image: '/assets/ai-development/steck01.png' },
      { name: 'TensorFlow', image: '/assets/ai-development/02stack.png' },
      { name: 'Hugging Face', image: '/assets/ai-development/03stack.png' },
      { name: 'LangChain', image: '/assets/ai-development/04stack.png' },
      { name: 'LlamaIndex', image: '/assets/ai-development/05stack.png' },
      { name: 'AutoGen' },
      { name: 'CrewAI' },
    ],
  },
  {
    name: 'Vector and Retrieval Systems',
    items: [
      { name: 'Pinecone', image: '/assets/ai-development/06stack.png' },
      { name: 'Weaviate', image: '/assets/ai-development/07stack.png' },
      { name: 'FAISS', image: '/assets/ai-development/07stack-1.png' },
      { name: 'ChromaDB', image: '/assets/ai-development/New-Project-1.png' },
      { name: 'Elasticsearch', image: '/assets/ai-development/08stack.png' },
    ],
  },
  {
    name: 'Backend and API',
    items: [
      { name: 'Node.js', image: '/assets/healthcare/tech/node.jpg' },
      { name: 'FastAPI', image: '/assets/react-native/fastapi.jpg' },
      { name: 'Python', image: '/assets/ai-development/Python.jpg' },
      { name: 'Flask', image: '/assets/dating/tech/flask.svg' },
      { name: 'REST APIs', image: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', image: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Cloud & MLOps',
    items: [
      { name: 'AWS SageMaker', image: '/assets/ai-development/03stack-1.png' },
      { name: 'Google Vertex AI', image: '/assets/ai-development/03stack-2-1.jpg' },
      { name: 'Azure ML', image: '/assets/ai-development/03stack-4-1.jpg' },
      { name: 'Docker', image: '/assets/ai-development/03stack-5-2.png' },
      { name: 'Kubernetes', image: '/assets/ai-development/03stack-3-7.jpg' },
      { name: 'MLflow', image: '/assets/ai-development/New-Project-2.jpg' },
    ],
  },
]

export default function AgentTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)
  const activeItems = categories[activeCategory].items

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-4">
            The Technology Stack Powering Our{' '}
            <span className="text-[#00CE44]">AI Agent Development Services</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
            Every tool below is selected for the specific requirements of the build. Not listed because we know the name. Listed because we have used it in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 rounded-2xl bg-[#00CE44] p-4 flex flex-col gap-1">
            {categories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left px-4 py-3 rounded-none transition-colors flex items-center justify-between text-sm ${
                  activeCategory === index
                    ? 'bg-black text-white font-semibold'
                    : 'text-black font-medium hover:bg-black/10 border-b border-black/10'
                }`}
              >
                <span>{category.name}</span>
                {activeCategory === index && (
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 rounded-2xl bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8">
            {activeItems.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5">
                  {tech.image ? (
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <Bot className="w-10 h-10 text-[#00CE44]" aria-hidden="true" />
                  )}
                </div>
                <span className="text-black text-xs sm:text-sm leading-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

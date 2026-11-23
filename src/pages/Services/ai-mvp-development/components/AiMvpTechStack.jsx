import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'AI Frameworks and Models',
    description: 'The intelligence layer for every AI capability validated in the MVP.',
    items: [
      { name: 'PyTorch', image: '/assets/ai-development/steck01.png', alt: 'PyTorch' },
      { name: 'TensorFlow', image: '/assets/ai-development/02stack.png', alt: 'TensorFlow' },
      { name: 'HuggingFace Transformers', image: '/assets/ai-development/03stack.png', alt: 'Hugging Face Transformers' },
      { name: 'LangChain', image: '/assets/ai-development/04stack.png', alt: 'LangChain' },
      { name: 'LlamaIndex', image: '/assets/ai-development/05stack.png', alt: 'LlamaIndex' },
      { name: 'GPT-4o', image: '/assets/ai-development/openai.png', alt: 'OpenAI GPT-4o' },
      { name: 'Claude' },
      { name: 'Gemini', image: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Gemini' },
      { name: 'LLaMA 3', image: '/assets/ai-development/07stack-1.png', alt: 'Meta LLaMA 3' },
    ],
  },
  {
    name: 'Frontend and Mobile',
    description: 'The interface layer that puts the AI capability in front of real users.',
    items: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Flutter' }, { name: 'React Native' }],
  },
  {
    name: 'Backend and API',
    description: (
      <>
        <a href="https://inceptivesdigital.com/backend-api-development" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          Backend API development
        </a>{' '}
        provides the server-side infrastructure that connects AI models to the product interface.
      </>
    ),
    items: [
      { name: 'Node.js' },
      { name: 'FastAPI', image: '/assets/ai-development/03stack-3-10.jpg', alt: 'FastAPI' },
      { name: 'Python', image: '/assets/ai-development/Python.jpg', alt: 'Python' },
      { name: 'REST APIs', image: '/assets/ai-development/03stack-3-13.jpg', alt: 'REST APIs' },
      { name: 'GraphQL' },
    ],
  },
  {
    name: 'Data and Vector Infrastructure',
    description: 'The data layer that grounds AI outputs in real business data.',
    items: [
      { name: 'Pinecone', image: '/assets/ai-development/06stack.png', alt: 'Pinecone' },
      { name: 'Weaviate', image: '/assets/ai-development/07stack.png', alt: 'Weaviate' },
      { name: 'FAISS', image: '/assets/ai-development/07stack-1.png', alt: 'FAISS' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    name: 'Cloud and Deployment',
    description: 'The infrastructure that takes the MVP from a local build to a testable production environment.',
    items: [
      { name: 'AWS SageMaker', image: '/assets/ai-development/03stack-1.png', alt: 'AWS SageMaker' },
      { name: 'Google Cloud', image: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Cloud' },
      { name: 'Azure', image: '/assets/ai-development/03stack-4-1.jpg', alt: 'Microsoft Azure' },
      { name: 'Docker', image: '/assets/ai-development/03stack-5-2.png', alt: 'Docker' },
      { name: 'Kubernetes', image: '/assets/ai-development/03stack-3-7.jpg', alt: 'Kubernetes' },
    ],
  },
]

export default function AiMvpTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-4">
            AI MVP Development Services Built on{' '}
            <span className="text-[#00CE44]">Scalable Technology</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
            Fast, focused, and production-ready from day one. Every tool is selected for speed of validation without sacrificing architecture quality.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 rounded-2xl bg-[#00CE44] p-4 flex flex-col gap-1">
            {categories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                aria-pressed={activeCategory === index}
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
                    <span className="text-black text-sm font-semibold leading-tight">{technology.name}</span>
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

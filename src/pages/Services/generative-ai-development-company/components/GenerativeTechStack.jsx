import { useState } from 'react'
import { ArrowRight, BrainCircuit } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Models and Frameworks',
    description:
      'The foundation layer for every generative capability built into the system.',
    items: [
      { name: 'OpenAI GPT models', image: '/assets/ai-development/openai.png' },
      { name: 'Anthropic Claude' },
      { name: 'Google Gemini', image: '/assets/ai-development/03stack-2-1.jpg' },
      { name: 'Meta LLaMA', image: '/assets/ai-development/07stack-1.png' },
      { name: 'Mistral' },
      { name: 'HuggingFace Transformers', image: '/assets/ai-development/03stack.png' },
      { name: 'LangChain', image: '/assets/ai-development/04stack.png' },
      { name: 'LlamaIndex', image: '/assets/ai-development/05stack.png' },
    ],
  },
  {
    name: 'Image and Multimodal Models',
    description: (
      <>
        The model layer combines generative models with{' '}
        <Link
          to="/computer-vision-development-services"
          className="underline font-semibold"
>
          computer vision
        </Link>{' '}
        for image generation, editing, and multimodal intelligence.
      </>
    ),
    items: [
      { name: 'Stable Diffusion' },
      { name: 'DALL-E', image: '/assets/ai-development/openai.png' },
      { name: 'ControlNet' },
      { name: 'Vision Transformers' },
      { name: 'Segment Anything Model' },
    ],
  },
  {
    name: 'Vector and Retrieval Systems',
    description:
      'The retrieval infrastructure that grounds generative AI responses in your company data.',
    items: [
      { name: 'Pinecone', image: '/assets/ai-development/06stack.png' },
      { name: 'Weaviate', image: '/assets/ai-development/07stack.png' },
      { name: 'FAISS', image: '/assets/ai-development/07stack-1.png' },
      { name: 'ChromaDB', image: '/assets/ai-development/New-Project-1.png' },
      { name: 'Milvus', image: '/assets/ai-development/New-Project.png' },
      { name: 'Elasticsearch', image: '/assets/ai-development/08stack.png' },
    ],
  },
  {
    name: 'MLOps and Model Lifecycle',
    description:
      'The infrastructure that keeps generative AI systems accurate and maintainable after launch.',
    items: [
      { name: 'MLflow', image: '/assets/ai-development/New-Project-2.jpg' },
      { name: 'Kubeflow', image: '/assets/ai-development/New-Project-3.png' },
      { name: 'Airflow', image: '/assets/ai-development/New-Project-5-1.png' },
      { name: 'DVC', image: '/assets/ai-development/New-Project-6.png' },
      { name: 'Prompt versioning' },
      { name: 'Model evaluation pipelines' },
    ],
  },
  {
    name: 'Cloud and Infrastructure',
    description:
      'Deployment, scaling, and monitoring infrastructure for production generative AI systems.',
    items: [
      { name: 'AWS SageMaker', image: '/assets/ai-development/03stack-1.png' },
      { name: 'Google Vertex AI', image: '/assets/ai-development/03stack-2-1.jpg' },
      { name: 'Azure ML', image: '/assets/ai-development/03stack-4-1.jpg' },
      { name: 'Docker', image: '/assets/ai-development/03stack-5-2.png' },
      { name: 'Kubernetes', image: '/assets/ai-development/03stack-3-7.jpg' },
      { name: 'Serverless architecture' },
    ],
  },
]

export default function GenerativeTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-4">
            Frameworks and Infrastructure Behind Our{' '}
            <span className="text-[#00CE44]">Production-Ready AI</span>
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
                {activeCategory === index && <ArrowRight className="w-4 h-4 text-white shrink-0" />}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 rounded-2xl bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8">
            {categories[activeCategory].items.map((tech) => (
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
                    <BrainCircuit className="w-10 h-10 text-[#00CE44]" aria-hidden="true" />
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

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TECH_CATEGORIES = [
  {
    id: 'development',
    label: 'Development',
    items: [
      { name: 'Flutter', icon: '/assets/mobile-app/flutter.png' },
      { name: 'React Native', icon: '/assets/mobile-app/react-native.jpg' },
      { name: 'TypeScript', icon: '/assets/mobile-app/typescript.jpg' },
      { name: 'Dart', icon: '/assets/mobile-app/javascript.png' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: '/assets/mobile-app/node.jpg' },
      { name: 'Python', icon: '/assets/mobile-app/python.jpg' },
      { name: 'Firebase', icon: '/assets/mobile-app/firebase.jpg' },
      { name: 'REST APIs', icon: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', icon: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', icon: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'MongoDB', icon: '/assets/mobile-app/mongoDB.jpg' },
      { name: 'Redis', icon: '/assets/mobile-app/redis.jpg' },
      { name: 'MySQL', icon: '/assets/mobile-app/mySql.jpg' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud', icon: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Docker', icon: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', icon: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Fastlane', icon: '/assets/mobile-app/fastlane.jpg' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Intelligent Features',
    items: [
      { name: 'OpenAI', icon: '/assets/mobile-app/python.jpg' },
      { name: 'TensorFlow Lite', icon: '/assets/mobile-app/flutter.png' },
      { name: 'LangChain', icon: '/assets/mobile-app/node.jpg' },
    ],
  },
  {
    id: 'design',
    label: 'Design & Prototyping',
    items: [
      { name: 'Figma', icon: '/assets/mobile-app/typescript.jpg' },
      { name: 'Adobe XD', icon: '/assets/mobile-app/javascript.png' },
    ],
  },
]

export default function CrossPlatformTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">
              Tech Stack We Use for{' '}
              <span className="text-[#00CE44]">Cross-Platform Mobile App</span> Development
            </h2>
          </div>
          <div className="lg:col-span-7 text-left">
            <p className="text-white/85 text-[16px] leading-relaxed font-normal">
              The frameworks, libraries, and integrations selected for every engagement are chosen for one reason: production-grade performance across iOS and Android from a single codebase. Every tool earns its place against the specific demands of the product, including the{' '}
              <a
                href="https://inceptivesdigital.com/backend-api-development"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00CE44] hover:text-white transition-colors"
              >
                backend and API layer
              </a>{' '}
              each build connects to.
            </p>
          </div>
        </div>

        {/* Two Solid Green Panels */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Green Panel: Category List */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
            {TECH_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategory === idx
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'bg-transparent text-black font-medium hover:bg-black/10 border-b border-black/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-white shrink-0" />}
                </button>
              )
            })}
          </div>

          {/* Right Green Panel: White Tech Logo Boxes */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 min-h-[340px] border-0 shadow-none">
            {TECH_CATEGORIES[activeCategory].items.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5 border-0 shadow-none">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold text-black leading-tight">
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

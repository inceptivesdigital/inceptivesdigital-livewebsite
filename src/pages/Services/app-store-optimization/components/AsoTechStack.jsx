import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const techStackCategories = [
  {
    name: 'Store Analytics',
    items: [
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
      { name: 'Firebase Analytics', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Creative & Prototyping',
    items: [
      { name: 'Figma', img: '/assets/react-native/figma.webp' },
      { name: 'Adobe XD', img: '/assets/react-native/xd.webp' },
      { name: 'Framer', img: '/assets/react-native/framer.jpg' },
      { name: 'Miro', img: '/assets/react-native/miro.jpg' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
    ],
  },
  {
    name: 'AI & Data Processing',
    items: [
      { name: 'OpenAI', img: '/assets/mobile-app/openai.png' },
      { name: 'LangChain', img: '/assets/mobile-app/langchain.jpg' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
    ],
  },
]

export default function AsoTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            The Tools and Data Layers Behind the{' '}
            <span className="text-[#00CE44]">Result-Driven ASO</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            The team works from App Store Connect, Google Play Console, and third-party tools like AppTweak, Sensor Tower, and MobileAction to pull keyword performance, conversion funnels, and competitive positioning data into every strategy and creative decision made throughout the engagement.
          </p>
        </div>

        {/* Two Solid Green Panels Matching Original Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Green Panel: Category List */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
            {techStackCategories.map((cat, idx) => {
              const isActive = activeCategory === idx
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-4 py-3 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
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

          {/* Right Green Panel: White Tech Logo Boxes */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
            {techStackCategories[activeCategory].items.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5 border-0 shadow-none">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-16 h-14 sm:w-20 sm:h-16 object-contain select-none"
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

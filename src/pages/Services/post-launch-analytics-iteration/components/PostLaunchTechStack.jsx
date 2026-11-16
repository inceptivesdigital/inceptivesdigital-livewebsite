import { useState } from 'react'

const techStackCategories = [
  {
    name: 'Product Analytics',
    items: [
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
      { name: 'Firebase Analytics', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Session & Behavioral',
    items: [
      { name: 'Figma', img: '/assets/react-native/figma.webp' },
      { name: 'Miro', img: '/assets/react-native/miro.jpg' },
      { name: 'Framer', img: '/assets/react-native/framer.jpg' },
      { name: 'Sketch', img: '/assets/react-native/sketch.jpg' },
    ],
  },
  {
    name: 'Testing & Experimentation',
    items: [
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg' },
      { name: 'AWS Cloud', img: '/assets/mobile-app/aws.jpg' },
    ],
  },
  {
    name: 'Performance & Monitoring',
    items: [
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
    ],
  },
]

export default function PostLaunchTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            The Tools and Data Systems Inceptives Digital{' '}
            <span className="text-[#00CE44]">Uses to Drive Iteration Decisions</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            The team works from product analytics platforms, session recording tools, experiment management systems, and real-time monitoring infrastructure to ensure every iteration decision connects to observed behavior rather than assumption.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {techStackCategories.map((category, index) => {
            const isActive = activeCategory === index
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-none text-xs sm:text-sm font-semibold transition-all duration-200 border-0 ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-none'
                    : 'bg-[#1e1e1e] text-white/70 hover:bg-[#282828] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 items-stretch max-w-4xl mx-auto">
          {techStackCategories[activeCategory].items.map((tech, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-[16px] bg-[#1a1a1a] hover:bg-[#202020] border-0 transition-all duration-200 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 flex items-center justify-center">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <span className="text-white/90 group-hover:text-white font-medium text-xs sm:text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

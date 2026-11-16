import { useState } from 'react'

const techCategories = [
  {
    name: 'Mobile & Frontend',
    items: [
      { name: 'iOS (Swift)', img: '/assets/ios-app/icon1.svg' },
      { name: 'Android (Kotlin)', img: '/assets/ios-app/icon2.svg' },
      { name: 'React Native', img: '/assets/react-native/figma.webp' },
      { name: 'Flutter', img: '/assets/ios-app/icon4.svg' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: '/assets/mobile-app/python.jpg' },
      { name: 'Python (FastAPI)', img: '/assets/mobile-app/python.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    items: [
      { name: 'Amazon Web Services', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud Platform', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
    ],
  },
  {
    name: 'Data & Intelligence',
    items: [
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'Firebase', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
    ],
  },
]

export default function PartnershipTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Technology Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            The Stacks Behind Every <span className="text-[#00CE44]">Partner Engagement</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Modern, maintainable stacks that your clients can scale and hire for without proprietary lock-in.
          </p>
        </div>

        {/* Category Filter Tabs - Zero Radius */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {techCategories.map((category, index) => {
            const isActive = activeCategory === index
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-none text-xs sm:text-sm font-bold transition-all duration-200 border-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-none'
                    : 'bg-[#181818] text-white/70 hover:bg-[#222222] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-stretch max-w-4xl mx-auto">
          {techCategories[activeCategory].items.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-[20px] bg-[#141414] hover:bg-[#1a1a1a] border border-white/5 transition-all duration-200 flex flex-col items-center justify-center text-center group shadow-md"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center">
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

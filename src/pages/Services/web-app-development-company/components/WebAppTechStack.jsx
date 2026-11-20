import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const TECH_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Front-End',
    items: [
      { name: 'React', icon: '/assets/mobile-app/react-native.jpg' },
      { name: 'Next.js', icon: '/assets/web-app/next-js.jpg' },
      { name: 'TypeScript', icon: '/assets/mobile-app/typescript.jpg' },
      { name: 'JavaScript', icon: '/assets/mobile-app/javascript.png' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: '/assets/mobile-app/node.jpg' },
      { name: 'Express.js', icon: '/assets/react-native/express.jpg' },
      { name: 'Python', icon: '/assets/mobile-app/python.jpg' },
      { name: 'FastAPI', icon: '/assets/react-native/fastapi.jpg' },
      { name: 'REST APIs', icon: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', icon: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    id: 'databases',
    label: 'Data & Caching',
    items: [
      { name: 'PostgreSQL', icon: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'MongoDB', icon: '/assets/mobile-app/mongoDB.jpg' },
      { name: 'Redis', icon: '/assets/mobile-app/redis.jpg' },
      { name: 'MySQL', icon: '/assets/mobile-app/mySql.jpg' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Observability',
    items: [
      { name: 'AWS', icon: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud', icon: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Microsoft Azure', icon: '/assets/react-native/microsoft-azure.jpg' },
      { name: 'Docker', icon: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', icon: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Sentry', icon: '/assets/web-app/sentry.jpg' },
      { name: 'New Relic', icon: '/assets/web-app/new-relic.jpg' },
    ],
  },
]

export default function WebAppTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">
              Tech Stack We Use for{' '}
              <span className="text-[#00CE44]">Modern Web Application</span> Development
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-white/85 text-[16px] leading-relaxed font-normal">
              React, Next.js, and Vue on the front-end. Node.js, Python, and Go on the backend. AWS, Google Cloud, and Azure for infrastructure. PostgreSQL, MongoDB, and Redis for data. CI/CD pipelines, containerization, and observability tooling are built into every delivery process from day one.
            </p>
          </div>
        </div>

        {/* Two Solid Green Panels Matching Site-Wide TechStack Layout */}
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

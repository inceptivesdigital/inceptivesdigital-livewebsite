import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const androidTechCategories = [
  {
    name: 'Android Development',
    items: [
      {
        name: 'Kotlin',
        img: '/assets/mobile-app/tech/kotlin.svg',
      },
      {
        name: 'Java',
        img: '/assets/mobile-app/java.jpg',
      },
      {
        name: 'Android SDK',
        img: '/assets/mobile-app/tech/android-sdk.svg',
      },
      {
        name: 'Jetpack Compose',
        img: '/assets/mobile-app/tech/jetpack-compose.svg',
      },
      {
        name: 'Android Jetpack libraries',
        img: '/assets/android-app/jetpack.jpg',
      },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      {
        name: 'Node.js',
        img: '/assets/mobile-app/node.jpg',
      },
      {
        name: 'Python',
        img: '/assets/mobile-app/python.jpg',
      },
      {
        name: 'Java/Spring Boot',
        img: '/assets/mobile-app/spring-boot.jpg',
      },
      {
        name: 'REST APIs',
        img: '/assets/mobile-app/rest-api.jpg',
      },
      {
        name: 'GraphQL',
        img: '/assets/mobile-app/graphQL.jpg',
      },
    ],
  },
  {
    name: 'Databases & Storage',
    items: [
      {
        name: 'PostgreSQL',
        img: '/assets/mobile-app/postgreSQL.jpg',
      },
      {
        name: 'Firebase',
        img: '/assets/mobile-app/firebase.jpg',
      },
      {
        name: 'MongoDB',
        img: '/assets/mobile-app/mongoDB.jpg',
      },
      {
        name: 'Redis',
        img: '/assets/mobile-app/redis.jpg',
      },
      {
        name: 'Room',
        img: '/assets/android-app/android.jpg',
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      {
        name: 'AWS',
        img: '/assets/mobile-app/aws.jpg',
      },
      {
        name: 'Google Cloud',
        img: '/assets/mobile-app/goole-cloud-platform.jpg',
      },
      {
        name: 'Microsoft Azure',
        img: '/assets/mobile-app/microsoft-azure.jpg',
      },
      {
        name: 'Docker',
        img: '/assets/mobile-app/docker.jpg',
      },
      {
        name: 'CI/CD',
        img: '/assets/mobile-app/gitHub-actions.jpg',
      },
    ],
  },
  {
    name: 'Android Testing',
    items: [
      {
        name: 'JUnit',
        img: '/assets/mobile-app/java.jpg',
      },
      {
        name: 'Espresso',
        img: '/assets/mobile-app/tech/android-sdk.svg',
      },
      {
        name: 'Firebase Test Lab',
        img: '/assets/mobile-app/firebase.jpg',
      },
    ],
  },
  {
    name: 'Application Security',
    items: [
      {
        name: 'Android Keystore',
        img: '/assets/mobile-app/tech/android-sdk.svg',
      },
      {
        name: 'OAuth 2.0',
        img: '/assets/mobile-app/oauth.jpg',
      },
      {
        name: 'BiometricPrompt',
        img: '/assets/mobile-app/tech/biometric-auth.svg',
      },
      {
        name: 'TLS',
        img: '/assets/mobile-app/ssl-tls.jpg',
      },
      {
        name: 'OWASP MASVS',
        img: '/assets/mobile-app/tech/rbac.svg',
      },
    ],
  },
]

export default function AndroidTechStackTabs() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Tech Stack for Android Apps,</span>{' '}
            Chosen Around Product Requirements
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            As an Android app development company with 8+ years of experience, Inceptives Digital selects Kotlin, Java, Android SDK, backend services, cloud infrastructure, APIs, databases, testing tools, and security technologies around each product’s architecture, integrations, performance requirements, and long-term roadmap.
          </p>
        </div>

        {/* Two Solid Green Panels Matching Original Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Green Panel: Category List */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-between border-0 shadow-none">
            {androidTechCategories.map((cat, idx) => {
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
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 min-h-[340px] border-0 shadow-none">
            {androidTechCategories[activeCategory].items.map((tech) => (
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

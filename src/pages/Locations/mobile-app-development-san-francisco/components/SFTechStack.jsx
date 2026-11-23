import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export const sfTechCategories = [
  {
    name: 'Native Mobile Development',
    items: [
      { name: 'Swift', img: '/assets/mobile-app/tech/swift.svg' },
      { name: 'SwiftUI', img: '/assets/mobile-app/tech/swiftui.svg' },
      { name: 'UIKit', img: '/assets/mobile-app/tech/uikit.svg' },
      { name: 'Kotlin', img: '/assets/mobile-app/tech/kotlin.svg' },
      { name: 'Jetpack Compose', img: '/assets/mobile-app/tech/jetpack-compose.svg' },
      { name: 'Android SDK', img: '/assets/mobile-app/tech/android-sdk.svg' },
    ],
  },
  {
    name: 'Cross-Platform Development',
    items: [
      { name: 'Flutter', img: '/assets/mobile-app/tech/flutter.svg' },
      { name: 'Dart', img: '/assets/mobile-app/tech/dart.svg' },
      { name: 'React Native', img: '/assets/mobile-app/react-native.jpg' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: '/assets/mobile-app/node.jpg' },
      { name: 'NestJS', img: '/assets/mobile-app/nest.jpg' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'FastAPI', img: '/assets/react-native/fastapi.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'MySQL', img: '/assets/mobile-app/mySql.jpg' },
      { name: 'MongoDB', img: '/assets/mobile-app/mongoDB.jpg' },
      { name: 'Firebase', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'AWS S3', img: '/assets/mobile-app/aws.jpg' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Microsoft Azure', img: '/assets/react-native/microsoft-azure.jpg' },
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/react-native/kubernetes.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg' },
    ],
  },
  {
    name: 'AI & Intelligent Features',
    items: [
      { name: 'OpenAI APIs', img: '/assets/mobile-app/openai.png' },
      { name: 'Google Gemini', img: '/assets/fitness/tech/google_ml.png' },
      { name: 'Anthropic Claude', img: '/assets/mobile-app/openai.png' },
      { name: 'Core ML', img: '/assets/mobile-app/pytorch.png' },
      { name: 'TensorFlow Lite', img: '/assets/mobile-app/tensorFlow.jpg' },
    ],
  },
]

export default function SFTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Production-Ready Technology Stack for{' '}
            <span className="text-[#00CE44]">Mobile App Development</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            The{' '}
            <a
              href="https://inceptivesdigital.com/blog/mobile-app-tech-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00CE44] hover:text-white transition-colors"
            >
              mobile app technology stack
            </a>{' '}
            includes Swift, Kotlin, Flutter, React Native, backend APIs, and cloud infrastructure. Our mobile app development services in San Francisco combine production-ready frameworks, cloud platforms, and engineering tools selected around your product goals.
          </p>
        </div>

        {/* Two Solid Green Panels Matching Live Mobile App / Screenshot Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Green Panel: Category List */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
            {sfTechCategories.map((cat, idx) => {
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

          {/* Right Green Panel: White Tech Logo Boxes */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
            {sfTechCategories[activeCategory].items.map((tech) => (
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

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const techStackCategories = [
  {
    name: 'Core Kotlin Development',
    items: [
      { name: 'Kotlin', img: '/assets/kmp-app/Kotlin.webp' },
      { name: 'Kotlin Multiplatform', img: '/assets/kmp-app/kotlin-ultiplatform.jpg' },
      { name: 'Kotlin/Native', img: '/assets/kmp-app/Kotlin.webp' },
      { name: 'Kotlin/Wasm', img: '/assets/kmp-app/kotlin-ultiplatform.jpg' },
    ],
  },
  {
    name: 'User Interface Development',
    items: [
      { name: 'Compose Multiplatform', img: '/assets/kmp-app/jetpack.jpg' },
      { name: 'Jetpack Compose', img: '/assets/kmp-app/jetpack.jpg' },
      { name: 'SwiftUI', img: '/assets/kmp-app/SwiftUI.jpg' },
      { name: 'UIKit', img: '/assets/kmp-app/uikit.jpg' },
    ],
  },
  {
    name: 'Networking and APIs',
    items: [
      { name: 'Ktor', img: '/assets/kmp-app/Kotlin.webp' },
      { name: 'Retrofit', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Data Management',
    items: [
      { name: 'SQLDelight', img: '/assets/mobile-app/mySql.jpg' },
      { name: 'Room', img: '/assets/kmp-app/android.jpg' },
      { name: 'DataStore', img: '/assets/kmp-app/android.jpg' },
      { name: 'SQLite', img: '/assets/mobile-app/mySql.jpg' },
    ],
  },
  {
    name: 'State Management',
    items: [
      { name: 'Kotlin Coroutines', img: '/assets/kmp-app/Kotlin.webp' },
      { name: 'Kotlin Flow', img: '/assets/kmp-app/kotlin-ultiplatform.jpg' },
      { name: 'ViewModel', img: '/assets/kmp-app/android.jpg' },
      { name: 'Koin', img: '/assets/kmp-app/Kotlin.webp' },
    ],
  },
  {
    name: 'Development Tools',
    items: [
      { name: 'Android Studio', img: '/assets/kmp-app/android.jpg' },
      { name: 'IntelliJ IDEA', img: '/assets/kmp-app/Kotlin.webp' },
      { name: 'Xcode', img: '/assets/kmp-app/SwiftUI.jpg' },
      { name: 'Gradle', img: '/assets/kmp-app/android.jpg' },
    ],
  },
  {
    name: 'Testing',
    items: [
      { name: 'kotlin.test', img: '/assets/kmp-app/Kotlin.webp' },
      { name: 'JUnit', img: '/assets/react-native/java.jpg' },
      { name: 'XCTest', img: '/assets/kmp-app/SwiftUI.jpg' },
      { name: 'Compose UI Testing', img: '/assets/kmp-app/jetpack.jpg' },
    ],
  },
  {
    name: 'Deployment',
    items: [
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg' },
      { name: 'Firebase App Distribution', img: '/assets/mobile-app/firebase.jpg' },
    ],
  },
]

const partners = [
  { name: 'AWS', src: '/assets/ios-app/aws-2.svg' },
  { name: 'Google Cloud', src: '/assets/ios-app/Google_Cloud_logo.svg' },
  { name: 'Microsoft Azure', src: '/assets/ios-app/Microsoft_Azure_Logo.svg' },
  { name: 'Firebase', src: '/assets/ios-app/New_Firebase_logo.svg' },
  { name: 'Stripe', src: '/assets/ios-app/Stripe_Logo_revised_2016.svg' },
  { name: 'Google', src: '/assets/ios-app/Google_2015_logo.svg' },
]

export default function KmpTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#141414]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              <span className="text-[#00CE44]">Tools That Hold</span>{' '}
              Every KMP Build at Scale
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Every layer of a KMP build, from shared business logic to platform integration, runs on tools chosen for production reliability. Ktor, SQLDelight, Koin, and Compose Multiplatform form the{' '}
              <Link
                to="/blog/mobile-app-tech-stack"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                mobile app tech stack
              </Link>{' '}
              that makes scale possible without compromise.
            </p>
          </div>

          {/* Two Solid Green Panels */}
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

      {/* Technology Partnerships Supporting Our Product Engineering */}
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              <span className="text-[#00CE44]">Technology Partnerships</span>{' '}
              Supporting Our Product Engineering
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
              Inceptives Digital works with established technology partners that strengthen our engineering capabilities. These relationships support the cloud infrastructure and platform expertise our teams draw on when delivering complex{' '}
              <Link
                to="/mobile-app-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                mobile app development
              </Link>{' '}
              and multiplatform projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="p-5 rounded-[15px] bg-[#161616] border border-white/5 hover:border-[#00CE44] flex flex-col items-center justify-center text-center h-28 sm:h-32 transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="h-10 sm:h-12 flex items-center justify-center mb-2">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="max-h-8 sm:max-h-9 max-w-[120px] w-auto h-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-white text-xs sm:text-[13px] font-medium leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// =========================================================================
// SEO & TECH STACK IMAGE CONFIGURATION
// Every technology item includes:
// - name: Display label shown under the white icon card
// - img:  Image path inside /public/assets/mobile-app/
// - alt:  Customizable SEO alternate text (e.g. for Swift, Kotlin, Flutter)
// =========================================================================
export const techStackCategories = [
  {
    name: 'Native Mobile Development',
    items: [
      {
        name: 'Swift',
        img: '/assets/mobile-app/tech/swift.svg',
        alt: 'Swift Mobile App Development',
      },
      {
        name: 'SwiftUI',
        img: '/assets/mobile-app/tech/swiftui.svg',
        alt: 'SwiftUI Native Mobile Interface Development',
      },
      {
        name: 'UIKit',
        img: '/assets/mobile-app/tech/uikit.svg',
        alt: 'Apple UIKit Framework for Mobile Apps',
      },
      {
        name: 'Kotlin',
        img: '/assets/mobile-app/tech/kotlin.svg',
        alt: 'Kotlin Android App Development',
      },
      {
        name: 'Jetpack Compose',
        img: '/assets/mobile-app/tech/jetpack-compose.svg',
        alt: 'Jetpack Compose Android UI Toolkit',
      },
      {
        name: 'Android SDK',
        img: '/assets/mobile-app/tech/android-sdk.svg',
        alt: 'Android SDK Native Mobile Engineering',
      },
    ],
  },
  {
    name: 'Cross-Platform Development',
    items: [
      {
        name: 'Flutter',
        img: '/assets/mobile-app/tech/flutter.svg',
        alt: 'Flutter Cross-Platform App Development',
      },
      {
        name: 'Dart',
        img: '/assets/mobile-app/tech/dart.svg',
        alt: 'Dart Programming Language for Flutter',
      },
      {
        name: 'React Native',
        img: '/assets/mobile-app/react-native.jpg',
        alt: 'React Native Cross-Platform Mobile Apps',
      },
      {
        name: 'TypeScript',
        img: '/assets/mobile-app/typescript.jpg',
        alt: 'TypeScript Mobile Application Engineering',
      },
      {
        name: 'Kotlin Multiplatform',
        img: '/assets/mobile-app/tech/kotlin.svg',
        alt: 'Kotlin Multiplatform Shared Mobile Architecture',
      },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      {
        name: 'Node.js',
        img: '/assets/mobile-app/node.jpg',
        alt: 'Node.js Mobile Backend Development',
      },
      {
        name: 'NestJS',
        img: '/assets/mobile-app/nest.jpg',
        alt: 'NestJS Scalable Server-Side Architecture',
      },
      {
        name: 'Python',
        img: '/assets/mobile-app/python.jpg',
        alt: 'Python Backend and AI API Engineering',
      },
      {
        name: 'REST APIs',
        img: '/assets/mobile-app/rest-api.jpg',
        alt: 'RESTful API Integration for Mobile Apps',
      },
      {
        name: 'GraphQL',
        img: '/assets/mobile-app/graphQL.jpg',
        alt: 'GraphQL API Query Language for Mobile',
      },
    ],
  },
  {
    name: 'Databases & Storage',
    items: [
      {
        name: 'PostgreSQL',
        img: '/assets/mobile-app/postgreSQL.jpg',
        alt: 'PostgreSQL Relational Database for Mobile Apps',
      },
      {
        name: 'MySQL',
        img: '/assets/mobile-app/mySql.jpg',
        alt: 'MySQL Database Management System',
      },
      {
        name: 'MongoDB',
        img: '/assets/mobile-app/mongoDB.jpg',
        alt: 'MongoDB NoSQL Document Database',
      },
      {
        name: 'Firebase Firestore',
        img: '/assets/mobile-app/firebase.jpg',
        alt: 'Google Firebase Cloud Firestore Realtime Database',
      },
      {
        name: 'Redis',
        img: '/assets/mobile-app/redis.jpg',
        alt: 'Redis In-Memory Caching and Data Store',
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      {
        name: 'AWS',
        img: '/assets/mobile-app/aws.jpg',
        alt: 'Amazon Web Services Cloud Infrastructure',
      },
      {
        name: 'Google Cloud',
        img: '/assets/mobile-app/goole-cloud-platform.jpg',
        alt: 'Google Cloud Platform Mobile Hosting',
      },
      {
        name: 'Docker',
        img: '/assets/mobile-app/docker.jpg',
        alt: 'Docker Containerized Application Deployment',
      },
      {
        name: 'GitHub Actions',
        img: '/assets/mobile-app/gitHub-actions.jpg',
        alt: 'GitHub Actions CI/CD Mobile Release Automation',
      },
      {
        name: 'Fastlane',
        img: '/assets/mobile-app/fastlane.jpg',
        alt: 'Fastlane Automated Mobile and Android App Deployment',
      },
    ],
  },
  {
    name: 'AI & Machine Learning',
    items: [
      {
        name: 'OpenAI APIs',
        img: '/assets/mobile-app/openai.png',
        alt: 'OpenAI GPT and LLM Integration for Mobile Apps',
      },
      {
        name: 'TensorFlow',
        img: '/assets/mobile-app/tensorFlow.jpg',
        alt: 'TensorFlow Lite On-Device Machine Learning',
      },
      {
        name: 'PyTorch',
        img: '/assets/mobile-app/pytorch.png',
        alt: 'PyTorch Deep Learning Models for Mobile',
      },
      {
        name: 'LangChain',
        img: '/assets/mobile-app/langchain.jpg',
        alt: 'LangChain AI Agent and RAG Pipeline Integration',
      },
      {
        name: 'Computer Vision',
        img: '/assets/mobile-app/computer-vision-1.jpg',
        alt: 'Mobile Computer Vision and Image Recognition',
      },
    ],
  },
  {
    name: 'Mobile Analytics & Monitoring',
    items: [
      {
        name: 'Firebase Analytics',
        img: '/assets/mobile-app/firebase.jpg',
        alt: 'Firebase Mobile App Analytics and Events',
      },
      {
        name: 'Crashlytics',
        img: '/assets/mobile-app/tech/crashlytics.svg',
        alt: 'Firebase Crashlytics Real-Time Crash Reporting',
      },
      {
        name: 'Mixpanel',
        img: '/assets/mobile-app/tech/mixpanel.svg',
        alt: 'Mixpanel Product and User Behavior Analytics',
      },
      {
        name: 'Sentry',
        img: '/assets/mobile-app/tech/sentry.svg',
        alt: 'Sentry Mobile Application Error Monitoring',
      },
    ],
  },
  {
    name: 'Security & Authentication',
    items: [
      {
        name: 'OAuth 2.0',
        img: '/assets/mobile-app/oauth.jpg',
        alt: 'OAuth 2.0 Secure Mobile Authorization Protocol',
      },
      {
        name: 'JWT',
        img: '/assets/mobile-app/jwt.jpg',
        alt: 'JSON Web Token Mobile API Authentication',
      },
      {
        name: 'Biometric Authentication',
        img: '/assets/mobile-app/tech/biometric-auth.svg',
        alt: 'Face ID and Touch ID Biometric Mobile Security',
      },
      {
        name: 'Role-Based Access Control',
        img: '/assets/mobile-app/tech/rbac.svg',
        alt: 'Role-Based Access Control for Enterprise Mobile Apps',
      },
      {
        name: 'OWASP Mobile Security Practices',
        img: '/assets/mobile-app/ssl-tls.jpg',
        alt: 'OWASP Mobile Security and SSL/TLS Encryption',
      },
    ],
  },
]

export default function TechStackTabs() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Tech Stack Powering Our{' '}
            <span className="text-[#00CE44]">Custom Mobile App Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Every technology decision shapes your product&apos;s future. We build on a proven{' '}
            <Link
              to="/blog/mobile-app-tech-stack"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
              mobile app tech stack
            </Link>{' '}
            with modern infrastructure that supports performance today and growth tomorrow.
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

          {/* Right Green Panel: White Tech Logo Boxes (Logos Fixed & Crisp) */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
            {techStackCategories[activeCategory].items.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5 border-0 shadow-none">
                  <img
                    src={tech.img}
                    alt={tech.alt || tech.name}
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

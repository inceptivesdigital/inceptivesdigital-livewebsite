import { Link } from 'react-router-dom'

// Crisp full-fill vector icons
function AppleIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.41-.58.68-1.1 1.76-1.04 2.81 1.07.08 2.2-.6 2.82-1.35z" />
    </svg>
  )
}

function AndroidIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71a.495.495 0 0 0-.71 0l-1.48 1.48C13.72 2.24 12.88 2 12 2c-.88 0-1.72.24-2.64.63L7.88 1.15a.495.495 0 0 0-.71 0c-.2.2-.2.51 0 .71l1.3 1.3C6.73 4.2 5.54 5.92 5.5 7.9h13c-.04-1.98-1.23-3.7-2.97-4.74zM9 5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm6 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
    </svg>
  )
}

function CrossPlatformIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 7h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
    </svg>
  )
}

function ReactIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00CE44" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#00CE44" stroke="none" />
    </svg>
  )
}

function FlutterIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M14.314 0L2.3 12 6 15.7 21.714 0h-7.4zM14.314 11.286L8.6 17 14.314 22.714h7.4L16 17l5.714-5.714h-7.4z" />
    </svg>
  )
}

function KotlinIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M2 2h20L12 12 22 22H2V2z" />
    </svg>
  )
}

function BackendIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm-8 6c0-.18.17-.4.5-.66.96.76 3.93 1.66 7.5 1.66s6.54-.9 7.5-1.66c.33.26.5.48.5.66 0 .66-3.58 2-8 2s-8-1.34-8-2zm0 4c0-.18.17-.4.5-.66.96.76 3.93 1.66 7.5 1.66s6.54-.9 7.5-1.66c.33.26.5.48.5.66 0 .66-3.58 2-8 2s-8-1.34-8-2zm8 6c-4.42 0-8-1.34-8-2v-1.34c.96.76 3.93 1.66 7.5 1.66s6.54-.9 7.5-1.66V18c0 .66-3.58 2-8 2z" />
    </svg>
  )
}

function AiIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V4h10v13z" />
      <path d="M10 9h4v2h-4zm0-3h4v2h-4zm0 6h4v2h-4z" />
    </svg>
  )
}

export default function AustinServicesGrid() {
  const services = [
    {
      title: 'iOS App Development',
      icon: AppleIcon,
      link: '/ios-app-development',
      linkText: 'iOS app developers',
      descBefore: 'Premium iOS applications built for products where trust, retention, and customer experience directly influence growth. Our ',
      descAfter: ' serve Austin businesses using Swift and SwiftUI to build secure, high-performing iPhone and iPad applications with deeper Apple ecosystem integration.',
    },
    {
      title: 'Android App Development',
      icon: AndroidIcon,
      link: '/android-app-development',
      linkText: 'Android app development services',
      descBefore: 'Our ',
      descAfter: ' in Austin help businesses build native applications that scale across devices, customer segments, and operating environments. Using Kotlin and Jetpack Compose, our developers deliver consistent performance and reliable functionality across the Android ecosystem.',
    },
    {
      title: 'Cross-Platform App Development',
      icon: CrossPlatformIcon,
      link: '/cross-platform-app-development',
      linkText: 'Cross-platform app development',
      descBefore: '',
      descAfter: 'offers a practical approach for businesses balancing speed to market, budget efficiency, and platform reach. Shared codebases reduce engineering overhead while maintaining a near-native experience on both platforms.',
    },
    {
      title: 'React Native Development',
      icon: ReactIcon,
      link: '/react-native-app-development',
      linkText: 'React Native app development',
      descBefore: '',
      descAfter: ' gives Austin startups a practical way to reach iOS and Android users through shared engineering resources. We use the framework for products requiring platform coverage without maintaining two separate frontend codebases.',
    },
    {
      title: 'Flutter App Development',
      icon: FlutterIcon,
      link: '/flutter-app-development',
      linkText: 'Flutter app development services',
      descBefore: 'For businesses prioritizing consistent mobile interfaces, our ',
      descAfter: ' support iOS and Android from a shared codebase. Flutter delivers a uniform experience across platforms without increasing maintenance complexity.',
    },
    {
      title: 'Kotlin Multiplatform Development',
      icon: KotlinIcon,
      link: '/kotlin-multiplatform-app-development',
      linkText: 'Kotlin Multiplatform development',
      descBefore: '',
      descAfter: ' delivers shared business logic with native experiences on every platform. A strong fit for growing products that need engineering efficiency without sacrificing performance or user experience quality.',
    },
    {
      title: 'Backend and API Development',
      icon: BackendIcon,
      link: '/backend-api-development',
      linkText: 'mobile app backend development services',
      descBefore: 'We provide ',
      descAfter: ' connecting applications with business databases, payment systems, CRMs, and third-party APIs. Austin companies can integrate new mobile products with existing infrastructure while retaining control over system access and data flows.',
    },
    {
      title: 'AI-Powered Mobile Applications',
      icon: AiIcon,
      link: '/ai-development',
      linkText: 'AI development capabilities',
      descBefore: 'From intelligent recommendations and semantic search to workflow automation and conversational interfaces, ',
      descAfter: ' are integrated where they create measurable business value rather than unnecessary complexity.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile App Development Services in{' '}
            <span className="text-[#00CE44]">Austin</span> for Startups and SMBs
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal">
            Every business faces different growth constraints, compliance requirements, and customer expectations. We recommend technologies based on where your product is going, not what we prefer to build.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group p-7 sm:p-8 rounded-[20px] bg-[#14151a] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 block"
              >
                <div>
                  {/* Clean Solid Full-fill Icon (Zero bg, zero border, zero padding) */}
                  <div className="mb-5 flex items-center justify-start">
                    <Icon className="w-10 h-10 shrink-0" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
                    {s.descBefore}
                    {s.link ? (
                      <Link to={s.link} className="underline text-[#00CE44] hover:text-white transition-colors">
                        {s.linkText}
                      </Link>
                    ) : (
                      s.linkText
                    )}
                    {s.descAfter}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

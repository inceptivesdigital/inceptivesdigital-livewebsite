import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44)
function AppleIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.41-.58.68-1.1 1.76-1.04 2.81 1.07.08 2.2-.6 2.82-1.35z" />
    </svg>
  )
}

function AndroidIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71a.495.495 0 0 0-.71 0l-1.48 1.48C13.72 2.24 12.88 2 12 2c-.88 0-1.72.24-2.64.63L7.88 1.15a.495.495 0 0 0-.71 0c-.2.2-.2.51 0 .71l1.3 1.3C6.73 4.2 5.54 5.92 5.5 7.9h13c-.04-1.98-1.23-3.7-2.97-4.74zM9 5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm6 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
    </svg>
  )
}

function CrossPlatformIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 7h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
    </svg>
  )
}

function ReactIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0-3.5c-5.52 0-10 2.69-10 6s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 9.5c-4.14 0-7.5-1.57-7.5-3.5S7.86 8.5 12 8.5s7.5 1.57 7.5 3.5-3.36 3.5-7.5 3.5z" />
      <path d="M6.8 3c-2.76 4.78-1.66 10.02 1.2 11.67 2.86 1.65 7.42-.9 10.18-5.68C20.94 4.21 19.84-1.03 16.98-2.68 14.12-4.33 9.56-1.78 6.8 3z" opacity="0.85" />
    </svg>
  )
}

function FlutterIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M14.314 0L2.3 12 6 15.7 21.714 0h-7.4zM14.314 11.286L8.6 17 14.314 22.714h7.4L16 17l5.714-5.714h-7.4z" />
    </svg>
  )
}

function KotlinIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M2 2h20L12 12 22 22H2V2z" />
    </svg>
  )
}

function BackendIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M2 4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4zm4 3h2V5H6v2zm-4 5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4zm4 3h2v-2H6v2zm-4 5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2zm4 2h2v-2H6v2z" />
    </svg>
  )
}

function AiIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
    </svg>
  )
}

export default function NYServicesGrid() {
  const services = [
    {
      title: 'iOS App Development',
      link: '/ios-app-development',
      icon: AppleIcon,
      desc: (
        <>
          Premium iOS experiences suit businesses where trust, retention, and customer lifetime value matter. For{' '}
          <Link to="/ios-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            iOS app development
          </Link>{' '}
          in New York, Swift and SwiftUI support polished iPhone applications with Apple ecosystem integration, secure authentication, and the performance expected of financial, healthcare, and subscription products.
        </>
      ),
    },
    {
      title: 'Android App Development',
      link: '/android-app-development',
      icon: AndroidIcon,
      desc: (
        <>
          Native Android applications designed for scale across devices, customer segments, and operating environments. For{' '}
          <Link to="/android-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Android app development
          </Link>{' '}
          in NYC, Kotlin and Jetpack Compose support broader device coverage while maintaining consistent performance and usability.
        </>
      ),
    },
    {
      title: 'Cross-Platform App Development',
      link: '/cross-platform-app-development',
      icon: CrossPlatformIcon,
      desc: (
        <>
          When speed to market matters as much as platform reach,{' '}
          <Link to="/cross-platform-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            cross-platform app development
          </Link>{' '}
          in New York offers businesses a practical way to reach iOS and Android users. A shared codebase can reduce duplicate engineering work without sacrificing essential platform functionality.
        </>
      ),
    },
    {
      title: 'React Native App Development',
      link: '/react-native-app-development',
      icon: ReactIcon,
      desc: (
        <>
          For teams managing frequent releases across iOS and Android, React Native offers a practical development approach.{' '}
          <Link to="/react-native-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            React Native app development
          </Link>{' '}
          in NYC supports shared components, faster product updates, and native integrations where platform-specific functionality matters.
        </>
      ),
    },
    {
      title: 'Flutter App Development',
      link: '/flutter-app-development',
      icon: FlutterIcon,
      desc: 'For New York consumer brands, Flutter offers greater control over interface design and consistency across iOS and Android. A shared codebase supports visually demanding applications without maintaining separate UI implementations.',
    },
    {
      title: 'Kotlin Multiplatform Development',
      link: '/kotlin-multiplatform-app-development',
      icon: KotlinIcon,
      desc: 'The architecture choice for companies that expect mobile investment to compound over time. Shared business logic reduces duplication while preserving native experiences where they matter most.',
    },
    {
      title: 'Backend and API Development',
      link: '/backend-api-development',
      icon: BackendIcon,
      desc: (
        <>
          Behind every reliable mobile application sits an infrastructure that handles data, authentication, and business operations. Our mobile{' '}
          <Link to="/backend-api-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            backend api development
          </Link>{' '}
          services connect payment gateways, CRM platforms, enterprise systems, and third-party APIs while keeping the architecture scalable and maintainable.
        </>
      ),
    },
    {
      title: 'AI-Powered Mobile Applications',
      link: '/ai-app-development-services',
      icon: AiIcon,
      desc: (
        <>
          Intelligent search, personalized recommendations, and automated workflows are changing how customers interact with digital products.{' '}
          <Link to="/ai-app-development-services" className="text-[#00CE44] font-medium underline underline-offset-4">
            AI app development
          </Link>{' '}
          in New York requires a clear use case, whether that means integrating AI into an existing application or building an{' '}
          <Link to="/ai-mvp-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            AI MVP
          </Link>{' '}
          to validate new functionality before a broader launch.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile App Development Services in New York for{' '}
            <span className="text-[#00CE44]">Modern Businesses</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            From fintech in Lower Manhattan to AI startups in SoHo, every product demands different technology decisions, growth assumptions, and compliance requirements. The following mobile app development services address those requirements without forcing every business into the same technical approach.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-7 sm:p-8 rounded-[20px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 shadow-none"
              >
                <div>
                  <div className="mb-6 flex items-center justify-start">
                    <Icon className="w-10 h-10 shrink-0" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3 leading-snug">
                    <Link to={item.link} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="text-xs sm:text-sm font-semibold text-[#00CE44] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Service</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

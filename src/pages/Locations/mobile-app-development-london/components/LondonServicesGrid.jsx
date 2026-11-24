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

function ReactIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0-3.5c-5.52 0-10 2.69-10 6s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 9.5c-4.14 0-7.5-1.57-7.5-3.5S7.86 8.5 12 8.5s7.5 1.57 7.5 3.5-3.36 3.5-7.5 3.5z" />
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

function CrossPlatformIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 7h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
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

function WebAppIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-8 4h8v2h-8V8zm-4 0h2v2H7V8zm12 10H5v-6h14v6z" />
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

export default function LondonServicesGrid() {
  const services = [
    {
      title: 'iOS App Development',
      link: '/ios-app-development',
      icon: AppleIcon,
      desc: (
        <>
          Native development offers greater control over security and performance in customer-facing applications. Our{' '}
          <Link to="/ios-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            iOS app development
          </Link>{' '}
          in London uses Swift and Apple frameworks, adding Apple Pay, Face ID, or other device capabilities when they serve a defined, commercially relevant product need for users.
        </>
      ),
    },
    {
      title: 'Android App Development',
      link: '/android-app-development',
      icon: AndroidIcon,
      desc: (
        <>
          Device diversity makes consistent performance essential for Android applications. Kotlin and Jetpack Compose support{' '}
          <Link to="/android-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Android app development
          </Link>{' '}
          for London businesses, covering different screen sizes, hardware capabilities, and growing user demand.
        </>
      ),
    },
    {
      title: 'React Native App Development',
      link: '/react-native-app-development',
      icon: ReactIcon,
      desc: 'When reaching both platforms quickly matters more than squeezing out native performance, React Native usually wins the trade. One codebase trims cost and time to revenue, while native modules keep the experience close to fully native.',
    },
    {
      title: 'Flutter App Development',
      link: '/flutter-app-development',
      icon: FlutterIcon,
      desc: 'Consumer applications need a consistent visual identity across different devices and platforms. Flutter app development in London supports shared UI components and releases, allowing teams to test and refine experiences without maintaining separate interfaces.',
    },
    {
      title: 'Cross-Platform App Development',
      link: '/cross-platform-app-development',
      icon: CrossPlatformIcon,
      desc: 'Reaching iOS and Android users through one development approach can reduce duplicated work. Cross-platform app development in London suits businesses with shared functionality, coordinated release plans, and limited platform-specific requirements.',
    },
    {
      title: 'Kotlin Multiplatform Development',
      link: '/kotlin-multiplatform-app-development',
      icon: KotlinIcon,
      desc: 'Kotlin Multiplatform suits teams that want shared logic without giving up a native feel. Core business rules live in one place, which drops maintenance costs and lets the product adapt as priorities shift.',
    },
    {
      title: 'Web Application Development',
      link: '/web-app-development-company',
      icon: WebAppIcon,
      desc: 'Most mobile products eventually need a web presence to match. Responsive applications on modern frameworks bring users, teams, and data together for one experience across every device.',
    },
    {
      title: 'Backend & API Development',
      link: '/backend-api-development',
      icon: BackendIcon,
      desc: 'Every decision above rests on the foundation beneath it. Scalable APIs and cloud infrastructure handle integrations, security, and traffic spikes, keeping the system ready to grow without a costly rewrite later.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Our Mobile App Development Services in{' '}
            <span className="text-[#00CE44]">London</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            The right technology depends on the product, its customers, and where the roadmap heads next. That judgment comes first, before picking a platform or framework.
          </p>
        </div>

        {/* 8 Cards Grid (4x2 on desktop) */}
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

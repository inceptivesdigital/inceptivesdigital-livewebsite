import { Link } from 'react-router-dom'

export default function CustomMobileServices() {
  const services = [
    {
      title: 'Custom Mobile App Development',
      img: '/assets/mobile-app/mobile-screen01.png',
      desc: (
        <>
          Our custom mobile app development services cover business applications that standard software cannot accommodate. Modular architecture and API integrations support tailored iOS and Android products, with engineering scope aligned to complex operational workflows.
        </>
      ),
    },
    {
      title: 'iOS App Development',
      img: '/assets/mobile-app/Android-App.png',
      desc: (
        <>
          Native{' '}
          <Link
            to="/ios-app-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            iOS app development
          </Link>{' '}
          requires deep expertise across Apple’s ecosystem. SwiftUI and UIKit power our custom iPhone and iPad applications, with native SDK integrations addressing advanced device functionality and platform-specific requirements.
        </>
      ),
    },
    {
      title: 'Android App Development',
      img: '/assets/mobile-app/react.png',
      desc: (
        <>
          Custom{' '}
          <Link
            to="/android-app-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            Android app development
          </Link>{' '}
          covers native applications for diverse device environments. Kotlin and Jetpack Compose drive interface engineering, while Android SDK integrations and compatibility testing address the requirements of supported devices and OS versions.
        </>
      ),
    },
    {
      title: 'Cross-Platform App Development',
      img: '/assets/mobile-app/flutter.png',
      desc: (
        <>
          Launch iOS and Android applications through one shared development architecture. Our{' '}
          <a
            href="https://inceptivesdigital.com/cross-platform-app-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            cross-platform app development services
          </a>{' '}
          use Flutter and React Native, with native modules handling device functionality that requires platform-specific implementation.
        </>
      ),
    },
    {
      title: 'AI-Powered Mobile App Development',
      img: '/assets/mobile-app/Kotlin-Multiplatform-Development.png',
      desc: (
        <>
          Integrate LLM-powered{' '}
          <a
            href="https://inceptivesdigital.com/ai-chatbot-development-services"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            chatbots
          </a>{' '}
          and intelligent assistants into commercial mobile applications. Our{' '}
          <a
            href="https://inceptivesdigital.com/ai-app-development-services"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            AI app development
          </a>{' '}
          expertise covers RAG pipelines and model APIs, with architecture accounting for inference latency and sensitive data requirements.
        </>
      ),
    },
    {
      title: 'Enterprise Mobile App Integration',
      img: '/assets/mobile-app/rowtweo.png',
      desc: (
        <>
          Enterprise mobile app development connects existing business infrastructure with custom mobile workflows. API-first engineering supports CRM and ERP{' '}
          <a
            href="https://inceptivesdigital.com/system-integration-api-automation"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            system integration
          </a>
          , while secure middleware handles legacy interfaces and complex data synchronization requirements.
        </>
      ),
    },
    {
      title: 'Mobile UI/UX Design',
      img: '/assets/mobile-app/mobile-screen01re.png',
      desc: (
        <>
          Our mobile app{' '}
          <a
            href="https://inceptivesdigital.com/ui-ux-design"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            UI/UX design services
          </a>{' '}
          bring complex product workflows into intuitive interfaces. Designers develop Figma prototypes around critical user interactions, with usability validation informing native iOS and Android design decisions before engineering begins.
        </>
      ),
    },
    {
      title: 'Mobile App Modernization',
      img: '/assets/mobile-app/Kotlin-Multiplatform-Development-1.png',
      desc: (
        <>
          Modernize legacy mobile applications without replacing functionality that still serves the business. Our app modernization and{' '}
          <a
            href="https://inceptivesdigital.com/product-rescue-scaling"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            product rescue services
          </a>{' '}
          address outdated SDKs and architectural constraints through targeted refactoring, with migration requirements determined by existing codebase conditions.
        </>
      ),
    },
    {
      title: 'Mobile App Consulting & Architecture',
      img: '/assets/mobile-app/mobilere.png',
      desc: (
        <>
          Mobile app development{' '}
          <a
            href="https://inceptivesdigital.com/product-strategy-consulting"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            consulting
          </a>{' '}
          establishes technical direction before major engineering investments. Senior architects assess platform feasibility and API dependencies, defining the application architecture and delivery scope around documented product requirements.
        </>
      ),
    },
    {
      title: 'Mobile App Maintenance & Support',
      img: '/assets/mobile-app/Post-Launch-Analytics-Iteration-1-1024x638.png',
      desc: (
        <>
          Keep production mobile applications compatible with evolving iOS and Android requirements. Our{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-maintenance-cost"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            mobile app maintenance
          </a>{' '}
          services cover SDK upgrades and crash monitoring, with ongoing engineering support following agreed operational priorities and release schedules.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Custom Mobile App Development Services</span>{' '}
            Built Around Your Product
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Inceptives Digital provides custom mobile app development services for businesses with specific product requirements. Our engineering expertise spans native mobile platforms and AI-powered applications, with enterprise integrations tailored to each project's technical scope.
          </p>
        </div>

        {/* 10 Cards: Flat Dark Boxes, No Borders, No Shadows */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[14px] bg-[#1b1b1b] overflow-hidden flex flex-col border-0 shadow-none"
            >
              {/* Top Image Box */}
              <div className="w-full h-48 sm:h-52 bg-[#151515] flex items-end justify-center pt-6 px-6 overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="max-h-full max-w-full object-contain object-bottom select-none"
                  loading="lazy"
                />
              </div>

              {/* Bottom Text Area */}
              <div className="p-6 text-left flex-1">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00CE44] mb-2.5 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

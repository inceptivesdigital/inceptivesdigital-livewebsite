import { Link } from 'react-router-dom'
export default function CrossPlatformServicesGrid() {
  const services = [
    {
      title: 'Cross-Platform Product Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'The wrong framework can create expensive limitations later. We review your product requirements before recommending Flutter, React Native, or another suitable development approach, with particular attention to native dependencies and future maintenance.',
    },
    {
      title: 'Custom Cross-Platform App Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: 'Launch custom iOS and Android applications through one coordinated development process. Our Flutter and React Native engineers implement shared functionality around your business requirements, adding native modules where platform-specific features demand them.',
    },
    {
      title: 'PoC and MVP Development',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Test the difficult technical assumptions before committing to a full product build. A proof of concept establishes feasibility, while our cross-platform MVP development focuses the first release on functionality your target users need to validate.',
    },
    {
      title: 'Platform-Aware UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: 'One design system should not make iPhone and Android interactions feel identical where their conventions differ. We adapt shared interfaces to platform expectations, using interactive prototypes to validate the experience before implementation.',
    },
    {
      title: 'API and Third-Party Integration',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'Payment platforms and existing business systems often sit behind the mobile experience. Our API integration work connects those services to the shared application backend, with authentication and data handling appropriate to each integration.',
    },
    {
      title: 'Cross-Platform App Migration',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'An existing native or hybrid application may benefit from a shared architecture. We assess the current codebase and native dependencies before planning migration to Flutter or React Native, preserving essential product behavior throughout the transition.',
    },
    {
      title: 'Multi-Platform Testing and QA',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Shared code still needs independent verification on iOS and Android. Our cross-platform app testing covers real-device behavior and operating-system compatibility, with performance checks aligned to the application\'s critical workflows.',
    },
    {
      title: 'Deployment and App Store Optimization',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'Both platforms need their own release preparation. We handle iOS and Android app submissions within the agreed delivery scope, including signed builds and store requirements, with ASO support where included.',
    },
    {
      title: 'Ongoing Maintenance and Framework Support',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'Apple and Google release platform updates on different schedules. Our cross-platform maintenance services address framework compatibility and production issues while keeping shared functionality aligned as the product evolves.',
    },
  ]

  return (
    <>
      <section className="py-20 lg:py-28 bg-[#141518] text-white relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4 text-center">
              Our Comprehensive{' '}
              <span className="text-[#00CE44]">Cross-Platform App Development</span> Services
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed font-normal text-center">
              Inceptives Digital provides end-to-end cross-platform app development services across{' '}
              <Link
                to="/product-strategy-consulting"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                product strategy
              </Link>
              , design, engineering, testing, deployment, and post-launch support. One team manages the technical decisions across the product lifecycle, keeping the shared architecture aligned from the first sprint through subsequent platform releases.
            </p>
          </div>

          {/* 9 Services Grid (3x3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[20px] bg-[#22242a] flex flex-col justify-start border-0 shadow-none hover:bg-[#282a32] transition-colors"
              >
                <div className="mb-5 shrink-0 flex items-center">
                  <img
                    src={srv.icon}
                    alt={srv.title}
                    className="w-10 h-10 object-contain p-0 m-0 border-0 bg-transparent"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA: Discuss Your Cross-Platform App With Our Engineers (Green BG, Black Text, Centered) */}
      <section className="py-20 lg:py-24 bg-[#00CE44] text-black relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <span className="text-black/80 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
              Direct Technical Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-black leading-[1.18] tracking-tight mb-4 text-center">
              Discuss Your Cross-Platform App With Our Engineers
            </h2>
            <p className="text-black/90 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-medium text-center">
              Share your product requirements with our engineering team and receive a technical direction tailored to your product.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 rounded-none bg-black hover:bg-[#1a1a1a] text-white font-bold text-sm sm:text-base tracking-tight transition-all duration-200 active:scale-95 shadow-xl border-0"
              >
                Talk to an Engineer
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

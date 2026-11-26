import { Link } from 'react-router-dom'
export default function IosServicesGrid() {
  const services = [
    {
      title: 'iOS App Development Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: (
        <>
          Have an iPhone{' '}
          <Link
            to="/blog/how-to-validate-your-mobile-app-idea"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            app idea
          </Link>{' '}
          but need a clear development plan? Our iOS consultants examine your product requirements and recommend the appropriate Apple frameworks. A{' '}
          <Link
            to="/discovery-sprint"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            discovery sprint
          </Link>{' '}
          establishes the scope and estimated cost before engineering begins.
        </>
      ),
    },
    {
      title: 'iOS UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          Our iOS{' '}
          <Link
            to="/ui-ux-design"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            UI/UX design
          </Link>{' '}
          team follows Apple’s Human Interface Guidelines to create interfaces that feel native on iPhone and iPad. SwiftUI design conventions shape navigation, while adaptive layouts support different screen sizes and accessibility settings.
        </>
      ),
    },
    {
      title: 'Custom iOS Application Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Looking for an iPhone app development company with native engineering expertise? Our Swift developers build custom iOS applications using SwiftUI and UIKit, with direct access to Apple&apos;s device APIs. The architecture reflects the application&apos;s functionality and backend requirements.
        </>
      ),
    },
    {
      title: 'iOS App Integration and API Development',
      icon: '/assets/ios-app/serivces4.svg',
      desc: (
        <>
          Business iPhone apps frequently depend on external software. Our iOS application developers handle{' '}
          <Link
            to="/system-integration-api-automation"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            system integration and API automation
          </Link>
          , connecting CRM systems and custom backends through secure APIs. For applications offering digital purchases, StoreKit supports Apple’s in-app payment and subscription{' '}
          <Link
            to="/blog/mobile-app-monetization-strategies"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            monetization
          </Link>{' '}
          workflows.
        </>
      ),
    },
    {
      title: 'iOS App Modernization',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          Legacy Objective-C applications can struggle with changes to Apple&apos;s SDKs and newer iOS releases. Our iPhone app development services include Swift migration, targeted UIKit modernization, and{' '}
          <Link
            to="/product-rescue-scaling"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            product rescue
          </Link>
          , preserving existing functionality where the codebase permits.
        </>
      ),
    },
    {
      title: 'App Store Deployment and Maintenance',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          An iOS development company needs to account for Apple&apos;s review requirements before the final build reaches App Store Connect. Our engineers use TestFlight for beta distribution, review Apple’s submission guidelines before you{' '}
          <Link
            to="/blog/publish-update-an-app-on-app-store-google-play"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            publish and update an app on the App Store
          </Link>
          , and address compatibility issues as Apple updates iOS.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Our End-to-End{' '}
            <span className="text-[#00CE44]">iOS Application Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Inceptives Digital provides custom iPhone app development services for businesses launching native applications or expanding across Apple&apos;s ecosystem. Our iOS engineers work with Apple&apos;s latest SDKs to meet each product&apos;s technical requirements.
          </p>
        </div>

        {/* 6 Cards Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-7 rounded-[16px] bg-[#242424] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={svc.icon}
                alt={svc.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

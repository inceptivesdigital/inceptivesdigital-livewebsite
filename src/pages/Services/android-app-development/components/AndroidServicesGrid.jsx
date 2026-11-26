import { Link } from 'react-router-dom'
export default function AndroidServicesGrid() {
  const services = [
    {
      title: 'Android App Consulting',
      icon: '/assets/ios-app/serivces1.svg',
      desc: (
        <>
          Make informed investment decisions before Android development begins. Our{' '}
          <Link
            to="/product-strategy-consulting"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            product strategy consultants
          </Link>{' '}
          assess your product requirements against platform capabilities and integration constraints to establish a realistic MVP scope. It results in a technical roadmap that gives your team a clearer picture of development costs and delivery priorities.
        </>
      ),
    },
    {
      title: 'Android UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          Android{' '}
          <Link
            to="/ui-ux-design"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            UI/UX design
          </Link>{' '}
          at Inceptives Digital accounts for how people interact with applications across smartphones, tablets, and foldables. Material Design 3 guides the interface, while Jetpack Compose supports adaptive layouts for different screen sizes. Figma prototypes let you review navigation and usability before development starts.
        </>
      ),
    },
    {
      title: 'Custom Android App Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: 'Commission native Android applications with functionality specific to your business, whether that means connecting an enterprise platform to existing systems or developing a consumer app with hardware-level features. Our Android developers use Kotlin and Java for native engineering, with Android SDK integrations supporting device-specific requirements.',
    },
    {
      title: 'Android App Testing and QA',
      icon: '/assets/ios-app/serivces4.svg',
      desc: (
        <>
          Reliable Android applications must perform consistently beyond the development environment. Our Android{' '}
          <Link
            to="/blog/mobile-app-testing-strategies"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            app testing strategies
          </Link>{' '}
          use Espresso and JUnit to validate core functionality, while Firebase Test Lab helps identify compatibility issues across Android versions and device manufacturers. This approach helps catch performance problems before they affect users in production.
        </>
      ),
    },
    {
      title: 'Google Play Store Deployment',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          Take your Android application from a completed build to a production-ready release. Our Google Play Store deployment services handle everything required for submission, including Android App Bundle preparation and Play Console setup. Before expanding availability, a staged{' '}
          <Link
            to="/product-launch-strategy"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            product launch strategy
          </Link>{' '}
          helps your team monitor app stability and catch potential issues early.
        </>
      ),
    },
    {
      title: 'Android App Maintenance and Modernization',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          Keep your Android application compatible with newer OS releases without replacing a product that still serves your business. Maintenance addresses outdated SDK dependencies and recurring performance issues. When legacy architecture restricts new functionality, Android app modernization and{' '}
          <Link
            to="/product-rescue-scaling"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            product rescue
          </Link>{' '}
          provide a practical path to extend the application’s useful life.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Android App Development Services,</span>{' '}
            Backed by the Right Engineering
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Inceptives Digital handles the complete Android development lifecycle under one roof, from your first brief through Google Play release. As an Android software development company, we keep every stage of your project with one accountable team, so you always know where the build stands and which decision comes next.
          </p>
        </div>

        {/* 6 Cards Grid */}
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

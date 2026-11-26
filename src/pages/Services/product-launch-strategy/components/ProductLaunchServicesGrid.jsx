import { Link } from 'react-router-dom'

export default function ProductLaunchServicesGrid() {
  const services = [
    {
      title: 'Market Research and Launch Positioning',
      icon: '/assets/ios-app/serivces1.svg',
      desc: (
        <>
          Competitor analysis, audience research, and market evaluation are used to define a clear product position, establish differentiation, and create stronger alignment between the product and its target users.
        </>
      ),
    },
    {
      title: 'Go-to-Market Strategy',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          A structured launch framework covering audience segmentation, distribution channels, messaging, timelines, and rollout planning to maximize visibility, adoption, and market impact from the start.
        </>
      ),
    },
    {
      title: 'Product Messaging and Narrative',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Clear, audience-focused{' '}
          <Link
            to="/blog/mobile-app-branding-guide"
            className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
          >
            mobile app branding
          </Link>{' '}
          that translates product features into meaningful benefits, creating a compelling narrative that strengthens positioning and encourages user action across channels.
        </>
      ),
    },
    {
      title: 'Launch Campaign Planning',
      icon: '/assets/ios-app/serivces4.svg',
      desc: (
        <>
          Multi-channel{' '}
          <Link
            to="/blog/effective-marketing-strategies-for-mobile-apps"
            className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
          >
            marketing strategies for mobile apps
          </Link>{' '}
          across paid, organic, and owned media, designed to build awareness, generate demand, and capture attention during critical launch periods.
        </>
      ),
    },
    {
      title: 'App Store Optimization',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          Keyword targeting, metadata optimization, conversion-focused copy, and visual asset recommendations support an effective{' '}
          <Link
            to="/blog/app-store-optimization-aso"
            className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
          >
            app store optimization strategy
          </Link>{' '}
          that improves visibility and increases installation rates across iOS and Android platforms.
        </>
      ),
    },
    {
      title: 'Post-Launch Growth Strategy',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          Performance tracking, retention planning, and{' '}
          <Link
            to="/post-launch-analytics-iteration"
            className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
          >
            post-launch analytics iteration
          </Link>{' '}
          support sustained user engagement, ongoing product adoption, and measurable business growth beyond launch.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Inceptives Digital Services Built Around{' '}
            <span className="text-[#00CE44]">Successful Product Launches</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            A{' '}
            <Link
              to="/digital-product-development"
              className="text-[#00CE44] underline font-normal hover:opacity-80 transition-colors"
            >
              digital product development
            </Link>{' '}
            launch is a sequence of deliberate decisions, each one moving the product closer to the audience it was built for.
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

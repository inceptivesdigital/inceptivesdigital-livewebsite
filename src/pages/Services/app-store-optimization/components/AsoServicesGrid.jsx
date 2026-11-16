import { Link } from 'react-router-dom'

export default function AsoServicesGrid() {
  const services = [
    {
      title: 'App Store Performance Audits',
      icon: '/assets/ios-app/serivces1.svg',
      desc: (
        <>
          Keyword positions, conversion rates, creative performance, and metadata are measured against category benchmarks before any strategy is built, the same fundamentals covered in what{' '}
          <Link
            to="/blog/app-store-optimization-aso"
            className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
          >
            app store optimization ASO
          </Link>{' '}
          actually involves. The audit shows exactly where the store presence is losing installs.
        </>
      ),
    },
    {
      title: 'Keyword Strategy and Metadata Optimization',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          App Store search runs on its own logic. The team maps keyword volume, competition, and relevance across your category, then builds a metadata architecture that drives both discoverability and install intent.
        </>
      ),
    },
    {
      title: 'Listing Conversion Optimization',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Rank means nothing if the page does not convert. Title, subtitle, and description are written to communicate product value within the 10-second decision window, following the same principles behind a strong{' '}
          <Link
            to="/blog/mobile-app-branding-guide"
            className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app branding guide
          </Link>{' '}
          most users give before moving on.
        </>
      ),
    },
    {
      title: 'Visual Asset Testing and Enhancement',
      icon: '/assets/ios-app/serivces4.svg',
      desc: (
        <>
          Screenshots and preview videos drive the install decision more than any other page element. Creative is tested through native store A/B environments and refined until conversion numbers reflect the work.
        </>
      ),
    },
    {
      title: 'Competitive Intelligence and Benchmarking',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          Category dynamics shift, and competitor strategies change. The studio monitors ranking movement, creative trends, and search behavior across your competitive set so the strategy never operates on outdated assumptions.
        </>
      ),
    },
    {
      title: 'Continuous ASO Growth Management',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          A one-time optimization lifts numbers temporarily. Sustained ASO compounds, and that ongoing work is where{' '}
          <Link
            to="/post-launch-analytics-iteration"
            className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
          >
            post-launch analytics & iteration
          </Link>{' '}
          feeds every keyword update and creative revision back into the strategy. The app stays competitive as the market evolves.
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
            ASO Services Structured Around{' '}
            <span className="text-[#00CE44]">Your Product and How Users Find It</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every app competes in a category with its own search behavior, ranking dynamics, and conversion patterns, which is where most{' '}
            <Link
              to="/blog/10-aso-strategies-to-increase-your-app-store-rankings"
              className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
            >
              ASO strategies to increase app store rankings
            </Link>{' '}
            start diverging by category. The ASO services at Inceptives Digital are scoped around those specifics.
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

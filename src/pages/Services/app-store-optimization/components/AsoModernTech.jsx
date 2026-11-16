import { Link } from 'react-router-dom'

export default function AsoModernTech() {
  const techItems = [
    {
      title: 'App Store Connect',
      icon: '/assets/mobile-app/monitor.svg',
      desc: (
        <>
          Apple&apos;s native analytics surfaces impression volume, page view rates, conversion funnels, and keyword performance directly. The team reads this data regularly to track what is working and where the page is losing installs.
        </>
      ),
    },
    {
      title: 'Google Play Console',
      icon: '/assets/mobile-app/Android-App.png',
      desc: (
        <>
          Google&apos;s native dashboard exposes store listing performance, acquisition breakdown, and conversion data by traffic source, mirroring the platform-specific depth behind{' '}
          <Link
            to="/android-app-development"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            Android app development
          </Link>{' '}
          decisions made further upstream. The team monitors Android-specific ranking signals and measures the impact of every metadata and creative update.
        </>
      ),
    },
    {
      title: 'AI-Assisted Keyword and Copy Analysis',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          Machine learning tools surface keyword patterns and content gaps at a scale that manual analysis cannot match efficiently, an extension of the same techniques behind broader{' '}
          <Link
            to="/ai-app-development-services"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            AI app development services
          </Link>
          . The output adds precision to keyword architecture while every final strategic decision stays with the team.
        </>
      ),
    },
    {
      title: 'Product Page Testing & Experiments',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: (
        <>
          Both platforms offer native A/B testing for creative assets, the same experiments that matter most once you{' '}
          <Link
            to="/blog/publish-update-an-app-on-app-store-google-play"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            publish or update an app on the App Store and Google Play
          </Link>
          . Structured experiments with defined variables and measured outcomes replace gut-check creative decisions, with testing cadence built into every engagement from day one.
        </>
      ),
    },
    {
      title: 'A/B Testing and Focus Groups',
      icon: '/assets/mobile-app/ai-experiences.svg',
      desc: (
        <>
          Creative and metadata variations are tested against real user segments before going live. Focus groups add a qualitative layer to quantitative test data, so decisions reflect both behavioral patterns and genuine user perception.
        </>
      ),
    },
    {
      title: 'Paid Search Management',
      icon: '/assets/mobile-app/Real-Time-sync.svg',
      desc: (
        <>
          Paid search data informs organic strategy by revealing which keywords drive intent and convert under pressure, and weighing that spend against overall{' '}
          <Link
            to="/blog/mobile-app-marketing-cost"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            mobile app marketing cost
          </Link>{' '}
          is part of the same conversation. Those signals sharpen organic keyword targeting and reduce guesswork in metadata decisions throughout the engagement.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#1f1f1f] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            The Data Sources and Optimization Systems Behind{' '}
            <span className="text-[#00CE44]">Every ASO Engagement</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            ASO does not stop at the store page. The factors that influence an app&apos;s ranking and conversion reach into adjacent layers of the product and its marketing infrastructure.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

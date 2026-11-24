import { Link } from 'react-router-dom'

export default function PostLaunchServicesGrid() {
  const services = [
    {
      title: 'Post-Launch Performance Audits',
      desc: (
        <>
          Usage data, retention curves, funnel drop-offs, and error logs get measured against original KPIs before any iteration work begins. The audit directs effort toward problems that produce the most impact first, including opportunities for{' '}
          <Link
            to="/blog/mobile-app-performance-optimization"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            mobile app performance optimization
          </Link>
          .
        </>
      ),
      icon: '/assets/ios-app/serivces1.svg',
    },
    {
      title: 'User Behavior Analysis and Session Review',
      desc: (
        <>
          Aggregate numbers show where users leave. Behavioral analysis explains why. Heatmaps, session recordings, and cohort breakdowns surface friction points that drive{' '}
          <Link
            to="/ui-ux-design"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            UI/UX design
          </Link>{' '}
          decisions toward changing user behavior, not just rearranging the interface.
        </>
      ),
      icon: '/assets/ios-app/serivces2.svg',
    },
    {
      title: 'Conversion Rate Optimization',
      desc: (
        <>
          The gap between users who reach a key action and those who complete it always has a specific cause. Hypotheses built from behavioral data get tested, validated, and turned into targeted conversion improvements.
        </>
      ),
      icon: '/assets/ios-app/serivces3.svg',
    },
    {
      title: 'Feature Prioritization and Roadmap Adjustment',
      desc: (
        <>
          Pre-launch backlogs rarely survive contact with real user behavior. Post-launch analytics identify which planned features align with observed usage patterns and reorder the roadmap through{' '}
          <Link
            to="/product-strategy-consulting"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            product strategy consulting
          </Link>{' '}
          around evidence rather than assumptions.
        </>
      ),
      icon: '/assets/ios-app/serivces4.svg',
    },
    {
      title: 'A/B Testing and Experimentation Cycles',
      desc: (
        <>
          Structured tests isolate single variables, run against defined sample sizes, and measure outcomes against a clear baseline. Each cycle produces grounded decisions, and each result sharpens the hypothesis driving the next round.
        </>
      ),
      icon: '/assets/ios-app/serivces5.svg',
    },
    {
      title: 'Performance Monitoring and Stability Management',
      desc: (
        <>
          Speed regressions, API failures, and load issues compound quickly in live environments. Continuous monitoring and{' '}
          <Link
            to="/backend-api-development"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            backend API development
          </Link>{' '}
          detect degradation before users experience it, and established resolution protocols contain production incidents rather than escalating them.
        </>
      ),
      icon: '/assets/ios-app/serivces6.svg',
    },
    {
      title: 'Ongoing Retention and Engagement Strategy',
      desc: (
        <>
          Retaining a user costs far less than acquiring one. Post-launch retention work tracks onboarding completion rates, feature adoption depth, return-visit cadence, and{' '}
          <Link
            to="/blog/mobile-app-monetization-strategies"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            mobile app monetization strategies
          </Link>
          , and then systematically improves each indicator across every iteration cycle.
        </>
      ),
      icon: '/assets/ios-app/serivces6.svg',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Post-Launch Analytics and Iteration Services{' '}
            <span className="text-[#00CE44]">Built Around Your Product</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Because no two products land the same way, the services below respond to what your analytics reveal rather than a recycled template applied regardless of context.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 sm:p-9 rounded-[20px] bg-[#141414] hover:bg-[#1a1a1a] transition-all duration-200 border-0 shadow-none text-left flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain select-none p-0 bg-transparent border-0"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-white mb-4 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <div className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

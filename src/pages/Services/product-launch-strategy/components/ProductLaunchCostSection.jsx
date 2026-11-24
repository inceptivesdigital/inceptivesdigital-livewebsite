import { Link } from 'react-router-dom'

export default function ProductLaunchCostSection() {
  const tiers = [
    {
      name: 'Simple Launch',
      timeline: '4–6 weeks',
      price: '$10,000 – $25,000',
      desc: (
        <>
          Product launch strategy engagements typically range from $10,000 for focused{' '}
          <Link
            to="/mvp-development"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            MVP development
          </Link>{' '}
          launches to $100,000 and above for full-scale enterprise products requiring end-to-end strategy, execution, and post-launch growth support.
        </>
      ),
      features: [
        'Audience research and competitive positioning',
        'Core messaging and value proposition',
        'Targeted go-to-market rollout plan',
        'App store optimization baseline setup',
        'Initial traction metrics and KPI tracking',
      ],
    },
    {
      name: 'Growth Launch',
      timeline: '8–12 weeks',
      price: '$25,000 – $60,000',
      desc: (
        <>
          A comprehensive launch strategy for products with a defined audience and growth targets, covering deep market research, multi-channel campaign planning,{' '}
          <Link
            to="/blog/mobile-app-marketing-cost"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            mobile app marketing costs
          </Link>
          , app store optimization, and post-launch performance tracking. This engagement typically runs 8–12 weeks, including a post-launch tracking period.
        </>
      ),
      features: [
        'Multi-channel campaign architecture & assets',
        'Conversion-optimized App Store & Play Store presence',
        'Paid, organic, and influencer distribution mix',
        'Cohort retention frameworks & analytics dashboards',
        'Ongoing A/B testing and conversion optimization',
      ],
    },
    {
      name: 'Enterprise Launch',
      timeline: '4–6 months',
      price: '$60,000 – $100,000+',
      desc: (
        <>
          A full-scale launch engagement for enterprise-grade products entering competitive markets, covering end-to-end strategy, campaign architecture, cross-channel distribution, retention frameworks, and sustained post-launch growth optimization. This engagement typically runs 4–6 months, reflecting the depth of strategy work and the extended post-launch optimization phase.
        </>
      ),
      features: [
        'Global rollout across multiple regions & languages',
        'Custom enterprise analytics & attribution integration',
        'Dynamic personalization & automated user onboarding',
        'PR, analyst relations, and co-marketing campaigns',
        'Dedicated product growth squad and 6-month SLA',
      ],
    },
  ]

  return (
    <>
      {/* Pricing Tiers Section */}
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              What a Product Launch Strategy{' '}
              <span className="text-[#00CE44]">Engagement Costs</span>
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Product launch strategy engagements typically range from $10,000 for focused MVP launches to $100,000 and above for full-scale enterprise products requiring end-to-end strategy, execution, and post-launch growth support.
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 sm:p-9 rounded-[20px] bg-[#1a1a1a] text-left flex flex-col justify-start border-0 shadow-none"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white pb-4 mb-4 border-b border-white/20">
                  {tier.name}
                </h3>

                <div className="pb-4 mb-4 border-b border-white/20">
                  <div className="text-xs sm:text-sm font-medium text-white/70 mb-1">
                    Timeline: {tier.timeline}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#00CE44] tracking-tight">
                    {tier.price}
                  </div>
                </div>

                <div className="pb-5 mb-5 border-b border-white/20">
                  <p className="text-xs sm:text-[13.5px] font-normal text-white/90 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 text-white/90 text-xs sm:text-[13.5px] leading-relaxed">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Full-Width Section */}
      <section
        className="w-full relative overflow-hidden py-14 sm:py-16 lg:py-20"
        style={{
          backgroundImage: `url("/assets/post-launch-analytics/ctabg.png")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                Consult Us and Get an End-to-End Product Launch Strategy That Delivers Value
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
                Consult the team and get a launch strategy built around the product, the market, and the outcomes that matter most from day one.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                >
                  Consult the Team
                </a>
              </div>
            </div>

            {/* Right Graphic / Phone Mockup Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end">
              <img
                src="/assets/post-launch-analytics/cta-mobile.png"
                alt="Product Launch Strategy Consultation"
                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] h-auto object-contain block select-none -mb-14 sm:-mb-16 lg:-mb-20"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

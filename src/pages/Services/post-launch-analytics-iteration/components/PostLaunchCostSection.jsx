import { Link } from 'react-router-dom'

export default function PostLaunchCostSection() {
  const tiers = [
    {
      name: 'Stabilize',
      price: '$2,000 to $4,000',
      period: '/ month',
      desc: 'Performance monitoring, error tracking, and monthly behavioral analysis for a single platform during the critical early retention window.',
      features: [
        'Performance monitoring & error tracking',
        'Monthly behavioral funnel analysis',
        'Single platform coverage (iOS, Android, or Web)',
        'Early churn and friction identification',
        'Monthly roadmap review call',
      ],
    },
    {
      name: 'Iterate',
      price: '$4,000 to $8,000',
      period: '/ month',
      desc: 'Full behavioral analysis, conversion optimization, and structured A/B testing across both platforms with bi-weekly reporting and roadmap recalibration.',
      features: [
        'Multi-platform behavioral analysis (iOS + Android)',
        'Continuous conversion rate optimization',
        'Structured A/B testing & experimentation cycles',
        'Bi-weekly data reporting & hypothesis updates',
        'Sprint backlog reprioritization',
      ],
    },
    {
      name: 'Accelerate',
      price: '$8,000 to $15,000+',
      period: '/ month',
      desc: 'Multi-platform iteration with full development cycles, continuous experimentation, attribution analysis, and weekly reporting tied to defined revenue targets.',
      features: [
        'Dedicated development & engineering capacity',
        'Multi-platform rapid iteration cycles',
        'Attribution modeling & revenue telemetry',
        'Weekly executive performance reports',
        'SLA-backed resolution protocols',
      ],
    },
  ]

  return (
    <>
      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Does a Post-Launch Analytics and{' '}
              <span className="text-[#00CE44]">Iteration Engagement Cost?</span>
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Engagement pricing ranges from $2,000 per month for focused monitoring and behavior analysis to $15,000 and above, depending on product complexity, the number of platforms covered, and whether full development cycles are part of the scope.
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
                  <div className="text-xl sm:text-2xl font-bold text-[#00CE44] tracking-tight">
                    {tier.price}{' '}
                    <span className="text-sm sm:text-base font-normal text-white/70">
                      {tier.period}
                    </span>
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
      <section className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-0 bg-[#202020]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Content Column */}
            <div className="lg:col-span-7 py-10 sm:py-14 lg:py-16 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                Your Launch Data Is Already Telling You What to Fix Next
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
                Every week without a structured iteration process is a week of behavioral signals that drive no decisions. Act on the data.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                >
                  Book a Free Post-Launch Analytics Consultation
                </a>
              </div>
            </div>

            {/* Right Graphic / Phone Mockup Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-0">
              <img
                src="/assets/post-launch-analytics/CTA-22-1.png"
                alt="Post-Launch Consultation"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain object-bottom block select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import React from 'react'

const tiers = [
  {
    badge: 'Foundation',
    title: 'Foundation App',
    subtitle:
      'Ideal for startups and brokerages launching a focused property search app or MVP with essential functionality and straightforward backend requirements.',
    cost: '$25,000 to $60,000',
    timeline: '8 to 14 weeks',
    includes: [
      'Property listings and search',
      'Customer and agent profiles',
      'Viewing appointments',
      'Inquiry management',
      'Basic admin dashboard',
    ],
  },
  {
    badge: 'Advanced',
    title: 'Advanced Real Estate Platform',
    subtitle:
      'Built for growing brokerages and PropTech businesses requiring advanced listing capabilities and integrations with existing real estate systems.',
    cost: '$60,000 to $140,000',
    timeline: '14 to 24 weeks',
    includes: [
      'Advanced property discovery',
      'CRM integration',
      'Agent management workflows',
      'Authorized MLS/IDX connectivity',
      'Digital documentation features',
      'Extended admin reporting',
    ],
  },
  {
    badge: 'Enterprise',
    title: 'Enterprise Real Estate Platform',
    subtitle:
      'Designed for established real estate businesses requiring custom platform architecture, with advanced analytics, automation, and connected infrastructure.',
    cost: '$140,000 to $250,000+',
    timeline: '32+ weeks',
    includes: [
      'Multi-role platform architecture',
      'Enterprise data integrations',
      'AI-powered valuation capabilities',
      'Investment analytics',
      'Specialized property visualization',
      'Scalable infrastructure',
    ],
  },
]

export default function RealEstateCostSection() {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate App Development Costs{' '}
            <span className="text-[#00CE44]">by Project Scope</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Plan your real estate app development investment around the product you intend to launch. Our estimates reflect the application&apos;s functional scope and the engineering effort required for its integrations.
          </p>
        </div>

        {/* 3 Equal Cost Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[16px] p-7 sm:p-8 flex flex-col justify-between border border-white/10 text-left"
            >
              <div>
                <span className="text-[#00CE44] text-xs font-semibold uppercase tracking-widest block mb-2">
                  {tier.badge}
                </span>
                <h3 className="text-[#00CE44] text-[22px] md:text-[24px] font-bold leading-snug mb-3">
                  {tier.title}
                </h3>
                <p className="text-white/85 text-[15px] leading-[1.6] font-normal">
                  {tier.subtitle}
                </p>

                <hr className="my-5 border-white/15" />

                <div className="space-y-2 text-[15px] md:text-[16px]">
                  <p className="text-white font-bold">
                    Estimated Cost: <span className="font-bold text-[#00CE44]">{tier.cost}</span>
                  </p>
                  <p className="text-white font-bold">
                    Timeline: <span className="font-bold">{tier.timeline}</span>
                  </p>
                </div>

                <hr className="my-5 border-white/15" />

                <p className="text-white font-semibold text-[15px] mb-3">
                  Includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/90 text-[14px] md:text-[15px] leading-[1.55]">
                  {tier.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] px-6 py-3.5 rounded-none transition-colors duration-200"
                >
                  Request Custom Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

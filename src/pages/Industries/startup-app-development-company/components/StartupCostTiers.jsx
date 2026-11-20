import React from 'react'

const tiers = [
  {
    badge: 'Foundation',
    name: 'Foundation App',
    description:
      'For startups and businesses launching a focused ecommerce application with essential shopping and order management capabilities.',
    cost: '$25,000 to $60,000',
    timeline: '8 to 14 weeks',
    includes: [
      'Product catalog and search',
      'Shopping cart and secure checkout',
      'Payment gateway integration',
      'Push notifications',
      'Admin dashboard',
    ],
    footer:
      'A streamlined ecommerce platform built to validate your business model before investing in larger marketplace functionality.',
  },
  {
    badge: 'Advanced',
    name: 'Advanced Ecommerce Platform',
    description:
      'For growing ecommerce businesses expanding into feature-rich shopping experiences and marketplace functionality.',
    cost: '$60,000 to $120,000',
    timeline: '14 to 24 weeks',
    includes: [
      'Multi-vendor marketplace',
      'AI-powered product recommendations',
      'Real-time customer chat',
      'Loyalty and rewards programs',
      'Content management system',
    ],
    footer:
      'Where customer engagement, marketplace operations, and business growth come together in one production-ready platform.',
  },
  {
    badge: 'Enterprise',
    name: 'Enterprise Ecommerce Platform',
    description:
      'For enterprises building large-scale ecommerce ecosystems with complex integrations and high-volume operations.',
    cost: '$120,000+',
    timeline: '20 to 32 weeks',
    includes: [
      'Scalable microservices architecture',
      'ERP and CRM integrations',
      'Advanced analytics dashboards',
      'AI and machine learning capabilities',
      'Enterprise-grade infrastructure',
    ],
    footer:
      'Built for ecommerce organizations where scalability, operational efficiency, and intelligent automation are the baseline requirements.',
  },
]

export default function StartupCostTiers() {
  return (
    <section
      className="w-full text-white py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top, rgba(0, 206, 68, 0.2) 0%, #050a06 55%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            <span className="text-[#00CE44]">Startup App Development</span> Cost Estimates
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every ecommerce platform has different marketplace requirements, integration complexity, and feature depth. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-[#1b1c21]/95 rounded-[22px] p-7 sm:p-9 flex flex-col justify-between text-left"
            >
              <div>
                <span className="inline-block text-[#00CE44] text-xs font-bold uppercase tracking-widest mb-2">
                  {tier.badge}
                </span>
                <h3 className="text-[#00CE44] text-[24px] sm:text-[26px] font-bold leading-snug mb-3 pb-4 border-b border-white/10">
                  {tier.name}
                </h3>

                <p className="text-white/85 text-[14px] sm:text-[15px] leading-[1.65] font-normal mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mb-6 text-[15px] text-white">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>
                      <strong className="font-bold">Estimated Cost:</strong>{' '}
                      <span className="text-white/90">{tier.cost}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>
                      <strong className="font-bold">Timeline:</strong>{' '}
                      <span className="text-white/90">{tier.timeline}</span>
                    </span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-white font-bold text-[15px] mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2.5 text-white/85 text-[14px] sm:text-[15px] mb-5">
                    {tier.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/70 text-[13px] sm:text-[14px] leading-relaxed italic">
                    {tier.footer}
                  </p>
                </div>
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

import React from 'react'
import {
  BrainCircuit,
  Blocks,
  Cpu,
  BarChart3,
  Cloud,
  View,
  Orbit,
} from 'lucide-react'

const advancedFeatures = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Personalisation',
    description:
      'Personalised product recommendations, dynamic pricing, predictive analytics, and behaviour-based marketing built on machine learning models. Algorithms that analyse purchase history and browsing behaviour to increase conversion rates, average order value, and customer lifetime value.',
  },
  {
    icon: Blocks,
    title: 'Blockchain for Secure Commerce',
    description:
      'Transparent transactions, decentralised order tracking, and automated vendor settlements through smart contracts. Data integrity, fraud prevention, and trust are built into multi-vendor platforms where financial accountability across multiple parties is non-negotiable.',
  },
  {
    icon: Cpu,
    title: 'IoT for Smart Retail',
    description:
      'IoT devices connected for inventory tracking, shipment monitoring, and physical-to-digital store integration. Supply chain visibility, automated stock replenishment, and operational efficiency are built for retailers managing both online and physical commerce simultaneously.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence and Analytics',
    description:
      'Real-time sales dashboards, customer behaviour analysis, and inventory performance reporting built for retailers making data-driven merchandising and marketing decisions. Insights that turn raw commerce data into actionable growth strategies.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Architecture',
    description:
      'AWS, Azure, and Google Cloud infrastructure with auto-scaling capabilities built for peak traffic events, product launches, seasonal sales, and promotional campaigns, without performance degradation or downtime.',
  },
  {
    icon: View,
    title: 'Augmented Reality Shopping',
    description:
      'Product visualisation in real environments is built for categories where seeing the product in context reduces return rates and increases purchase confidence. AR experiences that close the gap between online browsing and in-store conviction.',
  },
  {
    icon: Orbit,
    title: 'Metaverse-Ready Commerce',
    description:
      'Virtual showrooms, 3D product interactions, and immersive shopping experiences built for brands preparing for the next generation of digital commerce. Built for businesses that want to establish a presence before the market matures.',
  },
]

function CornerStar({ positionClass }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`hidden lg:block pointer-events-none absolute ${positionClass} w-5 h-5 text-white/75 z-10`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
    </svg>
  )
}

export default function EcommerceAdvancedFeatures() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Revolutionizing Online Retail with{' '}
            <span className="text-[#00CE44]">Advanced Features in Ecommerce App Development</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our ecommerce app development services use modern technologies to create robust applications with multiple features that increase conversion rates and improve user satisfaction while making online business operations more efficient.
          </p>
        </div>

        {/* First 6 Items in 3x2 Bordered Grid with Corner Concave Stars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/15">
          {advancedFeatures.slice(0, 6).map((item, idx) => {
            const Icon = item.icon
            const isTopRow = idx < 3
            const isNotRightCol = idx % 3 !== 2
            return (
              <div
                key={item.title}
                className={`relative p-7 sm:p-9 text-left border-b border-white/15 ${
                  isNotRightCol ? 'lg:border-r lg:border-white/15' : ''
                }`}
              >
                {isTopRow && idx === 0 && (
                  <CornerStar positionClass="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                )}
                {isTopRow && idx === 1 && (
                  <CornerStar positionClass="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                )}

                <Icon
                  className="w-9 h-9 text-[#00CE44] mb-5"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.68] font-normal">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* 7th Featured Item (Metaverse-Ready Commerce) */}
        {(() => {
          const last = advancedFeatures[6]
          const LastIcon = last.icon
          return (
            <div className="border-b border-white/15 p-7 sm:p-9 text-left flex flex-col md:flex-row md:items-start gap-6">
              <LastIcon
                className="w-10 h-10 text-[#00CE44] shrink-0"
                strokeWidth={1.8}
              />
              <div>
                <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-2.5">
                  {last.title}
                </h3>
                <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.68] font-normal max-w-4xl">
                  {last.description}
                </p>
              </div>
            </div>
          )
        })()}
      </div>
    </section>
  )
}

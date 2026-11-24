import React from 'react'
import { Link } from 'react-router-dom'
import {
  BrainCircuit,
  Blocks,
  Cpu,
  BarChart3,
  Cloud,
  View,
} from 'lucide-react'

const advancedFeatures = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Shopping Personalization',
    description: (
      <>
        Our{' '}
        <Link
          to="/ai-app-development-services"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI app development services
        </Link>{' '}
        include recommendation engines that analyze customer behavior to deliver relevant product suggestions, improve product discovery, and create more personalized shopping experiences.
      </>
    ),
  },
  {
    icon: Blocks,
    title: 'Blockchain for Commerce Transactions',
    description: (
      <>
        For marketplaces requiring decentralized transaction records, we provide{' '}
        <Link
          to="/blockchain-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          blockchain development
        </Link>{' '}
        with smart contracts to support transparent settlements and verifiable transaction histories.
      </>
    ),
  },
  {
    icon: Cpu,
    title: 'IoT-Enabled Retail Operations',
    description:
      'Connected IoT systems provide retailers with real-time inventory visibility and automated stock updates across warehouses and physical stores.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence and Analytics',
    description:
      'We integrate analytics solutions that turn sales activity and customer behavior into actionable insights for inventory planning and merchandising decisions.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Infrastructure',
    description:
      'Our cloud engineers design infrastructure with automated scaling and performance monitoring to support seasonal traffic spikes and growing transaction volumes.',
  },
  {
    icon: View,
    title: 'Augmented Reality Shopping Experiences',
    description:
      'AR shopping features allow customers to visualize products in their surroundings before purchasing, particularly for furniture and home décor applications.',
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
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Revolutionizing Online Retail with{' '}
            <span className="text-[#00CE44]">Advanced Technologies</span> in Our Ecommerce App Development Services
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our ecommerce app development services use modern technologies to create robust applications with multiple features that improve user satisfaction and increase conversion rates for businesses.
          </p>
        </div>

        {/* 6 Items in 3x2 Bordered Grid with Corner Concave Stars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/15">
          {advancedFeatures.map((item, idx) => {
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
      </div>
    </section>
  )
}

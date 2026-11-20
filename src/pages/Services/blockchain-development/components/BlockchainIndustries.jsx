import React from 'react'
import { BlockchainSolidIcon } from './BlockchainSolidIcons'

const row1 = [
  { title: 'Healthcare Blockchain Solutions', icon: 'healthcare' },
  { title: 'Fitness Blockchain Solutions', icon: 'fitness' },
  { title: 'e-Learning Blockchain Solutions', icon: 'elearning' },
]

const row2 = [
  { title: 'Real Estate Blockchain Solutions', icon: 'realestate' },
  { title: 'Automotive Blockchain Solutions', icon: 'automotive' },
  { title: 'Travel Blockchain Solutions', icon: 'travel' },
  { title: 'Fintech Blockchain Solutions', icon: 'fintech' },
]

const row3 = [
  { title: 'Gaming Blockchain Solutions', icon: 'gaming' },
  { title: 'e-Commerce Blockchain Solutions', icon: 'ecommerce' },
]

function IndustryCard({ item }) {
  return (
    <div className="w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] xl:w-[172px] xl:h-[172px] bg-[#0D0D0D]/95 border border-[#00CE44] rounded-[12px] px-3.5 py-4 flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-1 shrink-0">
      <BlockchainSolidIcon
        name={item.icon}
        className="w-11 h-11 text-[#00CE44] mb-3.5"
      />
      <h3 className="text-white font-semibold text-[12px] sm:text-[13px] leading-snug">
        {item.title}
      </h3>
    </div>
  )
}

export default function BlockchainIndustries() {
  return (
    <section
      className="relative w-full bg-black text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/assets/blockchain-v2/sec7-bg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Heading (Top-Aligned exactly like reference) */}
          <div className="lg:col-span-5 text-left lg:pt-4">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.16] text-white max-w-[520px]">
              Cross-Industry Custom Blockchain Solutions We Offer
            </h2>
          </div>

          {/* Right Centered Staggered 3-Row Cluster (3 -> 4 -> 2, all equal square cards) */}
          <div className="lg:col-span-7 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {row1.map((item) => (
                <IndustryCard key={item.title} item={item} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {row2.map((item) => (
                <IndustryCard key={item.title} item={item} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {row3.map((item) => (
                <IndustryCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

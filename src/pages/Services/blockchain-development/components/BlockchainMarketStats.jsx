import React from 'react'

const statsBullets = [
  'Supposedly, the blockchain market is going to be a whopping $94 billion in 2027.',
  'It is predicted that between now and 2025, about 65% of enterprises will be embracing blockchain for at least some of the processes in their supply chains, payments, or security.',
  'Reportedly, it is claimed that companies using blockchain witness a 30% decline in terms of fraud and data breach incidents due to the non-tamperable nature of that technology.',
  'Cross-border payments made through blockchain settle 80% faster than traditional banks.',
  'Such businesses can also reduce operational costs, especially in finance and logistics, by as much as 50% through the implementation of the technology.',
]

export default function BlockchainMarketStats() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Heading + 5 Bullets */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white mb-7">
              Why Businesses Are Turning to Blockchain in 2026
            </h2>

            <ul className="space-y-4">
              {statsBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/90 text-[15px] sm:text-[16px] leading-[1.7] font-normal"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Market Size Bar Chart */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src="/assets/blockchain-v2/bar-chart.webp"
              alt="Blockchain Market Size Chart"
              className="w-full max-w-[680px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

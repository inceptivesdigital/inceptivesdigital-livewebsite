import React from 'react'

const tiers = [
  {
    title: 'Simple App',
    useCases: 'Crypto wallet, basic token, simple smart contracts',
    drivers: 'Limited features, single blockchain, small team',
    timeframe: '3 – 6 months',
    cost: '$40,000 – $60,000',
  },
  {
    title: 'Moderately Complex App',
    useCases: 'Decentralized marketplace, supply chain tracking, NFT platform',
    drivers: 'More integrations, custom smart contracts, mid-sized team',
    timeframe: '6 – 8 months',
    cost: '$60,000 – $150,000',
  },
  {
    title: 'Highly Complex App',
    useCases: 'Enterprise-grade DeFi platform, multi-chain DApps, complex exchanges',
    drivers: 'Advanced features, cross-chain support, large dev team, security audits',
    timeframe: '9 – 12+ months',
    cost: '$150,000 – $300,000+',
  },
]

export default function BlockchainCostSection() {
  return (
    <>
      {/* Cost Breakdown Cards */}
      <section className="w-full bg-black text-white py-16 md:py-24">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white mb-4">
              Blockchain App Development Cost Breakdown
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
              Before planning, it is very important to understand the blockchain app development cost as the cost and timeframe vary based on the app’s features, complexity, and size requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className="bg-[#2C2C2C] rounded-[28px] p-8 sm:p-10 text-left flex flex-col justify-between border border-white/10"
              >
                <div>
                  <h3 className="text-white text-[24px] sm:text-[28px] font-bold leading-snug pb-5 mb-6 border-b border-white/15">
                    {tier.title}
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[#00CE44] text-[15px] sm:text-[16px] font-semibold mb-1">
                        Example Use Cases
                      </h4>
                      <p className="text-[#D5D5D5] text-[14px] sm:text-[15px] leading-relaxed">
                        {tier.useCases}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#00CE44] text-[15px] sm:text-[16px] font-semibold mb-1">
                        Key Cost Drivers
                      </h4>
                      <p className="text-[#D5D5D5] text-[14px] sm:text-[15px] leading-relaxed">
                        {tier.drivers}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#00CE44] text-[15px] sm:text-[16px] font-semibold mb-1">
                        Time Frame
                      </h4>
                      <p className="text-[#D5D5D5] text-[14px] sm:text-[15px] leading-relaxed">
                        {tier.timeframe}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#00CE44] text-[15px] sm:text-[16px] font-semibold mb-1">
                        Estimated Cost
                      </h4>
                      <p className="text-white text-[18px] sm:text-[20px] font-bold">
                        {tier.cost}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Effort Donut Chart */}
      <section className="w-full bg-[#121212] py-14 md:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex justify-center">
          <img
            src="/assets/blockchain-v2/donut-chart.webp"
            alt="Blockchain Development Effort Distribution Chart"
            className="w-full max-w-[920px] h-auto object-contain select-none"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}

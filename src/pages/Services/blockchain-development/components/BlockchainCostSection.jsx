export default function BlockchainCostSection() {
  const tiers = [
    {
      name: 'Simple Blockchain App',
      typeLabel: 'Blockchain App Type',
      cost: '$40,000 – $60,000',
      timeframe: '3 – 6 months',
      useCases: 'Crypto wallet, basic token, simple smart contracts',
      drivers: 'Limited features, single blockchain, small team',
    },
    {
      name: 'Moderately Complex App',
      typeLabel: 'Blockchain App Type',
      cost: '$60,000 – $150,000',
      timeframe: '6 – 8 months',
      useCases: 'Decentralized marketplace, supply chain tracking, NFT platform',
      drivers: 'More integrations, custom smart contracts, mid-sized team',
    },
    {
      name: 'Highly Complex App',
      typeLabel: 'Blockchain App Type',
      cost: '$150,000 – $300,000+',
      timeframe: '9 – 12+ months',
      useCases: 'Advanced features, cross-chain support, large dev team, security audits',
      drivers: 'Advanced features, cross-chain support, large dev team, security audits',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Blockchain App Development</span>{' '}
            Cost Breakdown Estimates
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            <a
              href="https://inceptivesdigital.com/blog/blockchain-app-development-cost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              Blockchain app development cost
            </a>{' '}
            depends on product complexity, blockchain networks, smart contract requirements, integrations, security needs, and customization. The estimates below provide a starting point based on different product scopes.
          </p>
        </div>

        {/* 3 Equal Flat Dark Gray Lined Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="p-8 sm:p-9 rounded-[20px] bg-[#242424] text-left flex flex-col justify-start border-0 shadow-none"
            >
              {/* 1. Heading */}
              <div className="pb-5 mb-5 border-b border-white/25">
                <span className="text-xs font-medium uppercase tracking-wider text-white/60 block mb-1.5">
                  {tier.typeLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {tier.name}
                </h3>
              </div>

              {/* 2. Estimated Cost */}
              <div className="pb-5 mb-5 border-b border-white/25">
                <span className="text-xs font-medium text-white/60 block mb-1">
                  Estimated Cost
                </span>
                <div className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#00CE44] tracking-tight">
                  {tier.cost}
                </div>
              </div>

              {/* 3. Time Frame */}
              <div className="pb-5 mb-5 border-b border-white/25">
                <span className="text-xs font-medium text-white/60 block mb-1">
                  Time Frame
                </span>
                <div className="text-base sm:text-lg font-bold text-white">
                  {tier.timeframe}
                </div>
              </div>

              {/* 4. Example Use Cases & Key Cost Drivers */}
              <div className="space-y-4 text-white/90 text-xs sm:text-sm leading-relaxed">
                <div>
                  <h4 className="font-bold text-white mb-1">Example Use Cases</h4>
                  <p className="text-white/80">{tier.useCases}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Key Cost Drivers</h4>
                  <p className="text-white/80">{tier.drivers}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

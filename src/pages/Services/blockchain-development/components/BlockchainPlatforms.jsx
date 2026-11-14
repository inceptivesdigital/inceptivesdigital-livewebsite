export default function BlockchainPlatforms() {
  const platforms = [
    { name: 'Ethereum', icon: '/assets/blockchain/blockchain-sec9-icon1.png' },
    { name: 'Avalanche', icon: '/assets/blockchain/blockchain-sec9-icon2.png' },
    { name: 'Polkadot', icon: '/assets/blockchain/blockchain-sec9-icon3.png' },
    { name: 'Polygon', icon: '/assets/blockchain/blockchain-sec9-icon4.png' },
    { name: 'Hyperledger', icon: '/assets/blockchain/blockchain-sec9-icon5.png' },
    { name: 'Corda', icon: '/assets/blockchain/blockchain-sec9-icon6.png' },
    { name: 'Stellar', icon: '/assets/blockchain/blockchain-sec9-icon7.png' },
    { name: 'Cosmos', icon: '/assets/blockchain/blockchain-sec9-icon8.png' },
    { name: 'Solana', icon: '/assets/blockchain/blockchain-sec9-icon9.png' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading + Subtitle */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              Diverse{' '}
              <span className="text-[#00CE44]">Blockchain Development Platforms</span>{' '}
              We Support
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal">
              Successful blockchain products require more than choosing a network. Understanding the different{' '}
              <a
                href="https://inceptivesdigital.com/blog/types-of-blockchain"
                className="underline text-[#00CE44] hover:text-white transition-colors"
              >
                types of blockchain
              </a>{' '}
              helps us design architectures around the product model, user experience, and business objectives, creating secure and scalable solutions across decentralized ecosystems.
            </p>
          </div>

          {/* Right Column: 9 Platform Cards (3x3 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-[14px] bg-[#1e1e1e] border border-white/10 hover:border-[#00CE44] transition-all flex flex-col items-center justify-center text-center"
              >
                <img
                  src={p.icon}
                  alt={p.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-3 select-none"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {p.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

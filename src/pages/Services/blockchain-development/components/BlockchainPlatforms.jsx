import React from 'react'

const platforms = [
  { name: 'Ethereum', img: '/assets/blockchain-v2/sec9-icon1.webp' },
  { name: 'Avalanche', img: '/assets/blockchain-v2/sec9-icon2.webp' },
  { name: 'Polkadot', img: '/assets/blockchain-v2/sec9-icon3.webp' },
  { name: 'Polygon', img: '/assets/blockchain-v2/sec9-icon4.webp' },
  { name: 'Hyperledger', img: '/assets/blockchain-v2/sec9-icon5.webp' },
  { name: 'Corda', img: '/assets/blockchain-v2/sec9-icon6.webp' },
  { name: 'Stellar', img: '/assets/blockchain-v2/sec9-icon7.webp' },
  { name: 'Cosmos', img: '/assets/blockchain-v2/sec9-icon8.webp' },
  { name: 'Solana', img: '/assets/blockchain-v2/sec9-icon9.webp' },
]

export default function BlockchainPlatforms() {
  return (
    <section className="w-full bg-[#202020] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[920px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Diverse Blockchain Development Platforms We Support
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            As a leading blockchain development company in the USA, we use a wide range of blockchain networks to deliver custom blockchain solutions.
          </p>
        </div>

        {/* 9 Platform Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9 gap-4">
          {platforms.map((plat) => (
            <div
              key={plat.name}
              className="bg-[#0D0D0D] border border-white/10 hover:border-[#00CE44] rounded-[20px] px-4 py-7 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1"
            >
              <img
                src={plat.img}
                alt={plat.name}
                className="w-12 h-12 object-contain mb-4 select-none"
                loading="lazy"
              />
              <span className="text-white font-semibold text-[14px] sm:text-[15px]">
                {plat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

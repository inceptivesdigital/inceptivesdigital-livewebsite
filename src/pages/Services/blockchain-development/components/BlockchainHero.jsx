import React from 'react'

const reviews = [
  {
    name: 'Clutch',
    href: 'https://clutch.co/profile/inceptives-digital',
    img: '/assets/blockchain-v2/review1.webp',
  },
  {
    name: 'GoodFirms',
    href: 'https://www.goodfirms.co/company/inceptives-digital/',
    img: '/assets/blockchain-v2/review4.webp',
  },
  {
    name: 'Bark',
    href: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
    img: '/assets/blockchain-v2/review2.webp',
  },
  {
    name: 'Trustpilot',
    href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    img: '/assets/blockchain-v2/review3.webp',
  },
]

export default function BlockchainHero() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative w-full flex flex-col justify-start bg-black text-white overflow-hidden pt-32 pb-44 sm:pt-40 sm:pb-56 lg:pt-44 lg:pb-64 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/blockchain-v2/banner-bg.webp')",
        }}
      >
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-[980px] mx-auto text-center flex flex-col items-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.12] tracking-tight text-white mb-6">
              Blockchain Development Services
            </h1>

            <p className="text-white/90 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.7] font-normal max-w-[880px] mb-10">
              Our industry-leading blockchain development services are supported by 150+ experienced developers and 8+ years of industry experience. As a prominent blockchain development company, we provide secure, scalable, and custom solutions, including smart contracts, DeFi, DApps, NFT platforms, decentralized applications &amp; enterprise-level integrations, that will ultimately enable trust, transparency, and growth in the digital economy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] sm:text-[16px] px-9 py-4 rounded-none transition-colors duration-200"
            >
              Get A Call Now!
            </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review & Ratings Trust Bar */}
      <section className="w-full bg-[#202020] py-7 sm:py-9 border-y border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            {reviews.map((rev) => (
              <a
                key={rev.name}
                href={rev.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={rev.img}
                  alt={rev.name}
                  className="h-11 sm:h-13 md:h-14 w-auto object-contain select-none"
                  loading="eager"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

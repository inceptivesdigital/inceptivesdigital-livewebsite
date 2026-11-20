import React from 'react'
import { Link } from 'react-router-dom'

const techLogos = [
  { name: 'Quorum', img: '/assets/blockchain-v2/sec8-icon1.webp' },
  { name: 'Hyperledger', img: '/assets/blockchain-v2/sec8-icon2.webp' },
  { name: 'Ripple', img: '/assets/blockchain-v2/sec8-icon3.webp' },
  { name: 'Ethereum', img: '/assets/blockchain-v2/sec8-icon4.webp' },
  { name: 'Bitcoin', img: '/assets/blockchain-v2/sec8-icon5.webp' },
  { name: 'Neblio', img: '/assets/blockchain-v2/sec8-icon6.webp' },
  { name: 'Cardano', img: '/assets/blockchain-v2/sec8-icon7.webp' },
]

export default function BlockchainTechStack() {
  return (
    <section className="w-full bg-[#121212] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white mb-5">
            Tech Stack We Use in Our Blockchain App Development Services
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.7] font-normal">
            Our blockchain development services are powered by a diverse and advanced tech stack. As a promising{' '}
            <Link
              to="/mobile-app-development"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              mobile app development company,
            </Link>{' '}
            we deliver fast, transparent, and sustainable blockchain solutions that meet your specific business requirements.
          </p>
        </div>

        {/* 7-Logo Single Horizontal Row on Desktop */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-6">
          {techLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center transition-transform duration-200 hover:scale-105 shrink-0"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-8 sm:h-9 lg:h-9 xl:h-10 max-w-[130px] xl:max-w-[155px] w-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

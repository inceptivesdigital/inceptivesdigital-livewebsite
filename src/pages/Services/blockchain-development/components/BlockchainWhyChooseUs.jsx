import React from 'react'
import { Link } from 'react-router-dom'

const counters = [
  {
    img: '/assets/blockchain-v2/stat1.webp',
    value: '70+',
    label: 'Apps Launched',
  },
  {
    img: '/assets/blockchain-v2/stat2.webp',
    value: '150+',
    label: 'Active Developers',
  },
  {
    img: '/assets/blockchain-v2/stat3.webp',
    value: '3M+',
    label: 'App Downloads',
  },
  {
    img: '/assets/blockchain-v2/stat4.webp',
    value: '5.0',
    label: 'Rating On Clutch',
  },
]

export default function BlockchainWhyChooseUs() {
  return (
    <>
      {/* Why Consider Section */}
      <section className="w-full bg-black text-white py-16 md:py-24">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-[980px] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.18] text-white mb-6">
              Why Consider Inceptives Digital as Your Blockchain Development Services Company
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.75] font-normal">
              Inceptives Digital is a trusted{' '}
              <Link
                to="/blockchain-development"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                blockchain development company
              </Link>{' '}
              with 8+ years of experience and the support of 150+ experienced blockchain developers. We have the potential to support you in any project, regardless of size and complexity. Be it{' '}
              <Link
                to="/custom-software-development"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                custom software development
              </Link>
              , a decentralized application, a smart contract, an NFT platform, or any type of solution. We follow a result-oriented development process and international standards, while collaborating with you on every phase. We make sure the solution is efficient, secure, and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Column Stats Bar */}
      <section className="w-full bg-[#202020] py-12 md:py-14 border-y border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
            {counters.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-11 h-11 object-contain mb-3 select-none"
                  loading="lazy"
                />
                <h3 className="text-[#00CE44] text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-none mb-2">
                  {item.value}
                </h3>
                <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

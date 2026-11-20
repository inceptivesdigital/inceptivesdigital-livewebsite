import React from 'react'
import { BlockchainSolidIcon } from './BlockchainSolidIcons'

export default function BlockchainValueSection() {
  return (
    <section
      className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-32 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/blockchain-v2/sec3-bg.webp')",
        backgroundSize: '100% 100%',
      }}
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start text-left max-w-[660px]">
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold leading-[1.18] tracking-tight text-white mb-6">
              Inceptives Digital as a Blockchain Development Company
            </h2>

            <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.7] font-normal mb-9">
              As a blockchain development company, we have a proven track record of helping businesses in decentralization to achieve resilience and competitive advantage. Being a leading blockchain software development company, we provide technically precise and impactful solutions. With this approach, we have helped several organizations across 20+ industries in scaling and securing their businesses.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] sm:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
              >
                Get A Call Now!
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white font-semibold text-[15px] sm:text-[16px] px-8 py-4 rounded-none border border-white/25 transition-colors duration-200"
              >
                <BlockchainSolidIcon name="calendar" className="w-5 h-5 text-white" />
                <span>Schedule A Call</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { BlockchainSolidIcon } from './BlockchainSolidIcons'

const services = [
  {
    id: 'blockchain-app',
    title: 'Blockchain App Development Services',
    icon: '/assets/blockchain-v2/sec4-icon1.webp',
    description:
      'Our expertise is in developing customized blockchain-based applications that align with your business goals. Our blockchain app development services make sure that applications are responsive, user-friendly, and ready to handle heavy traffic, regardless of what you want from a app or an enterprise-level system.',
    bullets: [
      'End-to-end blockchain application development.',
      'Expertise in apps, enterprise apps, and ecosystem solutions.',
      'Secure, scalable, and customized to business requirements.',
      'Smooth integration with current systems and platforms.',
    ],
  },
  {
    id: 'nft-dev',
    title: 'NFT Development',
    icon: '/assets/blockchain-v2/sec4-icon2.webp',
    description:
      'With our NFT development services, you can take advantage of the new digital ownership model. Our NFT development company builds expendable and feature-rich solutions for various fields, including art, gaming, real estate, and collectables. We incorporate ERC-721 and ERC-1155 token standards with IPFS-based decentralized storage to ensure that your digital assets are clear, interoperable, and retain value for a longer term.',
    bullets: [
      'Custom NFT Design & Tokenization (ERC-721/1155)',
      'Secure Smart Contracts & Decentralized Storage',
      'Cross-Chain & Multi-Chain NFT Solutions',
      'Integration with Wallets & Marketplaces',
      'Royalty, Rewards, and Fractional Ownership Features',
    ],
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace Development',
    icon: '/assets/blockchain-v2/sec4-icon3.webp',
    description:
      'Our NFT marketplace development company follows the best NFT token standards (ERC-721 and ERC-1155) with decentralized storage in combination with IPFS protocols and smart contracts. Partner with us to build a custom NFT marketplace with on-chain smart contracts for transparency, and off-chain features for scalability and user experience.',
    bullets: [
      'Lazy Minting, Intriguing Storefront, and Efficient NFT Listings',
      'Cross-chain and Multi-chain Compatibility',
      'Advanced Search Options and Intricate Filters',
      'In-built Wallets, KYC/AML, and Secure Payment Gateway',
      'Royalty Mechanisms, Airdrops & Rewards, and Rating System',
    ],
  },
  {
    id: 'metaverse',
    title: 'Metaverse App Development',
    icon: '/assets/blockchain-v2/sec4-icon4.webp',
    description:
      'With our metaverse app development, you can step into the future of digital interaction. We create apps that are dynamic, smooth, and powerful to grow with your evolving needs. These apps combine blockchain, AR/VR, AI, and 3D environments. We create experiences that are safe and easy to use, such as virtual real estate platforms, social spaces, and 3D marketplaces.',
    bullets: [
      'Immersive 3D Environments & Custom Avatars',
      'Blockchain-Based Assets & NFT Integration',
      'Multi-Platform & Multi-Device Accessibility',
      'Decentralized Economy with Wallets & Payments',
      'Social, Interactive, and Event-Driven Features',
    ],
  },
  {
    id: 'crypto-wallet',
    title: 'Crypto Wallet Development Services',
    icon: '/assets/blockchain-v2/sec4-icon5.webp',
    description:
      "Facilitate your users with a reliable and simple way to store, trade, and control their digital assets with our crypto wallet development services. We can build wallets that are non-custodial, multi-currency, and highly scalable, that will provide full control, transparency, and security for the user's digital assets. Integrated with blockchain protocols, encryption standards, and multi-platform. Our wallets will provide users with the cleanest experience for storing, sending, and receiving cryptocurrency.",
    bullets: [
      'Multi-Currency & Multi-Chain Wallets',
      'Non-Custodial Security with Private Key Management',
      'Biometric Authentication & Two-Factor Security',
      'Seamless Integration with dApps & Exchanges',
      'QR-Based Transactions & Real-Time Notifications',
    ],
  },
  {
    id: 'dapp',
    title: 'DApp Development Services',
    icon: '/assets/blockchain-v2/sec4-icon6.webp',
    description:
      "Use our DApp development services to take advantage of decentralization. We develop smart, agile, and transparent applications on a blockchain platform that reduces the need for intermediaries, increases trust, and puts users in control of their data. Whether it's a DeFi platform, game development, marketplace, or social app, our development solutions utilize smart contracts and blockchain protocols, along with customer-focused design to provide new digital experiences.",
    bullets: [
      'Smart Contract Development & Auditing',
      'Cross-Chain Compatible DApps',
      'User-Friendly Frontend & Intuitive UI/UX',
      'Secure Wallet Integration & Payment Gateway',
      'Real-Time Analytics, Notifications & Rewards',
    ],
  },
  {
    id: 'defi',
    title: 'DeFi Development Services',
    icon: '/assets/blockchain-v2/sec4-icon7.webp',
    description:
      'With our DeFi development services, you can get more people to use your app and make more money. We make staking platforms that are highly secure, fast, and dependable. These platforms let users lock up their crypto assets and earn rewards without any problems. Our solutions use smart contracts, blockchain protocols, and decentralized finance standards to make operations.',
    bullets: [
      'Smart Contract-Based Staking Mechanisms',
      'Multi-Token & Cross-Chain Staking Support',
      'Distributing rewards and calculating yields automatically',
      'Integration of secure wallets and compliance with KYC and AML',
      'Real-Time Analytics, Leaderboards & Incentive Programs',
    ],
  },
  {
    id: 'other',
    title: 'Other Blockchain Services',
    icon: '/assets/blockchain-v2/sec4-icon8.webp',
    description:
      'Uplift your blockchain journey with our customized blockchain development services. From strategic consulting, rigorous auditing, to developing custom protocols, and more, we provide end-to-end services for diverse business needs. We are here to help you take full advantage of blockchain development to ensure efficiency, security, and interesting innovation across industries.',
    bullets: [
      'Blockchain Consulting & Strategy Planning',
      'Smart Contract Development & Auditing',
      'Private & Consortium Blockchain Solutions',
      'Tokenization & ICO/IDO/STO Development',
      'Integration with Existing Systems & APIs',
    ],
  },
]

export default function BlockchainServicesTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = services[activeIndex]

  return (
    <section className="w-full bg-[#121212] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Top Banner Card matching sec4-bg.webp (Clean solid card on mobile/tablet, exact angled sec4-bg.webp on lg+) */}
        <div className="relative w-full rounded-[24px] overflow-hidden mb-10 sm:mb-12 bg-[#1c1c1c] lg:bg-transparent lg:min-h-[380px] xl:min-h-[430px] flex items-center">
          {/* Desktop Background Shape + 3D Visual */}
          <div
            className="hidden lg:block absolute inset-0 bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('/assets/blockchain-v2/sec4-bg.webp')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10 w-full lg:w-[44%] xl:w-[43%] p-7 sm:p-10 lg:py-12 lg:pl-12 lg:pr-10 xl:pl-14 xl:pr-12 text-left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-bold leading-[1.16] text-white mb-4 max-w-[460px]">
              Blockchain Development Services for a Decentralized Future!
            </h2>
            <p className="text-white/85 text-[14px] sm:text-[16px] lg:text-[15px] xl:text-[16px] leading-[1.65] font-normal max-w-[420px]">
              Being a top-tier app development company, our objective is to deliver high-quality, secure, scalable, and impactful blockchain development services.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Left Light-Gray Vertical 8-Tab Sidebar + Right Dark Detail Card */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* Left Vertical Tab Menu (Horizontal Scroll on Small Devices) */}
          <div
            role="tablist"
            data-no-contact-popup
            className="w-full lg:w-[30%] xl:w-[27%] bg-[#E6E6E6] rounded-[18px] lg:rounded-[24px] p-2.5 sm:p-3 lg:p-4 flex flex-row lg:flex-col justify-start items-center lg:items-stretch gap-2 lg:gap-1.5 overflow-x-auto lg:overflow-x-visible no-scrollbar"
          >
            {services.map((srv, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={srv.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-auto shrink-0 lg:w-full lg:shrink flex items-center gap-2.5 lg:gap-3.5 px-4 py-2.5 lg:py-3.5 rounded-[12px] lg:rounded-[14px] text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 cursor-pointer border-0 focus:outline-none ${
                    isActive
                      ? 'bg-[#00CE44] text-black font-bold shadow-sm'
                      : 'bg-transparent text-[#1a1a1a] hover:bg-black/5 font-medium'
                  }`}
                >
                  <BlockchainSolidIcon
                    name={srv.id}
                    className={`w-6 h-6 shrink-0 ${
                      isActive ? 'text-black' : 'text-[#1a1a1a]'
                    }`}
                  />
                  <span className="text-[14px] sm:text-[15px] leading-snug">
                    {srv.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Detail Panel */}
          <div className="flex-1 bg-[#1E1E1E] rounded-[24px] p-8 sm:p-10 lg:p-14 flex flex-col justify-center text-left border border-white/5">
            <h3 className="text-[#00CE44] text-[24px] sm:text-[30px] lg:text-[34px] font-bold leading-tight mb-5">
              {current.title}
            </h3>

            <p className="text-white/90 text-[15px] sm:text-[17px] leading-[1.75] font-normal mb-8 max-w-4xl">
              {current.description}
            </p>

            <ul className="space-y-3.5">
              {current.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-white text-[15px] sm:text-[16px] leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

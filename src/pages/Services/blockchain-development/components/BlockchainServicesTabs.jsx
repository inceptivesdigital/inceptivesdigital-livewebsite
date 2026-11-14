import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function BlockchainServicesTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      title: 'Blockchain App Development Services',
      desc: (
        <>
          Our expertise is in developing customized blockchain-based applications that align with your business goals. Our blockchain app development services make sure that applications are responsive, user-friendly, and ready to handle heavy traffic, regardless of what you want from an app or an enterprise-level system.
        </>
      ),
      bullets: [
        'End-to-end blockchain application development.',
        'DApps, enterprise apps, and blockchain ecosystem solutions.',
        'Secure, scalable architectures built around business needs.',
        <>
          Integration with existing systems and platforms through{' '}
          <a
            href="https://inceptivesdigital.com/system-integration-api-automation"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            system integration API automation
          </a>
          .
        </>,
      ],
    },
    {
      title: 'NFT Development',
      desc: (
        <>
          Our NFT development services help businesses create digital ownership experiences through secure and scalable NFT solutions. As an NFT development company, we build platforms for industries including art, gaming, real estate, and collectibles using ERC-721, ERC-1155, and IPFS-based storage to support interoperability and long-term asset management.
        </>
      ),
      bullets: [
        'Custom NFT Design & Tokenization (ERC-721/1155)',
        'Smart Contracts & Decentralized Storage',
        'Cross-Chain & Multi-Chain NFT Solutions',
        'Wallet & Marketplace Integrations',
        'Royalty, Rewards, and Fractional Ownership Features',
      ],
    },
    {
      title: 'NFT Marketplace Development',
      desc: (
        <>
          Our NFT marketplace development company builds custom marketplaces using proven token standards, decentralized storage, and smart contracts. We create scalable platforms with the infrastructure needed for secure transactions, better discoverability, and seamless digital asset experiences.
        </>
      ),
      bullets: [
        'Lazy Minting, Storefronts, and NFT Listings',
        'Cross-Chain and Multi-Chain Compatibility',
        'Advanced Search and Filtering Options',
        'Built-In Wallets, KYC/AML, and Payment Integration',
        'Royalty Mechanisms, Airdrops, Rewards, and Ratings',
      ],
    },
    {
      title: 'Metaverse App Development',
      desc: (
        <>
          Our metaverse app development services help businesses create interactive digital environments powered by blockchain, AR/VR, AI, and 3D technologies. Where intelligent functionality is required,{' '}
          <a
            href="https://inceptivesdigital.com/machine-learning-development-services"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            machine learning development services
          </a>{' '}
          support personalized and data-driven experiences.
        </>
      ),
      bullets: [
        'Immersive 3D Environments & Custom Avatars',
        'Blockchain-Based Assets & NFT Integration',
        'Multi-Platform & Multi-Device Accessibility',
        'Digital Economies with Wallets & Payments',
        'Social, Interactive, and Event-Driven Features',
      ],
    },
    {
      title: 'Crypto Wallet Development Services',
      desc: (
        <>
          We build crypto wallet solutions that give users secure and convenient ways to manage digital assets. Our crypto wallet development services include non-custodial, multi-chain, and scalable wallets integrated with blockchain protocols, encryption standards, and modern security features.
        </>
      ),
      bullets: [
        'Multi-Currency & Multi-Chain Wallets',
        'Non-Custodial Security with Private Key Management',
        'Biometric Authentication & Two-Factor Security',
        'DApp & Exchange Integrations',
        'QR-Based Transactions & Real-Time Notifications',
      ],
    },
    {
      title: 'DApp Development Services',
      desc: (
        <>
          Our DApp development services focus on creating decentralized applications that deliver transparency, user ownership, and seamless experiences. From DeFi platforms and marketplaces to social applications, we combine smart contracts, blockchain protocols, and intuitive{' '}
          <a
            href="https://inceptivesdigital.com/ui-ux-design"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            UI/UX design
          </a>{' '}
          to build practical decentralized products.
        </>
      ),
      bullets: [
        'Smart Contract Development & Auditing',
        'Cross-Chain Compatible DApps',
        'User-Friendly Frontend & Intuitive UI/UX',
        'Secure Wallet Integration & Payment Gateway',
        'Real-Time Analytics, Notifications & Rewards',
      ],
    },
    {
      title: 'DeFi Development Services',
      desc: (
        <>
          Our DeFi development services help businesses build decentralized financial products with secure smart contracts, automated mechanisms, and scalable blockchain infrastructure. We create solutions that support staking, token-based systems, and transparent financial interactions.
        </>
      ),
      bullets: [
        'Smart Contract-Based Staking Mechanisms',
        'Multi-Token & Cross-Chain Staking Support',
        'Automated Rewards Distribution & Yield Calculations',
        'Secure Wallet Integration & KYC/AML Support',
        'Real-Time Analytics, Leaderboards & Incentive Programs',
      ],
    },
    {
      title: 'Other Blockchain Services',
      desc: (
        <>
          Uplift your blockchain journey with our customized blockchain development services. From strategic consulting, rigorous auditing, to developing custom protocols, and more, we provide end-to-end services for diverse business needs. We are here to help you take full advantage of blockchain development to ensure efficiency, security, and innovation across industries.
        </>
      ),
      bullets: [
        'Blockchain Consulting & Strategy Planning',
        'Smart Contract Development & Auditing',
        'Private & Consortium Blockchain Solutions',
        'Tokenization & ICO/IDO/STO Development',
        'Integration with Existing Systems & APIs',
      ],
    },
  ]

  const current = services[activeTab]

  return (
    <section className="py-16 sm:py-24 bg-[#121212]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Feature Banner Card with Blockchain 3D Visual */}
        <div className="relative rounded-[20px] overflow-hidden bg-[#1a1c20] border border-white/10 p-6 sm:p-10 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
                <span className="text-[#00CE44]">Blockchain App Development Services</span>{' '}
                for Products, Platforms, and Digital Ecosystems
              </h2>
              <p className="text-white/90 text-[16px] leading-relaxed font-normal">
                Our blockchain app development services cover everything from smart contracts and decentralized applications to NFT platforms, DeFi products, and enterprise blockchain systems. Every solution is designed through{' '}
                <a
                  href="https://inceptivesdigital.com/product-strategy-consulting"
                  className="underline text-[#00CE44] hover:text-white transition-colors"
                >
                  product strategy consulting
                </a>{' '}
                around business objectives, user adoption, and long-term scalability rather than technology alone.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/blockchain/blockchain-cont.png"
                alt="Blockchain App Development Services"
                className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Interactive 8-Service Tabs + Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: 8 Tab Buttons */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-between gap-1">
            {services.map((srv, idx) => {
              const isActive = activeTab === idx
              return (
                <button
                  key={srv.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'bg-transparent text-black font-medium hover:bg-black/10 border-b border-black/15'
                  }`}
                >
                  <span>{srv.title}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-[#00CE44] shrink-0" />}
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Service Details */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#1e1e1e] border border-white/10 p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#00CE44] mb-4 leading-tight">
              {current.title}
            </h3>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-6">
              {current.desc}
            </p>

            <ul className="space-y-3 text-white/90 text-sm sm:text-[15px] leading-relaxed">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function BlockchainFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'What is blockchain app development?',
      a: 'Blockchain app development involves creating applications that use blockchain networks, smart contracts, and decentralized infrastructure to enable secure transactions, digital ownership, transparency, and automated processes.',
    },
    {
      q: 'How much does blockchain app development cost?',
      a: 'The cost of blockchain app development depends on factors such as product complexity, blockchain network selection, smart contract requirements, integrations, security needs, and scalability goals. A basic blockchain application may start around $40,000, while advanced platforms with multi-chain functionality and enterprise requirements require a larger investment.',
    },
    {
      q: 'What types of blockchain applications do you build?',
      a: 'We build various blockchain applications, including DApps, DeFi platforms, NFT marketplaces, crypto wallets, tokenized ecosystems, smart contract-based solutions, and enterprise blockchain systems.',
    },
    {
      q: 'Which blockchain platforms do you work with?',
      a: 'We work with multiple blockchain ecosystems, including Ethereum, Polygon, Solana, Hyperledger, Avalanche, BNB Chain, and other networks based on the specific requirements of the product.',
    },
    {
      q: 'Do you develop smart contracts?',
      a: 'Yes. We design and develop smart contracts for applications such as DeFi platforms, NFT ecosystems, tokenized products, and decentralized applications with a focus on security, efficiency, and reliability.',
    },
    {
      q: 'Can you help decide if blockchain is right for our product?',
      a: 'Yes. We evaluate your business model, user needs, and technical requirements to determine whether blockchain creates meaningful value for your product before development begins.',
    },
    {
      q: 'How long does it take to build a blockchain application?',
      a: (
        <>
          Development timelines depend on product complexity, supported networks, features, integrations, and testing requirements. A focused blockchain{' '}
          <a
            href="https://inceptivesdigital.com/mvp-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            MVP development
          </a>{' '}
          may take a few months, while larger ecosystems require additional development time.
        </>
      ),
    },
    {
      q: 'Do you provide post-launch blockchain app support?',
      a: 'Yes. We provide ongoing monitoring, optimization, upgrades, and technical support to help blockchain applications remain secure, scalable, and aligned with evolving business requirements.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, centered */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          <span className="text-[#00CE44]">FAQs About Our Blockchain</span> App Development Services
        </h2>

        {/* Accordion Container: Flat #242424 cards, + / - indicator */}
        <div className="w-full space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={faq.q}
                className="bg-[#242424] rounded-[12px] border-0 shadow-none overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-4 sm:py-5 gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-sm sm:text-base font-bold tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#00CE44]' : 'text-white'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className={`shrink-0 text-lg font-bold leading-none select-none ${
                      isOpen ? 'text-[#00CE44]' : 'text-white'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/90 text-xs sm:text-sm leading-relaxed font-normal whitespace-pre-line">
                    <div>{faq.a}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

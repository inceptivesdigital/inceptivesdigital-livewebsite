export default function BlockchainMarketStats() {
  const bullets = [
    <>
      The global blockchain market is projected to grow from $32.99 billion in 2025 to $393.45 billion by 2030, driven by enterprise adoption across finance, healthcare, retail, and other industries. The{' '}
      <a
        href="https://inceptivesdigital.com/blog/main-benefits-of-blockchain-technology"
        className="underline text-[#00CE44] hover:text-white transition-colors"
      >
        main benefits of blockchain technology
      </a>{' '}
      are pushing businesses toward tokenization, transparency, automation, and secure digital transactions.
    </>,
    <>
      Businesses are increasingly exploring{' '}
      <a
        href="https://inceptivesdigital.com/blog/blockchain-app-development-in-business"
        className="underline text-[#00CE44] hover:text-white transition-colors"
      >
        blockchain app development in business
      </a>{' '}
      for tokenization, secure digital transactions, smart contracts, and decentralized applications that improve transparency and automation.
    </>,
    'Financial institutions are moving beyond blockchain experiments, with growing interest in tokenized assets and blockchain-based settlement systems.',
    'Blockchain-powered payment infrastructure is helping organizations create faster, more efficient transaction processes across global markets.',
    <>
      Industries such as logistics, finance, and healthcare are adopting{' '}
      <a
        href="https://inceptivesdigital.com/blog/blockchain-in-software-development"
        className="underline text-[#00CE44] hover:text-white transition-colors"
      >
        blockchain in software development
      </a>{' '}
      to improve traceability, data security, and connected business operations.
    </>,
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/assets/mobile-app/market-bg-cover.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading + Bullets */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              Why Businesses Are Investing in{' '}
              <span className="text-[#00CE44]">Blockchain Application Development</span>
            </h2>

            <ul className="space-y-3.5 text-white/90 text-sm sm:text-[15px] leading-relaxed">
              {bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Market Growth Chart */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src="/assets/mobile-app/chartsection-1024x622.png"
              alt="Blockchain Market Growth Projection Chart"
              className="w-full max-w-[580px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

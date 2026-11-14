export default function BlockchainIndustries() {
  const industries = [
    {
      title: 'Healthcare Blockchain Solutions',
      url: 'https://inceptivesdigital.com/healthcare-app-development',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: 'Tamper-proof medical records, HIPAA-aligned data exchange, clinical trial audit trails, and decentralized patient identity systems.',
    },
    {
      title: 'Fitness Blockchain Solutions',
      url: 'https://inceptivesdigital.com/fitness-app-development',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: 'Move-to-earn token economies, wearable activity verification, tokenized loyalty rewards, and decentralized fitness memberships.',
    },
    {
      title: 'eLearning Blockchain Solutions',
      url: 'https://inceptivesdigital.com/education-app-development-company',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: 'On-chain academic credentials, verifiable certificates, tokenized course marketplaces, and creator royalty distribution.',
    },
    {
      title: 'Real Estate Blockchain Solutions',
      url: 'https://inceptivesdigital.com/real-estate-app-development-company',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: 'Fractional property tokenization, automated smart-contract escrow, transparent title registries, and investor compliance.',
    },
    {
      title: 'Automotive Blockchain Solutions',
      url: null,
      icon: '/assets/android-app/automation-1-1.png',
      desc: 'Immutable vehicle history ledgers, supply chain part provenance, connected mobility micropayments, and fleet tracking.',
    },
    {
      title: 'Travel Blockchain Solutions',
      url: 'https://inceptivesdigital.com/travel-app-development-company',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: 'Cross-partner loyalty token networks, smart-contract booking settlement, decentralized identity, and instant refunds.',
    },
    {
      title: 'Fintech Blockchain Solutions',
      url: 'https://inceptivesdigital.com/fintech-app-development',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: 'DeFi protocols, cross-border stablecoin settlement, non-custodial wallets, institutional custody, and KYC/AML compliance.',
    },
    {
      title: 'Logistics Blockchain Solutions',
      url: 'https://inceptivesdigital.com/food-delivery-app-development',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: 'End-to-end supply chain traceability, automated customs & bill-of-lading smart contracts, and real-time shipment verification.',
    },
    {
      title: 'eCommerce Blockchain Solutions',
      url: 'https://inceptivesdigital.com/ecommerce-app-development-company',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: 'Crypto checkout gateways, NFT-backed product authenticity, decentralized marketplaces, and programmable customer rewards.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            <span className="text-[#00CE44]">Blockchain App Development</span>{' '}
            Across Industries and Business Models
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            We build industry-specific blockchain solutions that bring verifiable trust, asset tokenization, and automated smart-contract workflows into your core operations.
          </p>
        </div>

        {/* Homepage-Style Box Cards Grid (9 Cards, 3 Columns on Desktop, Equal Heights & Clean 1px Borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[280px] lg:min-h-[300px] h-full select-none text-left"
            >
              {/* Icon (35px x 35px) */}
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              {/* Title: H3 tag, 25px font-size bold */}
              <h3 className="text-[20px] sm:text-[23px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.url ? (
                  <a
                    href={ind.url}
                    className="text-[#00CE44] group-hover:text-black transition-colors"
                  >
                    {ind.title}
                  </a>
                ) : (
                  ind.title
                )}
              </h3>

              {/* Description: 16px font-size */}
              <p className="text-[15px] sm:text-[16px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

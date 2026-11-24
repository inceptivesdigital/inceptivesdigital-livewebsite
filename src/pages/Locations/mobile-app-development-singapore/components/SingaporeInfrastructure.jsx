import { Link } from 'react-router-dom'

export default function SingaporeInfrastructure() {
  const cards = [
    {
      title: 'Singpass & Myinfo Integration',
      desc: 'Integrate approved Singpass authentication and Myinfo services into mobile registration and verification workflows. Supported connections can simplify customer onboarding, enable consent-based data retrieval, and reduce repetitive form entry.',
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
    },
    {
      title: 'PayNow & SGQR Payment Integration',
      desc: 'Connect mobile applications with participating payment providers that support PayNow and SGQR. Payment workflows can accommodate Singapore-dollar transactions, QR-based checkout, and merchant reconciliation based on the selected provider&apos;s capabilities.',
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Systems & API Integration',
      desc: (
        <>
          Existing business systems often need to exchange information with customer-facing applications through{' '}
          <Link
            to="/system-integration-api-automation"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            system integration api automation
          </Link>
          . Secure API integrations connect mobile platforms with CRM, ERP, inventory, and financial systems while maintaining controlled data access.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 7h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
        </svg>
      ),
    },
    {
      title: 'Cloud Infrastructure & Data Connectivity',
      desc: 'Cloud architecture supports application hosting, database services, and communication between connected systems. Singapore-region deployment options, API security, and monitoring can be considered according to data requirements and business operations.',
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            National Connectivity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile Applications Connected to{' '}
            <span className="text-[#00CE44]">Singapore&apos;s Digital Infrastructure</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Singapore&apos;s digital ecosystem gives businesses access to established identity services, payment networks, and enterprise platforms. Inceptives Digital develops custom mobile applications that connect with supported local systems, helping organisations manage customer onboarding, digital transactions, and business operations through secure, authorised integrations.
          </p>
        </div>

        {/* 4 Cards Grid: Clean solid icons, dark container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#12141a] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between border-0 shadow-none text-left transition-all duration-300 hover:scale-[1.02]"
            >
              <div>
                <div className="mb-6 flex items-center justify-start">
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
                  {card.title}
                </h3>
                <div className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

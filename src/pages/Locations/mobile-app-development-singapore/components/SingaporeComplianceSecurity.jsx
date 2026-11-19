import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SingaporeComplianceSecurity() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      name: 'Data Privacy & Protection',
      title: 'Singapore Personal Data Protection',
      items: [
        'Personal Data Protection Act (PDPA)',
        'Personal Data Protection Commission (PDPC) Guidelines',
        'Mandatory Data Breach Notification Requirements',
        'Cross-Border Personal Data Transfer Requirements',
        'Data Retention, Consent & Access Controls',
      ],
    },
    {
      name: 'Financial Services & Payments',
      title: 'MAS & Fintech Compliance',
      items: [
        'Monetary Authority of Singapore (MAS) Requirements',
        'Payment Services Act 2019',
        'MAS Technology Risk Management Guidelines',
        'Anti-Money Laundering & Countering Financing of Terrorism (AML/CFT), where applicable',
        'PCI DSS Payment Card Security Standards',
      ],
    },
    {
      name: 'Healthcare & Patient Information',
      title: 'Singapore Healthcare Compliance',
      items: [
        'Healthcare Services Act 2020 (HCSA)',
        'Health Information Act 2026, as provisions become applicable',
        'Ministry of Health / Health Sciences Authority Requirements',
        'National Electronic Health Record (NEHR) Requirements',
        'Clinical Data Security & Patient Access Controls',
      ],
    },
    {
      name: 'Mobile Application Cybersecurity',
      title: 'Application & Infrastructure Security',
      items: [
        'Cybersecurity Act 2018, where applicable',
        'Cyber Security Agency of Singapore (CSA) Guidance',
        'OWASP Mobile Application Security Verification Standard (MASVS)',
        'ISO/IEC 27001 Information Security Standard',
        'Mobile API Security & Vulnerability Testing',
      ],
    },
    {
      name: 'Digital Accessibility & Governance',
      title: 'Digital Service Requirements',
      items: [
        'Singapore Government Digital Service Standards, where applicable',
        'Web Content Accessibility Guidelines (WCAG 2.2)',
        'Electronic Transactions Act 2010',
        'Secure Digital Identity & Authentication Controls',
        'Apple App Store & Google Play Submission Requirements',
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Governance &amp; Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Regulatory Considerations Behind{' '}
            <span className="text-[#00CE44]">Singapore&apos;s Mobile Products</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile app development in Singapore requires careful consideration of data protection, financial regulations, healthcare requirements, and application security. Inceptives Digital incorporates applicable regulatory controls into product architecture, following{' '}
            <Link
              to="/blog/mobile-app-security-best-practices"
              className="text-[#00CE44] hover:underline font-medium"
            >
              app security best practices
            </Link>
            , helping businesses plan secure data handling, payment workflows, and connected systems throughout development.
          </p>
        </div>

        {/* Tab Navigation Bar: Single line full width on desktop, hidden-scrollbar horizontal scroll on smaller devices */}
        <div
          className="w-full flex flex-nowrap items-center justify-start lg:justify-between gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 mb-12 select-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`shrink-0 lg:flex-1 px-4 sm:px-5 py-3 rounded-none whitespace-nowrap text-center text-xs sm:text-sm font-medium transition-all cursor-pointer border-0 ${
                activeTab === idx
                  ? 'bg-[#00CE44] text-black font-semibold'
                  : 'bg-[#12141a] text-white/80 hover:bg-[#1a1d26] hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Tab Content Card + Image: Matching screenshot #7 */}
        <div className="bg-[#12141a] rounded-[24px] p-6 sm:p-10 lg:p-12 border-0 shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Requirements List with Blue/Green Star Vector Bullets */}
            <div className="lg:col-span-7 text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
                {tabs[activeTab].title}
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <svg
                      className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6l-6.3 4.4 2.3-7.2-6-4.4h7.6z" />
                    </svg>
                    <span className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Business Meeting Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-[20px] overflow-hidden max-h-[380px]">
                <img
                  src="/assets/locations/singapore/Rectangle-6508.jpg"
                  alt="Singapore Compliance Team"
                  className="w-full h-full object-cover object-center select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

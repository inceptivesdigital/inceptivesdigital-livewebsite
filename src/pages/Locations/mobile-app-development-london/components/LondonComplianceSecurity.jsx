import { useState } from 'react'
import { Link } from 'react-router-dom'

function CheckCircleFill({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

export default function LondonComplianceSecurity() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: '1. UK Data Privacy & Protection',
      shortTitle: 'UK Data Privacy & Protection',
      image: '/assets/locations/new-york/ny-compliance-privacy.jpg',
      items: [
        {
          law: 'UK GDPR & Data Protection Act 2018',
          desc: 'Lawful data processing, user rights, consent where required, and appropriate security measures.',
        },
        {
          law: 'ICO Data Protection Requirements',
          desc: 'Privacy impact assessments, data retention controls, and reporting of qualifying personal data breaches within 72 hours where feasible.',
        },
        {
          law: 'Privacy and Electronic Communications Regulations (PECR)',
          desc: 'Applicable marketing consent, electronic communications, and tracking-technology requirements.',
        },
        {
          law: "ICO Children's Code",
          desc: 'Age-appropriate privacy settings and protections for online services likely to be accessed by children.',
        },
      ],
    },
    {
      title: '2. FCA & Financial Services Compliance',
      shortTitle: 'FCA & Financial Services',
      image: '/assets/locations/new-york/ny-compliance-fintech.jpg',
      items: [
        {
          law: 'Financial Conduct Authority (FCA)',
          desc: 'Regulatory requirements for applicable financial services, payment activities, and customer-facing financial applications.',
        },
        {
          law: 'Payment Services Regulations 2017',
          desc: 'Rules governing covered payment services, including transaction security and customer authentication.',
        },
        {
          law: 'Electronic Money Regulations 2011',
          desc: 'Requirements for regulated electronic money issuance and related financial services.',
        },
        {
          law: 'Strong Customer Authentication (SCA)',
          desc: 'Applicable multifactor authentication controls for payment account access and electronic transactions.',
        },
      ],
    },
    {
      title: '3. NHS & Healthcare Data Protection',
      shortTitle: 'NHS & Healthcare Data',
      image: '/assets/locations/new-york/ny-compliance-healthcare.jpg',
      items: [
        {
          law: 'NHS Digital Technology Assessment Criteria (DTAC)',
          desc: 'Relevant assessment requirements covering clinical safety, data protection, technical security, interoperability, usability, and accessibility.',
        },
        {
          law: 'DCB0129 Clinical Risk Management',
          desc: 'Clinical safety processes for manufacturers of applicable healthcare IT systems.',
        },
        {
          law: 'DCB0160 Clinical Risk Management',
          desc: 'Clinical risk management responsibilities for organisations deploying relevant healthcare IT systems.',
        },
        {
          law: 'NHS Data Security and Protection Toolkit (DSPT)',
          desc: 'Data security and protection assurance requirements for organisations within its applicable scope.',
        },
      ],
    },
    {
      title: '4. Application & Engineering Security',
      shortTitle: 'Application Security',
      image: '/assets/locations/new-york/ny-compliance-ai.jpg',
      items: [
        {
          law: 'OWASP Mobile Application Security Verification Standard (MASVS)',
          desc: 'Mobile security practices covering authentication, cryptography, secure storage, and network communication.',
        },
        {
          law: 'UK GDPR Security Controls',
          desc: 'Risk-appropriate encryption, access restrictions, secure processing, and personal data protection measures.',
        },
        {
          law: 'API & Backend Security',
          desc: 'Secure authentication, input validation, role-based permissions, and protection against unauthorised system access.',
        },
        {
          law: 'Security Testing & Vulnerability Management',
          desc: 'Dependency reviews, mobile application security testing, and penetration testing based on project risk.',
        },
      ],
    },
    {
      title: '5. Accessibility & Digital Governance',
      shortTitle: 'Accessibility & Governance',
      image: '/assets/locations/new-york/ny-compliance-gov.jpg',
      items: [
        {
          law: 'Equality Act 2010',
          desc: 'Accessibility considerations and reasonable adjustments for applicable digital services.',
        },
        {
          law: 'Public Sector Accessibility Regulations 2018',
          desc: 'Accessibility requirements for covered public-sector websites and mobile applications.',
        },
        {
          law: 'WCAG 2.2 Level AA',
          desc: 'Accessibility criteria for relevant digital services, including navigation, screen-reader support, contrast, and interaction design.',
        },
        {
          law: 'App Store & Google Play Requirements',
          desc: 'Platform privacy disclosures, permission controls, data handling, and applicable publication requirements.',
        },
      ],
    },
  ]

  const current = tabs[activeTab]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            UK Mobile App Compliance, Security &amp;{' '}
            <span className="text-[#00CE44]">Regulatory Requirements</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile apps serving London businesses must address applicable UK privacy, security, accessibility, and industry regulations. Inceptives Digital considers these requirements during product architecture and development, following{' '}
            <Link
              to="/blog/mobile-app-security-best-practices"
              className="text-[#00CE44] hover:underline font-medium"
            >
              app security best practices
            </Link>{' '}
            to help businesses plan secure data handling, financial integrations, healthcare functionality, and regulatory controls before launch.
          </p>
        </div>

        {/* 5 Horizontal Pill Tabs: Single line, hidden-scrollbar horizontal scroll on smaller devices */}
        <div
          className="w-full flex flex-nowrap items-center justify-start lg:justify-between gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-2 mb-12 select-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={tab.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`rounded-full shrink-0 lg:flex-1 py-3 px-5 text-sm sm:text-[15px] text-center transition-all duration-200 cursor-pointer border-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-bold shadow-none'
                    : 'bg-[#14151a] hover:bg-[#1e2028] text-white/90 font-medium'
                }`}
              >
                {tab.shortTitle}
              </button>
            )
          })}
        </div>

        {/* Active Tab 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#101218] rounded-[24px] p-7 sm:p-10 lg:p-12 border-0 shadow-none">
          {/* Left Column: Title & Bullet Items */}
          <div className="lg:col-span-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
              {current.title}
            </h3>

            <div className="space-y-4">
              {current.items.map((item) => (
                <div key={item.law} className="flex items-start gap-3">
                  <CheckCircleFill className="w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base mb-0.5">
                      {item.law}
                    </h4>
                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 lg:h-[380px] rounded-[20px] overflow-hidden border-0 shadow-none">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

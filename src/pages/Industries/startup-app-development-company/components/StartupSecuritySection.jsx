import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const subsections = [
  {
    id: 'privacy',
    title: 'Data Privacy & Protection',
    subtitle:
      'Protecting user data and meeting global regulatory expectations through privacy-by-design engineering.',
    items: [
      {
        num: '01.',
        title: 'SOC 2 Type II Compliance',
        description:
          'Development and infrastructure practices aligned with SOC 2 standards for security and confidentiality. Enterprise security expectations are met from the first line of code.',
      },
      {
        num: '02.',
        title: 'ISO 27001 Information Security',
        description:
          'Risk assessments, access controls, and continuous vulnerability monitoring are applied across every application following the ISO 27001 framework.',
      },
      {
        num: '03.',
        title: 'GDPR and CCPA Data Privacy',
        description:
          'User consent management, right-to-deletion requests, and data portability are built into the architecture. Compliant with European and California privacy regulations from day one.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Reliability',
    subtitle:
      'Multi-layered protection built into authentication, data transit, and every production release cycle.',
    items: [
      {
        num: '01.',
        title: 'End-to-End Encryption',
        description:
          'All data transmitted is protected with TLS 1.3. Optional end-to-end encryption for sensitive user communications and financial transactions is built in where required.',
      },
      {
        num: '02.',
        title: 'Multi-Factor Authentication',
        description:
          'MFA is built into admin panels and user accounts. An additional security layer against unauthorised access without adding friction to standard user flows.',
      },
      {
        num: '03.',
        title: 'Regular Penetration Testing',
        description:
          'Automated and manual penetration tests on every release cycle. Security gaps identified and remediated before they reach production.',
      },
    ],
  },
  {
    id: 'standards',
    title: 'Financial & Healthcare Standards',
    subtitle:
      'Industry-specific regulatory controls for fintech, ecommerce, and digital health startups.',
    items: [
      {
        num: '01.',
        title: 'PCI DSS Compliance',
        description:
          'Payment applications built to PCI DSS requirements for fintech and ecommerce startups handling credit card data and secure payment processing.',
      },
      {
        num: '02.',
        title: 'HIPAA Compliance',
        description:
          'Strict access controls, audit logs, and secure messaging built for digital health startups handling protected health information.',
      },
      {
        num: '03.',
        title: 'FDA Software Validation',
        description:
          'Documentation traceability and risk management frameworks applied to health tech startups building Software as a Medical Device.',
      },
    ],
  },
]

export default function StartupSecuritySection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = subsections[activeIdx]

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + subsections.length) % subsections.length)
  }

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % subsections.length)
  }

  return (
    <section
      className="relative w-full text-white py-16 md:py-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 45%, rgba(0, 206, 68, 0.24) 0%, #050a06 58%, #000000 100%)',
      }}
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Top Centered Section Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Enterprise-Grade Security Built Into Every{' '}
            <span className="text-[#00CE44]">Startup App Development Project</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            As an established startup mobile app development company, we embed security, data privacy, and compliance standards from the first line of code.
          </p>
        </div>

        {/* Subsection Header Row + Left/Right Circular Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="text-left max-w-2xl">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white leading-tight mb-2">
              {current.title}
            </h3>
            <p className="text-white/75 text-[14px] sm:text-[16px] leading-relaxed font-normal">
              {current.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous compliance group"
              className="w-11 h-11 rounded-full bg-[#1b1c21] hover:bg-[#00CE44] text-[#00CE44] hover:text-black flex items-center justify-center transition-colors duration-200 cursor-pointer border-0 focus:outline-none"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next compliance group"
              className="w-11 h-11 rounded-full bg-[#1b1c21] hover:bg-[#00CE44] text-[#00CE44] hover:text-black flex items-center justify-center transition-colors duration-200 cursor-pointer border-0 focus:outline-none"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Numbered Cards matching docx Healthcare Compliance Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.items.map((item) => (
            <div
              key={item.title}
              className="bg-[#0b0e0c]/90 border border-[#00CE44]/45 rounded-[20px] p-7 sm:p-8 text-left flex flex-col justify-start transition-colors duration-200 hover:border-[#00CE44]"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <h4 className="text-[#00CE44] text-[20px] sm:text-[22px] font-bold leading-snug">
                  {item.title}
                </h4>
                <span
                  className="text-[36px] sm:text-[42px] font-bold leading-none shrink-0 select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.2px #00CE44',
                  }}
                >
                  {item.num}
                </span>
              </div>

              <p className="text-white/85 text-[14px] sm:text-[15px] leading-[1.7] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle Slide Dots Indicator */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {subsections.map((sub, idx) => (
            <button
              key={sub.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={sub.title}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer border-0 focus:outline-none ${
                idx === activeIdx ? 'w-8 bg-[#00CE44]' : 'w-2.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

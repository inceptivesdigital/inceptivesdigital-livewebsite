import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function HealthcareCompliance() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      category: 'Data Privacy & Protection',
      desc: 'Giving doctors and patients the best experiences in the digital world while ensuring their privacy is respected, and all rules are followed.',
      standards: [
        {
          num: '01',
          code: 'HIPAA',
          detail:
            'End-to-end encryption, access management, and audit trails are built into every application handling electronic health records.',
        },
        {
          num: '02',
          code: 'GDPR',
          detail:
            'Privacy-by-design principles, consent management, and transparency controls built for EU data protection requirements.',
        },
        {
          num: '03',
          code: 'PHIPA',
          detail:
            'Secure data access, consent-based sharing, and confidentiality controls built for Canadian healthcare privacy law.',
        },
      ],
    },
    {
      category: 'Security & Reliability',
      desc: 'Giving doctors and patients the best experiences in the digital world while ensuring their privacy is respected, and all rules are followed.',
      standards: [
        {
          num: '04',
          code: 'HITECH',
          detail:
            'Strong access controls and audit mechanisms built to meet HITECH Act privacy and security requirements.',
        },
        {
          num: '05',
          code: 'SOC 2',
          detail:
            'Independent audits and continuous risk monitoring are applied to maintain system integrity, availability, and confidentiality.',
        },
        {
          num: '06',
          code: 'GxP',
          detail:
            'Validation, traceability, and quality compliance are built into development and deployment for medical and pharmaceutical applications.',
        },
      ],
    },
    {
      category: 'Medical & Clinical Standards',
      desc: 'Giving doctors and patients the best experiences in the digital world while ensuring their privacy is respected, and all rules are followed.',
      standards: [
        {
          num: '07',
          code: 'SaMD',
          detail:
            'Risk management, documentation, and performance validation are built into every Software as a Medical Device application.',
        },
        {
          num: '08',
          code: 'HL7',
          detail:
            'HL7 interoperability standards are built in for seamless medical data sharing between EHRs, labs, and clinical platforms.',
        },
        {
          num: '09',
          code: 'CPT',
          detail:
            'CPT coding standards are built in for precise medical billing, reporting, and clinical data classification.',
        },
      ],
    },
  ]

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const current = slides[activeSlide]

  return (
    <section
      className="py-20 lg:py-28 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/healthcare/health-banner.webp')`,
      }}
    >
      {/* Subtle dark overlay preserving the green 3D tubes background */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        {/* Top Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Global Compliance Standards Built Into Every
            <span className="block text-[#00CE44]">
              Healthcare Application We Develop
            </span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            As a top-notch{' '}
            <Link
              to="/mobile-app-development"
              className="text-white font-bold underline hover:text-[#00CE44] transition-colors"
            >
              mobile app development company
            </Link>
            , we follow a healthcare app development process that is entirely based on international laws regarding data privacy, security, and medical compliance. Our adherence to these laws is represented by three main aspects:
          </p>
        </div>

        {/* Slide Sub-Header Row: Title + Subtitle on Left, Circular Arrows on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="text-left">
            <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight mb-1.5">
              {current.category}
            </h3>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Compliance Pillar"
              className="w-11 h-11 rounded-full bg-[#1c221e] border border-white/15 hover:border-white text-[#00CE44] flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Compliance Pillar"
              className="w-11 h-11 rounded-full bg-[#1c221e] border border-white hover:bg-[#00CE44] hover:border-[#00CE44] hover:text-black text-[#00CE44] flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Equal Cards Grid directly over the green 3D background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.standards.map((std) => (
            <div
              key={std.num}
              className="bg-[#1b1d1c]/95 rounded-[16px] p-7 sm:p-8 border border-[#00CE44]/75 hover:border-white transition-colors duration-200 flex flex-col justify-between min-h-[240px] sm:min-h-[260px] text-left"
            >
              {/* Top Row: Bold Green Code on Left, Hollow Outlined Green Number on Right */}
              <div className="flex items-start justify-between gap-4 mb-10">
                <h4 className="text-2xl sm:text-[28px] font-extrabold text-[#00CE44] tracking-tight leading-none">
                  {std.code}
                </h4>
                <span
                  className="text-4xl sm:text-[46px] font-extrabold leading-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.2px #00CE44',
                  }}
                >
                  {std.num}
                </span>
              </div>

              {/* Bottom Description */}
              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal">
                {std.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

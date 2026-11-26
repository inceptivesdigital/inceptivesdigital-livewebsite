import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'

export default function AustinComplianceSecurity() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 'privacy',
      title: 'Privacy & Biometric Data',
      heading: 'Privacy & Biometric Data',
      points: [
        {
          law: 'Texas Data Privacy and Security Act (TDPSA)',
          desc: 'Consumer rights, opt-outs and consent before processing sensitive personal data.',
        },
        {
          law: 'Texas Biometric Identifier Act (CUBI)',
          desc: 'Informed consent before capturing face, fingerprint or voice data, no sale, and destruction on a fixed schedule.',
        },
        {
          law: 'Texas Medical Records Privacy Act (HB 300)',
          desc: 'Enforces strict health privacy standards alongside HIPAA for any application touching patient health data.',
        },
        {
          law: 'Texas Identity Theft Enforcement and Protection Act',
          desc: 'Breach-notification duties, including mandatory 30-day notice to the Texas Attorney General.',
        },
        {
          law: 'CCPA, CPRA & GDPR Cross-Border Privacy',
          desc: 'Full compliance data pipelines for applications serving users outside Texas and internationally.',
        },
      ],
    },
    {
      id: 'minors',
      title: 'Minors, Messaging & AI Rules',
      heading: 'Minors, Messaging & AI Rules',
      points: [
        {
          law: 'Texas App Store Accountability Act',
          desc: 'Age verification, parental consent, and developer accountability requirements where applicable.',
        },
        {
          law: 'Texas Responsible AI Governance Act (TRAIGA)',
          desc: 'Restrictions on prohibited AI algorithmic uses and required model transparency disclosures.',
        },
        {
          law: "Children's Online Privacy Protection Act (COPPA)",
          desc: 'Verifiable parental consent and child personal data safeguards for covered mobile services.',
        },
        {
          law: 'Telephone Consumer Protection Act (TCPA)',
          desc: 'Strict consent and opt-out mechanisms for automated marketing notifications and SMS broadcasts.',
        },
        {
          law: 'AI Data Privacy & Model Safety',
          desc: 'Appropriate controls and data sanitization for personal information passed into third-party LLMs.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments & Enterprise Buyers',
      heading: 'Payments & Enterprise Security',
      points: [
        {
          law: 'PCI DSS Compliance',
          desc: 'Payment card data tokenization and protection for apps that store, process, or transmit cardholder details.',
        },
        {
          law: 'SOC 2 Type II Readiness',
          desc: 'Strict security controls and documentation supporting organizational buyer audits and risk assessments.',
        },
        {
          law: 'GLBA Safeguards Rule',
          desc: 'Information security standards for covered financial institutions, lending apps, and service providers.',
        },
        {
          law: 'Secure Payment Gateway Integrations',
          desc: 'Direct Stripe, Apple Pay, and Google Pay tokenization eliminating liability for raw card storage.',
        },
        {
          law: 'Third-Party Vendor Diligence',
          desc: 'Comprehensive vendor risk reviews and documented API controls for enterprise client procurement.',
        },
      ],
    },
    {
      id: 'app-security',
      title: 'Application & Device Security',
      heading: 'Application & Device Security',
      points: [
        {
          law: 'OWASP Mobile Security (MASVS)',
          desc: 'Mobile security baseline covering authentication, on-device storage, cryptography, and network traffic.',
        },
        {
          law: 'Secure Authentication & MFA',
          desc: 'Biometric FaceID/TouchID, session token revocation, and role-based access permissions.',
        },
        {
          law: 'End-to-End Data Encryption',
          desc: 'AES-256 at rest and TLS 1.3 in transit with certificate pinning to protect against MITM exploits.',
        },
        {
          law: 'API & Backend Hardening',
          desc: 'Zero-trust endpoints, input validation, strict rate limiting, and encrypted inter-service communication.',
        },
        {
          law: 'Pre-Release Penetration Testing',
          desc: 'Automated vulnerability scans, third-party dependency checks, and ethical security testing.',
        },
      ],
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Governance',
      heading: 'Accessibility & Compliance Governance',
      points: [
        {
          law: 'WCAG 2.1 AA Standards',
          desc: 'Accessible screen reader flows, color contrast compliance, and dynamic text sizing support.',
        },
        {
          law: 'ADA & Section 508',
          desc: 'Digital accessibility obligations for public accommodations, healthcare, and enterprise apps.',
        },
        {
          law: 'Privacy by Design Architecture',
          desc: 'Data minimization, explicit opt-ins, and automated retention policies built in before code is shipped.',
        },
        {
          law: 'Audit Logs & Tamper-Proof Tracking',
          desc: 'Comprehensive admin audit logging and immutable access logs to support compliance reviews.',
        },
        {
          law: 'Continuous Compliance Maintenance',
          desc: 'Routine security audits following OS releases, SDK updates, and regulatory changes in Texas.',
        },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Texas Mobile App Privacy, Security &amp;{' '}
            <span className="text-[#00CE44]">Compliance Requirements</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile apps serving Austin and Texas customers must account for state privacy laws, biometric data restrictions, and applicable industry security standards. Inceptives Digital helps businesses address these requirements during mobile app development, from consent management to secure data handling that follows{' '}
            <Link
              to="/blog/mobile-app-security-best-practices"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              app security best practices
            </Link>
            . Our team considers Texas privacy legislation, healthcare regulations, payment security, and AI governance requirements based on each application&apos;s functionality.
          </p>
        </div>

        {/* 3-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Tab Selectors (Proper Interactive Tabs) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#00CE44] text-black font-bold border-[#00CE44] shadow-lg shadow-[#00CE44]/20'
                      : 'bg-[#12141a] text-white/85 border-white/10 hover:border-[#00CE44]/40 hover:text-white'
                  }`}
                >
                  <span className="text-sm sm:text-base font-semibold">
                    {tab.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isActive ? 'text-black translate-x-0.5' : 'text-white/40'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Center Column: Clean Circuit/Security Hardware Visual (No Cut-off Text) */}
          <div className="lg:col-span-3 hidden lg:flex items-center justify-center bg-[#12141a] border border-white/10 rounded-2xl overflow-hidden relative group">
            <img
              src="/assets/locations/austin/austin-security-circuit.png"
              alt="Texas Security Hardware and Architecture"
              className="w-full h-full object-cover select-none"
              loading="lazy"
            />
            {/* Subtle high-tech gradient frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-5 bg-[#12141a] border border-white/10 p-6 sm:p-8 rounded-2xl text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                {/* <span className="w-2.5 h-2.5 rounded-full bg-[#00CE44] shrink-0" /> */}
                <span>{tabs[activeTab].heading}</span>
              </h3>

              <div className="space-y-5">
                {tabs[activeTab].points.map((p, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    {/* Clean Arrow Icon: Zero bg, zero border, zero padding */}
                    <div className="shrink-0 mt-1 flex items-center justify-center text-[#00CE44]">
                      <ArrowRight className="w-5 h-5 text-[#00CE44]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-[17px] mb-1">
                        {p.law}
                      </h4>
                      <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, useRef } from 'react'

export default function PartnershipProcess() {
  const [activeTab, setActiveTab] = useState(0)
  const tabsRef = useRef(null)

  const steps = [
    {
      num: '01.',
      title: 'Partner Alignment & Commercial NDA',
      tagline: 'Define operating models, margins, and NDA boundaries',
      desc: 'We open every partnership with a comprehensive discovery workshop. We establish clear boundaries, define whether the engagement is co-branded or 100% white-label, align on client communication protocols, and sign mutual NDAs.',
      deliverables: [
        'Mutual NDA & Master Services Agreement (MSA)',
        'White-label vs. Co-build protocol definition',
        'Direct or delegated client communication matrix',
        'Partner margin and billing structure confirmation',
      ],
    },
    {
      num: '02.',
      title: 'Technical Architecture & Scope Blueprinting',
      tagline: 'Lock down architecture before writing a single line of code',
      desc: 'Our senior technical leads analyze the client brief, identify unstated dependencies, and formulate a rock-solid architectural blueprint. Scope, milestones, database design, and cloud topology are committed to paper upfront.',
      deliverables: [
        'End-to-end technical architecture blueprint',
        'Milestone-based Statement of Work (SOW)',
        'Third-party API & security compliance mapping',
        'Fixed or dedicated sprint team sizing',
      ],
    },
    {
      num: '03.',
      title: 'Agile Co-Execution & Staging Telemetry',
      tagline: 'Full code visibility with zero delivery ambiguity',
      desc: 'Engineering sprints execute with bi-weekly deliverables pushed directly to staging environments. Partners receive direct access to repositories, Jira boards, and design files, guaranteeing complete visibility into sprint velocity.',
      deliverables: [
        'Direct GitHub / GitLab repository access',
        'Bi-weekly staging deployment & video walkthroughs',
        'Sprint burn-down reports & change governance',
        'Continuous partner stakeholder synchronization',
      ],
    },
    {
      num: '04.',
      title: 'Rigorous Multi-Device QA & Security Audits',
      tagline: 'Zero-debt verification under real-world conditions',
      desc: 'Before any release touches client hands, it undergoes intensive automated and manual quality assurance. We test across physical device matrices, run penetration benchmarks, and audit data isolation and encryption.',
      deliverables: [
        'Cross-device & multi-browser compatibility sign-off',
        'Automated regression & end-to-end test suites',
        'Security vulnerability & OWASP compliance audit',
        'Load testing & latency benchmark verification',
      ],
    },
    {
      num: '05.',
      title: 'Launch, Handover & Co-Scaling Iteration',
      tagline: 'Flawless store releases backed by post-launch care',
      desc: 'We manage store submissions, cloud migrations, and DNS cutovers with zero downtime. Following launch, we remain committed through telemetry analysis, SLA support, and iterative feature expansion that grows your account value.',
      deliverables: [
        'App Store & Google Play submission management',
        'Cloud infrastructure monitoring & uptime SLAs',
        '30-day post-launch warranty & telemetry reviews',
        'Phase 2 roadmap consultation & scaling proposals',
      ],
    },
  ]

  const activeStep = steps[activeTab]

  return (
    <section className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Engagement Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            How a Strategic Partnership <span className="text-[#00CE44]">Works in Practice</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            A disciplined five-stage delivery framework that gives agencies, consultancies, and tech leaders predictable engineering capacity.
          </p>
        </div>

        {/* Tab Buttons - Zero Radius */}
        <div
          ref={tabsRef}
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar select-none"
        >
          {steps.map((step, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`shrink-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-none font-bold text-xs sm:text-sm transition-all duration-200 border-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-none'
                    : 'bg-[#141414] text-white/80 hover:bg-[#202020] hover:text-white'
                }`}
              >
                <span className="mr-2 opacity-60">{step.num}</span>
                {step.title}
              </button>
            )
          })}
        </div>

        {/* Active Step Content Card */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#121212] border border-white/5 text-left relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 font-mono">
                Stage {activeStep.num}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight mb-4">
                {activeStep.title}
              </h3>
              <p className="text-[#00CE44] text-sm sm:text-base font-medium mb-6">
                {activeStep.tagline}
              </p>
              <div className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
                {activeStep.desc}
              </div>
            </div>

            {/* Right Column: Key Deliverables */}
            <div className="lg:col-span-5 bg-[#181818] p-6 sm:p-8 rounded-[18px] border border-white/5">
              <h4 className="text-white text-base sm:text-lg font-bold mb-4 tracking-tight">
                Key Stage Deliverables:
              </h4>
              <ul className="space-y-3 text-white/85 text-xs sm:text-sm leading-relaxed">
                {activeStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

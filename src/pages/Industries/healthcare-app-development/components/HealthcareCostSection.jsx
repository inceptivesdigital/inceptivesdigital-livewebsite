import { Link } from 'react-router-dom'

export default function HealthcareCostSection() {
  const tiers = [
    {
      name: 'Foundation App',
      target: 'For startups launching a focused, single-purpose healthcare application.',
      cost: '$25,000 To $100,000',
      timeline: '8 To 14 Weeks',
      features: [
        'User registration and authentication',
        'Health tracking and wearable integration',
        'Push notifications and reminders',
        'HIPAA-compliant data storage',
        'Admin dashboard',
      ],
      summary: 'A compliant healthcare product built to validate before you scale.',
    },
    {
      name: 'Advanced App',
      target: 'For healthcare providers delivering clinical functionality at scale.',
      cost: '$60,000 To $180,000',
      timeline: '14 To 24 Weeks',
      features: [
        'Telemedicine and video consultations',
        'EHR and EMR integration',
        'AI-assisted triage and patient management',
        'Multi-role dashboards',
        'HIPAA, GDPR, and PHIPA compliance',
      ],
      summary: 'Where clinical workflows and real patient volume meet in one platform.',
    },
    {
      name: 'Enterprise App',
      target: 'For hospitals and health systems operating at full clinical scale.',
      cost: '$100,000 To $250,000+',
      timeline: '20 To 32 Weeks',
      features: [
        'Hospital management and operational workflows',
        'Staff scheduling, billing, and compliance monitoring',
        'Multi-site architecture and access control',
        'HL7, FHIR, and CPT data standards',
        'Advanced analytics and audit trails',
      ],
      summary: 'Built for organisations where the platform directly affects patient care.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#181818] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            <Link
              to="/blog/healthcare-app-development-cost"
              className="text-[#00CE44] hover:underline"
            >
              Healthcare App Development Cost
            </Link>{' '}
            Estimates by
            <span className="block">Application Types</span>
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Every healthcare application has different objectives, compliance requirements, and technical complexity. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        {/* 3 Equal Cards Grid matching Screenshot 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[16px] p-7 sm:p-9 border border-white/10 flex flex-col justify-between text-left shadow-none"
            >
              <div>
                {/* Title & Target */}
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {tier.target}
                </p>

                <hr className="my-5 border-white/15" />

                {/* Estimated Cost */}
                <div className="text-xs text-white/75 mb-1">Estimated Cost:</div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {tier.cost}
                </div>

                <hr className="my-5 border-white/15" />

                {/* Timeline */}
                <div className="text-xs text-white/75 mb-1">Timeline:</div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {tier.timeline}
                </div>

                <hr className="my-5 border-white/15" />

                {/* Bullet List */}
                <ul className="list-disc pl-5 space-y-2.5 text-sm text-white/90 leading-relaxed">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Footer Note */}
              <p className="mt-7 text-xs sm:text-sm text-white/80 leading-relaxed">
                {tier.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

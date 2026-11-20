export default function FintechCostSection() {
  const tiers = [
    {
      name: 'Foundation App',
      target:
        'For startups and fintech businesses launching a focused single-purpose financial application.',
      cost: '$30,000 – $60,000',
      timeline: '8 – 14 Weeks',
      features: [
        'User onboarding and account management',
        'Basic payment processing',
        'Secure authentication and encryption',
        'PCI DSS compliant data storage',
        'Admin dashboard',
      ],
      summary:
        'A compliant financial product built to validate the concept before committing to a full platform investment.',
    },
    {
      name: 'Advanced App',
      target:
        'For fintech companies delivering multi-feature financial functionality across payments, lending, and investment.',
      cost: '$60,000 – $120,000',
      timeline: '14 – 24 Weeks',
      features: [
        'Digital wallets and peer-to-peer payments',
        'Lending systems and investment tracking',
        'Third-party API and banking integrations',
        'Multi-role dashboards for users and admins',
        'PCI DSS, GDPR, and KYC compliance architecture',
      ],
      summary:
        'Ideal for growing fintech brands delivering multi-product financial capabilities at scale.',
    },
    {
      name: 'Enterprise App',
      target:
        'For financial institutions and enterprise fintech platforms operating at full regulatory and technical scale.',
      cost: '$120,000 To $250,000+',
      timeline: '20 To 32 Weeks',
      features: [
        'AI-based analytics and fraud detection',
        'Blockchain integration and smart contracts',
        'Biometric security and multi-factor authentication',
        'Multi-bank connectivity and open banking APIs',
        'Full compliance stack across PCI DSS, GDPR, PSD2, KYC, and AML',
      ],
      summary:
        'Built for financial organisations where compliance depth, transaction security, and operational scale are the baseline requirements.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#181818] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            <span className="text-[#00CE44]">Fintech App Development</span> Cost Estimates
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Every fintech application has different compliance requirements, security architecture, and integration complexity. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[16px] p-7 sm:p-9 border border-white/10 flex flex-col justify-between text-left shadow-none"
            >
              <div>
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {tier.target}
                </p>

                <hr className="my-5 border-white/15" />

                <div className="text-xs text-white/75 mb-1">Estimated Cost:</div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {tier.cost}
                </div>

                <hr className="my-5 border-white/15" />

                <div className="text-xs text-white/75 mb-1">Timeline:</div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {tier.timeline}
                </div>

                <hr className="my-5 border-white/15" />

                <ul className="list-disc pl-5 space-y-2.5 text-sm text-white/90 leading-relaxed">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

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

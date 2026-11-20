export default function FintechWhyChooseUs() {
  const capabilities = [
    {
      title: 'Financial Domain Knowledge',
      desc: 'Developers and consultants with real experience building across banking, lending, payments, insurtech, and wealth management. Domain knowledge is applied before architecture decisions are made, not learned during your project.',
    },
    {
      title: 'Compliance-First Architecture',
      desc: 'PCI DSS, GDPR, PSD2, KYC, and AML compliance are built into the system before development begins. Every data flow, authentication layer, and transaction pathway is designed around regulatory requirements from day one.',
    },
    {
      title: 'Security Built Into Every Layer',
      desc: 'End-to-end encryption, biometric authentication, fraud detection, and secure API integrations are applied across every fintech application. Financial data is protected at every touchpoint without compromising the user experience.',
    },
    {
      title: 'Scalable Financial Infrastructure',
      desc: 'Cloud architecture, database design, and backend systems built to handle transaction volume, user growth, and regulatory changes without requiring a rebuild at every growth stage.',
    },
    {
      title: 'AI-Powered Financial Intelligence',
      desc: 'Predictive analytics, personalised recommendations, dynamic credit scoring, and real-time risk analysis are built into financial platforms. Intelligence that improves with every transaction and every user interaction.',
    },
    {
      title: 'End-to-End Engagement',
      desc: 'Strategy, design, development, compliance validation, deployment, and post-launch support delivered as a single engagement. No handoffs to external teams. No gaps in accountability between stages.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            The{' '}
            <span className="text-[#00CE44]">Fintech App Development Capabilities</span>{' '}
            That Make the Difference in Production
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Financial applications built by studios without domain knowledge fail compliance before they fail users. Here is what we bring that a generic studio does not.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start border border-white/10 hover:border-[#00CE44]/60 transition-colors duration-200 text-left"
            >
              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight mb-3">
                {cap.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SFCostFactors() {
  const factors = [
    {
      title: 'Product Scope and Core Mobile Features',
      desc: 'The difference between a focused MVP and an expansive product directly influences your budget. Simple user authentication, standard profiles, and structured listings require less development effort than multi-tenant permissions, real-time messaging, and workflow engines. San Francisco teams often begin with targeted functionality to test demand before expanding scope.',
    },
    {
      title: 'Platform Architecture: Native vs. Cross-Platform',
      desc: 'Building separate native applications with Swift and Kotlin involves two distinct codebases, testing environments, and platform-specific deployments. Cross-platform frameworks like Flutter and React Native can reduce mobile app development costs by sharing business logic across iOS and Android.',
    },
    {
      title: 'UX/UI Design and Prototyping Complexity',
      desc: 'Mobile applications designed for high user engagement require extensive UX research, wireframing, and interactive prototyping. Custom design systems, component libraries, and micro-interactions require dedicated design cycles before engineering begins, whereas standard interface patterns can be delivered more cost-effectively.',
    },
    {
      title: 'AI, LLMs, and Intelligent Capabilities',
      desc: 'Adding AI features affects both development time and operational expense. Integrating model APIs requires authentication, prompt engineering, structured error handling, and API cost controls. Building custom machine learning models or on-device inference involves data preparation, model training, and performance tuning.',
    },
    {
      title: 'Custom Backend and Enterprise API Integrations',
      desc: 'Mobile apps require backend systems to manage accounts, data sync, and business logic. Integrating existing CRMs, ERPs, payment gateways, or proprietary databases introduces technical complexity. Documenting endpoints, mapping data models, and setting up staging environments all influence the timeline.',
    },
    {
      title: 'Cloud Infrastructure, DevOps, and Scalability',
      desc: 'A backend built for thousands of concurrent users requires cloud infrastructure designed for reliability. Containerization with Docker, orchestration with Kubernetes, CI/CD deployment pipelines, and multi-region failover contribute to initial setup investment while preventing downtime as user counts grow.',
    },
    {
      title: 'Compliance, Data Privacy, and Security',
      desc: 'Applications operating in California must meet state privacy standards under CCPA/CPRA, which require data access controls, opt-out mechanisms, and documented retention policies. Healthcare applications need HIPAA-compliant data handling, while FinTech products require SOC 2-aligned security controls.',
    },
    {
      title: 'Engineering Team Structure and Delivery Costs',
      desc: 'Hiring senior mobile developers in San Francisco carries different cost considerations from engaging a distributed engineering team. Technical specialization, team composition, project management, and required collaboration hours influence pricing. Enterprise procurement and stakeholder reviews can also extend the delivery schedule.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            What Influences Mobile App Development Costs in{' '}
            <span className="text-[#00CE44]">San Francisco?</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile app development costs in San Francisco reflect more than engineering hours. Venture-backed MVP timelines, enterprise procurement requirements, California privacy regulations, and integration complexity all influence the investment. These eight factors determine where your development budget goes.
          </p>
        </div>

        {/* 8 Factors Grid: Clean cards without icons and without number div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {factors.map((item) => (
            <div
              key={item.title}
              className="p-7 sm:p-8 rounded-[22px] bg-[#121318] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-start text-left hover:-translate-y-1 group"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-white/70 text-xs sm:text-[14px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

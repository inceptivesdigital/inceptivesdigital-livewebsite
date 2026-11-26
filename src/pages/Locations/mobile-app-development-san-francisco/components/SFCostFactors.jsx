import { Link } from 'react-router-dom'

export default function SFCostFactors() {
  const factors = [
    {
      title: 'MVP Scope and Funding Milestones',
      renderDesc: () => (
        <>
          Seed-stage startups need a defined release scope that supports customer validation without exhausting their runway. Adding multi-role workflows, AI functionality, or enterprise features before a design-partner pilot increases engineering hours, QA requirements, and{' '}
          <Link to="/blog/mvp-development-cost" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
            MVP costs
          </Link>
          .
        </>
      ),
    },
    {
      title: 'iOS, Android, and Cross-Platform Strategy',
      renderDesc: () => (
        <>
          San Francisco consumer startups often evaluate iOS-first releases, while enterprise products may require both platforms. Android app development in San Francisco demands separate Kotlin engineering when native capabilities matter.{' '}
          <Link to="/blog/flutter-vs-react-native-android-app-development" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
            Flutter and React Native
          </Link>{' '}
          can reduce duplicated work when shared functionality suits the product.
        </>
      ),
    },
    {
      title: 'Product Design and User Experience',
      renderDesc: () => (
        <>
          A consumer subscription app requires different UX work than a complex SaaS dashboard. Custom onboarding, interactive prototypes, accessibility requirements, and platform-specific interfaces increase design effort. Products preparing for customer pilots also need usability validation before engineering commits to final workflows.
        </>
      ),
    },
    {
      title: 'AI Features and Model Operating Costs',
      renderDesc: () => (
        <>
          AI-powered apps require more than an OpenAI, Gemini, or Claude integration. Retrieval systems, model evaluation, response latency, privacy safeguards, and{' '}
          <Link to="/blog/ai-development-cost" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
            inference costs
          </Link>{' '}
          affect the budget. Production AI features also require testing against actual user tasks and unexpected model responses.
        </>
      ),
    },
    {
      title: 'Enterprise Software Integrations',
      renderDesc: () => (
        <>
          Financial District enterprises and established SaaS operators often depend on existing CRM, ERP, identity, and billing systems. Integrating Salesforce, Microsoft Dynamics 365, or Stripe introduces authentication requirements, data mapping, vendor limitations, and additional testing.
        </>
      ),
    },
    {
      title: 'Cloud Infrastructure and Scalability',
      renderDesc: () => (
        <>
          AWS, Azure, and Google Cloud infrastructure costs depend on traffic, storage, database requirements, and workload patterns. Multi-tenant SaaS applications, real-time processing, and high-availability systems require more engineering than a focused MVP. Cloud consumption also affects the budget after launch.
        </>
      ),
    },
    {
      title: 'California Privacy and Industry Compliance',
      renderDesc: () => (
        <>
          Applications handling California residents&apos; data must assess applicable CCPA/CPRA obligations. Healthcare and financial products introduce additional requirements, including HIPAA or PCI DSS where relevant. Security architecture, access controls, audit logs, privacy workflows, and independent assessments can increase project costs.
        </>
      ),
    },
    {
      title: 'Engineering Team Structure and Delivery Costs',
      renderDesc: () => (
        <>
          <Link to="/blog/how-to-hire-a-mobile-app-development-company" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
            Hiring senior mobile developers
          </Link>{' '}
          in San Francisco carries different cost considerations from engaging a distributed engineering team. Technical specialization, team composition, project management, and required collaboration hours influence pricing. Enterprise procurement and stakeholder reviews can also extend the delivery schedule.
        </>
      ),
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
                {item.renderDesc()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export const londonFaqs = [
  {
    q: '1. How much does mobile app development cost in London?',
    a: 'Mobile app development costs vary based on complexity, features, integrations, platforms, and compliance requirements. Most MVPs range from £20,000 to £40,000, business apps from £40,000 to £85,000, and enterprise solutions from £85,000 to £175,000+, following product discovery and technical planning.',
  },
  {
    q: '2. How long does it take to develop a mobile app?',
    a: 'Most mobile apps take between 8 weeks and 12 months to complete. Simple MVPs usually launch within 8 to 12 weeks, while larger business and enterprise applications require additional time for design, development, integrations, testing, compliance, and deployment.',
  },
  {
    q: '3. Should a business choose a native or cross-platform app?',
    a: 'The right approach depends on your business goals, budget, and product requirements. Native development offers maximum performance and platform-specific capabilities, while cross-platform development reduces cost and accelerates delivery by sharing code across both iOS and Android platforms.',
  },
  {
    q: '4. Can I hire dedicated mobile app developers in London?',
    a: 'Yes. Inceptives Digital provides dedicated developers and specialist support for London teams extending or modernising an application. Engagements can cover iOS, Android, backend integrations, and product maintenance, with technical responsibilities, clear reporting expectations, and delivery arrangements agreed before full development begins.',
  },
  {
    q: '5. Can an existing mobile app be improved or rebuilt?',
    a: "Yes. We evaluate your application's architecture, performance, usability, and scalability before recommending improvements. Depending on the findings, we may optimise the existing product, redesign the user experience, modernise outdated technology, or rebuild the application when necessary.",
  },
  {
    q: '6. Which industries does Inceptives Digital work with?',
    a: 'We develop mobile applications for FinTech, Healthcare, Logistics, Manufacturing, Retail, eCommerce, Education, Real Estate, Travel, and Fitness businesses. Every solution is designed around industry-specific workflows, compliance requirements, customer expectations, and long-term business objectives instead of generic development practices.',
  },
  {
    q: '7. Is UI/UX design included in mobile app development?',
    a: 'Yes. Every mobile app project includes UX research, user flows, wireframes, interface design, and interactive prototypes before development begins. Validating the experience early reduces costly revisions, improves usability, and ensures the product supports both user needs and business goals.',
  },
  {
    q: '8. Can third-party services be integrated into a mobile app?',
    a: 'Yes. We integrate payment gateways, CRM and ERP platforms, authentication providers, cloud services, mapping tools, analytics platforms, messaging systems, and AI services. Every integration is selected to improve functionality while maintaining security, reliability, and long-term scalability.',
  },
  {
    q: '9. Does Inceptives Digital handle App Store and Google Play submissions?',
    a: 'Yes. We manage the complete publishing process for both the Apple App Store and Google Play Store. This includes preparing release builds, meeting platform requirements, submitting applications, resolving review issues, and supporting updates after the application launches successfully.',
  },
  {
    q: '10. Do you provide mobile app maintenance and support in London?',
    a: 'Yes. Inceptives Digital provides ongoing support after launch, including performance monitoring, bug fixes, security updates, operating system compatibility, infrastructure maintenance, and feature enhancements. Regular maintenance helps keep the application reliable, secure, and ready for the future.',
  },
  {
    q: '11. How is mobile app security handled?',
    a: 'Security is built into every development stage through encrypted data storage, secure authentication, protected APIs, role-based access controls, and security testing. Where required, applications are designed to support UK GDPR, Data Protection Act 2018, FCA, HIPAA, or PCI DSS requirements.',
  },
  {
    q: '12. How does Inceptives Digital validate an app idea?',
    a: 'The team validates app ideas by analysing business goals, user needs, market demand, technical feasibility, and commercial opportunities before development begins. Product discovery, feature prioritisation, and prototype testing reduce risk, improve decision-making, and increase the likelihood of building a successful product.',
  },
]

export default function LondonFaqs() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-20 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked{' '}
          <span className="text-[#00CE44]">Questions</span>
        </h2>

        {/* Accordion Container: Zero Border on Cards */}
        <div className="w-full space-y-4 sm:space-y-5">
          {londonFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border-0 overflow-hidden transition-colors duration-300 shadow-none"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-[17px] sm:text-[19px] lg:text-[20px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#00CE44]'
                        : 'text-white group-hover:text-white/90'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className={`shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? 'rotate-180 text-[#00CE44]'
                        : 'rotate-0 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-5 pb-5 sm:pb-6 pt-0 text-white/80 text-sm sm:text-base leading-relaxed font-normal text-left">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

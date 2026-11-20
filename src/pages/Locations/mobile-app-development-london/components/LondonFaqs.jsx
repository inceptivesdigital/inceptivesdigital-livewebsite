import FAQSection from '../../../../components/FAQSection'

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
  return (
    <FAQSection
      faqs={londonFaqs}
      heading={<>Frequently Asked{' '} <span className="text-[#00CE44]">Questions</span></>}
    />
  )
}

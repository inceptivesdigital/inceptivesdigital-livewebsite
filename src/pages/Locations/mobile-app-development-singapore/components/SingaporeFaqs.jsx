import FAQSection from '../../../../components/FAQSection'

export const singaporeFaqs = [
  {
    q: '1. How much does mobile app development cost in Singapore?',
    a: 'MVP builds start around SGD 30,000 and take 8 to 12 weeks. Feature-rich platforms with AI integration or custom backend work run from SGD 80,000 to over SGD 200,000, with a 3 to 6 month timeline, depending on platform count and integration complexity.',
  },
  {
    q: '2. How long does it take to build a mobile app?',
    a: 'An MVP typically takes 8 to 12 weeks to build. Larger, feature-rich products take 3 to 6 months, depending on the number of platforms, integrations, and how much custom backend work the product needs.',
  },
  {
    q: '3. Should I build a native or cross-platform mobile app?',
    a: 'Native development suits products that need deep platform-specific features, top-tier performance, or heavy App Store optimization. Cross-platform frameworks like Flutter or React Native suit products prioritizing speed to market and a shared codebase across iOS and Android.',
  },
  {
    q: '4. Do you develop mobile apps for startups and established businesses in Singapore?',
    a: 'Yes. Inceptives Digital builds mobile apps for startups validating a first product and for established Singapore businesses scaling an existing platform, with the same senior engineering team involved from discovery through launch on both.',
  },
  {
    q: '5. Do you provide mobile app modernisation services in Singapore?',
    a: 'Yes. Existing applications are assessed for performance issues, outdated architecture, usability problems, and integration limitations. The findings determine whether targeted improvements, infrastructure upgrades, or a complete rebuild make commercial and technical sense.',
  },
  {
    q: '6. Which industries does Inceptives Digital build mobile apps for?',
    a: 'Inceptives Digital has shipped mobile apps across more than 20 industries, including FinTech, healthcare, logistics, eCommerce, education, real estate, manufacturing, travel, and fitness. A related industry outside this list is still worth a conversation.',
  },
  {
    q: '7. Do you provide UI/UX design as part of mobile app development?',
    a: 'Yes. UI/UX design runs inside the discovery and validation stage of the project, with real users testing interactive prototypes before development starts, so usability problems surface while they are still cheap to fix.',
  },
  {
    q: '8. Can you integrate third-party services and enterprise systems into my mobile app?',
    a: 'Yes. Backend and API development covers integrations with payment platforms such as PayNow and SGQR, identity and authentication services like SingPass and MyInfo, as well as CRM, ERP, and other third-party APIs. Every integration is designed to support reliable performance and future product growth.',
  },
  {
    q: '9. Will you publish my app to the Apple App Store and Google Play?',
    a: 'Yes. The deployment stage covers App Store and Google Play submissions, including production configuration, listing requirements, and final release checks. Both stores retain control over review decisions, and any requested changes are addressed during submission.',
  },
  {
    q: '10. Do you provide mobile app maintenance services in Singapore?',
    a: 'Yes. Support covers application monitoring, bug fixes, security updates, operating-system compatibility, and feature improvements. The initial thirty-day support period is followed by ongoing maintenance arrangements according to the agreed project terms.',
  },
  {
    q: '11. How do you ensure security and PDPA compliance in mobile apps?',
    a: 'Every build follows PDPA data handling requirements, OWASP Top 10 protections against common vulnerabilities, and encryption for data at rest and in transit, with security reviews running through the QA stage before any release reaches production.',
  },
  {
    q: '12. Why choose Inceptives Digital as your mobile app development company in Singapore?',
    a: 'Senior engineers stay on the project from discovery through launch, architecture considers applicable PDPA requirements, and the same team has shipped mobile apps across more than 20 industries.',
  },
  {
    q: '13. Do you sign NDAs before discussing a mobile app idea?',
    a: 'Yes. Inceptives Digital signs a mutual NDA before any product discussion that involves proprietary details, protecting the idea, the data, and the business model discussed on the call.',
  },
  {
    q: '14. Can I hire mobile app developers in Singapore for an existing project?',
    a: 'Yes. Inceptives Digital offers dedicated mobile app developers and specialist engineering support for existing applications. Engagements can cover iOS, Android, Flutter, React Native, and backend development, with responsibilities and resource allocation agreed before work begins.',
  },
]

export default function SingaporeFaqs() {
  return (
    <FAQSection
      faqs={singaporeFaqs}
      heading={<>Frequently Asked <span className="text-[#00CE44]">Questions</span></>}
    />
  )
}

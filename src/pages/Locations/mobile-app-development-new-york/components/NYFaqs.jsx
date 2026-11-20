import FAQSection from '../../../../components/FAQSection'

export const nyFaqs = [
  {
    q: 'Q1. How much does it cost to build a mobile app in New York?',
    a: 'Mobile app development costs in New York typically range from $25,000 for an MVP to $250,000+ for enterprise platforms. Final pricing depends on features, integrations, compliance requirements, and platform selection.',
  },
  {
    q: 'Q2. How long does mobile app development take in New York?',
    a: 'A focused MVP is estimated at 8–14 weeks; growth applications at 14–24 weeks; and enterprise platforms at 20–32 weeks. Integrations, approvals, and security reviews can extend delivery.',
  },
  {
    q: 'Q3. Should I choose native or cross-platform app development in New York?',
    a: 'Native iOS or Android development suits demanding hardware and performance requirements. Cross-platform development with Flutter or React Native can reach both audiences from shared code when feature requirements allow it.',
  },
  {
    q: 'Q4. How do I protect my app idea before speaking with an app development company?',
    a: 'A reputable mobile app development company should be willing to sign an NDA before discussing sensitive business details. Intellectual property ownership and confidentiality terms should also be clearly defined in the contract.',
  },
  {
    q: 'Q5. Can NYC startups launch an MVP before a full mobile app?',
    a: 'Yes. A focused MVP helps NYC startups test a core use case with real customers before funding a wider release. Architecture and analytics should support subsequent iterations without assuming that every future feature belongs in the first build.',
  },
  {
    q: 'Q6. What should I expect during the mobile app development process?',
    a: 'A structured process typically includes discovery, product planning, design, development, testing, and launch support. Regular sprint reviews and demos ensure visibility throughout the project lifecycle.',
  },
  {
    q: 'Q7. How do I compare mobile app development companies in New York?',
    a: 'Look beyond hourly rates or the lowest app development quote in New York. Compare relevant projects, technical depth, delivery ownership, documented scope, and ongoing support. Request a clear mobile app development estimate before making a commitment.',
  },
  {
    q: 'Q8. Can I hire mobile app developers in NYC for an existing project?',
    a: 'Yes. Inceptives Digital provides mobile app developers for New York businesses that need additional engineering support or expertise for an existing product. Depending on the project, teams can work with iOS, Android, Flutter, React Native, and backend developers through flexible engagement models.',
  },
  {
    q: 'Q9. What happens after my mobile app is launched?',
    a: 'Mobile app maintenance services in NYC may include crash monitoring, security patches, operating-system compatibility, and fixes based on user feedback. Confirm the support period and ongoing service terms in the agreement.',
  },
]

export default function NYFaqs() {
  return (
    <FAQSection
      faqs={nyFaqs}
      heading={<>FAQs About Mobile App Development in{' '} <span className="text-[#00CE44]">New York</span></>}
    />
  )
}

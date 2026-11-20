import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    question: '1. How long does real estate app development take?',
    answer:
      'A property management system or listing platform typically takes 3 to 6 months. Platforms with AI analytics, virtual tours, and CRM integrations take 6 to 12 months. The timeline is defined precisely in the Discovery Sprint based on scope, integration complexity, and feature depth.',
  },
  {
    question: '2. What monetisation strategies work for real estate apps?',
    answer:
      'Subscription models for premium listings, agent and agency advertising, virtual tours as premium features, and commission-based transaction fees are the most proven monetisation approaches. The right model depends on your platform type and target user base — confirmed during Discovery.',
  },
  {
    question: '3. How much does real estate app development cost?',
    answer:
      'A focused property search or management application starts from $25,000. Advanced platforms with AI valuation, AR/VR virtual tours, and MLS integrations range from $100,000 to $180,000 and above. The precise number is defined in the Discovery Sprint based on your specific scope and requirements.',
  },
  {
    question: '4. What are the most in-demand real estate app ideas right now?',
    answer:
      'Property management platforms, listing marketplaces, investment analytics tools, virtual tour applications, and agent collaboration platforms are consistently the highest-demand categories. The right starting point depends on your target segment and business model.',
  },
  {
    question: '5. Why does UI/UX design matter so much in real estate apps?',
    answer:
      'Real estate users make high-value decisions based on digital experiences. A platform where users cannot find relevant listings quickly, compare properties easily, or contact agents without friction loses transactions to one that can. UI/UX in real estate is a commercial decision, not an aesthetic one.',
  },
];

export default function RealEstateFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Questions About Real Estate App Development Worth Asking Before You Build</>}
    />
  )
}

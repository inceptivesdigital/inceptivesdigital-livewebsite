import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'How long does fitness app development take?',
      a: 'A fitness application with core features typically takes 3 to 6 months. Applications with advanced features, AI coaching, wearable integrations, live sessions, and gamification take 6 to 9 months. The timeline is defined precisely in the Discovery Sprint based on scope and complexity.',
    },
    {
      q: 'What technologies do you use and how do they ensure performance?',
      a: 'Flutter, React Native, Node.js, and AWS or Firebase are the core of our fitness app stack. Technologies are selected based on the specific features, integration requirements, and scaling strategy of your application, not applied universally across every project.',
    },
    {
      q: 'Do you provide support and maintenance after launch?',
      a: 'Yes. Bug fixes, feature enhancements, and iOS and Android compatibility updates are provided continuously after deployment. Post-launch support is scoped and priced separately from the initial development engagement.',
    },
    {
      q: 'How do you protect user health and personal data?',
      a: 'End-to-end encryption, secure API integrations, and multi-factor authentication are applied across every fitness application handling personal health data. HIPAA and GDPR compliance are built into the architecture from the start. Regular security audits and performance tests are completed post-launch.',
    },
    {
      q: 'How much does fitness app development cost?',
      a: 'A focused fitness application starts from $25,000. Full-featured enterprise fitness platforms with AI coaching, wearable integrations, and live sessions range from $80,000 to $150,000 and above. The precise number is defined in the Discovery Sprint based on your specific scope and requirements.',
    },
  ]

export default function FitnessFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Questions About{' '} <span className="text-[#00CE44]">Fitness App Development</span> Worth Asking Before You Build</>}
    />
  )
}

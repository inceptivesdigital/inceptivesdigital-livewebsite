import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'How long does fintech app development take?',
      a: 'A basic fintech application takes 3 to 6 months. Complex platforms with advanced AI, blockchain integration, and multi-bank connectivity take 9 months or more. The timeline is defined precisely in the Discovery Sprint based on scope, compliance requirements, and integration complexity.',
    },
    {
      q: 'How do you handle financial data security?',
      a: 'End-to-end encryption, secure APIs, biometric authentication, and strict access controls are applied across every fintech application. PCI DSS, GDPR, and KYC/AML compliance are built into the architecture from day one. Not added before delivery.',
    },
    {
      q: 'Do you offer post-launch maintenance?',
      a: 'Yes. Regular updates, feature enhancements, security patches, and performance monitoring are provided continuously after deployment. Financial applications require ongoing compliance alignment as regulations evolve — that is part of the post-launch engagement.',
    },
    {
      q: 'Can you integrate with banks and payment systems?',
      a: 'Yes. Financial APIs, payment gateways, and banking networks are integrated securely into every fintech application. Plaid, Stripe, PayPal, and major banking network connectivity are built for reliable, real-time transactions.',
    },
    {
      q: 'What compliance standards do you follow?',
      a: 'PCI DSS, GDPR, PSD2, KYC, and AML compliance are built into every fintech application. Every data flow, authentication layer, and transaction pathway is designed around regulatory requirements before development begins.',
    },
  ]

export default function FintechFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Questions About{' '} <span className="text-[#00CE44]">Fintech App Development</span> Worth Asking Before You Build</>}
    />
  )
}

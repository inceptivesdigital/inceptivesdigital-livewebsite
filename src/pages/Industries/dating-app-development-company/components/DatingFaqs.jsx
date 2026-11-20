import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    question: '1. How long does dating app development take?',
    answer:
      'A basic dating application takes 3 to 6 months. Platforms with advanced AI matchmaking, video calling, and location-based discovery take 9 to 12 months and above. Timeline is defined precisely in the Discovery Sprint based on scope and complexity.',
  },
  {
    question: '2. Can you build a dating app around our specific concept?',
    answer:
      'Yes. Every application is built from scratch around your brand identity, target audience, and business objectives. No templates. No generic solutions adapted to fit your context.',
  },
  {
    question: '3. What features can our dating app include?',
    answer:
      'User profiles, real-time chat, AI-based matchmaking, geolocation, swiping, push notifications, video calling, and in-app purchases are all buildable. The right feature set is determined in Discovery based on your specific audience and business model.',
  },
  {
    question: '4. Do you provide support after launch?',
    answer:
      'Yes. Performance monitoring, bug fixes, feature updates, and scaling support are provided continuously after deployment. The engagement does not end at launch.',
  },
  {
    question: '5. How do you protect user data in dating applications?',
    answer:
      'End-to-end encryption, secure API integrations, multi-factor authentication, and GDPR-compliant data practices are built into every dating platform. User privacy and data security are architectural decisions, not post-launch additions.',
  },
];

export default function DatingFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Questions About Dating App Development Worth Asking Before You Build</>}
    />
  )
}

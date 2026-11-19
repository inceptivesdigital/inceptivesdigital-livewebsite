import FAQSection from '../../../../components/FAQSection'

export const austinFaqs = [
  {
    q: 'How much does mobile app development cost in Austin?',
    a: 'Mobile app development in Austin typically starts at $18,000 for a focused MVP. Advanced applications range from $45,000 - $120,000, while enterprise platforms start at $120,000, depending on scope and integrations.',
  },
  {
    q: 'How long does mobile app development take in Austin?',
    a: 'Mobile app development in Austin typically takes 8–14 weeks for a focused MVP, 14–24 weeks for advanced applications, and 20–32 weeks for enterprise platforms. Complex requirements can extend these development timelines.',
  },
  {
    q: 'Should I choose native or cross-platform mobile app development?',
    a: 'Choose native iOS or Android development for demanding performance and advanced hardware integrations. Cross-platform development with Flutter or React Native reduces duplicated engineering effort when your product needs both platforms.',
  },
  {
    q: 'Why hire a mobile app development company in Austin?',
    a: 'Hiring an Austin app development company offers easier local collaboration and familiarity with Texas business requirements. Inceptives Digital supports startups and enterprises with custom applications, technical consulting, and ongoing development services.',
  },
  {
    q: 'What should I ask before hiring mobile app developers in Austin?',
    a: 'When hiring mobile app developers, ask about relevant projects, technical expertise, delivery milestones, source code ownership, and post-launch support. Confirm how the team handles scope changes and communicates throughout development before signing.',
  },
  {
    q: 'Can I launch an MVP before developing a complete mobile app?',
    a: 'Yes. Inceptives Digital offers MVP app development in Austin starting at $18,000. A discovery sprint identifies essential features, technical dependencies, and launch priorities before you commit to full-scale development.',
  },
  {
    q: 'What mobile app maintenance and support services do you provide?',
    a: 'Inceptives Digital includes 30 days of post-launch support with every project. Ongoing mobile app maintenance services cover security patches, crash monitoring, performance improvements, operating system updates, and application enhancements.',
  },
  {
    q: 'Does Inceptives Digital sign NDAs before discussing app ideas?',
    a: 'Yes. Inceptives Digital signs mutual nondisclosure agreements before discovery discussions to protect confidential business information. The agreement establishes confidentiality obligations for shared product concepts, technical documentation, and proprietary project details.',
  },
  {
    q: 'Can I hire dedicated iOS and Android app developers in Austin?',
    a: 'Yes. Inceptives Digital provides dedicated iOS and Android app developers for Austin businesses. Our engineers specialize in Swift, Kotlin, and platform-specific development, with flexible team arrangements for ongoing projects.',
  },
  {
    q: 'What Texas compliance requirements apply to mobile app development?',
    a: 'Austin mobile applications may need to address the Texas Data Privacy and Security Act, biometric privacy rules, HIPAA, or PCI DSS. Applicable requirements depend on data processing, industry, and business operations.',
  },
  {
    q: 'Do you offer Flutter and React Native app development in Austin?',
    a: 'Yes. Inceptives Digital provides Flutter and React Native app development services for Austin startups and enterprises. Both frameworks support shared-codebase development for iOS and Android, depending on your product requirements.',
  },
  {
    q: 'Can you modernize an existing mobile application in Austin?',
    a: 'Yes. Our mobile app modernization services help Austin businesses upgrade outdated applications, resolve performance issues, and improve compatibility. We assess existing architecture and integrations before recommending redevelopment or targeted improvements.',
  },
]

export default function AustinFaqs() {
  return <FAQSection faqs={austinFaqs} heading="Frequently Asked Questions." />
}

import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: '1. How much does mobile app development cost in Dubai?',
      a: 'Mobile app development cost in Dubai typically ranges from AED 110,000 for an MVP to AED 550,000+ for enterprise platforms. The final investment depends on product scope, technical complexity, and integrations, with a fixed proposal prepared following the discovery phase.',
    },
    {
      q: '2. How long does it take to build a mobile app in Dubai?',
      a: 'A focused MVP typically takes 8–14 weeks, while growth-stage applications require 14–24 weeks. Enterprise platforms may take 20–32 weeks or longer, depending on integrations, security requirements, and external approvals.',
    },
    {
      q: '3. What is the difference between native and cross-platform app development?',
      a: 'Native development builds separately for iOS and Android using Swift and Kotlin, best suited to performance-heavy features. Cross-platform development, through Flutter or React Native, shares one codebase across both platforms, cutting timeline and long-term maintenance cost.',
    },
    {
      q: '4. What data protection laws apply to mobile apps built in Dubai?',
      a: 'The UAE Personal Data Protection Law governs applicable personal data processing, individual rights, and security obligations. Additional requirements may arise under DIFC regulations or sector-specific laws. Data hosting and international transfers require assessment against the relevant legal framework.',
    },
    {
      q: '5. Do mobile apps built for the Dubai market need multilingual support?',
      a: "Most do. Dubai's resident and customer base regularly switches between Arabic, English, Hindi, and Urdu, so interfaces typically need Arabic right-to-left layouts alongside these languages from the first wireframe rather than as a later localization pass.",
    },
    {
      q: '6. Which industries use custom mobile app development services in Dubai?',
      a: 'FinTech, healthcare, real estate, logistics, retail, hospitality, and government-adjacent projects represent the most active sectors, though most customer-facing or operational businesses now use custom development. Inceptives Digital has delivered projects across more than twenty of these sectors.',
    },
    {
      q: '7. What mobile app development services are available in Dubai?',
      a: 'Available services typically span iOS, Android, React Native, Flutter, Kotlin Multiplatform, and cross-platform development, alongside web application and backend engineering. Inceptives Digital offers all of these under one engagement rather than splitting a project across separate vendors.',
    },
    {
      q: '8. Which mobile app development company in Dubai works with startups and growth-stage founders?',
      a: 'Inceptives Digital works with founders building a new product and product leaders scaling an existing one, covering iOS, Android, cross-platform, and backend engineering across Dubai and international markets under a single engagement.',
    },
    {
      q: '9. Do mobile app development companies in Dubai offer post-launch support?',
      a: 'Yes. Most reputable studios include monitoring, performance tuning, and bug fixes as part of a build, though the length and depth of that support vary by contract. Inceptives Digital sets a defined response window for critical fixes versus routine updates, agreed in writing rather than left open-ended.',
    },
    {
      q: '10. What makes a mobile app development company one of the best in Dubai?',
      a: 'Inceptives Digital brings over eight years of product engineering experience, with 70+ projects delivered across 20+ industries. Clients can assess its development expertise through published case studies, independent reviews, and documented delivery processes.',
    },
    {
      q: '11. Who owns the code and intellectual property after a mobile app is built?',
      a: 'The client typically owns all code and intellectual property once final payment clears, provided the contract states this explicitly. Inceptives Digital transfers full IP ownership on project completion, a term confirmed in writing before development starts rather than negotiated after launch.',
    },
    {
      q: '12. Can I hire mobile app developers in Dubai for an existing project?',
      a: 'Yes. Inceptives Digital offers dedicated development teams and IT staff augmentation for businesses extending an existing application or adding engineering capacity. Engagements can include iOS, Android, cross-platform, and backend specialists, with responsibilities agreed before development begins.',
    },
  ]

export default function DubaiFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions.</>}
    />
  )
}

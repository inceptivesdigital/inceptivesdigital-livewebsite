import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How much does it cost to build a custom real estate app?',
    a: 'Real estate app development cost ranges from $25,000 for focused property search portals to $250,000+ for enterprise platforms featuring AI valuation engines, AR/VR tours, and multi-board MLS sync. Final pricing is locked into a fixed contract after a technical discovery sprint.',
  },
  {
    q: '2. How long does real estate app development take?',
    a: 'Basic property management or listing platforms require 8 to 14 weeks to build. Complex enterprise real estate software with predictive analytics, multi-role user dashboards, and third-party MLS feeds typically requires 20 to 32+ weeks of engineering.',
  },
  {
    q: '3. What monetization models work best for real estate applications?',
    a: 'Proven monetization models include tiered software subscriptions for agencies, featured listing fees, virtual tour add-ons, agent advertising placements, and commission-based transaction processing fees. The optimal model is aligned with your specific platform category during discovery.',
  },
  {
    q: '4. What are the most in-demand real estate app ideas right now?',
    a: 'High-demand solutions include cloud-based property management software, niche rental marketplaces, AI-powered property valuation tools, immersive virtual tour applications, and secure transaction management systems. The right starting point depends on your target market segment.',
  },
  {
    q: '5. Why is UI/UX design critical for real estate applications?',
    a: 'Effective UI/UX design helps users find relevant listings and contact agents without unnecessary friction. Clear navigation and intuitive property search workflows support a smoother inquiry experience.',
  },
  {
    q: '6. How do you handle MLS data integration and real-time listing updates?',
    a: 'We integrate authorized MLS feeds through supported APIs, including RESO Web API implementations. Automated synchronization workflows update listing information according to source availability, API capabilities, and applicable MLS data policies.',
  },
  {
    q: '7. How do you ensure GDPR and local real estate compliance in custom applications?',
    a: "We incorporate encryption and role-based access controls into application architecture. Our developers address applicable privacy requirements, including GDPR where relevant, according to the platform's data processing responsibilities and operating markets.",
  },
  {
    q: '8. Can custom real estate apps integrate with existing enterprise CRM and ERP systems?',
    a: 'Yes. Our engineers build API-first architectures that connect your real estate platform seamlessly with industry tools like Salesforce, HubSpot, Follow Up Boss, and major accounting software, automating lead routing and data synchronization.',
  },
  {
    q: '9. What is the role of AI in modern real estate application development?',
    a: 'Artificial intelligence drives predictive property valuation, automated price trend forecasting, personalized property recommendations based on user search behavior, and 24/7 conversational chatbots that qualify leads and schedule client viewings.',
  },
  {
    q: '10. How do you secure digital documents and transactions within a property app?',
    a: 'We use encrypted document storage and access controls to secure sensitive records. Supported e-signature platforms and tokenized payment integrations help protect digital property transactions.',
  },
  {
    q: '11. Who owns the source code and platform intellectual property after launch?',
    a: 'Your business retains 100% ownership of your intellectual property following the signed development agreement. The contract defines deliverable handover arrangements and any applicable third-party licensing restrictions.',
  },
  {
    q: '12. Do you build native real estate apps or cross-platform mobile solutions?',
    a: 'We build both. Depending on your performance goals, hardware requirements (such as AR/VR or high-frame-rate mapping), and budget, we engineer high-performance native apps using Swift and Kotlin or cost-effective cross-platform applications using Flutter and React Native.',
  },
]

export default function RealEstateFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Real Estate App Development <span className="text-[#00CE44]">FAQs</span>
        </>
      }
    />
  )
}

import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How long does it take to build a startup app?',
    a: 'A focused MVP with a defined feature set takes 6 to 10 weeks from signed specification to deployment. A feature-rich marketplace or SaaS platform takes 14 to 24 weeks, depending on integration complexity and the number of user personas served. Timeline confirmed during Discovery and held through sprint-based delivery.',
  },
  {
    q: '2. What is the minimum budget to start a startup app project?',
    a: 'A production-ready MVP starts from $8,000 to $12,000 for a narrowly scoped single-platform application. Most startup engagements range from $25,000 to $80,000 for a multi-platform product with payment integration, admin dashboards, and analytics. The precise number is defined in the Discovery Sprint before development begins.',
  },
  {
    q: '3. Do you sign NDAs and protect intellectual property?',
    a: 'Yes. NDAs were signed at the first engagement. All source code, designs, and intellectual property created during the project will be assigned to you in full upon completion. No licensing rights, usage rights, or portfolio rights are retained without explicit written consent.',
  },
  {
    q: '4. Can you help make the app investment-ready?',
    a: 'Yes. Beyond building the product, we prepare technical due diligence documentation, architecture decision records, security posture summaries, and scalability roadmaps that investors and their technical advisors expect to review during angel, seed, and Series A processes.',
  },
  {
    q: '5. Do you offer cross-platform or native mobile development?',
    a: 'Both. React Native and Flutter deliver the performance most startups need at a significantly lower cost than native development. Native Swift or Kotlin is recommended only when the application requires direct hardware API access unavailable through cross-platform frameworks.',
  },
  {
    q: '6. How do you handle scope changes during development?',
    a: 'Scope changes are evaluated for timeline and budget impact, documented in writing, and approved before implementation. Market learning incorporated without derailing delivery predictability. Agile sprints accommodate product evolution without open-ended scope creep.',
  },
]

export default function StartupFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Frequently Asked Questions About{' '}
          <span className="text-[#00CE44]">Startup App Development</span>
        </>
      }
    />
  )
}

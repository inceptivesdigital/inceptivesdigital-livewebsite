import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'How do you turn an education app concept into a clear product roadmap?',
      a: 'We start with discovery workshops that define user roles, learning objectives, key features, and compliance requirements. The output is a structured product roadmap with distinct phases, clear timelines, and technology decisions documented before development begins.',
    },
    {
      q: 'What makes Inceptives Digital different from other education app development companies?',
      a: 'Domain knowledge is applied before architecture decisions are made. We understand assessments, attendance tracking, reporting workflows, and institutional processes, not just app development. That difference shows up in how the product performs for real learners and educators.',
    },
    {
      q: 'How much does education app development cost?',
      a: 'A focused microlearning or quiz application starts from $10,000. Full AI-powered adaptive learning platforms with AR/VR integrations range from $120,000 to $250,000 and above. The precise number is defined in the Discovery Sprint based on your specific scope, compliance requirements, and feature depth.',
    },
    {
      q: 'Can you integrate with our existing LMS or student information system?',
      a: 'Yes. Integration with existing LMS platforms, student information systems, HR tools, CRMs, payment gateways, and video platforms is standard in our education app development engagements. New applications built to extend your existing ecosystem rather than replace it.',
    },
    {
      q: 'How do you handle student data privacy and compliance?',
      a: 'COPPA, FERPA, and GDPR compliance are built into the architecture from the start. Encrypted data transfer, secure authentication, role-based access control, and audit logging are applied across every education application handling student data.',
    },
    {
      q: 'What support do you provide after the education app launches?',
      a: 'Bug fixes, performance optimisation, feature updates, and curriculum alignment are provided continuously after deployment. Analytics are reviewed regularly to improve content quality, learner engagement, and platform performance over time.',
    },
  ]

export default function EducationFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Questions About{' '} <span className="text-[#00CE44]">Education App Development</span> Worth Asking Before You Build</>}
    />
  )
}

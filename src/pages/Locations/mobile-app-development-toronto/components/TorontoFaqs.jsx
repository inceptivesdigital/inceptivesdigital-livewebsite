import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

export const torontoFaqs = [
  {
    q: '1. How much does mobile app development cost in Toronto?',
    a: (
      <>
        Mobile app development in Toronto typically ranges from CAD $25,000–$45,000 for an{' '}
        <Link to="/mvp-development" className="text-[#00CE44] font-medium underline underline-offset-4">
          MVP
        </Link>
        , CAD $45,000–$90,000 for a standard business application, and CAD $90,000–$180,000+ for enterprise platforms. The final investment depends on features, integrations, complexity, security requirements, and product goals.
      </>
    ),
  },
  {
    q: '2. How long does it take to build a mobile app?',
    a: (
      <>
        The{' '}
        <Link to="/blog/app-development-timeline" className="text-[#00CE44] font-medium underline underline-offset-4">
          development timeline
        </Link>{' '}
        depends on the type of app. Most MVPs fall around 8–12 weeks, while standard business apps usually require 3–5 months. Larger enterprise platforms with advanced workflows, integrations, and security requirements may take 6–12+ months.
      </>
    ),
  },
  {
    q: '3. Should I build a native or cross-platform mobile app?',
    a: 'The right choice depends on the product strategy. Native apps work well when performance, platform-specific capabilities, or premium user experiences are priorities. Cross-platform solutions can be effective when faster delivery and broader platform coverage are more important.',
  },
  {
    q: '4. Do you develop apps for startups and established businesses?',
    a: 'Yes. We work with startups validating new ideas, growing companies expanding digital products, and established organizations modernizing existing platforms. Each engagement begins by understanding the product stage, business objectives, and technical requirements.',
  },
  {
    q: '5. Can I hire mobile app developers in Toronto for an existing project?',
    a: 'Yes. Inceptives Digital provides mobile app developers for Toronto businesses that need additional engineering capacity or specialized technical support. Depending on the project, teams can engage iOS, Android, React Native, Flutter, and backend developers through dedicated-team or staff augmentation models.',
  },
  {
    q: '6. Do you provide mobile app modernization services in Toronto?',
    a: 'Yes. Inceptives Digital assesses existing mobile applications for performance issues, outdated architecture, and integration limitations. Toronto businesses can modernize individual components, expand functionality, or rebuild systems when the existing foundation no longer supports their requirements.',
  },
  {
    q: '7. Which industries do you specialize in?',
    a: "We engineer mobile products across industries including FinTech, Healthcare, Logistics, eCommerce, Real Estate, Education, Travel, Manufacturing, and Fitness. Our approach adapts to each industry's workflows, customer expectations, operational requirements, and compliance needs.",
  },
  {
    q: '8. Do you provide UI/UX design as part of mobile app development?',
    a: 'Yes. UX and UI design are integrated into the product development process. We create user flows, wireframes, prototypes, and high-fidelity interfaces that help validate experiences before development and ensure products remain intuitive and accessible.',
  },
  {
    q: '9. Can you integrate third-party services into my mobile app?',
    a: "Yes. We integrate external platforms such as payment systems, CRM and ERP tools, authentication providers, maps, analytics platforms, and cloud services based on the product's functional and scalability requirements.",
  },
  {
    q: '10. Will you help publish the app to the App Store and Google Play?',
    a: (
      <>
        Yes. We support the complete{' '}
        <Link
          to="/blog/publish-update-an-app-on-app-store-google-play"
          className="text-[#00CE44] font-medium underline underline-offset-4"
        >
          publish the app
        </Link>{' '}
        release process, including store preparation, compliance requirements, testing,{' '}
        <Link to="/app-store-optimization" className="text-[#00CE44] font-medium underline underline-offset-4">
          app store optimization
        </Link>
        , submission, and deployment.{' '}
        <Link to="/post-launch-analytics-iteration" className="text-[#00CE44] font-medium underline underline-offset-4">
          Post-launch
        </Link>
        , we monitor performance and help address early product improvements.
      </>
    ),
  },
  {
    q: '11. Do you provide mobile app maintenance and support in Toronto?',
    a: 'Yes. Mobile app maintenance services for Toronto businesses include performance monitoring, bug fixes, security updates, and operating-system compatibility improvements. Support can also cover feature enhancements and technical changes as product requirements evolve.',
  },
  {
    q: '12. How do you ensure mobile app security?',
    a: 'Security is considered throughout the product lifecycle. We implement secure authentication, encrypted data handling, API protection, access controls, and appropriate compliance considerations such as PHIPA, PIPEDA, and FINTRAC requirements where applicable.',
  },
  {
    q: '13. Why choose Inceptives Digital for mobile app development in Toronto?',
    a: 'Inceptives Digital combines product strategy, UX design, and engineering to develop mobile applications around practical business requirements. From product validation to technical architecture and launch, each stage supports the needs of Toronto startups, growing businesses, and established enterprises.',
  },
  {
    q: '14. Do you work with Toronto startups?',
    a: 'Yes. We work with startups across Toronto and the GTA, helping founders move from early concepts to validated products and scalable applications. Our process helps startups define priorities, reduce product risk, and identify technology that supports future growth.',
  },
  {
    q: '15. Do you sign NDAs?',
    a: (
      <>
        Yes. We understand that early{' '}
        <Link to="/product-strategy-consulting" className="text-[#00CE44] font-medium underline underline-offset-4">
          product ideas
        </Link>
        , business models, and technical concepts require confidentiality. We are comfortable signing NDAs and maintaining secure processes throughout strategy, design, development, and ongoing product support.
      </>
    ),
  },
  {
    q: '16. Can you modernize legacy enterprise software?',
    a: 'Yes. We help organizations modernize outdated applications by assessing architecture, performance, security, and usability challenges. Depending on the product needs, we improve existing systems, rebuild critical components, or create a migration path toward modern technology.',
  },
  {
    q: '17. How do you validate app ideas?',
    a: 'Validation starts before development. We identify assumptions, analyze user needs, review market opportunities, and prioritize the risks that could impact success. Through discovery, research, and prototyping, we help teams confirm the right product direction before investing heavily in engineering.',
  },
]

export default function TorontoFaqs() {
  return (
    <FAQSection
      faqs={torontoFaqs}
      heading={<>Frequently Asked{' '} <span className="text-[#00CE44]">Questions</span></>}
    />
  )
}

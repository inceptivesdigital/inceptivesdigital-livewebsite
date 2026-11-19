import { useState } from 'react'
import { Link } from 'react-router-dom'

export const torontoFaqs = [
  {
    q: '1. How much does mobile app development cost in Toronto?',
    a: (
      <>
        Mobile app development in Toronto typically ranges from CAD $25,000–$45,000 for an{' '}
        <Link to="/mvp-development" className="text-[#00CE44] hover:underline font-medium">
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
        <Link to="/blog/app-development-timeline" className="text-[#00CE44] hover:underline font-medium">
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
          className="text-[#00CE44] hover:underline font-medium"
        >
          publish the app
        </Link>{' '}
        release process, including store preparation, compliance requirements, testing,{' '}
        <Link to="/app-store-optimization" className="text-[#00CE44] hover:underline font-medium">
          app store optimization
        </Link>
        , submission, and deployment.{' '}
        <Link to="/post-launch-analytics-iteration" className="text-[#00CE44] hover:underline font-medium">
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
        <Link to="/product-strategy-consulting" className="text-[#00CE44] hover:underline font-medium">
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
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-20 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked{' '}
          <span className="text-[#00CE44]">Questions</span>
        </h2>

        {/* Accordion Container: Zero Border on Cards */}
        <div className="w-full space-y-4 sm:space-y-5">
          {torontoFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border-0 overflow-hidden transition-colors duration-300 shadow-none"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-[17px] sm:text-[19px] lg:text-[20px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#00CE44]'
                        : 'text-white group-hover:text-white/90'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className={`shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? 'rotate-180 text-[#00CE44]'
                        : 'rotate-0 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-5 pb-5 sm:pb-6 pt-0 text-white/80 text-sm sm:text-base leading-relaxed font-normal text-left">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

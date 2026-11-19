import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SFFaqs() {
  // Default first item expanded as on homepage
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'How Much Does Mobile App Development Cost in San Francisco?',
      renderA: () => (
        <p>
          Mobile app development in San Francisco starts at $25,000 for foundation applications. Advanced apps cost 60,000–150,000, while enterprise platforms start at $150,000. Integrations, platform requirements, and application complexity determine the final investment.
        </p>
      ),
    },
    {
      q: 'How Long Does It Take to Develop a Mobile App in San Francisco?',
      renderA: () => (
        <p>
          Mobile app development typically takes 8–32 weeks. Foundation applications require 8–14 weeks, advanced products take 14–24 weeks, and enterprise platforms need 20–32 weeks, depending on technical scope and integration requirements.
        </p>
      ),
    },
    {
      q: 'Can I Build a Mobile App Without Technical Experience?',
      renderA: () => (
        <p>
          Yes. Nontechnical founders can develop mobile applications with an experienced development partner. Inceptives Digital handles{' '}
          <Link to="/discovery-sprint" className="underline text-[#00CE44] hover:text-white transition-colors">
            product discovery
          </Link>
          , technical architecture, UI/UX design, engineering, and launch planning while clients retain control over product decisions.
        </p>
      ),
    },
    {
      q: 'How Can I Validate My App Idea Before Investing in Development?',
      renderA: () => (
        <p>
          Validate your app idea through customer interviews, competitor research, and a focused{' '}
          <Link to="/mvp-development" className="underline text-[#00CE44] hover:text-white transition-colors">
            minimum viable product (MVP)
          </Link>
          . San Francisco startups can also use design-partner pilots to test essential workflows before committing to full-scale development.
        </p>
      ),
    },
    {
      q: 'Should My San Francisco Startup Develop an iOS or Android App First?',
      renderA: () => (
        <p>
          Choose iOS or Android based on your target users, budget, and required features. An iOS-first release suits some audiences, while Flutter or React Native can support simultaneous launches with shared engineering.
        </p>
      ),
    },
    {
      q: 'What Is the Difference Between Native and Cross-Platform Mobile Apps?',
      renderA: () => (
        <p>
          Native apps use platform-specific technologies such as Swift for iOS and Kotlin for Android. Cross-platform apps use frameworks like Flutter or React Native to share code, reducing duplication when platform requirements permit.
        </p>
      ),
    },
    {
      q: 'What Services Does a Mobile App Development Company in San Francisco Provide?',
      renderA: () => (
        <p>
          Mobile app development services in San Francisco include product discovery, UI/UX design, iOS and Android engineering, backend development, API integrations, quality assurance, app store deployment, and post-launch maintenance.
        </p>
      ),
    },
    {
      q: 'What Should I Look for When Hiring a Mobile App Development Company in San Francisco?',
      renderA: () => (
        <p>
          Prioritize relevant case studies, verified client reviews, technical expertise, and transparent project estimates. Confirm source code ownership, security practices, development milestones, and{' '}
          <Link to="/product-rescue-scaling" className="underline text-[#00CE44] hover:text-white transition-colors">
            rescue and scaling
          </Link>{' '}
          before selecting a San Francisco mobile app development partner.
        </p>
      ),
    },
    {
      q: 'How Do I Find a Mobile App Development Company Near Me in San Francisco?',
      renderA: () => (
        <p>
          Start with verified client reviews, relevant mobile app projects, and a clear development process. Evaluate San Francisco service coverage, technical expertise, project estimates, and communication arrangements before choosing a development partner.
        </p>
      ),
    },
    {
      q: 'What Does iOS App Development in San Francisco Include?',
      renderA: () => (
        <p>
          iOS app development in San Francisco includes product planning, UI/UX design, native Swift engineering, API integrations,{' '}
          <a
            href="https://inceptivesdigital.com/blog/publish-update-an-app-on-app-store-google-play"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            App Store deployment
          </a>
          , and maintenance. Project scope depends on business requirements and iPhone or iPad functionality.
        </p>
      ),
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-20 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, white, centered matching Homepage FAQSection exactly */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked Questions.
        </h2>

        {/* Accordion Container matching Homepage */}
        <div className="w-full space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border border-white/[0.04] overflow-hidden transition-colors duration-300"
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  {/* Question Text: Green #00CE44 when open, White when closed */}
                  <h3
                    className={`text-[17px] sm:text-[19px] lg:text-[20px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#00CE44]' : 'text-white group-hover:text-white/90'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  {/* Chevron Icon: Green pointing up when open, gray pointing down when closed */}
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

                {/* Smooth Animated Accordion Dropdown Content (CSS Grid Row Transition) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-5 pb-6 sm:pb-7 pt-0 text-slate-300 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-normal [&_a]:text-[#00CE44] [&_a]:underline hover:[&_a]:text-white [&_a]:transition-colors">
                      {faq.renderA()}
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

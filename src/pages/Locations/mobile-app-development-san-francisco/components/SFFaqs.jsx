import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

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
          <Link to="/discovery-sprint" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
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
          <Link to="/mvp-development" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
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
          <Link to="/product-rescue-scaling" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
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
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            App Store deployment
          </a>
          , and maintenance. Project scope depends on business requirements and iPhone or iPad functionality.
        </p>
      ),
    },
  ]

export default function SFFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions.</>}
    />
  )
}

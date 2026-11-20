import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'How do white-label engineering partnerships work with Inceptives Digital?',
      a: 'We can operate entirely behind the scenes under your agency’s brand or as an introduced technical co-builder. We join your Slack or Teams, adopt your project management workflows, and push commits to your private repositories.',
    },
    {
      q: 'Can you work directly under our agency’s branding and email domain?',
      a: 'Yes. In full white-label engagements, our engineers use your domain email addresses, participate in client sprint reviews under your brand, and represent your technical capability seamlessly.',
    },
    {
      q: 'How are project scopes, pricing, and partner margins structured?',
      a: 'We offer fixed-scope milestone billing, dedicated sprint pods, and monthly retainer models. We provide transparent wholesale engineering rates so you maintain healthy agency margins on every project.',
    },
    {
      q: 'What happens if a client project requires post-launch support or ongoing iteration?',
      a: 'We offer structured SLA agreements, maintenance retainers, and continuous sprint iteration tiers to ensure long-term stability and continuous revenue compounding for your agency.',
    },
    {
      q: 'Which tech stacks and platforms do you specialize in for partner engagements?',
      a: 'We specialize in native iOS (Swift), Android (Kotlin), cross-platform (React Native, Flutter), web apps (React, Next.js), backend systems (Node.js, Python, Go), and cloud/AI infrastructure (AWS, GCP, OpenAI).',
    },
    {
      q: 'Who owns the intellectual property and code commits?',
      a: 'You and your client maintain 100% ownership of all source code, Figma design files, documentation, and database schemas from day one under strict mutual NDAs.',
    },
    {
      q: 'How quickly can your engineering pods onboard to a new partner project?',
      a: 'Once the Statement of Work (SOW) is confirmed and environments are provisioned, our engineering teams typically kick off development within 3 to 5 business days.',
    },
  ]

export default function PartnershipFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked <span className="text-[#00CE44]">Questions</span></>}
    />
  )
}

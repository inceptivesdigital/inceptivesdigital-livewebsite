import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'When should a product start a post-launch analytics engagement?',
      a: 'Right after launch. The first 30 days generate the clearest behavioral signals your product will ever produce, so starting early costs far less than catching up later.',
    },
    {
      q: 'What metrics does the post-launch audit cover?',
      a: 'Day-one, day-seven, and day-30 retention rates, funnel completion, error frequency, session depth, feature adoption, and acquisition-to-activation conversion. Additional metrics get added based on your product category.',
    },
    {
      q: 'How long does a post-launch engagement typically run?',
      a: 'At least three months. You need two full test-and-measure cycles to get reliable directional signals, and compounding improvements take sustained work to build.',
    },
    {
      q: 'Do you work with products built by other development teams?',
      a: 'All the time. The audit works across any codebase or tech stack. A short onboarding session at the start gets the team fully up to speed.',
    },
    {
      q: 'What is the difference between post-launch iteration and ongoing maintenance?',
      a: 'Maintenance keeps things stable. Iteration moves your performance metrics forward. They serve different purposes, and the studio handles both within the same engagement when needed.',
    },
    {
      q: 'What does your A/B testing process involve?',
      a: 'Each experiment runs with a single variable, a defined hypothesis, a calculated sample size, and a significance threshold that must be hit before any result counts.',
    },
    {
      q: 'Can the team help reprioritize a product roadmap based on post-launch data?',
      a: 'Absolutely. The initial roadmap almost always shifts after real users arrive. The audit surfaces which planned items still hold up and which assumptions the data has already contradicted.',
    },
    {
      q: 'Do you conduct user research as part of the engagement?',
      a: (
        <>
          Yes. In-app surveys, user interviews, and support ticket analysis run alongside behavioral data throughout, adding the interpretive context that analytics alone cannot provide. The{' '}
          <Link
            to="/blog/the-role-of-ui-ux-design-in-mobile-app-success"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            role of UI/UX design in mobile app success
          </Link>{' '}
          becomes especially clear when qualitative feedback is compared with observed behavior.
        </>
      ),
    },
    {
      q: 'How do reporting cycles work?',
      a: 'Reports land biweekly at the close of each iteration cycle. They cover what moved, why it moved, and what gets prioritized next, with every metric tied to a defined target.',
    },
    {
      q: 'What happens if the product needs significant development work after the audit?',
      a: (
        <>
          Development capacity is built into the Iterate and Accelerate tiers. If a Stabilize engagement surfaces bigger issues, the scope gets adjusted through{' '}
          <Link
            to="/business-process-automation"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            business process automation
          </Link>{' '}
          and development support so nothing identified goes unresolved.
        </>
      ),
    },
    {
      q: 'Do you work with early-stage products or only established ones?',
      a: (
        <>
          Both. Early-stage products benefit from strong analytics habits and{' '}
          <Link
            to="/mvp-development"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            MVP development
          </Link>
          , while established products often carry accumulated UX and technical debt that a structured audit quickly surfaces and prioritizes. Early-stage budgeting can also be benchmarked against typical{' '}
          <Link
            to="/blog/mvp-development-cost"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            MVP development cost
          </Link>{' '}
          before larger iteration cycles begin.
        </>
      ),
    },
    {
      q: 'How do you get started with Inceptives Digital?',
      a: (
        <>
          Book a session with the team. The first conversation covers your product, its current performance, and exactly what a post-launch engagement would focus on and cost. Where discoverability is part of the issue,{' '}
          <Link
            to="/blog/app-store-optimization-aso"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            app store optimization and ASO
          </Link>
          , and{' '}
          <Link
            to="/blog/effective-marketing-strategies-for-mobile-apps"
            className="underline text-[#00CE44] font-normal hover:text-white transition-colors"
          >
            effective marketing strategies for mobile apps
          </Link>{' '}
          can be included in the post-launch plan.
        </>
      ),
    },
  ]

export default function PostLaunchFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked{' '} <span className="text-[#00CE44]">Questions</span></>}
    />
  )
}

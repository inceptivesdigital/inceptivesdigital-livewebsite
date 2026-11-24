import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How much does it cost to build a custom education app?',
    a: 'Custom education app costs range from $10,000 for focused learning MVPs to $250,000+ for enterprise platforms with AI tutoring and institutional integrations. Final pricing depends on feature scope, compliance needs, and platform targets.',
  },
  {
    q: '2. How long does it take to develop an educational app?',
    a: (
      <>
        The{' '}
        <Link
          to="/blog/app-development-timeline"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          app development timeline
        </Link>{' '}
        for an educational app typically runs 8–14 weeks for a focused MVP and 20–32+ weeks for enterprise learning platforms. Timelines vary based on custom workflows, video capabilities, and system integrations.
      </>
    ),
  },
  {
    q: '3. How do education apps work offline without losing learner progress?',
    a: 'Offline learning apps store supported lessons and learning activities locally. When internet access returns, synchronization workflows upload saved progress and assessment results, with conflict handling to prevent data loss.',
  },
  {
    q: '4. Can custom EdTech apps integrate with existing LMS and SIS platforms?',
    a: 'Yes. Custom EdTech apps can connect with compatible LMS and SIS platforms through supported APIs. LTI supports learning tool integration, while SCORM supports learning content compatibility. Available connections depend on each system.',
  },
  {
    q: '5. What makes an education app compliant with COPPA and FERPA?',
    a: "COPPA may require parental notice and verifiable consent when covered services collect children's personal information. FERPA governs protected education records in covered institutions. Compliance depends on applicable obligations, data practices, and organizational controls.",
  },
  {
    q: '6. How do adaptive learning apps personalize study paths for students?',
    a: 'Adaptive learning engines analyze quiz accuracy, response times, and topic mastery to adjust question difficulty and recommend targeted lessons. Algorithms update individual learning pathways dynamically so students can address weak concepts before advancing.',
  },
  {
    q: '7. What ongoing costs should EdTech founders budget for after launch?',
    a: 'EdTech founders should budget for cloud hosting, video streaming, third-party APIs, security updates, and maintenance. Annual maintenance may be estimated at 15–25% of initial development costs for planning purposes, with infrastructure and new features budgeted separately.',
  },
  {
    q: '8. Which features keep learners engaged after the first week?',
    a: (
      <>
        Common features that support continued learner engagement include:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Short microlearning modules and interactive quizzes</li>
          <li>Streaks, badges, and milestone progress tracking</li>
          <li>Timely study reminders and push notifications</li>
          <li>Personalized learning recommendations</li>
        </ul>
        <span className="block mt-2">
          The right combination depends on the learning model and target audience.
        </span>
      </>
    ),
  },
  {
    q: '9. Should I build a native or cross-platform education app?',
    a: (
      <>
        Flutter and React Native support{' '}
        <Link
          to="/cross-platform-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          cross-platform app development
        </Link>{' '}
        for education apps, delivering iOS and Android from shared code. Native Swift or Kotlin, or{' '}
        <Link
          to="/kotlin-multiplatform-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Kotlin Multiplatform
        </Link>{' '}
        for shared logic behind native interfaces, may suit projects requiring deeper device integration or demanding hardware-specific performance.
      </>
    ),
  },
  {
    q: '10. How do education apps make money?',
    a: 'Education apps generate revenue through recurring learner subscriptions, institutional licensing fees, freemium upgrades, live tutoring commissions, and paid course bundles. The right monetization model depends on your audience, content format, and growth goals.',
  },
  {
    q: '11. How do you handle live video streaming and virtual classrooms in education apps?',
    a: 'Virtual classrooms use video SDKs and cloud infrastructure sized for expected attendance. Engineers test streaming quality, classroom interactions, and network conditions to reduce delays and connection issues.',
  },
  {
    q: '12. Who owns the source code and learning content in a custom education app?',
    a: 'Source code ownership and intellectual property rights follow the signed development agreement. The contract should define custom deliverables, learning content ownership, repository access, and any third-party licensing restrictions.',
  },
]

export default function EducationFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Frequently Asked Questions About{' '}
          <span className="text-[#00CE44]">Education App Development</span>
        </>
      }
    />
  )
}

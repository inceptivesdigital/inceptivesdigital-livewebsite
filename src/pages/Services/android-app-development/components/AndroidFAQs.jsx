import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
    {
      q: '1. How much does it cost to hire an Android app development company?',
      a: 'Basic Android applications typically cost $15,000 - $40,000, mid-complexity products range from $40,000 - $80,000, and advanced platforms start at $80,000 and can exceed $150,000. The final development cost depends on application features, system integrations, and security requirements.',
    },
    {
      q: '2. How long does it take to develop an Android application?',
      a: 'A basic Android app typically takes 8–12 weeks, while mid-complexity applications require around 12–20 weeks. Enterprise platforms may take six months or longer, depending on integrations, security requirements, and development scope.',
    },
    {
      q: '3. Can I hire a dedicated Android development team?',
      a: (
        <>
          Yes. Inceptives Digital provides dedicated Android developers who extend your{' '}
          <Link
            to="/blog/in-house-development-vs-app-development-partner"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            in-house team
          </Link>
          , plus complete project teams for end-to-end delivery. Your development scope and internal resources determine which engagement model fits.
        </>
      ),
    },
    {
      q: '4. Should I hire an Android app development company or a freelancer?',
      a: (
        <>
          Hire a freelancer for a limited Android development task with clear requirements.{' '}
          <Link
            to="/blog/how-to-choose-the-right-mobile-app-development-company"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            Choose an Android app development company
          </Link>{' '}
          when your product needs coordinated design, backend engineering, testing, and ongoing technical support.
        </>
      ),
    },
    {
      q: '5. Is Kotlin or Java better for Android app development?',
      a: (
        <>
          Kotlin is the recommended choice for most new Android applications because Google prioritizes Kotlin support and modern{' '}
          <Link
            to="/blog/android-app-development-tools"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            Android development tools
          </Link>
          . Java remains practical for maintaining existing Android codebases and legacy integrations.
        </>
      ),
    },
    {
      q: '6. Should I choose native Kotlin or Flutter for my Android app?',
      a: (
        <>
          Choose native Kotlin for Android-specific integrations, demanding performance requirements, or deeper platform control.{' '}
          <Link
            to="/blog/flutter-vs-react-native-android-app-development"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            Flutter or React Native
          </Link>{' '}
          are suitable when your product targets both Android and iOS and can share most application functionality.
        </>
      ),
    },
    {
      q: '7. Can you rebuild or modernize an existing Android app?',
      a: 'Yes. Inceptives Digital can modernize existing Android applications after reviewing their codebase, architecture, and dependencies. The assessment determines whether targeted improvements or a complete rebuild better meets your business requirements.',
    },
    {
      q: '8. Can Android apps integrate with existing CRM or ERP software?',
      a: (
        <>
          Yes. Custom Android applications can integrate with CRM, ERP, and other enterprise systems through supported{' '}
          <Link
            to="/backend-api-development"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            backend APIs
          </Link>
          . Integration complexity depends on system compatibility, authentication requirements, and how data moves between platforms.
        </>
      ),
    },
    {
      q: '9. How long does it take to publish an Android app on Google Play?',
      a: (
        <>
          <Link
            to="/blog/publish-update-an-app-on-app-store-google-play"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            Publishing on Google Play
          </Link>{' '}
          can take seven days or longer for review. New personal developer accounts also need a closed test with 12 testers for 14 continuous days before requesting production access.
        </>
      ),
    },
    {
      q: '10. Who owns the source code of my Android app?',
      a: 'Android app source code ownership depends on your development contract. At Inceptives Digital, the agreement should specify intellectual property rights, source code delivery, and ownership of design assets before development begins.',
    },
    {
      q: '11. Do you help promote my Android app after launch?',
      a: (
        <>
          Yes. Inceptives Digital offers{' '}
          <Link
            to="/app-store-optimization"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            App Store Optimization
          </Link>{' '}
          for Google Play and{' '}
          <Link
            to="/post-launch-analytics-iteration"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
            post-launch analytics
          </Link>{' '}
          support. Store listing improvements support app discoverability, while user behavior data helps identify opportunities for product improvements.
        </>
      ),
    },
    {
      q: '12. How do you secure a custom Android application?',
      a: 'Custom Android app security involves secure authentication, encrypted communication, and protected data storage. Inceptives Digital also considers Android Keystore, API access controls, and applicable compliance requirements during technical planning.',
    },
  ]

export default function AndroidFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions About{' '} <span className="text-[#00CE44]">Android App Development</span></>}
    />
  )
}

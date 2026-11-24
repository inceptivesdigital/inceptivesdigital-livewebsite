import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. Is Kotlin Multiplatform production-ready?',
    a: 'Yes. JetBrains released a stable version of Kotlin Multiplatform, and global enterprises including Netflix, Philips, and VMware rely on it in production. Core libraries like Ktor and SQLDelight operate at full stable maturity.',
  },
  {
    q: '2. What is the difference between Kotlin Multiplatform and Compose Multiplatform?',
    a: 'Kotlin Multiplatform shares business logic, networking, and data layers across platforms while keeping UI native. Compose Multiplatform extends code sharing directly to the user interface layer across Android, iOS, web, and desktop.',
  },
  {
    q: '3. Does KMP require rewriting an existing Android app?',
    a: 'No. KMP supports incremental adoption. Teams can move authentication, networking, or data models into a shared module while the rest of the application remains untouched, protecting your existing release cadence.',
  },
  {
    q: '4. Does KMP on iOS still require Swift developers?',
    a: 'Yes. KMP shares domain logic, but the iOS user interface is built in Swift using SwiftUI or UIKit. The framework eliminates the need to rewrite business logic in Swift, saving hundreds of engineering hours.',
  },
  {
    q: '5. What are the current limitations of KMP?',
    a: 'Kotlin Multiplatform has limitations with libraries that lack cross-platform support and features that require native development. Compose Multiplatform supports Android, iOS, and desktop, while web support remains in beta. Businesses should assess these compatibility requirements before choosing KMP.',
  },
  {
    q: '6. KMP vs Flutter: How should a team decide?',
    a: 'Choose KMP when your product demands native UI behavior, complex business logic, and deep OS integration. Choose Flutter when maximum UI consistency across platforms and rapid single-team delivery matter more than native controls.',
  },
  {
    q: '7. Can KMP target web and desktop or only mobile?',
    a: 'Yes. KMP targets iOS, Android, web via Kotlin/Wasm, and desktop via Compose Multiplatform. The core business logic module runs across all platforms, while web and desktop require platform-specific UI configurations.',
  },
  {
    q: '8. How long does a KMP project take?',
    a: 'A focused KMP project typically takes 8–14 weeks, while a full product with native platform interfaces requires 16–28 weeks. Migration timelines depend on the existing codebase, shared-module scope, and integration requirements.',
  },
  {
    q: '9. What happens if a KMP bug affects both platforms simultaneously?',
    a: 'A bug in shared Kotlin code can affect multiple platforms. Our engineers test shared modules and run automated checks across supported targets to identify issues early, while platform-specific testing helps catch integration problems before release.',
  },
  {
    q: '10. Is ongoing engineering support available after launch?',
    a: (
      <>
        Yes. Post-launch retainers cover feature expansion, dependency updates, platform OS compatibility maintenance, and{' '}
        <Link
          to="/blog/mobile-app-performance-optimization"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          mobile app performance optimization
        </Link>
        . Maintaining continuity with the original engineering team protects architectural integrity over time.
      </>
    ),
  },
  {
    q: '11. What does a Kotlin Multiplatform project typically cost?',
    a: 'A focused KMP shared module starts around $25,000, while full product builds span $55,000 to $120,000+. Total pricing scales with shared module scope, platform target count, and whether the project is greenfield or migration.',
  },
  {
    q: '12. Does a KMP team need separate Android and iOS developers?',
    a: 'Yes. Successful KMP projects require Android and iOS engineers alongside a shared-module specialist. Android teams build the Jetpack Compose layer, iOS teams build the SwiftUI layer, and both consume shared business logic.',
  },
]

export default function KmpFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          <span className="text-[#00CE44]">Kotlin Multiplatform</span> App Development FAQs
        </>
      }
    />
  )
}

import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. What is Flutter, and why is it used for app development?',
    a: "Flutter is Google's open-source UI framework. It enables engineers to build compiled applications for mobile, web, and desktop from a single Dart codebase, significantly reducing development time and engineering costs without sacrificing performance.",
  },
  {
    q: '2. What platforms does Flutter support?',
    a: 'Flutter delivers applications across iOS, Android, web, Windows, macOS, and Linux from a single codebase. Our engineers deploy across target platforms simultaneously, avoiding the overhead of maintaining separate native builds.',
  },
  {
    q: '3. How much does Flutter app development cost?',
    a: 'Flutter app development costs range from $15,000 for focused MVPs to $150,000+ for complex enterprise platforms. Every investment figure is determined during technical discovery and fixed in writing before development begins.',
  },
  {
    q: '4. Is Flutter good for large-scale enterprise products?',
    a: 'Yes. Global enterprises and financial institutions rely on Flutter for mission-critical applications. Our team implements modular architecture, encrypted storage, and secure backend integrations to ensure high-scale reliability.',
  },
  {
    q: '5. What do your Flutter web app development services include?',
    a: 'Our Flutter web development services cover complete architecture, user interface implementation, backend API integration, browser performance optimization, and deployment, ensuring seamless user experiences across Chrome, Safari, and Firefox.',
  },
  {
    q: '6. Can an existing native app be migrated to Flutter?',
    a: 'Yes. Our migration engineers evaluate your existing codebase, isolate business logic, and plan a controlled transition to Flutter, protecting essential user data and feature parity throughout the migration process.',
  },
  {
    q: '7. Does Flutter perform as well as native apps?',
    a: 'Yes. Flutter bypasses standard platform UI libraries by using its own high-performance rendering engine. Our developers optimize widget trees and state management to ensure native-grade frame rates across all supported devices.',
  },
  {
    q: '8. Can Flutter apps integrate with AI, IoT, and blockchain?',
    a: 'Yes. We integrate machine learning models, IoT sensor connectivity, and blockchain protocols directly into Flutter application architectures when product requirements demand advanced technical capabilities.',
  },
  {
    q: '9. What happens after the app is launched?',
    a: 'Post-launch support includes continuous SDK upgrades, OS compatibility monitoring, performance profiling, bug fixes, and iterative feature development to sustain long-term application stability and user retention.',
  },
  {
    q: '10. Do you work with startups or only established businesses?',
    a: 'We partner with early-stage startups, growing SMBs, and established enterprises. Every engagement is tailored to your business model, focusing on rapid market validation or scalable multi-platform growth.',
  },
  {
    q: '11. How do we get started with Inceptives Digital?',
    a: 'Getting started begins with a discovery session. You share your product vision, and our engineering team analyzes your technical requirements to deliver a transparent scope and fixed project estimate.',
  },
]

export default function FlutterFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          FAQs for <span className="text-[#00CE44]">Flutter App Development</span>
        </>
      }
    />
  )
}

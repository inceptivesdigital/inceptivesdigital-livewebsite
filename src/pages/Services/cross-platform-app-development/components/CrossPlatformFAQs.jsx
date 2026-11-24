import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: '1. What is cross-platform app development?',
      a: 'Cross-platform app development is the process of building a single application that runs on both iOS and Android from one shared codebase. Frameworks like Flutter and React Native make this possible, allowing businesses to reach both platform audiences simultaneously without the overhead of two separate native builds.',
    },
    {
      q: '2. What is the difference between cross-platform and native app development?',
      a: 'Native development uses separate Swift and Kotlin codebases for deep hardware access. Cross-platform uses one Flutter or React Native codebase across iOS and Android. We choose the right approach during discovery.',
    },
    {
      q: '3. Is cross-platform app development right for my business?',
      a: 'Cross-platform fits businesses needing iOS and Android coverage without two native builds, including startups, SMBs, and high-growth companies. Products needing deep hardware-specific integration may suit native better, a call we make during scoping.',
    },
    {
      q: '4. Which is better, Flutter or React Native?',
      a: 'Flutter works well for applications requiring highly customized interfaces and consistent rendering. React Native fits products that benefit from the React ecosystem and native UI integration. Our cross-platform developers choose based on actual product requirements.',
    },
    {
      q: '5. How much does cross-platform app development cost?',
      a: 'Cross-platform app development costs at Inceptives Digital start around $10,000 for focused applications. Mid-complexity builds range from $30,000 to $65,000, while advanced platforms can exceed $120,000 depending on their scope.',
    },
    {
      q: '6. Can cross-platform apps match native app performance?',
      a: 'Yes, cross-platform applications can deliver performance comparable to native apps for many workloads. Flutter and React Native use different rendering approaches, so our engineers evaluate performance against the product\'s actual requirements.',
    },
    {
      q: '7. How do you ensure consistent performance across iOS and Android?',
      a: 'Every application is tested on real hardware across device tiers, OS versions, and screen configurations using Appium, Detox, and Firebase Test Lab. Issues are resolved before either store receives a release candidate.',
    },
    {
      q: '8. Can a cross-platform app access all native device features?',
      a: 'Flutter and React Native support common device capabilities through plugins or native modules. Specialized hardware integrations may require custom platform-specific code, which the team assesses during technical scoping.',
    },
    {
      q: '9. How long does cross-platform app development take?',
      a: 'Basic applications take six to ten weeks from scope confirmation. Mid-complexity builds take ten to eighteen weeks. Complex platforms with advanced integrations and compliance requirements are scoped and timelined individually at Discovery.',
    },
    {
      q: '10. Are App Store and Google Play submissions included?',
      a: 'Both store submissions can form part of the agreed development scope. Our team prepares production builds and required listing materials, while ASO supports discoverability without guaranteeing specific rankings.',
    },
    {
      q: '11. What support is provided after the app launches?',
      a: 'Cross-platform app maintenance can cover framework updates and performance issues after launch. Inceptives Digital defines ongoing support around the agreed engagement, including platform compatibility and further product development where required.',
    },
    {
      q: '12. What services does Inceptives Digital provide for cross-platform app development?',
      a: 'Inceptives Digital provides cross-platform app development services covering Flutter and React Native engineering, product consultation, native integrations, migration, testing, and deployment. The delivery scope follows your application\'s technical requirements.',
    },
    {
      q: '13. Can you migrate a native app to Flutter or React Native?',
      a: 'Yes. Migration starts with assessing your existing native codebase, dependencies, platform-specific functionality, APIs, and product requirements. The migration strategy depends on how much functionality can be shared without compromising the current product experience.',
    },
    {
      q: '14. What types of apps are suitable for cross-platform development?',
      a: (
        <>
          We build cross-platform products for consumer, eCommerce, fintech, healthcare, marketplace,{' '}
          <a
            href="https://inceptivesdigital.com/food-delivery-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
          >
            on-demand
          </a>
          , SaaS, and enterprise applications where functionality overlaps across iOS and Android. The same overlap shows up in{' '}
          <a
            href="https://inceptivesdigital.com/education-app-development-company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
          >
            education
          </a>{' '}
          and travel products, though anything leaning on specialized hardware integration is flagged for native.
        </>
      ),
    },
  ]

export default function CrossPlatformFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Cross-Platform App Development{' '} <span className="text-[#00CE44]">FAQs</span></>}
    />
  )
}

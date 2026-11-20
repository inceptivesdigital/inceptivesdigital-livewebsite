import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'What is App Store Optimization and why does it matter?',
      a: "App Store Optimization (ASO) is the practice of improving an app's visibility and conversion rate within app store search results through keyword, metadata, and creative optimization. It matters because most installs originate from organic search, and a poorly optimized listing keeps even strong apps buried beneath competitors.",
    },
    {
      q: 'How long does it take to see results from ASO?',
      a: 'Keyword rank changes typically show within four to eight weeks. Conversion improvements from creative testing often appear sooner, within two to three weeks of deployment.',
    },
    {
      q: 'Does ASO work differently for iOS and Android?',
      a: 'Yes, significantly. Both stores use different ranking algorithms, metadata fields, and creative specs. Each platform gets its own strategy rather than a single approach applied to both.',
    },
    {
      q: 'What is the difference between ASO and paid app marketing?',
      a: 'Paid acquisition buys installs at a cost per click. ASO builds organic visibility that compounds over time. Both work better together, but ASO does not stop when the budget does.',
    },
    {
      q: 'How do you decide which keywords to target?',
      a: 'The team maps search volume, competition, and relevance across your category. Keywords are chosen based on where the app can realistically rank and what users searching those terms actually intend to do.',
    },
    {
      q: 'Do you handle creative production as part of ASO?',
      a: "Yes. Screenshot design, preview video production, and icon refinement are included in Growth and Scale engagements. Every asset gets tested through the store's native A/B environments before being kept.",
    },
    {
      q: 'Can ASO help an app that has never been optimized before?',
      a: 'That is the most common starting point. The audit at the beginning of the engagement identifies the gaps quickly, and first-time optimization often produces the most significant early gains.',
    },
    {
      q: 'How do you approach ASO for apps in competitive categories?',
      a: 'The team focuses on keyword opportunities where the app can rank realistically alongside conversion improvements that hold regardless of competitive intensity. Both levers work simultaneously.',
    },
    {
      q: 'What does your reporting cover?',
      a: 'Every reporting cycle covers keyword rank movement, conversion rates, impression volume, install trends, and review metrics. Each number ties back to a defined benchmark, so context is never missing.',
    },
    {
      q: 'Do you work with apps at early stages or only with established products?',
      a: (
        <>
          Both. Early-stage products benefit from getting the store presence right before launch, often as part of a wider{' '}
          <Link
            to="/startup-product-development"
            className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
          >
            startup product development
          </Link>{' '}
          engagement. Established apps often have metadata and creative issues that an audit surfaces and resolves quickly.
        </>
      ),
    },
    {
      q: 'How many platforms do you optimize for?',
      a: 'The studio optimizes for both the App Store and Google Play. Each platform is treated separately because what drives rank and conversion on one does not automatically transfer to the other.',
    },
    {
      q: 'How do we get started with Inceptives Digital?',
      a: (
        <>
          Book a session with the team, the same first step outlined in{' '}
          <Link
            to="/blog/how-to-choose-the-right-mobile-app-development-company"
            className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
          >
            how to choose the right mobile app development company
          </Link>
          . The first conversation covers your app, its current store performance, and what a scoped ASO engagement would focus on and cost.
        </>
      ),
    },
  ]

export default function AsoFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions About{' '} <span className="text-[#00CE44]">App Store Optimization</span></>}
    />
  )
}

import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How much does eCommerce app development cost?',
    a: (
      <>
        eCommerce{' '}
        <Link
          to="/blog/mobile-app-development-cost"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app development costs
        </Link>{' '}
        start at $20,000 for focused applications. Growth projects range from $60,000 to $160,000, while enterprise platforms can exceed $350,000. Final costs depend on functionality and integration requirements.
      </>
    ),
  },
  {
    q: '2. How long does ecommerce app development take?',
    a: (
      <>
        The{' '}
        <Link
          to="/blog/app-development-timeline"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          app development timeline
        </Link>{' '}
        for basic eCommerce storefronts runs 6 to 10 weeks. Complex enterprise marketplaces with advanced integrations, vendor dashboards, and custom backend architecture typically require 16 to 24+ weeks of iterative development.
      </>
    ),
  },
  {
    q: '3. Which platform is best for ecommerce app development?',
    a: 'Platform selection depends on your product catalog size and customization needs. Shopify suits rapid deployment with moderate customization, Adobe Commerce (Magento) handles complex multi-store catalogs, and custom development supports unique workflows that outgrow standard templates.',
  },
  {
    q: '4. What features are essential in an ecommerce app?',
    a: 'Essential eCommerce features include secure user onboarding, advanced product search, real-time inventory tracking, multi-gateway checkout, order fulfillment tracking, and a centralized admin dashboard for complete operational control.',
  },
  {
    q: '5. Is a custom ecommerce app worth the investment?',
    a: (
      <>
        Yes, for businesses planning long-term product scaling.{' '}
        <Link
          to="/custom-software-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Custom software development
        </Link>{' '}
        eliminates platform licensing constraints, provides total ownership of source code, and delivers tailored user experiences that generic templates cannot accommodate.
      </>
    ),
  },
  {
    q: '6. How do you handle PCI DSS compliance and secure payments?',
    a: "We integrate secure payment gateways with tokenization and encrypted communication. Our developers assess applicable PCI DSS requirements based on the application's payment architecture and transaction handling.",
  },
  {
    q: '7. Can you integrate custom eCommerce apps with existing ERP and CRM systems?',
    a: 'Yes. Our engineers build API-first architectures that connect your eCommerce platform seamlessly with enterprise systems like SAP, Salesforce, Zoho, and NetSuite, automating data flow across inventory, billing, and customer management.',
  },
  {
    q: '8. How do you support eCommerce apps during high-traffic sales?',
    a: 'Our engineers use load testing, database optimization, and scalable cloud infrastructure to prepare applications for expected traffic spikes and transaction volumes.',
  },
  {
    q: '9. What is the difference between a multi-vendor marketplace and a standard eCommerce app?',
    a: "A standard eCommerce app manages a single store's inventory and sales. A multi-vendor marketplace supports independent seller accounts, isolated vendor dashboards, automated commission calculations, and multi-party payout settlements within one platform.",
  },
  {
    q: '10. Do you build native eCommerce apps or cross-platform solutions?',
    a: 'We build both. Depending on your performance goals and budget, we engineer high-performance native apps using Swift and Kotlin or cost-effective cross-platform applications using Flutter and React Native.',
  },
  {
    q: '11. Who owns the source code and platform intellectual property after launch?',
    a: 'Your business retains 100% ownership of your intellectual property, GitHub repositories, design assets, and database credentials from day one, with all rights fully transferred upon project milestone completion.',
  },
  {
    q: '12. Can you synchronize inventory across multiple sales channels?',
    a: 'Yes. We integrate compatible commerce systems through APIs and webhooks to synchronize inventory across mobile apps, online storefronts, and connected retail systems.',
  },
]

export default function EcommerceFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions About{' '}
          <span className="text-[#00CE44]">eCommerce App Development</span> Worth Asking Before You Build
        </>
      }
    />
  )
}

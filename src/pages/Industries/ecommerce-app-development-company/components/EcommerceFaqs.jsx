import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How much does ecommerce app development cost?',
    a: 'A focused starter storefront starts from $20,000. Enterprise multi-vendor marketplaces with AI recommendations, ERP integrations, and advanced security range from $160,000 to $350,000 and above. The precise number is defined in the Discovery Sprint based on your specific catalog size, vendor complexity, and integration requirements.',
  },
  {
    q: '2. How long does ecommerce app development take?',
    a: 'A basic storefront takes 6 to 10 weeks. A full enterprise marketplace with multi-vendor management, AI capabilities, and third-party integrations takes 16 to 24 weeks and above. The timeline is defined precisely in the Discovery Sprint based on scope and integration complexity.',
  },
  {
    q: '3. Which platform is best for ecommerce app development?',
    a: 'It depends on your catalog size, customisation requirements, and commerce model. Shopify suits rapid deployment with moderate customisation. Magento suits complex catalogs and multi-store operations. Custom development suits businesses whose requirements outgrow what any platform offers out of the box.',
  },
  {
    q: '4. What features are essential in an ecommerce app?',
    a: 'Secure checkout, payment gateway integration, real-time order tracking, product catalog management, push notifications, and an admin dashboard are the non-negotiable capabilities. The feature set beyond that is determined by your business model and revenue structure in Discovery.',
  },
  {
    q: '5. Is a custom ecommerce app worth the investment?',
    a: 'For businesses planning long-term growth, yes. Custom applications deliver complete operational control, better brand consistency, superior third-party compatibility, and the ability to build exactly the commerce experience your customers need — without the constraints of a generic platform template.',
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

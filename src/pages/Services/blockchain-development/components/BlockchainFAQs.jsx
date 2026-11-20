import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'How can your blockchain solutions help our business grow in 2026?',
    a: 'When building a blockchain application, our main focus is on solving real business problems such as enhancing transparency, cutting operational costs, and introducing new revenue opportunities for your industry.',
  },
  {
    q: 'What industries do you specialize in when it comes to blockchain development?',
    a: 'Our blockchain development experts have delivered 70+ digital solutions in 20+ distinct industries such as finance, healthcare, gaming, real estate, and many more. We will closely collaborate with you to customize a blockchain strategy that matches your specific industry requirements.',
  },
  {
    q: 'Do you only build on specific blockchains, or can you work with multiple platforms?',
    a: 'We are blockchain agnostic, so whether you want a solution running on Ethereum, Polygon, Hyperledger, Solana, or even a private network, we will help you find the platform that best fits your goals.',
  },
  {
    q: 'How do you ensure security and compliance in the blockchain solutions you build for us?',
    a: 'To ensure maximum security, we use proven token standards (ERC-721, ERC-1155), decentralized with IPFS, and smart contracts. Apart from these, we follow international standards and do audits to ensure your blockchain solution’s security and integrity.',
  },
  {
    q: 'Can you help us with both strategy and development, or just coding?',
    a: 'We offer a full-cycle blockchain development service. Our process includes stages such as strategy and consulting, designing, development, deployment, and ongoing support. This means you will get a trusted partner for your project.',
  },
  {
    q: 'What does the timeline look like if we want to launch a blockchain product with you?',
    a: 'Every project is indeed unique, but generally it would take 8-12 weeks to build an MVP (minimum viable product). Milestones will be clearly defined and will be part of the planning process, so you know in more detail when results can be expected.',
  },
  {
    q: 'How will you support us after the blockchain solution goes live?',
    a: 'We will not hand off the product to the customer and run. We will do post-monitoring, upgrades, and continuous optimizations for the solutions to grow with your business.',
  },
]

export default function BlockchainFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          FAQs About Our{' '}
          <span className="text-[#00CE44]">Blockchain Development Services</span>
        </>
      }
    />
  )
}

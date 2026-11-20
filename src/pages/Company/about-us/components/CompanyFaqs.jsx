import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: '1. What does Inceptives Digital do?',
      a: 'Inceptives Digital is a digital product studio that combines strategy, design, engineering, and AI to build digital products for businesses. The studio focuses on solving real business problems rather than delivering code alone.',
    },
    {
      q: '2. What services does Inceptives Digital offer?',
      a: 'The studio offers product strategy, UI and UX design, software engineering, app development, and AI-powered product development. Each service connects to the same goal: building products that stay useful after launch, not just at release.',
    },
    {
      q: '3. When was Inceptives Digital founded?',
      a: 'Inceptives Digital was founded in 2018. The studio started with a small team and a handful of projects, then grew into a full-service digital product studio by 2023.',
    },
    {
      q: '4. Does Inceptives Digital only build mobile apps, or does it work on other digital products too?',
      a: "Our team builds apps, business platforms, connected systems, and AI-powered products. The studio's scope expanded beyond individual apps into larger platforms and systems as client needs grew more complex.",
    },
    {
      q: '5. Does Inceptives Digital use AI in the products it builds?',
      a: 'Yes, but only where AI adds real value to the product. The studio applies AI when it genuinely improves the outcome for the client, not as a default feature added to every build.',
    },
    {
      q: '6. What industries does Inceptives Digital work with?',
      a: "We work across a wide range of industries, including healthcare, fintech, travel, ecommerce, food, and several others. The studio adapts its process to each industry's specific problems rather than applying a single approach to every client.",
    },
    {
      q: '7. Does Inceptives Digital work with startups, or only established businesses?',
      a: 'Inceptives Digital works with both. The studio partners with startups building their first product as well as established businesses replacing outdated systems or expanding into new platforms.',
    },
    {
      q: '8. What makes Inceptives Digital different from other app development companies?',
      a: "Inceptives Digital studies the business problem before development begins, makes key architecture and scope decisions early, and stays involved with a product after launch through monitoring and improvements. This approach is reflected in the studio's core values around ownership, judgment, and honesty over blind agreement with a brief.",
    },
    {
      q: '9. Is Inceptives Digital involved after a product launches, or does the relationship end at delivery?',
      a: 'The studio stays involved after launch. This includes monitoring, fixes, improvements, and adjusting priorities as real users interact with the product, since a product is only proven once it holds up under real use.',
    },
    {
      q: '10. Where is Inceptives Digital based, and does it work with clients remotely?',
      a: 'Inceptives Digital is headquartered in Allen, Texas, and provides services in New York, London, Toronto, Singapore, Dubai, San Francisco, and Austin. The studio also works with clients remotely, so location is rarely a barrier to starting a project.',
    },
  ]

export default function CompanyFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked <span className="text-[#00CE44]">Questions</span></>}
    />
  )
}

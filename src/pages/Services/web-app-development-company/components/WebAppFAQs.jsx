import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. What is a web application?',
    a: 'A web application is software that runs in a browser, such as Salesforce, Notion, or Shopify. It processes data, responds to user inputs, and scales with the business.',
  },
  {
    q: '2. What is the difference between a web app and a website?',
    a: 'A website presents information. A web application is interactive software. Users log in, complete tasks, and the product responds to their inputs in real time.',
  },
  {
    q: '3. How long does it take to build a web application?',
    a: 'A focused web application MVP typically takes 8–14 weeks, while a production-ready product may require 12–24 weeks. Enterprise platforms take longer depending on functionality, integrations, and technical scope.',
  },
  {
    q: '4. How much does web application development cost?',
    a: 'Custom web application development at Inceptives Digital starts around $20,000 for focused products and can exceed $200,000 for enterprise platforms. Final pricing depends on functionality, integrations, and infrastructure requirements.',
  },
  {
    q: '5. What technologies do you use for web application development?',
    a: "React, Next.js, and Vue support frontend development, while Node.js, Python, and Go handle backend requirements. AWS, Google Cloud, PostgreSQL, MongoDB, and Redis support the application's infrastructure and data architecture.",
  },
  {
    q: '6. Do you provide web app development for startups?',
    a: "Yes. Startups can begin with an MVP that validates essential product functionality before committing to a larger build. The initial scope reflects the features needed for launch and the product's next development priorities.",
  },
  {
    q: '7. Can you migrate an existing web application to a new stack?',
    a: 'Yes. As a custom web app development firm, we handle full migrations, including codebase restructuring, feature parity validation, and performance benchmarking, without disrupting the users already on the product.',
  },
  {
    q: '8. How do you handle security in web applications?',
    a: "Security requirements shape application architecture from the beginning. Authentication, role-based access, encryption, and API protection follow the product's risk profile and applicable regulatory requirements.",
  },
  {
    q: '9. What happens after the web application launches?',
    a: "Post-launch support can cover production issues, security updates, dependency maintenance, and performance monitoring. Further development follows the product's changing requirements under the agreed engagement.",
  },
  {
    q: '10. Do you build custom web applications or use templates?',
    a: "Everything is built from scratch around the product's actual requirements. Templates and off-the-shelf solutions stop serving complex products at a predictable point.",
  },
  {
    q: '11. How do you ensure a web application performs at scale?',
    a: 'We assess expected workloads during architecture planning and test critical application paths before launch. Performance monitoring after deployment helps identify bottlenecks as traffic and usage patterns change.',
  },
  {
    q: '12. Can you integrate third-party tools into our web application?',
    a: 'Yes. Payment processors, CRMs, analytics platforms, logistics APIs, and data pipelines are all handled. Every integration is built with long-term maintainability in mind.',
  },
]

export default function WebAppFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          FAQs about{' '}
          <span className="text-[#00CE44]">Web App Development Services</span>
        </>
      }
    />
  )
}

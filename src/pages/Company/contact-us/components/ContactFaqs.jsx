import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What industries does Inceptives Digital have experience in?',
    a: "Healthcare, fintech, e-commerce, and logistics are among the industries we've delivered products for, with our approach adapting to each one's specific needs.",
  },
  {
    q: 'What type of digital products do you build?',
    a: 'We build web applications, mobile apps, and custom software products, covering everything from early-stage MVPs to full-scale platforms for established businesses.',
  },
  {
    q: 'Do you work with startups or only established companies?',
    a: 'We work with both, and we have supported early-stage founders building their first product as well as established teams scaling existing platforms.',
  },
  {
    q: 'How experienced is your development and design team?',
    a: 'Our team includes engineers and designers who have shipped 70+ products, bringing hands-on experience across different tech stacks and industries.',
  },
  {
    q: 'How do I get started with a project?',
    a: 'Reach out through the contact form or book a call, and our team will respond within one business day to discuss your goals.',
  },
  {
    q: 'What should I prepare before reaching out?',
    a: 'A brief overview of your project, your industry, your timeline, and any existing materials like designs or documentation help us respond faster and more accurately.',
  },
  {
    q: 'Do you offer ongoing support after a product launches?',
    a: 'Yes, we provide post-launch support and maintenance, so your product keeps running smoothly and evolves as your business grows.',
  },
  {
    q: 'Can you work with an existing codebase or team?',
    a: "Yes, we regularly join existing projects to improve, extend, or rebuild parts of a product alongside a client's in-house team.",
  },
  {
    q: 'How long does it typically take to receive a project quote?',
    a: 'Most clients receive a detailed quote within 2 to 3 business days after an initial discussion about their project.',
  },
  {
    q: 'What makes Inceptives Digital different from other digital product studios?',
    a: 'We combine technical depth with design thinking, and our team stays involved through launch and beyond rather than handing off and disappearing.',
  },
]

export default function ContactFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions.</>}
    />
  )
}

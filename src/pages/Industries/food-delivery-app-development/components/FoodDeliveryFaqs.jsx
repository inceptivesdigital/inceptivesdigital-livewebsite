import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    question: '1. How much does it cost to develop a food delivery app?',
    answer:
      'A focused starter application starts from $15,000. Full enterprise platforms with AI recommendations, route optimisation, multi-vendor management, and POS integrations range from $150,000 to $300,000 and above. The precise number is defined in the Discovery Sprint based on your specific scope and requirements.',
  },
  {
    question: '2. How long does it take to build a food delivery app?',
    answer:
      'A basic ordering application takes 6 to 8 weeks. A full enterprise platform with AI, real-time tracking, and multi-vendor management takes 16 to 24 weeks. The timeline is defined precisely in the Discovery Sprint based on scope and integration complexity.',
  },
  {
    question: '3. What technologies are essential for a scalable food delivery app?',
    answer:
      'Real-time order processing infrastructure, GPS tracking, auto-scaling cloud architecture, secure payment gateways, and AI recommendation systems are the core technical requirements. The specific stack is selected in Discovery based on your platform requirements and order volume expectations.',
  },
  {
    question: '4. How do you keep users engaged and coming back?',
    answer:
      'Personalised recommendations, one-tap reordering, push notifications, loyalty programmes, and dynamic promotional offers are built into the platform architecture from day one. Retention is an architecture decision, not a marketing one.',
  },
  {
    question: '5. What are the must-have features for a successful food delivery app?',
    answer:
      'Real-time order tracking, multi-payment support, restaurant and driver management panels, push notifications, and business analytics are the non-negotiable capabilities. The feature set beyond that is determined by your business model and target audience in Discovery.',
  },
];

export default function FoodDeliveryFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions About Food Delivery App Development</>}
    />
  )
}

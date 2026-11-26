import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    question: '1. How much does it cost to build a food delivery app in 2026?',
    answer:
      'Custom food delivery apps cost $15,000 to $300,000+ depending on scope. Starter ordering apps run $15,000 to $50,000, growth platforms with driver tracking run $50,000 to $150,000, and enterprise marketplaces with AI dispatch and POS sync exceed $150,000.',
  },
  {
    question: '2. How long does it take to develop a custom food delivery app?',
    answer:
      'Build times range from 6 to 24+ weeks. Starter ordering apps take 6 to 8 weeks, growth platforms with live GPS tracking take 10 to 14 weeks, and multi-vendor enterprise builds take 16 to 24+ weeks.',
  },
  {
    question: '3. How much does it cost to maintain a food delivery app after launch?',
    answer:
      'Expect to budget 15% to 25% of your initial build cost per year. That covers cloud servers, map and payment APIs, iOS and Android OS updates, security patches, and peak-hour monitoring.',
  },
  {
    question: '4. How do food delivery apps make money?',
    answer:
      'Food delivery platforms earn money through four main channels: restaurant commissions (often 15% to 30% per order), delivery or service fees, paid subscription passes, and promoted restaurant placements.',
  },
  {
    question: '5. What is the difference between an aggregator and a logistics-supported food delivery model?',
    answer:
      'Aggregators route orders to restaurants that deliver food themselves. Logistics-supported platforms manage both order routing and courier dispatch. Aggregators cost less to launch, while logistics models give you tighter control over delivery speed.',
  },
  {
    question: '6. How do I build a food delivery app like Uber Eats or DoorDash?',
    answer:
      'Building an app like Uber Eats or DoorDash involves connected customer, driver, restaurant, and admin interfaces. Development starts with platform scope, followed by design, engineering, testing, and production deployment.',
  },
  {
    question: '7. Should I choose custom food delivery app development or a white-label clone script?',
    answer:
      'Choose custom development for source-code ownership, custom POS sync, and high-traffic scale without recurring license fees. Clone scripts launch faster for basic tests, but limit customization, strain under peak load, and lock you into vendor limits.',
  },
  {
    question: '8. What are the four core panels required in a food delivery platform?',
    answer:
      'A full platform needs four interfaces: a Customer App for ordering and tracking, a Restaurant Panel for menu and order control, a Driver App for navigation and drop-offs, and an Admin Dashboard for commissions, disputes, and analytics.',
  },
  {
    question: '9. What is the best tech stack for building a scalable food delivery app?',
    answer:
      'A proven stack pairs Flutter or React Native on mobile with Node.js, Python, or Java on the backend. Add PostgreSQL or MongoDB for data, Google Maps or Mapbox for GPS, Stripe for payments, and AWS or Google Cloud for auto-scaling.',
  },
  {
    question: '10. How do food delivery apps integrate with restaurant POS systems?',
    answer:
      'Apps connect to POS systems like Toast, Square, or Clover via REST APIs and webhooks. Incoming orders send straight to kitchen screens, sync live item availability, and update prep statuses automatically.',
  },
  {
    question: '11. How is AI used in modern food delivery apps?',
    answer: (
      <>
        <Link
          to="/ai-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI development
        </Link>{' '}
        improves delivery ETA predictions, automates driver dispatch, adjusts dynamic pricing, and personalizes dish recommendations using order history, traffic data, and kitchen prep times.
      </>
    ),
  },
  {
    question: '12. How do custom restaurant apps reduce reliance on third-party marketplaces?',
    answer:
      'Direct apps let restaurants take orders without paying 20% to 30% marketplace commissions. You also own customer data for push offers, native loyalty perks, and one-tap reorders that lift repeat orders.',
  },
]

export default function FoodDeliveryFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions About Food Delivery App Development</>}
    />
  )
}

import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    question: '1. How long does travel app development take?',
    answer:
      'A focused flight or hotel booking application takes 8 to 12 weeks. A full travel platform with AI recommendations, AR tours, and integrated payment systems takes 4 to 6 months. The timeline is defined precisely in the Discovery Sprint based on scope and integration complexity.',
  },
  {
    question: '2. What monetisation strategies work for travel apps?',
    answer:
      'In-app bookings, premium subscription plans, hotel and airline partnerships, advertising, and commission-based services are the most proven monetisation approaches for travel platforms. The right model depends on your platform type and target audience — confirmed during Discovery.',
  },
  {
    question: '3. How much does travel app development cost?',
    answer:
      'A Foundation travel application typically ranges from $20,000 to $35,000. Advanced platforms with AI, AR/VR, and enterprise integrations range from $80,000 to $160,000+. The exact investment is defined during the Discovery Sprint based on your scope and technical requirements.',
  },
  {
    question: '4. What are the most in-demand travel app ideas right now?',
    answer:
      'Flight and hotel booking platforms, AI-powered itinerary planners, AR destination guides, travel concierge applications, and personalised recommendation engines are consistently the highest-demand categories. The right starting point depends on your target audience and business model.',
  },
  {
    question: '5. Why does UI/UX design matter so much in travel apps?',
    answer:
      'Travellers making high-value booking decisions abandon platforms that make search, comparison, and checkout feel complicated. Every point of friction between search and confirmed booking increases abandonment. A well-designed interface helps travelers find, compare, and book with confidence, making UI/UX a commercial decision rather than simply a design one.',
  },
];

export default function TravelFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions About Travel App Development</>}
    />
  )
}

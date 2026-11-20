import React from 'react';

const capabilities = [
  {
    title: 'Real-Time Order Processing',
    description:
      'Order placement, kitchen confirmation, driver assignment, and customer notification are handled in real time without latency or queue failures under high concurrent order volumes.',
    icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
  },
  {
    title: 'Live GPS Tracking and Route Optimisation',
    description:
      'Driver location is tracked continuously, routes are optimised dynamically, and estimated delivery times are updated in real time. Customers who can see where their food is cancel less and complain less.',
    icon: '/assets/mobile-app/Maps-And-location.svg',
  },
  {
    title: 'Multi-Vendor Architecture',
    description:
      'Multiple restaurants, cloud kitchens, and delivery zones are managed within a single platform. Each vendor operates independently while the platform maintains centralised order management, analytics, and payment distribution.',
    icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
  },
  {
    title: 'Secure Payment Infrastructure',
    description:
      'PCI DSS-compliant payment processing with multi-currency support, digital wallet integration, and automated invoice generation. Every transaction is secured without adding friction between the cart and the confirmed order.',
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'AI-Powered Recommendations',
    description:
      'Machine learning models that personalise restaurant suggestions, reorder prompts, and promotional offers based on individual user behaviour. Recommendations that increase average order value and repeat order frequency.',
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
];

export default function FoodDeliveryCapabilities() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            What Our Food Delivery App Development Company{' '}
            <span className="text-[#00CE44]">Engineers Bring to Every Platform</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            A food delivery app that works in a demo and one that works at peak dinner hour on a Friday night are two different engineering problems. Here is how we build for the second one.
          </p>
        </div>

        {/* Centered 3 + 2 Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#1f1f1f] hover:bg-[#262626] border border-white/10 rounded-[16px] p-7 md:p-8 flex flex-col justify-start transition-colors duration-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain select-none mb-5"
                loading="lazy"
              />
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/85 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const features = [
  {
    title: 'AI-Powered Property Recommendations',
    description:
      'Buyers who see relevant properties on the first search session stay longer and convert faster. Behavioural matching that surfaces the right listing at the right moment reduces search abandonment and shortens the decision cycle.',
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
  {
    title: 'Virtual Tours and 3D/AR Property Showcases',
    description:
      'Properties with immersive virtual tours attract more qualified enquiries and fewer unproductive physical viewings. Buyers arrive at site visits having already eliminated properties that do not meet their requirements.',
    icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
  },
  {
    title: 'Predictive Analytics and Market Insights',
    description:
      'Agents and investors who make decisions backed by real market data close deals with more confidence and fewer renegotiations. Predictive pricing and rental forecasting reduce the gap between listing price and final transaction value.',
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'Advanced Search and Smart Filtering',
    description:
      'Users who find relevant results quickly return. Users who spend ten minutes filtering through irrelevant listings do not. Intelligent search that narrows results by neighbourhood trends, amenities, and investment potential keeps high-intent buyers active on the platform.',
    icon: '/assets/mobile-app/Maps-And-location.svg',
  },
  {
    title: 'Real-Time Alerts and Push Notifications',
    description:
      'A buyer who receives a price drop notification within minutes of the change acts on it. A buyer who finds out three days later does not. Timely, relevant alerts convert passive users into active ones.',
    icon: '/assets/mobile-app/Pus-notification.svg',
  },
  {
    title: 'Integrated Communication Tools',
    description:
      'Every handoff between an agent and a client that leaves the platform is a conversion risk. In-app chat, calls, and meeting scheduling keep the entire transaction journey within a single environment where it can be tracked and measured.',
    icon: '/assets/mobile-app/Real-Time-sync.svg',
  },
  {
    title: 'Secure Transactions and Digital Document Management',
    description:
      'Deals that require physical document handling take longer and fall through more often. Digital contracts, e-signatures, and secure payment processing compress the closing cycle and reduce drop-off between offer and completion.',
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'Dynamic Dashboards and Agent Analytics',
    description:
      'Agents who know which leads are closest to closing spend their time there. Performance dashboards that surface conversion data, pipeline status, and property insights replace intuition with evidence at every stage of the deal cycle.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
];

export default function RealEstateCuttingEdgeFeatures() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate App Development Company Offering Cutting-Edge Features
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The features that matter in real estate are the ones that shorten deal cycles, reduce agent workload, and keep buyers on the platform long enough to convert.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e] hover:bg-[#252525] border border-white/10 rounded-[16px] p-7 flex flex-col justify-start transition-colors duration-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain select-none mb-5"
              />
              <h3 className="text-[#00CE44] text-[19px] md:text-[20px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

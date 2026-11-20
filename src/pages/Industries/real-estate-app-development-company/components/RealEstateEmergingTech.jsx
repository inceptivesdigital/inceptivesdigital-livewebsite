import React from 'react';

const technologies = [
  {
    title: 'AI and Machine Learning',
    description:
      'Smart property recommendations, predictive pricing, automated lead scoring, and fraud detection are built into platforms that improve with every listing viewed and transaction completed.',
  },
  {
    title: 'Big Data and Predictive Analytics',
    description:
      'Rental market trends, investment return forecasting, and neighbourhood performance insights built on Hadoop, Apache Spark, and Python for agents and investors making data-driven decisions.',
  },
  {
    title: 'AR/VR and 3D Rendering',
    description:
      'Virtual tours, interactive floor plans, and remote property exploration built with Unity, Unreal Engine, WebGL, and Three.js. Qualified buyers arrive at physical viewings having already eliminated unsuitable properties.',
  },
  {
    title: 'Blockchain for Secure Transactions',
    description:
      'Digital contracts, property title verification, and immutable transaction records built on Ethereum and Hyperledger. Trust is built into every transaction without manual verification at every stage.',
  },
  {
    title: 'Internet of Things',
    description:
      'Smart home devices, energy systems, and building sensors are connected for real-time monitoring through MQTT, REST APIs, and cloud dashboards. Multiple assets managed from a single interface.',
  },
  {
    title: 'Cloud and Scalable Infrastructure',
    description:
      'High availability, auto-scaling, and robust storage for extensive property databases built on AWS, Google Cloud, and Azure. Peak search traffic is handled without performance degradation.',
  },
  {
    title: 'Geolocation, Mapping, and GIS',
    description:
      'Location-based search, neighbourhood insights, and radius-based filtering built with Google Maps API, Mapbox, and GIS integration. Property discovery driven by location intelligence.',
  },
  {
    title: 'Advanced Search and Recommendation Engines',
    description:
      'Multi-faceted filtering and AI-powered suggestions built on Elasticsearch and Algolia. The right property surfaced at the right moment without manual sorting through irrelevant results.',
  },
  {
    title: 'APIs and Third-Party Integrations',
    description:
      'CRM systems, MLS databases, payment gateways, and analytics tools are connected through secure API integrations. Every system the business runs on is connected without manual data transfer.',
  },
  {
    title: 'Security and Compliance',
    description:
      'OAuth2, SSL encryption, GDPR compliance, data masking, and role-based access control are built into every real estate application from the architecture stage.',
  },
];

function FourPointStar({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 pointer-events-none select-none z-20 ${className}`}
    >
      <path
        d="M12 0C12 8.2 15.8 12 24 12C15.8 12 12 15.8 12 24C12 15.8 8.2 12 0 12C8.2 12 12 8.2 12 0Z"
        fill="#BDBDBD"
      />
    </svg>
  );
}

export default function RealEstateEmergingTech() {
  const totalRows = Math.ceil(technologies.length / 3);

  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Advanced Technologies We Use as a Real Estate App Development Company
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Most property platforms display listings. These technologies are what make the difference between displaying them and moving them.
          </p>
        </div>

        {/* 3-Column Star-Anchored Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {technologies.map((item, idx) => {
            const row = Math.floor(idx / 3);
            const col = idx % 3;
            const isLastRow = row === totalRows - 1;
            const hasCellBelow = idx + 3 < technologies.length;

            return (
              <div
                key={idx}
                className={`relative p-7 sm:p-9 md:p-10 flex flex-col justify-start border-white/25 ${
                  !isLastRow && hasCellBelow ? 'border-b' : !isLastRow ? 'border-b' : ''
                } ${col < 2 ? 'lg:border-r' : ''}`}
              >
                {/* Left Corner Star on Row Divider */}
                {col === 0 && !isLastRow && (
                  <FourPointStar className="hidden lg:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                )}

                {/* Inner & Right Intersection Stars on Row Divider */}
                {!isLastRow && (
                  <FourPointStar className="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                )}

                <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

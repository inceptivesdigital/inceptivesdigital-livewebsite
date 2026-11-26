import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom'

const PRICING_TIERS = [
  {
    name: 'Backend Foundation',
    price: '$20,000 - $50,000',
    features: [
      'Up to 15 API endpoints designed and documented',
      'Single database architecture, relational or NoSQL',
      'OAuth2 or JWT authentication implemented',
      'One third-party integration included',
    ],
  },
  {
    name: 'Full-System Backend Build',
    price: '$50,000 - $110,000',
    highlighted: true,
    features: [
      'Up to 40 API endpoints across REST, GraphQL, or gRPC',
      'Multi-database architecture with Redis caching layer',
      'Up to five third-party integrations',
      'Microservices with independently deployable services',
    ],
  },
  {
    name: 'Backend Migration & Modernization',
    price: '$65,000 - $160,000+',
    features: [
      'Architecture audit and migration roadmap delivered first',
      'Phased extraction starting with highest-risk components',
      'Legacy API modernization to REST or GraphQL',
      'Zero-downtime database migration strategy',
    ],
  },
];

export default function BackendCostSection() {
  return (
    <>
      <section className="bg-[#F8F9FA] py-20 lg:py-[100px] border-t border-[#EAEAEA]">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-10">
          <div className="max-w-[820px] mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] leading-[1.2] tracking-[-0.02em] mb-5">
              Flexible Pricing Models Built Around Your Backend Scope
            </h2>
            <p className="text-[16px] text-[#555555] leading-[1.65]">
              Backend &amp; API development costs are scoped to the project, confirmed before the first sprint, and never left open-ended once the engagement starts. The main{' '}
              <Link
                to="/blog/factors-affecting-app-development-cost"
                className="font-semibold text-[#111111] underline decoration-[#00CE44] decoration-2 underline-offset-4 hover:text-[#009e34] transition-colors"
>
                factors affecting app development cost
              </Link>{' '}
              are system complexity, integrations, architecture, and infrastructure requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col justify-between p-8 border transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-[#141414] text-white border-[#00CE44]'
                    : 'bg-white text-[#111111] border-[#E5E5E5] hover:border-[#111111]'
                }`}
              >
                <div>
                  <h3
                    className={`text-[20px] font-bold mb-3 ${
                      tier.highlighted ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="text-[28px] sm:text-[32px] font-bold text-[#00CE44] tracking-tight mb-6 pb-6 border-b border-current/15">
                    {tier.price}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-[15px] leading-relaxed">
                        <Check className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                        <span className={tier.highlighted ? 'text-[#E0E0E0]' : 'text-[#444444]'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full py-3.5 px-6 text-[15px] font-semibold rounded-none transition-colors ${
                    tier.highlighted
                      ? 'bg-[#00CE44] text-black hover:bg-[#00b83d]'
                      : 'bg-[#111111] text-white hover:bg-[#00CE44] hover:text-black'
                  }`}
                >
                  Discuss This Scope
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#141414] text-white py-16 lg:py-20 overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[35px] font-bold text-white leading-[1.22] tracking-[-0.02em] mb-5">
                Your Product Deserves Better Infrastructure. Talk to the Right Backend Developer
              </h2>
              <p className="text-[16px] text-[#D4D4D4] leading-[1.65] mb-8 max-w-2xl">
                Every estimate is finalized before the first sprint begins, with no open-ended ranges carried into the engagement.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-[15px] transition-colors border-0"
              >
                Get Your Fixed Estimate
              </a>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/backend-api/api-1.png"
                alt="Backend API Infrastructure"
                className="w-full max-w-[460px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

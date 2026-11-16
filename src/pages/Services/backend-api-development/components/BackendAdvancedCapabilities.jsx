import React from 'react';

const CAPABILITIES = [
  {
    title: 'AI Integrations',
    description: (
      <>
        <a
          href="https://inceptivesdigital.com/ai-development"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00E522] transition-colors"
        >
          AI development
        </a>{' '}
        integrates machine learning models, recommendation engines, and predictive logic at the API layer, built into the system architecture rather than connected as external dependencies.
      </>
    ),
  },
  {
    title: 'Event-Driven Architecture',
    description:
      'Services are designed to communicate through events, so each component reacts to state changes independently without creating tight coupling that breaks under load.',
  },
  {
    title: 'Real-Time Systems',
    description:
      'WebSocket connections and event-streaming infrastructure have been built for live notifications, messaging, and dashboards where data synchronization happens in milliseconds, not polling cycles.',
  },
  {
    title: 'Serverless Computing',
    description:
      'Serverless functions are scoped to workloads that spike unpredictably, so infrastructure scales with actual demand and compute cost stays tied to usage.',
  },
  {
    title: 'Distributed Systems',
    description:
      'Systems are architected across multiple servers and regions with failure isolation built in, so individual component failures do not bring the broader system down.',
  },
  {
    title: 'Workflow Automation',
    description: (
      <>
        <a
          href="https://inceptivesdigital.com/business-process-automation"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00E522] transition-colors"
        >
          Business process automation
        </a>{' '}
        handles business logic triggers, data pipelines, and operational processes at the backend layer, removing the manual intervention points that slow product teams down. Secure ledgers and decentralized integrations can also bring{' '}
        <a
          href="https://inceptivesdigital.com/blog/blockchain-in-software-development"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00E522] transition-colors"
        >
          blockchain into software development
        </a>{' '}
        where immutable records or cryptographic verification are required.
      </>
    ),
  },
];

export default function BackendAdvancedCapabilities() {
  return (
    <section
      className="relative py-20 lg:py-[100px] bg-[#141414] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/backend-api/ios-bg-section.webp')" }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/85 pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-10">
        <div className="max-w-[820px] mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-5">
            Advanced Backend Capabilities for Intelligent Digital Products
          </h2>
          <p className="text-[16px] text-[#D4D4D4] leading-[1.65]">
            Beyond core backend & API development, AI integrations, event-driven architecture, real-time systems, serverless computing, distributed systems, and workflow automation have been built and shipped across the products in our portfolio. These are not capability additions. They are part of how we engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.title}
              className="group bg-[#181818]/90 backdrop-blur-sm border border-[#2C2C2C] hover:border-[#00E522] p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#00E522]">
                    0{idx + 1}
                  </span>
                  <span className="w-8 h-[2px] bg-[#2C2C2C] group-hover:bg-[#00E522] transition-colors" />
                </div>
                <h3 className="text-[22px] font-bold text-white leading-snug mb-4">
                  {cap.title}
                </h3>
                <p className="text-[15px] text-[#BDBDBD] leading-[1.7]">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

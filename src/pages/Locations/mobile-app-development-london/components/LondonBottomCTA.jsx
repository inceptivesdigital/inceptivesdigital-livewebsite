export default function LondonBottomCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="w-full rounded-[24px] sm:rounded-[32px] border-0 p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-none">
          {/* Background Image: London CTA Banner cta-london.webp */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: `url('/assets/locations/london/cta-london.webp')`,
            }}
          />
          {/* Dark Overlay with Green Ambient Glow */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050608] via-[#050608]/85 to-[#050608]/90 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00CE44]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.16] mb-6">
              Let&apos;s Create Your App Roadmap{' '}
              <span className="text-[#00CE44]">With Precision</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg lg:text-[20px] leading-relaxed mb-8 max-w-3xl mx-auto font-normal">
              Every strong product starts with a plan worth trusting. Share where you&apos;re headed, and we&apos;ll shape the route to get there.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-4 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-base transition-colors shadow-none border-0"
            >
              Schedule Your Roadmap Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

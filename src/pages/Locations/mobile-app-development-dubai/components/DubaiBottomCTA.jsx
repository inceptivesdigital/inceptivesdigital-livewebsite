import { Link } from 'react-router-dom'

export default function DubaiBottomCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black text-white">
      {/* Background with cta-dubai.webp matching WordPress page */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/locations/dubai/cta-dubai.webp"
          alt="Dubai Skyline CTA"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] max-w-4xl mx-auto mb-6">
          Whatever App You&apos;re Building, Let&apos;s Define the{' '}
          <span className="text-[#00CE44]">Right Way Forward</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          A mobile app built for Dubai&apos;s pace starts with one detailed conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-black bg-[#00CE44] hover:bg-[#00b53c] transition-all duration-200 rounded-none shadow-none uppercase tracking-wide cursor-pointer"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  )
}

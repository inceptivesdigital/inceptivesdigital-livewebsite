import { Link } from 'react-router-dom'

export default function DubaiMidCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#00b53c] to-[#00CE44] text-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto mb-5 text-black">
          Ready to Build the App That Sets the Standard Across the UAE and the Wider GCC.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-black/85 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
          Discuss your vision with a team that brings together product strategy, design, and mobile app development for long-term growth.
        </p>
        <Link
          to="/contact-us"
          className="inline-flex items-center justify-center px-9 py-4 text-base font-medium text-white bg-black hover:bg-neutral-900 transition-all duration-200 rounded-none shadow-none uppercase tracking-wide cursor-pointer"
        >
          Book a Product Strategy Call
        </Link>
      </div>
    </section>
  )
}

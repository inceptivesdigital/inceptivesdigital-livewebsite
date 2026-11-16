export default function ContactDelivered() {
  return (
    <section className="py-16 sm:py-24 bg-black overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-5">
              Delivered <span className="text-[#00CE44]">70+ Digital Products</span> Across Multiple Industries
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-xl">
              Over 70 businesses across industries have trusted us to turn their ideas into working products, built with care, tested for real use, and backed by a team that sticks around after launch.
            </p>
          </div>

          {/* Globe: right-hand part of the source artwork, text area cropped out */}
          <div className="relative w-full h-[260px] sm:h-[360px] overflow-hidden" aria-hidden="true">
            <img
              src="/assets/contact-us/globe-source.png"
              alt=""
              className="absolute top-0 right-0 h-full w-auto max-w-none select-none"
              style={{ transform: 'translateX(2%)', clipPath: 'inset(0 0 0 58%)' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

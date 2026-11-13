export default function DoublePhoneCTA() {
  return (
    <section
      className="relative overflow-hidden pt-14 sm:pt-20 lg:pt-0 pb-0"
      style={{
        background:
          'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
      }}
    >
      {/* Subtle Topographic Wave Pattern Overlay matching Screenshot 5 */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)`,
        }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Content Column (CTA H2 = 35px) */}
          <div className="lg:col-span-7 lg:py-16 pb-4 lg:pb-16 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
              Build a Competitive Mobile Product With a Custom Mobile App Development Company in the USA
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-3 max-w-2xl">
              Your competitors already have apps in the store. The ones that win are built around a specific audience and a clear scope, not a long feature list. That is the thinking behind every custom mobile app we build.
            </p>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
              Our custom mobile app development services begin with a defined product scope. Senior engineers shape the architecture around your critical workflows and existing systems, so the first release stays commercially focused and the next one has room to grow.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Talk to Our Engineers
              </a>
            </div>
          </div>

          {/* Right Phones Image Column Aligned Flush to Section Bottom */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-8 pb-0">
            <img
              src="/assets/mobile-app/cta-mobile.webp"
              alt="Custom Mobile App Development Strategy"
              className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[470px] h-auto object-contain object-bottom block select-none"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

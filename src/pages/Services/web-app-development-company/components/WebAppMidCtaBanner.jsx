export default function WebAppMidCtaBanner({
  heading,
  description,
  buttonText,
  image = '/assets/mobile-app/cta-mobile.webp',
  imageAlt = 'Custom Web Application Mockup',
}) {
  return (
    <section
      className="relative py-16 sm:py-20 bg-[#141414] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/web-app/ctabg.png')" }}
    >
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-white leading-[1.2] tracking-tight mb-5">
              {heading}
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              {buttonText}
            </a>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[440px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

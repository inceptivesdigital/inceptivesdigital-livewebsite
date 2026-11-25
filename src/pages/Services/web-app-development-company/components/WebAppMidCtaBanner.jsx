export default function WebAppMidCtaBanner({ heading, description, buttonText }) {
  return (
    <section
      className="relative py-16 sm:py-20 bg-[#141414] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/web-app/ctabg.png')" }}
    >
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl text-left">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-white leading-[1.2] tracking-tight mb-5">
            {heading}
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed mb-8">
            {description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default function FlutterServicesGrid() {
  const services = [
    {
      title: 'Flutter App Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'Before a line of code is written, the right questions get asked. Discovery covers business model, users, technical constraints, and competitive landscape, producing a validated product plan before work begins.',
    },
    {
      title: 'Flutter App UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: 'The design phase maps how real users move through the product. High-fidelity prototypes in Figma and Adobe XD, built to platform guidelines and refined until the interface earns its way into the build.',
    },
    {
      title: 'Flutter App Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Production-grade Dart code, modular architecture, and backend integrations built to the product&apos;s actual requirements, the kind of decision that separates{' '}
          <a
            href="https://inceptivesdigital.com/blog/native-vs-hybrid-vs-cross-platform-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            native vs hybrid vs cross-platform app development
          </a>{' '}
          outcomes more than the framework choice itself. The result is an application that performs under load, adapts to change, and stays maintainable as the product grows.
        </>
      ),
    },
    {
      title: 'Flutter App Migration',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Existing iOS and Android codebases consolidated into a single Flutter build without disrupting users or sacrificing performance. eBay Motors completed the same process and launched a beta in three months, achieving 98.3% code sharing between platforms.',
    },
    {
      title: 'Flutter Web App Development',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'The same codebase and design system are extended to the browser without having to rebuild from scratch. Fast, visually consistent web experiences that carry the same quality as the mobile product.',
    },
    {
      title: 'Flutter App Maintenance and Support',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'Bugs, updates, performance monitoring, and new features are handled as part of a continuous support model. The product stays current and stable well beyond launch day.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Flutter App Development Services,</span>{' '}
            Scoped Around Your Product
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every engagement is structured around your product goals, not a templated delivery model. Here is what that looks like in practice.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={svc.icon}
                alt={svc.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-7 sm:p-9 rounded-[16px] bg-[#292929] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-0 shadow-none">
          <div className="text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Get in Touch, and We Will Figure It Out Together
            </h3>
            <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed">
              Book a session with our studio. The Flutter mobile app development services begin with understanding what the product needs to succeed.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

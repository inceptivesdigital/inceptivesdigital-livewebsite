import { Link } from 'react-router-dom'

export default function ReactNativeServicesGrid() {
  const services = [
    {
      title: 'React Native App Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'Before development begins, React Native consulting services help establish a clear technical direction for the product. Our consultants assess platform requirements and integration dependencies to define a practical roadmap aligned with the project\'s investment.',
    },
    {
      title: 'React Native UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: 'Give your application an intuitive mobile user experience that respects the interaction standards of both platforms. React Native UI/UX designers develop user flows and interactive prototypes that support usability across iOS and Android.',
    },
    {
      title: 'Custom React Native App Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Build around the requirements that make your mobile product distinct. Our{' '}
          <Link
            to="/services/cross-platform-app-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            custom React Native app development
          </Link>{' '}
          services use modular architecture and native integrations to build reliable iOS and Android applications with room for future expansion.
        </>
      ),
    },
    {
      title: 'React Native App Migration',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Legacy applications require careful assessment before moving to a shared mobile architecture. React Native app migration services address native dependencies and existing integrations, with product rescue helping businesses modernize without disrupting critical workflows.',
    },
    {
      title: 'Dual-Platform Deployment and ASO',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          Bring your React Native application to market through a coordinated{' '}
          <Link
            to="/services/product-launch-strategy"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            product launch strategy
          </Link>{' '}
          across iOS and Android. Our deployment team manages store submissions, while targeted{' '}
          <Link
            to="/services/app-store-optimization"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            app store optimization (ASO)
          </Link>{' '}
          strengthens listing relevance and helps reach potential users.
        </>
      ),
    },
    {
      title: 'React Native Maintenance and Enhancement',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          As mobile platforms evolve,{' '}
          <Link
            to="/services/post-launch-analytics-iteration"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            React Native maintenance services
          </Link>{' '}
          help businesses keep their applications compatible with changing OS requirements. Engineers address performance issues and support planned enhancements to maintain product reliability after launch.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Custom <span className="text-[#00CE44]">React Native App Development Services</span> We Offer
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Our React Native app development services cover the complete product lifecycle, from consultation through post-launch support. An experienced{' '}
            <Link
              to="/services/cross-platform-app-development"
              className="underline text-[#00CE44] hover:text-white transition-colors"
            >
              cross-platform app development team
            </Link>{' '}
            manages each engagement with shared engineering oversight, keeping delivery consistent as you build an app across iOS and Android.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}

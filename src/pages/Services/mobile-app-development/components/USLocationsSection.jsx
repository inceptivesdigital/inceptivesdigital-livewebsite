export default function USLocationsSection() {
  const offices = [
    { city: 'New York, NY', link: 'https://maps.app.goo.gl/mcXLE474casuT3FA6' },
    { city: 'San Francisco, CA', link: 'https://maps.app.goo.gl/P8gLLpGYAk2P18mH7' },
    { city: 'Austin, TX', link: 'https://maps.app.goo.gl/ZAP6cZF3KBd4caBdA' },
    { city: 'Allen, TX', link: 'https://maps.app.goo.gl/YgDeroKW3UghwupD8' },
  ]

  return (
    <>
      {/* Connect With Our US Developers CTA Banner (CTA H2 = 35px, Image Flush With Bottom Edge) */}
      <section className="pt-14 sm:pt-20 lg:pt-0 pb-0 bg-[#1d1d1d] overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
            
            {/* Left Column */}
            <div className="lg:col-span-6 lg:py-20 pb-4 lg:pb-20 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                Connect With Our Custom Mobile App Developers in the US Today
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-6 max-w-2xl">
                Product decisions move faster when your team can easily contact ours. Inceptives Digital delivers custom mobile app development services from US offices in New York, San Francisco, and Texas, so you can start a conversation with the team closest to you.
              </p>

              {/* US Office Links */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {offices.map((off) => (
                  <a
                    key={off.city}
                    href={off.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-none bg-[#292929] hover:bg-[#00CE44] text-white hover:text-black text-xs sm:text-sm font-medium transition-colors border-0"
                  >
                    {off.city}
                  </a>
                ))}
              </div>

              <p className="text-white/90 text-sm sm:text-base font-medium mb-3">
                Prefer to talk first?
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:(469) 788-8527"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                >
                  Call (469) 788-8527
                </a>
              </div>
            </div>

            {/* Right Column: Larger Tablet/Dashboard Preview Aligned Flush to Section Bottom */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-8 pb-0">
              <img
                src="/assets/mobile-app/compress-cta-1024x469.webp"
                alt="US Mobile App Development Team"
                className="w-full max-w-[680px] lg:max-w-none lg:w-[114%] xl:w-[120%] h-auto object-contain object-bottom origin-bottom-right block select-none"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Donut Chart Breakdown Section (Pure Black Background matching Screenshot) */}
      <section className="py-14 sm:py-20 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] flex justify-center">
          <img
            src="/assets/mobile-app/mobile-app-chart-img-1024x649.png"
            alt="Mobile App Development Allocation Breakdown - UI/UX Design, Frontend, Backend, QA & Testing, Post-Launch Support, Project Management"
            className="w-full max-w-[820px] h-auto object-contain select-none"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}

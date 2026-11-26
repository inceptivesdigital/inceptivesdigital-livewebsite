import React from 'react'

export default function FullWidthCtaSection({
  heading,
  description,
  ctaText = 'Get Started',
  ctaHref = '#contact',
  img = null,
  imgAlt = '',
  bgImage = null,
}) {
  const hasImage = Boolean(img)

  return (
    <section
      className={`relative w-full text-white overflow-hidden ${
        hasImage ? 'pt-14 sm:pt-20 lg:pt-0 pb-0' : 'py-14 sm:py-20'
      }`}
      style={
        bgImage
          ? {
              backgroundColor: '#040605',
              backgroundImage: `url('${bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }
          : {
              background:
                'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
            }
      }
    >
      {/* Subtle Overlay */}
      {bgImage ? (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.68) 55%, rgba(0,0,0,0.18) 100%)',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)',
          }}
        />
      )}

      <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1600px] relative z-10">
        {hasImage ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Content */}
            <div className="lg:col-span-7 lg:py-16 pb-4 lg:pb-16 text-left">
              <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                {heading}
              </h2>

              {description && (
                <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] sm:text-[16px] transition-colors border-0"
                >
                  {ctaText}
                </a>
              </div>
            </div>

            {/* Right Image Flush to Bottom */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-6 pb-0">
              <img
                src={img}
                alt={imgAlt}
                className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] h-auto object-contain object-bottom block select-none"
                loading="lazy"
              />
            </div>
          </div>
        ) : bgImage ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-3xl text-left">
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-3">
                {heading}
              </h2>
              {description && (
                <p className="text-white/85 text-[15px] sm:text-[17px] leading-relaxed font-normal">
                  {description}
                </p>
              )}
            </div>

            <div className="shrink-0">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] sm:text-[16px] whitespace-nowrap transition-colors border-0"
              >
                {ctaText}
              </a>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4">
              {heading}
            </h2>
            {description && (
              <p className="text-white/85 text-[15px] sm:text-[17px] leading-relaxed font-normal mb-8">
                {description}
              </p>
            )}
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] sm:text-[16px] whitespace-nowrap transition-colors border-0"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

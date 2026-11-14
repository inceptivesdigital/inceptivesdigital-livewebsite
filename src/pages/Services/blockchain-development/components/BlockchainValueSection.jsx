import { Calendar } from 'lucide-react'

export default function BlockchainValueSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-[#000000]">
      {/* Background Visual */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/assets/blockchain/blockvhain-sec.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right opacity-85"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30 lg:via-black/70 lg:to-transparent" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              <span className="text-[#00CE44]">Blockchain App Development</span>{' '}
              for Products That Deliver Value
            </h2>

            <p className="text-white/90 text-[16px] leading-relaxed font-normal mb-8 max-w-2xl">
              Blockchain projects often fail when adoption is unclear, the token model is weak, or the user experience is too complex. These overlap with many{' '}
              <a
                href="https://inceptivesdigital.com/blog/common-reasons-digital-products-fail"
                className="underline font-bold text-[#00CE44] hover:text-white transition-colors"
              >
                common reasons digital products fail
              </a>
              . As a blockchain app development company, we help businesses identify where decentralization adds real value and build products that are usable, scalable, and designed for long-term growth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Get A Call Now!
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-none bg-transparent hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-colors border border-white/25"
              >
                <Calendar className="w-4 h-4 text-[#00CE44]" />
                <span>Schedule A Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

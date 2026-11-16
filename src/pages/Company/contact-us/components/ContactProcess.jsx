const steps = [
  {
    no: '01',
    title: 'Your Brief Is Received',
    time: '2 Seconds',
    desc: 'An immediate confirmation lets you know your submission has arrived safely, with a clear record that the process is underway.',
  },
  {
    no: '02',
    title: 'A Focused Discovery Call',
    time: 'Within 24 Hours',
    desc: 'A 30-minute call gives us room to understand the business case, key requirements, constraints, and what success should look like.',
  },
  {
    no: '03',
    title: 'NDA and Confidentiality',
    time: 'Within 42 Hours',
    desc: 'Once the direction is clear, the NDA is signed so commercial, technical, and product conversations can continue with confidence privately.',
  },
  {
    no: '04',
    title: 'Your Written Proposal',
    time: 'Within 86 Hours',
    desc: 'The proposal brings the discussion into one document, covering scope, delivery approach, commercial terms, timeline, and the decisions ahead clearly.',
  },
  {
    no: '05',
    title: 'Your Project Gets Underway',
    time: 'Within 5 Business Days',
    desc: 'With the essentials agreed, the working team is introduced, responsibilities are confirmed, and delivery begins against the approved project plan.',
  },
]

export default function ContactProcess() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1100px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          What Happens After You Submit <span className="text-[#00CE44]">Your Project Brief?</span>
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {steps.map((s) => (
            <div
              key={s.no}
              className="group flex items-start gap-5 sm:gap-8 p-5 sm:p-7 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#00CE44] leading-none shrink-0 w-12 sm:w-16">
                {s.no}
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white/50 mb-1">
                  {s.time}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

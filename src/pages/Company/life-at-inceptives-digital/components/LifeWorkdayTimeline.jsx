export default function LifeWorkdayTimeline() {
  const schedule = [
    {
      time: '9:00 AM',
      title: 'Coffee Before the Calendar',
      desc: 'The day starts over coffee. People catch up, ease into their setups, and review the morning priorities.',
      shot: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '9:30 AM',
      title: 'Everyone Gets in Sync',
      desc: 'Teams align before work begins. Quick, 15-minute standing syncs to unblock code reviews and set targets.',
      shot: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '10:00 AM',
      title: 'Deep Focus Takes Over',
      desc: 'Focused work gets full attention. Headphones on, uninterrupted coding sprints, and deep architectural flow.',
      shot: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '1:00 PM',
      title: 'Dinner Break, Properly Taken',
      desc: 'Everyone steps away to recharge. A shared meal in the dining area, genuine banter, and stepping away from screens.',
      shot: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '2:00 PM',
      title: 'Back Into the Conversation',
      desc: 'Teams regroup around active work. Cross-functional pairing between frontend engineers and designers.',
      shot: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '3:00 PM',
      title: 'Work Comes Under Review',
      desc: 'Ideas and progress get challenged. Constructive QA feedback, PR reviews, and verifying staging environments.',
      shot: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '4:00 PM',
      title: 'Decisions Start Getting Closed',
      desc: 'Open questions move toward answers. Collaborative whiteboard sessions that lock down APIs and schema changes.',
      shot: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '5:00 PM',
      title: 'Tomorrow Starts Taking Shape',
      desc: 'Teams prepare the next moves. Merging clean branches, updating project boards, and prepping the roadmap.',
      shot: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    },
    {
      time: '6:00 PM',
      title: 'The Workday Signs Off',
      desc: 'The day ends without leftovers. Laptops close, work stays at work, and evenings are reserved for personal life.',
      shot: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            A Day in the Life
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            From Login to Logout <br />
            <span className="text-white/70 text-2xl sm:text-3xl lg:text-[36px] font-medium">
              Here's What a Regular Workday Looks Like
            </span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-3xl">
            A workday here moves between focused problem-solving, quick conversations, shared decisions, and the occasional break that resets the room. This is what the pace actually looks like.
          </p>
        </div>

        {/* Horizontal Timeline Scroll / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-[20px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Time Badge */}
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#1e1e1e] border border-[#00CE44]/30 text-[#00CE44] font-mono text-xs sm:text-sm font-bold mb-4">
                  {item.time}
                </div>

                {/* Photo Shot */}
                <div className="w-full h-44 rounded-[14px] overflow-hidden mb-4 bg-neutral-900">
                  <img
                    src={item.shot}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

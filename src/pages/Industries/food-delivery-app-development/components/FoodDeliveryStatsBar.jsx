import React from 'react';

const stats = [
  {
    value: '70+',
    label: 'Projects Completed',
    icon: '/assets/mobile-app/apps-launch.svg',
  },
  {
    value: '150+',
    label: 'Active Developers',
    icon: '/assets/mobile-app/active-developer.svg',
  },
  {
    value: '30–40%',
    label: 'Faster Releases',
    icon: '/assets/healthcare/developer-resize.png',
  },
  {
    value: '99.9%',
    label: 'Uptime Reliability',
    icon: '/assets/healthcare/hippa-icon.webp',
  },
];

export default function FoodDeliveryStatsBar() {
  return (
    <section className="w-full bg-[#202020] text-white py-10 sm:py-12 relative z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="h-12 w-12 flex items-center justify-center mb-3">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="max-h-11 max-w-11 object-contain select-none"
                  loading="lazy"
                />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#00CE44] tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-white/95">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

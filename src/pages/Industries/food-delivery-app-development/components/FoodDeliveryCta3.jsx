import React from 'react';

export default function FoodDeliveryCta3() {
  return (
    <section className="w-full bg-[#181818] text-white pt-14 md:pt-16 pb-0 overflow-hidden border-t border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pb-10 lg:pb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.16] text-white mb-4">
              Hire Food Delivery App Developers With Proven Mobile Experience
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] mb-8 max-w-[600px] font-normal">
              Commission your food delivery platform with Inceptives Digital&apos;s engineering team, backed by experience delivering complex mobile products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
            >
              Hire Our Food Delivery Developers
            </a>
          </div>

          {/* Right Bottom-Flush Phones */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
            <img
              src="/assets/food-delivery/foodcta-2.png"
              alt="Food Delivery Mobile Application Screens"
              className="w-full max-w-[600px] xl:max-w-[660px] h-auto object-contain object-bottom block select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

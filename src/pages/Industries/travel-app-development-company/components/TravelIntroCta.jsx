import React from 'react';
import { Link } from 'react-router-dom';

export default function TravelIntroCta() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.16] text-white mb-5">
              Build a Travel Platform{' '}
              <span className="text-[#00CE44]">Grounded in Real Product Engineering</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] mb-8 max-w-[680px] font-normal">
              Inceptives Digital brings 8+ years of{' '}
              <Link
                to="/digital-product-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
              >
                digital product development
              </Link>{' '}
              experience to travel app development. Our engineers develop custom booking platforms around your business requirements, with the technical depth to support complex reservation workflows. Bring your next travel platform to a team that understands the engineering behind it.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
            >
              Talk to Our Travel App Experts
            </a>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/assets/travel/travel-cta1.png"
              alt="Custom Travel Platform Engineering"
              className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

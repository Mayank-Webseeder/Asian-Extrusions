import React from 'react';
import { Link } from 'react-router-dom';

export default function Industry() {
  return (
    <>
      <section className="bg-[#d4e1ee]  md:px-20">
        {/* ✅ Desktop View */}
        <div className="hidden lg:flex relative items-center justify-center gap-8 h-[500px]">
          {/* Left Image */}
          <div className="w-1/2 relative mr-auto h-[350px]">
            <img
              src="/Home/industry-image.jpg"
              alt="Industry Sector"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right Content (absolute positioned card) */}
          <div className="absolute w-[700px] bg-white p-10 rounded-md shadow-lg left-1/2 transform -translate-x-20 -translate-y-1 z-10">
            <h2 className="text-3xl xl:text-4xl font-bold text-[#0A4C91] mb-6">
              Industry Sector Activities
            </h2>
            <p className="text-[#0A4C91]  xl:text-xl leading-relaxed mb-6">
              The extruded sections are mainly supplied to the builders, directly or through fabricators,
              electrical panel makers, solar water heater manufacturers, photovoltaic frame manufacturers,
              and hardware and furniture makers. The sections are supplied in aluminum alloys in
              accordance with applicable Indian and International Standards.
            </p>
            <Link to='/products'>
              <button className="bg-[#004c91] text-lg xl:text-xl text-white font-semibold py-2 px-6 rounded hover:bg-[#00396b] transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* ✅ Mobile to Laptop View */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Image */}
          <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
            <img
              src="/Home/industry-image.jpg"
              alt="Industry Sector"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Text */}
          <div className="bg-white mt-6 p-6 rounded-md shadow-md w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A4C91] mb-4">
              Industry Sector Activities
            </h2>
            <p className="text-[#0A4C91]  xl:text-xl leading-relaxed mb-4">
              The extruded sections are mainly supplied to the builders, directly or through fabricators,
              electrical panel makers, solar water heater manufacturers, photovoltaic frame manufacturers,
              and hardware and furniture makers. The sections are supplied in aluminum alloys in
              accordance with applicable Indian and International Standards.
            </p>
            <button className="bg-[#004c91] text-base sm:text-lg text-white font-semibold py-2 px-6 rounded hover:bg-[#00396b] transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Stats Section (font size increased slightly) */}
      <div className="bg-gray-200 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-bold text-[#0A4C91] mb-4">25+</h3>
              <p className="text-xl md:text-2xl font-semibold text-[#0A4C91] leading-snug">
                Years of Combined<br />Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-bold text-[#0A4C91] mb-4">200+</h3>
              <p className="text-xl md:text-2xl font-semibold text-[#0A4C91] leading-snug">
                Satisfied<br />Clients
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-bold text-[#0A4C91] mb-4">700+</h3>
              <p className="text-xl md:text-2xl font-semibold text-[#0A4C91] leading-snug">
                Products<br />Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

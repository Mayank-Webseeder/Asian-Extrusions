import React from 'react'

export default function Industry() {
  return (
    <>
      <section className="bg-[#d4e1ee] py-16 px-4 md:px-20 h-[500px]">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Left Image */}
          <div className="w-full md:w-1/2 relative mr-auto h-[350px]">
            <img src="/Home/industry-image.jpg" alt="Industry Sector" className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Right Content */}
          <div
            className="absolute w-[700px]  bg-white p-8 rounded-md shadow-lg  left-1/2 right-0  top-1/5  transform -translate-x-20 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4C91] mb-6">
              Industry Sector Activities
            </h2>
            <p className="text-[#0A4C91] text-base md:text-lg leading-relaxed mb-6">
              The extruded sections are mainly supplied to the builders, directly or through fabricators,
              electrical panel makers, solar water heater manufacturers, photovoltaic frame manufacturers,
              and hardware and furniture makers. The sections are supplied in aluminum alloys in
              accordance with applicable Indian and International Standards.
            </p>
            <button
              className="bg-[#004c91] text-white font-semibold py-2 px-6 rounded hover:bg-[#00396b] transition duration-300">
              Read More
            </button>
          </div>

        </div>
      </section>

      <div className="bg-gray-200 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Years of Experience */}
            <div className="flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-bold text-[#0A4C91] mb-4">
                25+
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-[#0A4C91]">
                Years of Combined<br />Experience
              </p>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-bold text-[#0A4C91] mb-4">
                200+
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-[#0A4C91]">
                Satisfied<br />Clients
              </p>
            </div>

            {/* Products Delivered */}
            <div className="flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-bold text-[#0A4C91] mb-4">
                700+
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-[#0A4C91]">
                Products<br />Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

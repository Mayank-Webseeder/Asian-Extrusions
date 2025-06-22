import React from 'react';

export default function EnvironmentHealthSafety() {
  return (
    <section className="min-h-screen bg-gray-100 px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 h-full">

        {/* Left Side - Full Cover Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
          <img
            src="/Home/environment.avif"
            alt="Hand protecting environment"
            className="w-full h-full object-cover rounded-md lg:rounded-none"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4C91] leading-tight">
            Environment Health and Safety Management
          </h1>

          <div className="space-y-4 text-[#05468D] text-base sm:text-lg">
            <p className="leading-relaxed">
              AEPL is a reputed manufacturer of Aluminium extruded sections in South India.
              AEPL addresses all related environmental issues and concerns along with safe
              and healthy working conditions for the prevention of work-related injury and
              ill health and is committed to eliminating hazards and reducing OH&S risks.
            </p>

            <p className="leading-relaxed">
              The organization is committed to promoting environmental safety to prevent
              air pollution and protect the environment by minimizing the impact of its
              activities through a proactive approach in identifying all significant
              environmental aspects and ensuring appropriate controls to maintain a green,
              clean & safe working environment.
            </p>

            <p className="leading-relaxed">
              AEPL ensures adherence to Environmental and Occupational Health & Safety
              norms laid down by CPCB and KSPCB and complies with all legal and other
              requirements applicable to the company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

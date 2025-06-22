import React from 'react';

export default function ProductionFacility() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://static.wixstatic.com/media/4dcc32_370dd3557f9a4aec80c3b18ad12dc716~mv2.jpeg/v1/fill/w_1159,h_960,al_c,q_85,enc_avif,quality_auto/4dcc32_370dd3557f9a4aec80c3b18ad12dc716~mv2.jpeg)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}

      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-8">

        {/* Main Extrusion Shop Card */}
        <div className="mb-8 max-w-4xl">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Extrusion Shop
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The Extrusion shop is equipped with a 1000 MT capacity PLC controlled Press Line capable of extruding aluminum profiles up to 120 mm CCD in various alloys. The billets are pre-heated using 250 KW Induction Billet Heater with precise temperature control with a tolerance of ±5°C, enhancing better product quality w.r.t finishing, analyzability, and mechanical properties. The production line is equipped with a 96KW electrical aging furnace for artificial aging treatment to desired mechanical properties.
            </p>
          </div>
        </div>

        {/* Bottom Two Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">

          {/* Die Shop Card */}
          <div className="flex-1">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Die Shop
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                The company is equipped with a die correction shop with a team of experienced technicians. The die correction shop is backward integrated with the Salt Bath Nitriding system.
              </p>
            </div>
          </div>

          {/* Quality Lab Card */}
          <div className="flex-1">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Quality Lab
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                The company has established a full-fledged state of art quality laboratory to ensure each piece that leaves its premises passes all the quality parameters up to the standard. The laboratory is equipped with a 10 KN capacity Universal Testing Machine, Vickers cum Brinell Hardness Tester, vacuum emission spectrometer, Rockwell hardness tester, and conductivity meter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
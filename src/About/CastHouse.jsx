import React from 'react';

export default function CastHouse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://static.wixstatic.com/media/4dcc32_a796fa9c5e9e443ea2c111bb359d7078~mv2.jpeg/v1/fill/w_791,h_960,al_c,q_85,enc_avif,quality_auto/4dcc32_a796fa9c5e9e443ea2c111bb359d7078~mv2.jpeg"
                alt="CAST HOUSE"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              Cast House
            </h1>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The Company is backward integrated with its own aluminum alloy billet casting facilities.
                The company has a 3MT bath capacity oil-fired tilting type melting-cum-holding furnace.
                The Hot Top Casting machine is capable to cast 135 mm diameter billets up to 6.5-meter
                length in various aluminum alloys like IS 19000, IS19501, IS 63400, IS 63401, IS64430,
                IS 65032, AA 6061, AA 6082, etc.
              </p>

              <p>
                Molten metal treatment is done using granular fluxes followed by the degassing process
                by eco-friendly Nitrogen injection. The molten metal is tested for any hydrogen entrapment
                prior to casting to enhance superior billet quality.
              </p>

              <p>
                Alloy Composition is determined using direct reading Vacuum Emission Spectrometer.
                Modification of alloy is done online if required and grain refinement is carried out
                using AlTiB rods/salt to ensure fine grains and better extrudability of the alloy.
                The precious casting temperature control further enhances the billet quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
// Replace with your actual image path

const ExtrudedSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* Left - Background Image */}
      <div className="lg:w-1/2 w-full h-[400px] lg:h-auto ">
        <img
          src='About/about3.avif' // Replace with your actual image path
          alt="Building Glass"
          className="w-full h-full object-cover z-[-4]"
        />
      </div>

      {/* Right - Text Content */}
      <div className="lg:w-1/2 w-full bg-[#084e8a] text-white p-6 md:p-10 flex items-center">
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            The registration covers the production, testing, and supply of
            extruded sections, which are used in auto industries, household
            appliances manufacturing industries, architectural, electrical,
            electronic, transport, consumer durable, and hardware industries.
          </p>

          <p className="font-semibold">Such products include –</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              Bars, Rods, Angles, Tee, and Channels: Extruded for engineering
              and auto industry.
            </li>
            <li>
              Round tube, hollow tube used in furniture and general engineering
              purpose.
            </li>
            <li>Moldings for bus bodies.</li>
            <li>
              Doors, windows, shutters, tracks, glazing clips, and handrail
              sections are used in door frames, windows, partitions, etc.
            </li>
            <li>
              Hinges, tower bolts, channels, handles, and other sections for the
              hardware industry.
            </li>
            <li>
              Flats, rods, channels, and tubes for applications as electrical
              busbars in panels and other equipment.
            </li>
            <li>
              Solar frames, keys & retainer angles for solar water heater &
              photovoltaic frame manufacturing industry.
            </li>
          </ol>

          <p>
            <strong>
              The extruded profiles are developed and supplied as per customer
              drawings and applicable Indian/International Standards.
            </strong>
          </p>

          <p>
            The sections are supplied in straight and long shapes, which are
            cut to customer-specified sizes. The range of section sizes includes
            5 to 100 mm circumscribed circle diameter and many forms of
            packaging. The used technologies include melting in oil fired
            tilting type reverberatory melting furnaces, DC casting, saw
            cutting, die ovens, billet heaters, hot extrusion, quenching in
            air/water/fog, stretching, final cutting, aging and shrink wrapping
            to protect the surface in transit. Ancillary facilities include
            turning, milling, and grinding. The testing equipment in the Quality
            assurance laboratory are CCD based Spectrometer, Universal Testing
            Machine, Vickers cum Brinell Hardness Tester, Macro Etching, Heat
            Treatment, Rockwell Hardness Testers, Conductivity Meter, Ageing
            Furnace, all standard length measuring instruments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtrudedSection;

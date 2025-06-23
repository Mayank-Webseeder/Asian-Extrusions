import React from 'react';

export default function ChooseUsSection() {
  return (
    <section className="bg-[#f4f7fa] py-16 ">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A4C91] mb-12">
        WHY CHOOSE US?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl lg:mx-auto lg:h-[525px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`group w-full h-auto   relative overflow-hidden`}
            style={{ backgroundColor: card.bg }}
          >
            {/* ✅ MOBILE/LAPTOP view (stacked layout) */}
            <div className="flex flex-col lg:hidden h-full">
              {/* Image Top */}
              <div className="h-auto w-full">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Bottom */}
              <div className="h-[50%] w-full p-8 flex flex-col justify-center">
                <h3 className="text-xl  font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-[12px]  text-white leading-relaxed">{card.text}</p>
              </div>
            </div>

            {/* ✅ DESKTOP view (original UI untouched) */}
            <div className="hidden lg:flex h-full">
              {/* Text */}
              <div className="h-full w-1/2 p-6 pt-10 flex flex-col justify-start transition-all duration-500 group-hover:scale-y-[1.08] group-hover:-translate-x-1 group-hover:translate-y-1 z-20">
                <h3 className="text-[18px] md:text-2xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-[12px] text-white ">{card.text}</p>
              </div>

              {/* Image */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 z-10">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:h-[242px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Card Data
const cardData = [
  {
    title: 'Preferred Partner',
    text: 'We are one of quality extrusions manufacturer with an ever-increasing customer base.',
    image: '/Home/partner.avif',
    alt: 'Partner',
    bg: '#5B52AE',
  },
  {
    title: 'Our Expertise',
    text: 'We cover the production, testing, and supply of extruded sections, which are used in multiple industries.',
    image: '/Home/expertise.avif',
    alt: 'Expertise',
    bg: '#A86200',
  },
  {
    title: 'Our Quality & Service',
    text: 'We ensure each piece that leaves the company’s premises passes all quality parameters.',
    image: '/Home/quality.avif',
    alt: 'Quality',
    bg: '#933300',
  },
  {
    title: 'Our Custom Profiles',
    text: 'Our aluminum extrusion presses manufacture custom products as per the client’s requirement.',
    image: '/Home/custom.avif',
    alt: 'Custom',
    bg: '#447A56',
  },
  {
    title: 'Modern Facilities',
    text: 'Our advanced machinery ensures efficient and high-quality output for all extrusion needs.',
    image: '/Home/facility.avif',
    alt: 'Facility',
    bg: '#0C6D89',
  },
  {
    title: 'Skilled Team',
    text: 'Our experienced team ensures precise operations and client satisfaction at every stage.',
    image: '/Home/team.avif',
    alt: 'Team',
    bg: '#2F4059',
  },
];

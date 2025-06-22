import React from 'react';

export default function ChooseUsSection() {
  return (
    <section className="bg-[#f4f7fa] py-16 px-4 md:px-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A4C91] mb-12">
        WHY CHOOSE US?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`group h-[327px] w-full bg-[${card.bg}] flex flex-col overflow-hidden rounded-md relative`}
            style={{ backgroundColor: card.bg }}
          >
            {/* Text */}
            <div className="h-1/2 w-1/2 p-6 pt-10 flex flex-col justify-start transition-all duration-500 group-hover:scale-y-[1.08] group-hover:-translate-x-1 group-hover:translate-y-1 z-20">
              <h3 className="text-[18px] md:text-2xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-white">{card.text}</p>
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

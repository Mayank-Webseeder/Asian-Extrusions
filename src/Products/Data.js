const products = [
  {
    id: 1,
    name: 'ROUND ROD',
    slug: 'round-rod',
    imageSrc: ['/Products/round-rod.jpeg'],
    imageAlt: 'Round Rod',
    link: '/PDF/round-rod.pdf'
  },
  {
    id: 2,
    name: 'FLAT BAR',
    slug: 'flat-bar',
    imageSrc: ['/Products/flat-bar.jpeg'],
    imageAlt: 'Flat Bar',
    link: '/PDF/flat-bar.pdf'
  },
  {
    id: 3,
    name: 'EQUAL ANGLES',
    slug: 'equal-angles',
    imageSrc: ['/Products/equal-angles.jpeg'],
    imageAlt: 'Equal Angles',
    link: '/PDF/equal-angles.pdf'
  },
  {
    id: 4,
    name: 'UNEQUAL ANGLES',
    slug: 'unequal-angles',
    imageSrc: ['/Products/unequal-angles.jpeg'],
    imageAlt: 'Unequal Angles',
    link: '/PDF/unequal-angles.pdf'
  },
  {
    id: 5,
    name: 'HEXAGONAL BARS',
    slug: 'hexagonal-bars',
    imageSrc: ['/Products/hexagonal-bars.jpeg'],
    imageAlt: 'Hexagonal Bars',
    link: '/PDF/hexagonal-bars.pdf'
  },
  {
    id: 6,
    name: 'U-CHANNELS',
    slug: 'u-channels',
    imageSrc: ['/Products/u-channels.jpeg'],
    imageAlt: 'U-Channels',
    link: '/PDF/u-channels.pdf'
  },
  {
    id: 7,
    name: 'DOUBLE GLASS CHANNELS',
    slug: 'double-glass-channels',
    imageSrc: ['/Products/double-glass-channels.avif'],
    imageAlt: 'Double Glass Channels',
    link: '/PDF/double-glass-channels.pdf'
  },
  {
    id: 8,
    name: 'SQUARE BAR',
    slug: 'square-bar',
    imageSrc: ['/Products/square-bar.jpeg'],
    imageAlt: 'Square Bar',
    link: '/PDF/square-bar.pdf'
  },
  {
    id: 9,
    name: 'TEE',
    slug: 'tee',
    imageSrc: ['/Products/tee.jpeg'],
    imageAlt: 'TEE',
    link: '/PDF/tee.pdf'
  },
  {
    id: 10,
    name: 'DOOR PARTITIONS SINGLE GROOVE',
    slug: 'door-partitions-single-groove',
    imageSrc: ['/Products/door-partitions-single-groove.jpeg'],
    imageAlt: 'DOOR PARTITIONS SINGLE GROOVE',
    link: '/PDF/door-partitions-single-groove.pdf'
  },
  {
    id: 11,
    name: 'DOOR PARTITIONS DOUBLE GROOVE',
    slug: 'door-partitions-double-groove',
    imageSrc: ['/Products/door-partitions-double-groove.jpeg'],
    imageAlt: 'DOOR PARTITIONS DOUBLE GROOVE',
    link: '/PDF/door-partitions-double-groove.pdf'
  },
  {
    id: 12,
    name: 'DOOR PARTITIONS DOOR CENTRE',
    slug: 'door-partitions-door-centre',
    imageSrc: ['/Products/door-partitions-door-centre.jpeg'],
    imageAlt: 'DOOR PARTITIONS DOOR CENTRE',
    link: '/PDF/door-partitions-door-centre.pdf'
  },
  {
    id: 13,
    name: 'DOOR PARTITIONS DOOR TOP',
    slug: 'door-partitions-door-top',
    imageSrc: ['/Products/door-partitions-door-top.jpeg'],
    imageAlt: 'DOOR PARTITIONS DOOR TOP',
    link: '/PDF/door-partitions-door-top.pdf'
  },
  {
    id: 14,
    name: 'DOOR PARTITIONS DOOR BOTTOM',
    slug: 'door-partitions-door-bottom',
    imageSrc: ['/Products/door-partitions-door-bottom.jpeg'],
    imageAlt: 'DOOR PARTITIONS DOOR BOTTOM',
    link: '/PDF/door-partitions-door-bottom.pdf'
  },
  {
    id: 15,
    name: 'DOOR PARTITIONS DOOR VERTICAL',
    slug: 'door-partitions-door-vertical',
    imageSrc: ['/Products/door-partitions-door-vertical.jpeg'],
    imageAlt: 'DOOR PARTITIONS DOOR VERTICAL',
    link: '/PDF/door-partitions-door-vertical.pdf'
  },
  {
    id: 16,
    name: 'DOOR PARTITIONS SAMOSA SECTIONS',
    slug: 'door-partitions-samosa-sections',
    imageSrc: ['/Products/door-partitions-samosa-sections.jpeg'],
    imageAlt: 'DOOR PARTITIONS SAMOSA SECTIONS',
    link: '/PDF/door-partitions-samosa-sections.pdf'
  },
  {
    id: 17,
    name: 'DOOR PARTITIONS ONE SIDE TOP',
    slug: 'door-partitions-one-side-top',
    imageSrc: ['/Products/door-partitions-one-side-top.jpeg'],
    imageAlt: 'DOOR PARTITIONS ONE SIDE TOP',
    link: '/PDF/door-partitions-one-side-top.pdf'
  },
  {
    id: 18,
    name: 'DOOR PARTITIONS CORNER SECTION',
    slug: 'door-partitions-corner-section',
    imageSrc: ['/Products/door-partitions-corner-section.jpeg'],
    imageAlt: 'DOOR PARTITIONS CORNER SECTION',
    link: '/PDF/door-partitions-corner-section.pdf'
  },
  {
    id: 19,
    name: 'DOOR PARTITIONS FISH BOTTOM',
    slug: 'door-partitions-fish-bottom',
    imageSrc: ['/Products/door-partitions-fish-bottom.jpeg', '/ProductD/19_1.jpeg', '/ProductD/19_2.jpeg', '/ProductD/19_3.jpeg', '/ProductD/19_4.jpeg'],
    imageAlt: 'DOOR PARTITIONS FISH BOTTOM',
    link: '/PDF/door-partitions-fish-bottom.pdf'
  },
  {
    id: 20,
    name: 'DOOR PARTITIONS MISCELLANEOUS',
    slug: 'door-partitions-miscellaneous',
    imageSrc: ['/Products/door-partitions-miscellaneous.jpeg', '/ProductD/20_1.jpeg'],
    imageAlt: 'DOOR PARTITIONS MISCELLANEOUS',
    link: '/PDF/door-partitions-miscellaneous.pdf'
  },
  {
    id: 21,
    name: 'GLAZINGS',
    slug: 'glazings',
    imageSrc: ['/Products/glazings.jpeg', '/ProductD/21_1.jpeg'],
    imageAlt: 'GLAZINGS',
    link: '/PDF/glazings.pdf'
  },
  {
    id: 22,
    name: 'GEAR SECTIONS',
    slug: 'gear-sections',
    imageSrc: ['/Products/gear-sections.jpeg', '/ProductD/22_1.jpeg', '/ProductD/22_2.jpeg'],
    imageAlt: 'GEAR SECTIONS',
    link: '/PDF/gear-sections.pdf'
  },
  {
    id: 23,
    name: 'SLIDING WINDOWS TWO TRACK SECTIONS',
    slug: 'sliding-windows-two-track-sections',
    imageSrc: ['/Products/sliding-windows-two-track-sections.jpeg', '/Products/sliding-windows-two-track-sections.jpeg'],
    imageAlt: 'SLIDING WINDOWS TWO TRACK SECTIONS',
    link: '/PDF/sliding-windows-two-track-sections.pdf'
  },
  {
    id: 24,
    name: 'SLIDING WINDOWS TWO TRACK GUTTER SECTIONS',
    slug: 'sliding-windows-two-track-gutter-sections',
    imageSrc: ['/Products/sliding-windows-two-track-gutter-sections.jpeg', '/ProductD/24_1.jpeg'],
    imageAlt: 'SLIDING WINDOWS TWO TRACK GUTTER SECTIONS',
    link: '/PDF/sliding-windows-two-track-gutter-sections.pdf'
  },
  {
    id: 25,
    name: 'SLIDING WINDOWS THREE TRACK SECTIONS',
    slug: 'sliding-windows-three-track-sections',
    imageSrc: ['/Products/sliding-windows-three-track-sections.jpeg', '/ProductD/25_1.jpeg'],
    imageAlt: 'SLIDING WINDOWS THREE TRACK SECTIONS',
    link: '/PDF/sliding-windows-three-track-sections.pdf'
  },
  {
    id: 26,
    name: 'SLIDING WINDOWS THREE GUTTER TRACK SECTIONS',
    slug: 'sliding-windows-three-gutter-track-sections',
    imageSrc: ['/Products/sliding-windows-three-gutter-track-sections.jpeg'],
    imageAlt: 'SLIDING WINDOWS THREE GUTTER TRACK SECTIONS',
    link: '/PDF/sliding-windows-three-gutter-track-sections.pdf'
  },
  {
    id: 27,
    name: 'SLIDING WINDOWS 18x40mm SERIES-OSO-BSO-IL',
    slug: 'sliding-windows-18x40mm-series-oso-bso-il',
    imageSrc: ['/Products/sliding-windows-18x40mm-series-oso-bso-il.jpeg', '/Products/sliding-windows-18x40mm-series-oso-bso-il.jpeg', '/ProductD/27_1.jpeg'],
    imageAlt: 'SLIDING WINDOWS 18x40mm SERIES-OSO-BSO-IL',
    link: '/PDF/sliding-windows-18x40mm-series-oso-bso-il.pdf'
  },
  {
    id: 28,
    name: 'SLIDING WINDOWS 18x50mm SERIES-OSO-BSO-IL',
    slug: 'sliding-windows-18x50mm-series-oso-bso-il',
    imageSrc: ['/Products/sliding-windows-18x50mm-series-oso-bso-il.jpeg', '/Products/sliding-windows-18x50mm-series-oso-bso-il.jpeg', '/ProductD/27_1.jpeg'],
    imageAlt: 'SLIDING WINDOWS 18x50mm SERIES-OSO-BSO-IL',
    link: '/PDF/sliding-windows-18x50mm-series-oso-bso-il.pdf'
  },
  {
    id: 29,
    name: 'SLIDING WINDOWS RADIUS 18x50mm SERIES-OSO-BSO-IL',
    slug: 'sliding-windows-radius-18x50mm-series-oso-bso-il',
    imageSrc: ['/Products/sliding-windows-radius-18x50mm-series-oso-bso-il.jpeg', '/Products/sliding-windows-18x50mm-series-oso-bso-il.jpeg', '/ProductD/29_1.jpeg'],
    imageAlt: 'SLIDING WINDOWS RADIUS 18x50mm SERIES-OSO-BSO-IL',
    link: '/PDF/sliding-windows-radius-18x50mm-series-oso-bso-il.pdf'
  },
  {
    id: 30,
    name: 'SLIDING WINDOWS TWO TRACK SECTIONS 25 mm SERIES',
    slug: 'sliding-windows-two-track-sections-25-mm-series',
    imageSrc: ['/Products/sliding-windows-two-track-sections-25-mm-series.jpeg', '/Products/sliding-windows-two-track-sections-25-mm-series.jpeg'],
    imageAlt: 'SLIDING WINDOWS TWO TRACK SECTIONS 25 mm SERIES',
    link: '/PDF/sliding-windows-two-track-sections-25-mm-series.pdf'
  },
  {
    id: 31,
    name: 'SLIDING WINDOWS THREE TRACK SECTIONS 25 mm SERIES',
    slug: 'sliding-windows-three-track-sections-25-mm-series',
    imageSrc: ['/Products/sliding-windows-three-track-sections-25-mm-series.jpeg'],
    imageAlt: 'SLIDING WINDOWS THREE TRACK SECTIONS 25 mm SERIES',
    link: '/PDF/sliding-windows-three-track-sections-25-mm-series.pdf'
  },
  {
    id: 32,
    name: 'SLIDING WINDOWS 25x50 mm SERIES-OSO-BSO-IL',
    slug: 'sliding-windows-25x50-mm-series-oso-bso-il',
    imageSrc: ['/Products/sliding-windows-25x50-mm-series-oso-bso-il.jpeg', '/Products/sliding-windows-25x50-mm-series-oso-bso-il.jpeg'],
    imageAlt: 'SLIDING WINDOWS 25x50 mm SERIES-OSO-BSO-IL',
    link: '/PDF/sliding-windows-25x50-mm-series-oso-bso-il.pdf'
  },
  {
    id: 33,
    name: 'SLIDING WINDOWS MESH SECTIONS',
    slug: 'sliding-windows-mesh-sections',
    imageSrc: ['/Products/sliding-windows-mesh-sections.jpeg', '/ProductD/33_1.jpeg',],
    imageAlt: 'SLIDING WINDOWS MESH SECTIONS',
    link: '/PDF/sliding-windows-mesh-sections.pdf'
  },
  {
    id: 34,
    name: 'SLIDING WINDOWS DOMAL SECTIONS',
    slug: 'sliding-windows-domal-sections',
    imageSrc: ['/Products/sliding-windows-domal-sections1.avif', '/ProductD/37_1.jpeg', '/ProductD/37_2.jpeg', '/ProductD/37_3.jpeg', '/ProductD/37_4.jpeg'],
    imageAlt: 'SLIDING WINDOWS DOMAL SECTIONS',
    link: '/PDF/sliding-windows-domal-sections.pdf'
  },
  {
    id: 35,
    name: 'SLIDING WINDOWS DOMAL SECTIONS',
    slug: 'sliding-windows-domal-sections',
    imageSrc: ['/Products/sliding-windows-domal-sections2.avif', '/ProductD/37_1.jpeg', '/ProductD/37_2.jpeg', '/ProductD/37_3.jpeg', '/ProductD/37_4.jpeg'],
    imageAlt: 'SLIDING WINDOWS DOMAL SECTIONS',
    link: '/PDF/sliding-windows-domal-sections.pdf'
  },
  {
    id: 36,
    name: 'SLIDING WINDOWS DOMAL SECTIONS',
    slug: 'sliding-windows-domal-sections',
    imageSrc: ['/Products/sliding-windows-domal-sections3.avif', '/ProductD/37_1.jpeg', '/ProductD/37_2.jpeg', '/ProductD/37_3.jpeg', '/ProductD/37_4.jpeg'],
    imageAlt: 'SLIDING WINDOWS DOMAL SECTIONS',
    link: '/PDF/sliding-windows-domal-sections.pdf'
  },
  {
    id: 37,
    name: 'SLIDING WINDOWS DOMAL SECTIONS',
    slug: 'sliding-windows-domal-sections',
    imageSrc: ['/Products/sliding-windows-domal-sections.jpeg', '/ProductD/37_1.jpeg', '/ProductD/37_2.jpeg', '/ProductD/37_3.jpeg', '/ProductD/37_4.jpeg'],
    imageAlt: 'SLIDING WINDOWS DOMAL SECTIONS',
    link: '/PDF/sliding-windows-domal-sections.pdf'
  },
  {
    id: 38,
    name: 'CURTAIN WALLS',
    slug: 'curtain-walls',
    imageSrc: ['/Products/curtain-walls.jpeg', '/ProductD/38_1.jpeg', '/ProductD/38_2.jpeg', '/ProductD/38_3.jpeg'],
    imageAlt: 'CURTAIN WALLS',
    link: '/PDF/curtain-walls.pdf'
  },
  {
    id: 39,
    name: 'CURTAIN WALLS SERIES',
    slug: 'curtain-walls-series',
    imageSrc: ['/Products/curtain-walls-series.jpeg', '/ProductD/39_1.jpeg', '/ProductD/39_2.jpeg', '/ProductD/39_3.jpeg'],
    imageAlt: 'CURTAIN WALLS SERIES',
    link: '/PDF/curtain-walls-series.pdf'
  },
  {
    id: 40,
    name: 'CASEMENT WINDOWS',
    slug: 'casement-windows',
    imageSrc: ['/Products/casement-windows.avif', '/ProductD/42_1.jpeg', '/ProductD/42_2.jpeg'],
    imageAlt: 'CASEMENT WINDOWS',
    link: '/PDF/casement-windows.pdf'
  },
  {
    id: 41,
    name: 'CASEMENT WINDOWS',
    slug: 'casement-windows',
    imageSrc: ['/Products/casement-windows1.avif', '/ProductD/42_1.jpeg', '/ProductD/42_2.jpeg'],
    imageAlt: 'CASEMENT WINDOWS',
    link: '/PDF/casement-windows.pdf'
  },
  {
    id: 42,
    name: 'CASEMENT WINDOWS',
    slug: 'casement-windows',
    imageSrc: ['/Products/casement-windows.jpeg', '/ProductD/42_1.jpeg', '/ProductD/42_2.jpeg'],
    imageAlt: 'CASEMENT WINDOWS',
    link: '/PDF/casement-windows.pdf'
  },
  {
    id: 43,
    name: 'RECTANGULAR TUBES',
    slug: 'rectangular-tubes',
    imageSrc: ['/Products/rectangular-tubes.jpeg'],
    imageAlt: 'RECTANGULAR TUBES',
    link: '/PDF/rectangular-tubes.pdf'
  },
  {
    id: 44,
    name: 'SQUARE TUBES',
    slug: 'square-tubes',
    imageSrc: ['/Products/square-tubes.jpeg'],
    imageAlt: 'SQUARE TUBES',
    link: '/PDF/square-tubes.pdf'
  },
  {
    id: 45,
    name: 'LOUVERS',
    slug: 'louvers',
    imageSrc: ['/Products/louvers.jpeg', '/ProductD/45_1.jpeg', '/ProductD/45_2.jpeg', '/ProductD/45_3.jpeg',],
    imageAlt: 'LOUVERS',
    link: '/PDF/louvers.pdf'
  },
  {
    id: 46,
    name: 'ARCHITECTURAL MISCELLANEOUS',
    slug: 'architectural-miscellaneous',
    imageSrc: ['/Products/architectural-miscellaneous1.avif', '/ProductD/49_1.jpeg', '/ProductD/49_2.jpeg', '/ProductD/49_3.jpeg'],
    imageAlt: 'ARCHITECTURAL MISCELLANEOUS',
    link: '/PDF/architectural-miscellaneous.pdf'
  },
  {
    id: 47,
    name: 'ARCHITECTURAL MISCELLANEOUS',
    slug: 'architectural-miscellaneous',
    imageSrc: ['/Products/architectural-miscellaneous2.avif', '/ProductD/49_1.jpeg', '/ProductD/49_2.jpeg', '/ProductD/49_3.jpeg'],
    imageAlt: 'ARCHITECTURAL MISCELLANEOUS',
    link: '/PDF/architectural-miscellaneous.pdf'
  },
  {
    id: 48,
    name: 'ARCHITECTURAL MISCELLANEOUS',
    slug: 'architectural-miscellaneous',
    imageSrc: ['/Products/architectural-miscellaneous3.avif', '/ProductD/49_1.jpeg', '/ProductD/49_2.jpeg', '/ProductD/49_3.jpeg'],
    imageAlt: 'ARCHITECTURAL MISCELLANEOUS',
    link: '/PDF/architectural-miscellaneous.pdf'
  },
  {
    id: 49,
    name: 'ARCHITECTURAL MISCELLANEOUS',
    slug: 'architectural-miscellaneous',
    imageSrc: ['/Products/architectural-miscellaneous.jpeg', '/ProductD/49_1.jpeg', '/ProductD/49_2.jpeg', '/ProductD/49_3.jpeg'],
    imageAlt: 'ARCHITECTURAL MISCELLANEOUS',
    link: '/PDF/architectural-miscellaneous.pdf'
  },
  {
    id: 50,
    name: 'INDUSTRIAL AC PANEL',
    slug: 'industrial-ac-panel',
    imageSrc: ['/ProductImages/00.avif', '/ProductD/50_1.jpeg', '/ProductD/50_2.jpeg'],
    imageAlt: 'industrial-ac-panel',
    link: '/PDF2/industrial-ac-panel.pdf'
  },
  {
    id: 51,
    name: 'INDUSTRIAL MISCELLANEOUS',
    slug: 'industrial-miscellaneous',
    imageSrc: ['/ProductImages/50.jpeg', '/ProductD/55_1.jpeg'],
    imageAlt: 'INDUSTRIAL MISCELLANEOUS',
    link: '/PDF2/industrial-miscellaneous.pdf'
  },
  {
    id: 52,
    name: 'INDUSTRIAL MISCELLANEOUS',
    slug: 'industrial-miscellaneous',
    imageSrc: ['/ProductImages/51.jpeg', '/ProductD/55_1.jpeg'],
    imageAlt: 'INDUSTRIAL MISCELLANEOUS',
    link: '/PDF2/industrial-miscellaneous.pdf'
  },
  {
    id: 53,
    name: 'INDUSTRIAL MISCELLANEOUS',
    slug: 'industrial-miscellaneous',
    imageSrc: ['/ProductImages/52.jpeg', '/ProductD/55_1.jpeg'],
    imageAlt: 'INDUSTRIAL MISCELLANEOUS',
    link: '/PDF2/industrial-miscellaneous.pdf'
  },
  {
    id: 54,
    name: 'INDUSTRIAL MISCELLANEOUS',
    slug: 'industrial-miscellaneous',
    imageSrc: ['/ProductImages/53.jpeg', '/ProductD/55_1.jpeg'],
    imageAlt: 'INDUSTRIAL MISCELLANEOUS',
    link: '/PDF2/industrial-miscellaneous.pdf'
  },
  {
    id: 55,
    name: 'INDUSTRIAL MISCELLANEOUS',
    slug: 'industrial-miscellaneous',
    imageSrc: ['/ProductImages/54.jpeg', '/ProductD/55_1.jpeg'],
    imageAlt: 'INDUSTRIAL MISCELLANEOUS',
    link: '/PDF2/industrial-miscellaneous.pdf'
  },
  {
    id: 56,
    name: 'SOLAR PANEL',
    slug: 'solar-panel',
    imageSrc: ['/ProductImages/55.jpeg', '/ProductD/57_1.jpeg', '/ProductD/57_2.jpeg',],
    imageAlt: 'SOLAR PANEL',
    link: '/PDF2/solar-panel.pdf'
  },
  {
    id: 57,
    name: 'SOLAR PANEL',
    slug: 'solar-panel',
    imageSrc: ['/ProductImages/56.jpeg', '/ProductD/57_1.jpeg', '/ProductD/57_2.jpeg'],
    imageAlt: 'SOLAR PANEL',
    link: '/PDF2/solar-panel.pdf'
  },
  {
    id: 58,
    name: 'HAND RAILS',
    slug: 'hand-rails',
    imageSrc: ['/ProductImages/57.jpeg', '/ProductD/58_1.jpeg', '/ProductD/58_2.jpeg', '/ProductD/58_3.jpeg', '/ProductD/58_4.jpeg'],
    imageAlt: 'HAND RAILS',
    link: '/PDF2/hand-rails.pdf'
  },
  {
    id: 59,
    name: 'HINGES',
    slug: 'hinges',
    imageSrc: ['/ProductImages/58.jpeg', '/ProductImages/58.jpeg'],
    imageAlt: 'HINGES',
    link: '/PDF2/hinges.pdf'
  },
  {
    id: 60,
    name: 'TOWER BOLTS',
    slug: 'tower-bolts',
    imageSrc: ['/ProductImages/59.jpeg', '/ProductImages/59.jpeg'],
    imageAlt: 'TOWER BOLTS',
    link: '/PDF2/tower-bolts.pdf'
  },
  {
    id: 61,
    name: 'TOP HAT SECTIONS',
    slug: 'top-hat-sections',
    imageSrc: ['/ProductImages/60.jpeg'],
    imageAlt: 'TOP HAT SECTIONS',
    link: '/PDF2/top-hat-sections.pdf'
  },
  {
    id: 62,
    name: 'MODULER FURNITURE',
    slug: 'moduler-furniture',
    imageSrc: ['/ProductImages/61.jpeg', '/ProductD/62_1.jpeg', '/ProductD/62_2.jpeg', '/ProductD/62_3.jpeg', '/ProductD/62_4.jpeg', '/ProductD/62_5.jpeg'],
    imageAlt: 'MODULER FURNITURE',
    link: '/PDF2/moduler-furniture.pdf'
  },
  {
    id: 63,
    name: 'LADDERS',
    slug: 'ladders',
    imageSrc: ['/ProductImages/62.jpeg', '/ProductD/63_1.jpeg', '/ProductD/63_2.jpeg', '/ProductD/63_3.jpeg'],
    imageAlt: 'LADDERS',
    link: '/PDF2/ladders.pdf'
  },
  {
    id: 64,
    name: 'SLIDING WINDOWS MISCELLANEOUS',
    slug: 'sliding-windows-miscellaneous',
    imageSrc: ['/ProductImages/63.jpeg', '/ProductD/66_1.jpeg', '/ProductD/66_2.jpeg', '/ProductD/66_3.jpeg', '/ProductD/66_4.jpeg', '/ProductD/66_5.jpeg'],
    imageAlt: 'SLIDING WINDOWS MISCELLANEOUS',
    link: '/PDF2/sliding-windows-miscellaneous.pdf'
  },
  {
    id: 65,
    name: 'SLIDING WINDOWS MISCELLANEOUS',
    slug: 'sliding-windows-miscellaneous',
    imageSrc: ['/ProductImages/64.jpeg', '/ProductD/66_1.jpeg', '/ProductD/66_2.jpeg', '/ProductD/66_3.jpeg', '/ProductD/66_4.jpeg', '/ProductD/66_5.jpeg'],
    imageAlt: 'SLIDING WINDOWS MISCELLANEOUS',
    link: '/PDF2/sliding-windows-miscellaneous.pdf'
  },
  {
    id: 66,
    name: 'SLIDING WINDOWS MISCELLANEOUS',
    slug: 'sliding-windows-miscellaneous',
    imageSrc: ['/ProductImages/65.jpeg', '/ProductD/66_1.jpeg', '/ProductD/66_2.jpeg', '/ProductD/66_3.jpeg', '/ProductD/66_4.jpeg', '/ProductD/66_5.jpeg'],
    imageAlt: 'SLIDING WINDOWS MISCELLANEOUS',
    link: '/PDF2/sliding-windows-miscellaneous.pdf'
  },
  {
    id: 67,
    name: 'SLIDING WINDOWS TRACK SECTIONS MISCELLANEOUS',
    slug: 'sliding-windows-track-sections-miscellaneous',
    imageSrc: ['/ProductImages/66.jpeg', '/ProductD/67_1.jpeg'],
    imageAlt: 'SLIDING WINDOWS TRACK SECTIONS MISCELLANEOUS',
    link: '/PDF2/sliding-windows-track-sections-miscellaneous.pdf'
  },
  {
    id: 68,
    name: 'WINDOWS MISCELLANEOUS',
    slug: 'windows-miscellaneous',
    imageSrc: ['/ProductImages/67.jpeg', '/ProductD/69_1.jpeg', '/ProductD/69_2.jpeg'],
    imageAlt: 'WINDOWS MISCELLANEOUS',
    link: '/PDF2/windows-miscellaneous.pdf'
  },
  {
    id: 69,
    name: 'WINDOWS MISCELLANEOUS',
    slug: 'windows-miscellaneous',
    imageSrc: ['/ProductImages/68.jpeg', '/ProductD/69_1.jpeg', '/ProductD/69_2.jpeg'],
    imageAlt: 'WINDOWS MISCELLANEOUS',
    link: '/PDF2/windows-miscellaneous.pdf'
  },
  {
    id: 70,
    name: 'KITCHEN CABINETS',
    slug: 'kitchen-cabinets',
    imageSrc: ['/ProductImages/69.jpeg', '/ProductD/70_1.jpeg', '/ProductD/70_2.jpeg', '/ProductD/70_3.jpeg', '/ProductD/70_4.jpeg'],
    imageAlt: 'KITCHEN CABINETS',
    link: '/PDF2/kitchen-cabinets.pdf'
  },
  {
    id: 71,
    name: 'ACP SECTIONS',
    slug: 'acp-sections',
    imageSrc: ['/ProductImages/70.jpeg', '/ProductD/71_1.jpeg', '/ProductD/71_2.jpeg'],
    imageAlt: 'ACP SECTIONS',
    link: '/PDF2/acp-sections.pdf'
  },
  {
    id: 72,
    name: 'GRILLS',
    slug: 'grills',
    imageSrc: ['/ProductImages/71.jpeg', '/ProductD/72_1.jpeg'],
    imageAlt: 'GRILLS',
    link: '/PDF2/grills.pdf'
  }
];
//done----


export default products;
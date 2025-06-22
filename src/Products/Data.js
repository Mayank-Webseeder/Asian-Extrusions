const products = [
  {
    name: 'ROUND ROD',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_3c281a1370654771902f2757b0239c2e~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'Round Rod',
    link: 'https://www.asianextrusions.com/projects/round-rod'
  },
  {
    name: 'FLAT BAR',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_8970888089804caaaa9caa12809b9a0c~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'Flat Bar',
    link: 'https://www.asianextrusions.com/projects/flat-bar'
  },
  {
    name: 'EQUAL ANGLES',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_634df2f718be4f6fa74f9519f3cbc08b~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'Equal Angles',
    link: 'https://www.asianextrusions.com/projects/equal-angles'
  },
  {
    name: 'UNEQUAL ANGLES',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_9c2bbd65e66248b4b80563420beb570b~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'Unequal Angles',
    link: 'https://www.asianextrusions.com/projects/unequal-angles'
  },
  {
    name: 'HEXAGONAL BARS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_5f0121a564694b30ba3714b0d7d9f6f5~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'Hexagonal Bars',
    link: 'https://www.asianextrusions.com/projects/hexagonal-bars'
  },
  {
    name: 'U-CHANNELS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_be57eb239f1049ac8bc11fbe5390c776~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'U-Channels',
    link: 'https://www.asianextrusions.com/projects/u-channels'
  },
  {
    name: 'DOUBLE GLASS CHANNELS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_be57eb239f1049ac8bc11fbe5390c776~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg', // Note: This was the same URL as U-Channels in your provided HTML. If you have a different URL for this, please provide it.
    imageAlt: 'Double Glass Channels',
    link: 'https://www.asianextrusions.com/projects/double-glass-channels'
  },
  {
    name: 'SQUARE BAR',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_4629c86907f84087b1c87fe8072e9e3d~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg', // Placeholder for Square Bar as no direct image was available for this in the provided HTML.
    imageAlt: 'Square Bar',
    link: 'https://www.asianextrusions.com/projects/square-bar'
  },
  {
    name: 'TEE',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_2863b36fe3f0430f8772871506716d1c~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpegttps://static.wixstatic.com/media/4dcc32_4629c86907f84087b1c87fe8072e9e3d~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg', // Placeholder for Square Bar as no direct image was available for this in the provided HTML.
    imageAlt: 'TEE',
    link: 'https://www.asianextrusions.com/projects/tee'
  },
  {
    name: 'DOOR PARTITIONS SINGLE GROOVE',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_367771cb8d7c42eb8497b6fd6fde47a8~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS SINGLE GROOVE',
    link: 'https://www.asianextrusions.com/projects/door-partitions-single-groove'
  },
  {
    name: 'DOOR PARTITIONS DOUBLE GROOVE',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_cecd5a7bdb934ac5a653fff16cdf4b1c~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS DOUBLE GROOVE',
    link: 'https://www.asianextrusions.com/projects/door-partitions-double-groove'
  },
  {
    name: 'DOOR PARTITIONS DOOR CENTRE',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_f05ac6c31da24b7a875a71efc1998048~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS DOOR CENTRE',
    link: 'https://www.asianextrusions.com/projects/door-partitions-door-centre'
  },
  {
    name: 'DOOR PARTITIONS DOOR TOP',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_a6786183662147aabada4b1109c314b0~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS DOOR TOP',
    link: 'https://www.asianextrusions.com/projects/door-partitions-door-top'
  },
  {
    name: 'DOOR PARTITIONS DOOR BOTTOM',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_19add62ae1204e859a3b730e8e665950~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS DOOR BOTTOM',
    link: 'https://www.asianextrusions.com/projects/door-partitions-door-bottom'
  },
  {
    name: 'DOOR PARTITIONS DOOR VERTICAL',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_25b42b6da77b44c5b0521b4c7e1b5b93~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS DOOR VERTICAL',
    link: 'https://www.asianextrusions.com/projects/door-partitions-door-vertical'
  },
  {
    name: 'DOOR PARTITIONS SAMOSA SECTIONS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_36f4e746fbf8405c988dc52d48d110f3~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS SAMOSA SECTIONS',
    link: 'https://www.asianextrusions.com/projects/door-partitions-samosa-sections'
  },
  {
    name: 'DOOR PARTITIONS ONE SIDE TOP',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_d8f57dd668b54dce938233f5d7027250~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS ONE SIDE TOP',
    link: 'https://www.asianextrusions.com/projects/door-partitions-one-side-top'
  },
  {
    name: 'DOOR PARTITIONS CORNER SECTION',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_dc09a931218e462e9a643d9b7d0d8013~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS CORNER SECTION',
    link: 'https://www.asianextrusions.com/projects/door-partitions-corner-section'
  },
  {
    name: 'DOOR PARTITIONS FISH BOTTOM',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_d2a13e5f01194b5ca68ac4afecc7e0be~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS FISH BOTTOM',
    link: 'https://www.asianextrusions.com/projects/door-partitions-fish-bottom'
  },
  {
    name: 'DOOR PARTITIONS MISCELLANEOUS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_76e5f693e9874a5ab1855ab5588a2266~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'DOOR PARTITIONS MISCELLANEOUS',
    link: 'https://www.asianextrusions.com/projects/door-partitions--miscellaneous'
  }, {
    name: 'GLAZINGS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_199983f3a2b847b398ce0f94c3c2dd89~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'GLAZINGS',
    link: 'https://www.asianextrusions.com/projects/glazings'
  },
  {
    name: 'GEAR SECTIONS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_b85f81b6ddc043c58323493963d0686a~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'GEAR SECTIONS',
    link: 'https://www.asianextrusions.com/projects/gear-sections'
  },
  {
    name: 'SLIDING WINDOWS TWO TRACK SECTIONS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_aae68bc6aebd4dceb87fc1dc952fe1a2~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'SLIDING WINDOWS TWO TRACK SECTIONS',
    link: 'https://www.asianextrusions.com/projects/sliding-windows-two-track-sections'
  },
  {
    name: 'SLIDING WINDOWS TWO TRACK GUTTER SECTIONS',
    imageSrc: 'https://static.wixstatic.com/media/4dcc32_bd4d548403da47aba18b3959e3d33325~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg',
    imageAlt: 'SLIDING WINDOWS TWO TRACK GUTTER SECTIONS',
    link: 'https://www.asianextrusions.com/projects/sliding-windows-two-track-gutter-sections'
  },
  {
    "name": "SLIDING WINDOWS THREE TRACK SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_6bcc7ed45cda4f2186064a5ce6f32aa8~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS THREE TRACK SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-three-track-sections"
  },
  {
    "name": "SLIDING WINDOWS THREE GUTTER TRACK SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_b4894122a27d4bb08762c2fd255904bd~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS THREE GUTTER TRACK SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-three-gutter-track-sections"
  },
  {
    "name": "SLIDING WINDOWS 18x40mm SERIES-OSO-BSO-IL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_4930380818db414bb2ed1b7805cbec65~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS 18x40mm SERIES-OSO-BSO-IL",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-18x40mm-series-oso-bso-il"
  },
  {
    "name": "SLIDING WINDOWS 18x50mm SERIES-OSO-BSO-IL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_ccf4e1a42dad41fcad8410a9ddbe9580~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS 18x50mm SERIES-OSO-BSO-IL",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-18x50mm-series-oso-bso-il"
  }, {
    "name": "SLIDING WINDOWS RADIUS 18x50mm SERIES-OSO-BSO-IL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_645d2990e66b449c82fb6a5da227cc4c~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS RADIUS 18x50mm SERIES-OSO-BSO-IL",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-radius-18x50mm-series-oso-bso-il"
  },
  {
    "name": "SLIDING WINDOWS TWO TRACK SECTIONS 25 mm SERIES",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_bde1a05841b246a39cd250c8c81d5b41~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS TWO TRACK SECTIONS 25 mm SERIES",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-two-track-sections-25-mm-series"
  },
  {
    "name": "SLIDING WINDOWS THREE TRACK SECTIONS 25 mm SERIES",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_e49425459a564f57ae3f06e81d4046c7~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS THREE TRACK SECTIONS 25 mm SERIES",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-three-track-sections-25-mm-series"
  },
  {
    "name": "SLIDING WINDOWS 25x50 mm SERIES-OSO-BSO-IL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_4d48de7a9c8c409c836bfe4dabb98a45~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS 25x50 mm SERIES-OSO-BSO-IL",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-25x50-mm-series-oso-bso-il"
  },
  {
    "name": "SLIDING WINDOWS MESH SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_6d56ce9e08f146dfa60d9471ef6c3d02~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS MESH SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-mesh-sections"
  },
  {
    "name": "SLIDING WINDOWS DOMAL SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_595bcf8df28040b79e25241df1255a07~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS DOMAL SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-domal-sections"
  },
  {
    "name": "SLIDING WINDOWS DOMAL SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_3568a4d25a0e471c94a0ece98b9c7b70~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS DOMAL SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-domal-sections"
  },
  {
    "name": "SLIDING WINDOWS DOMAL SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_2c323fc4bae5478d8797238c5c1f93f9~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS DOMAL SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-domal-sections"
  },
  {
    "name": "SLIDING WINDOWS DOMAL SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_e9a379d849254ab7ac93b5553361945f~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS DOMAL SECTIONS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-domal-sections"
  },
  {
    "name": "CURTAIN WALLS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_968a5638f92f440faddf844375231842~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "CURTAIN WALLS",
    "link": "https://www.asianextrusions.com/projects/curtain-walls"
  },
  {
    "name": "CURTAIN WALLS SERIES",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_e95bf2cfa2d54d29a64008c79bab64bd~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "CURTAIN WALLS SERIES",
    "link": "https://www.asianextrusions.com/projects/curtain-walls-series"
  },
  {
    "name": "CASEMENT WINDOWS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_e1f0267b36fc47e4b6c4ef8f9470fed2~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "CASEMENT WINDOWS",
    "link": "https://www.asianextrusions.com/projects/casement-windows"
  },
  {
    "name": "CASEMENT WINDOWS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_ce672e05ceb64bf5b21a7ae5af818a8f~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "CASEMENT WINDOWS",
    "link": "https://www.asianextrusions.com/projects/casement-windows"
  },
  {
    "name": "CASEMENT WINDOWS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_c39c43f1796c48b7ae5bcd345fdd6e2a~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "CASEMENT WINDOWS",
    "link": "https://www.asianextrusions.com/projects/casement-windows"
  },
  {
    "name": "RECTANGULAR TUBES",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_58a3fd8c5ee2437bbce40bd82d882fb6~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "RECTANGULAR TUBES",
    "link": "https://www.asianextrusions.com/projects/rectanguler-tubes"
  },
  {
    "name": "SQUARE TUBES",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_67e429e1657e4fbf84d9c867b6686a4f~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SQUARE TUBES",
    "link": "https://www.asianextrusions.com/projects/square-tubes"
  },
  {
    "name": "LOUVERS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_c775b854e767458c8c94b018ff7f6a90~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "LOUVERS",
    "link": "https://www.asianextrusions.com/projects/louvers"
  },
  {
    "name": "ARCHITECTURAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_4b84086fd1b548ee99ee239f041ca36d~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "ARCHITECTURAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/architectural-miscellaneous"
  },
  {
    "name": "ARCHITECTURAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_49b24c5c400049a197a0fec99ebc2255~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "ARCHITECTURAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/architectural-miscellaneous"
  },
  {
    "name": "ARCHITECTURAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_f8ae99f9b6334105b9124948e0025eb5~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "ARCHITECTURAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/architectural-miscellaneous"
  },
  {
    "name": "ARCHITECTURAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_5515884b432d4a738134888be990c4ad~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "ARCHITECTURAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/architectural-miscellaneous"
  },
  {
    "name": "INDUSTRIAL AC PANEL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_f27d268dbc0a46ecaf59a91bfd19026d~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "INDUSTRIAL AC PANEL",
    "link": "https://www.asianextrusions.com/projects/industrial-ac-panel"
  },
  {
    "name": "INDUSTRIAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_07743f086d334787bb19ee675ee2adee~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "INDUSTRIAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/industrial-miscellaneous"
  },
  {
    "name": "INDUSTRIAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_a5162e822623401988fd63334a04dbbb~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "INDUSTRIAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/industrial-miscellaneous"
  },
  {
    "name": "INDUSTRIAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_49fe795db02f4fde9554d7bf9851636a~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "INDUSTRIAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/industrial-miscellaneous"
  },
  {
    "name": "INDUSTRIAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_a7cb57aec234437fb0e669f05106106b~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "INDUSTRIAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/industrial-miscellaneous"
  },
  {
    "name": "INDUSTRIAL MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_ee1834413ea64de69cd0acabf4495709~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "INDUSTRIAL MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/industrial-miscellaneous"
  },
  {
    "name": "SOLAR PANEL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_d9336ba9e07b4f56b5a495a6ce8d9006~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SOLAR PANEL",
    "link": "https://www.asianextrusions.com/projects/solar-panel"
  },
  {
    "name": "SOLAR PANEL",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_b36337b14a024ef69095c14242d0d1d6~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SOLAR PANEL",
    "link": "https://www.asianextrusions.com/projects/solar-panel"
  },
  {
    "name": "HAND RAILS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_256744585f2d43f2af0e8ac02acd0308~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "HAND RAILS",
    "link": "https://www.asianextrusions.com/projects/hand-rails"
  },
  {
    "name": "HINGES",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_eadf756471cc4d23a91b3049b41dcdeb~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "HINGES",
    "link": "https://www.asianextrusions.com/projects/hinges"
  },
  {
    "name": "TOWER BOLTS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_ee0f38e5576f4134b38ce26108e863ae~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "TOWER BOLTS",
    "link": "https://www.asianextrusions.com/projects/tower-bolts"
  },
  {
    "name": "TOP HAT SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_c6ee5af6d660427e9687afdb447372e5~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "TOP HAT SECTIONS",
    "link": "https://www.asianextrusions.com/projects/top-hat-sections"
  },
  {
    "name": "MODULER FURNITURE",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_340835906e5747e6af7c063242cc07a5~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "MODULER FURNITURE",
    "link": "https://www.asianextrusions.com/projects/moduler-furniture"
  },
  {
    "name": "LADDERS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_14f5bc93f89e4d819f419d25e5bb98b6~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "LADDERS",
    "link": "https://www.asianextrusions.com/projects/ladders"
  },
  {
    "name": "SLIDING WINDOWS MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_5ca558c2f94140f9b9efda14a28221cd~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-miscellaneous"
  },
  {
    "name": "SLIDING WINDOWS MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_477ace3bb2f441a3a30fd501824e97ca~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-miscellaneous"
  },
  {
    "name": "SLIDING WINDOWS MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_d13aceac19ee454c8bdc7e693eb697fe~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-miscellaneous"
  },
  {
    "name": "SLIDING WINDOWS TRACK SECTIONS MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_24fe7899fd2f42e5acc0c9cc6cff149b~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "SLIDING WINDOWS TRACK SECTIONS MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/sliding-windows-track-sections-miscellaneous"
  },
  {
    "name": "WINDOWS MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_84d94ad5b875459288a382b0f23953aa~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "WINDOWS MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/windows-miscellaneous"
  },
  {
    "name": "WINDOWS MISCELLANEOUS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_858b7349ec5f49afaf078c5a9eb35fba~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "WINDOWS MISCELLANEOUS",
    "link": "https://www.asianextrusions.com/projects/windows-miscellaneous"
  },
  {
    "name": "KITCHEN CABINETS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_2dbd314e056349a5bccf35c3b8460fd1~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "KITCHEN CABINETS",
    "link": "https://www.asianextrusions.com/projects/kitchen-cabinets"
  },
  {
    "name": "ACP SECTIONS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_b939108916774f078f84e80b477b6fc0~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "ACP SECTIONS",
    "link": "https://www.asianextrusions.com/projects/acp-sections"
  },
  {
    "name": "GRILLS",
    "imageSrc": "https://static.wixstatic.com/media/4dcc32_314f2bb104004d479a3e8ba4753b0379~mv2.jpeg/v1/fill/w_299,h_238,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
    "imageAlt": "GRILLS",
    "link": "https://www.asianextrusions.com/projects/grills"
  }
];

export default products;
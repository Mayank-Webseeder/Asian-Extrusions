import React from 'react';

const FullStory = () => {
  return (
    <section className="bg-[#f5f9fd] py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0a4e94] mb-4">The Full Story</h2>

        {/* Blue Line below heading */}
        <div className="w-16 h-1 bg-[#0a4e94] mx-auto mb-8"></div>

        {/* Paragraphs */}
        <p className="text-[#0a4e94] text-lg leading-relaxed mb-6">
          Asian Extrusions Pvt Ltd manufactures various applications, namely architectural, hardware, road transport –
          vehicles, railways, electrical and electronic applications, engineering applications, automotive sector,
          consumer durables, etc.
        </p>
        <p className="text-[#0a4e94] text-lg leading-relaxed">
          Equipped with high-precision machinery and state of the art laboratory set-up, AEPL always delivers products
          to delight its customers on time.
        </p>
      </div>
    </section>
  );
};

export default FullStory;

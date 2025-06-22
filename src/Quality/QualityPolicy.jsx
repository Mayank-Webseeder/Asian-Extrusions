import React from 'react';

export default function QualityPolicy() {
  return (
    <section className="w-full bg-white px-6">
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
        style={{ height: '724px' }} // 🔥 Fixed height container
      >
        {/* ✅ Left Side: ISO Certificate Image */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <img
            src="https://static.wixstatic.com/media/4dcc32_76589c3c3c1640578119494e1678d2ea~mv2.jpg/v1/fill/w_628,h_1448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4dcc32_76589c3c3c1640578119494e1678d2ea~mv2.jpg"
            alt="ISO Certificate"
            className="h-full object-contain" // 🔥 Image matches full container height
          />
        </div>

        {/* ✅ Right Side: Quality Policy Text */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Quality Policy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The management of Asian Extrusions Private Limited is committed to ensuring customer satisfaction
            by delivering consistent quality through continual improvement of the processes, effective cost
            reduction, motivation, and training of the employees in compliance with the requirements of
            ISO 9001:2015 quality management system and applicable legislation.
          </p>
          <button className="bg-blue-800 text-white font-semibold px-6 py-3 rounded hover:bg-blue-900 transition-all">
            ISO Certificate
          </button>
        </div>
      </div>
    </section>
  );
}

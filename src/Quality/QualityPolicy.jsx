import React, { useState } from 'react';

export default function QualityPolicy() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full bg-white"

    >
      <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-around" style={{ height: '724px' }}>
        {/* ✅ Left Side: ISO Certificate Image */}
        <div className="w-full h-full hidden lg:flex">
          <img
            src="/cartificate.avif"
            alt="ISO Certificate"
            className="h-full w-full object-contain object-left"
          />
        </div>

        {/* ✅ Right Side: Quality Policy Text */}
        <div className="w-full lg:w-full h-full flex flex-col justify-center text-center lg:text-left px-6 lg:px-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Quality Policy</h2>
          <p className="text-lg lg:text-xl text-[#05468D] leading-relaxed mb-8">
            The management of Asian Extrusions Private Limited is committed to ensuring customer satisfaction
            by delivering consistent quality through continual improvement of the processes, effective cost
            reduction, motivation, and training of the employees in compliance with the requirements of
            ISO 9001:2015 quality management system and applicable legislation.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#05468D] text-white border border-blue-800 font-medium py-2 rounded transition-all w-1/3 mx-auto lg:mx-0"
          >
            ISO Certificate
          </button>
        </div>
      </div>

      {showModal && (
        /* 🔸 Overlay – kahin bhi click karein, modal band */
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-[#05468D]/70 flex items-center justify-center z-50 p-4"
        >
          {/* 🔹 Modal box – yahan click karne se modal na band ho */}
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}   // stop the bubbling
          >
            {/* ❌ Close button (extra, optional) */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 sm:top-2 sm:right-2 text-white text-6xl font-bold z-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              &times;
            </button>

            {/* 🖼️ Modal image */}
            <img
              src="/cartificate.avif"
              alt="ISO Certificate"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}


    </section>
  );
}

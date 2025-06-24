import React from 'react';


export default function Home() {
  return (
    <section className="bg-[#05468D] py-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Products Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-light mb-16 tracking-wide">
          Products
        </h1>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto">
          {/* Complete Product Catalogue Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-light mb-8">
            Complete Product Catalogue
          </h2>

          {/* Description Text */}
          <p className="text-white text-lg leading-relaxed mb-12 text-left max-w-5xl">
            Asian Extrusion provide premium quality aluminum extruded products. Our extensive catalog features a wide range of products that cater to diverse industrial requirements. From customized profiles to standard catalog items, our experts provide innovative solutions to meet your specific needs. We take pride in offering products that are durable, reliable and competitively priced. Browse through our catalog and discover why we are the trusted choice for leading corporations and enterprises across industries.
          </p>

          {/* Download Button */}
          <div className="flex justify-start">
            <a
              href="/Doc/AEPL_CATALOGUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#05468D] px-8 py-2 rounded-2xl  font-medium text-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span>Download Catalogue</span>

            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
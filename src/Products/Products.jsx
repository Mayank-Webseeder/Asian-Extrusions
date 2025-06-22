import React from 'react';
import products from "./Data.js";

function Products() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col items-center justify-between p-6"
            >
              <div className="flex-shrink-0 w-full h-40 flex items-center justify-center p-4">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/299x238/CCCCCC/333333?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-[#05468D] leading-tight">
                  {product.name}
                </h2>
              </div>
              <div className="mt-6">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-2xl shadow-sm text-white bg-[#05468D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;


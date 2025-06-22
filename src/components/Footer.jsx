import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#05468D] text-white max-auto py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Column 1: Logo + Description */}
          <div className="w-1/3 space-y-6">
            <img
              src="/Home/logo.avif"
              alt="Logo"
              className="w-36 h-auto bg-amber-50"
            />
            <p className="text-gray-100 text-[16px] leading-9">
              Asian Extrusion provides premium <br /> materials with advanced machines and <br />technology,
              ensuring the product strictly holds <br />high-quality standards.
            </p>
          </div>

          {/* Vertical Line 1 */}
          <div className="hidden md:block w-[6px] h-60 bg-[#7CA5C3] rounded-full opacity-70 "></div>

          {/* Column 2: Navigation */}
          <div className="md:w-1/4 flex flex-col md:flex-row gap-18 mt-6">
            {/* Left Links */}
            <ul className="space-y-4 text-gray-100 text-[18px]">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Product</a></li>
            </ul>

            {/* Right Links */}
            <ul className="space-y-4 text-gray-100 text-[18px]">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Vertical Line 2 */}
          <div className="hidden md:block w-[6px] h-60 bg-[#7CA5C3] rounded-full opacity-70"></div>

          {/* Column 3: Certificates & Credit */}
          <div className="md:w-1/4 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex gap-4">
              <img
                src="/Home/company.avif"
                alt="URS"
                className="w-40 h-auto object-contain"
              />

            </div>
            <div className="text-xs text-gray-200 mt-4 space-y-4 text-center md:text-left">
              <p>©2023 by <span className="font-semibold">Asian Extrusions</span>.</p>
              <p>Created by <span className="text-white font-medium">Webseeder Technologies.</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

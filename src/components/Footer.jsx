import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#05468D] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* ===== 🟦 Mobile View: Right Column on Top ===== */}
          <div className="md:hidden flex flex-col items-center w-full space-y-6">
            {/* Column 1: Logo + Description */}
            <div className="flex flex-col items-center text-center space-y-2">
              <img
                src="/Footer.avif"
                alt="Logo"
                className="w-80 h-auto"
              />

              <p className="text-gray-100 text-[16px]">
                Asian Extrusion provides premium
              </p>
              <p className="text-gray-100 text-[16px]">materials
                with advanced machines</p>
              <p className="text-gray-100 text-[16px]">and technology,
                ensuring the product</p>
              <p className="text-gray-100 text-[16px]">strictly holds
                high-quality standards.</p>
            </div>

            {/* Column 3: Certificates & Credit */}
            <div className="w-full flex flex-col items-center">
              <img
                src="/Home/company.avif"
                alt="URS"
                className="w-40 h-auto object-contain"
              />
              <div className="text-[16px] text-gray-200 mt-4 text-center space-y-2 mb-20">
                <p>©2023 by <span className="font-semibold">Asian Extrusions</span>.</p>
                <p>Created by <span className="text-white font-medium">Webseeder Technologies.</span></p>
              </div>
            </div>
          </div>

          {/* ===== 🟦 Desktop View: Full Layout ===== */}
          <div className="hidden md:flex w-full justify-between items-start gap-12">
            {/* Column 1: Logo + Description */}
            <div className="w-1/3 space-y-6">
              <img
                src="/Footer.avif"
                alt="Logo"
                className="w-80 h-auto "
              />
              <p className="text-gray-100 text-[16px] leading-9">
                Asian Extrusion provides premium <br /> materials with advanced machines and <br />technology,
                ensuring the product strictly holds <br />high-quality standards.
              </p>
            </div>

            {/* Vertical Line */}
            <div className="w-[6px] h-60 bg-[#7CA5C3] rounded-full opacity-70"></div>

            {/* Column 2: Navigation */}
            <div className="w-1/4 flex gap-16">
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

            {/* Vertical Line */}
            <div className="w-[6px] h-60 bg-[#7CA5C3] rounded-full opacity-70"></div>

            {/* Column 3: Certificates & Credit */}
            <div className="w-1/4 space-y-4 flex flex-col items-start ">
              <img
                src="/Home/company.avif"
                alt="URS"
                className="w-40 h-auto object-contain"
              />
              <div className="text-xs text-gray-200 mt-4 text-left space-y-1 ">
                <p>©2023 by <span className="font-semibold">Asian Extrusions</span>.</p>
                <p>Created by <span className="text-white font-medium ">Webseeder Technologies.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

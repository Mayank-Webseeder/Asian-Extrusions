import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-[111px]">
      {/* ✅ Static Image for Mobile & Laptop */}
      <img
        src="/Home/hero.avif" // 🔁 Replace with your actual image path
        alt="Background"
        className="block xl:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Background Video for Desktop only */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden xl:block absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/Vedio/home.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🎯 Diagonal Overlay */}
      <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />

      {/* Blue Overlay (full width on mobile/laptop, left only on desktop) */}
      <div className="absolute top-0 left-0 h-full w-full xl:w-[35%] bg-[#0a4c91]/60 z-10"></div>

      {/* Left Content */}
      <div className="relative z-20 flex items-center justify-center xl:justify-start h-full px-6 md:px-20 w-full xl:w-[35%]">
        <div className="max-w-2xl text-white space-y-6 text-left">
          <h1 className="text-3xl md:text-6xl  font-bold leading-tight space-y-2.5">
            Building a<br /> Brighter
            Today And<br /> Tomorrow!
          </h1>
          <p className="text-xl xl:text-xl font-light">
            Asian Extrusions Pvt. Ltd<br />
            “QUALITY IS INHERENT”
          </p>
        </div>
      </div>

      {/* ❌ Right Box - only on xl+ */}
      <div className="hidden xl:block absolute right-20 top-20 z-20 w-[300px] border border-white bg-white/0 text-white rounded-md overflow-hidden">
        {/* Top Row */}
        <div className="grid grid-cols-2 border-b border-white text-xl font-semibold">
          <div className="px-4 py-2 border-r border-white text-left">21 Jun 2025</div>
          <div className="px-4 py-2 text-right">5:05 PM</div>
        </div>

        {/* Center Heading */}
        <div className="text-center text-xl font-semibold px-4 py-3 border-b border-white">
          Reference Price of <br /> Aluminium
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 text-center text-xl border-t border-white">
          <div className="px-4 py-4 border-r border-white">
            <p className="font-semibold">NALCO</p>
            <p className="text-xs">(IE 07 GRADE INGOT)</p>
          </div>
          <div className="px-4 py-3">
            <p className="font-semibold">(₹/KG)</p>
            <p className="text-xl font-bold">259.25</p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Hero;

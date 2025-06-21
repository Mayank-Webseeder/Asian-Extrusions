import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-15">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://video.wixstatic.com/video/4dcc32_bf77ac12fd5a41f08655514754330cef/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🎯 Diagonal lines ONLY over the video */}
      <div className="absolute  inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />

      {/* Left Overlay */}
      <div className="absolute left-0 top-0 h-full w-[35%] bg-[#0a4c91]/60 z-10"></div>

      {/* Left Content */}
      <div className="relative z-20 flex items-center justify-start h-full px-6 md:px-20 w-[35%]">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-xl md:text-5xl font-bold leading-tight space-x-1">
            Building a Brighter <br />
            Today And Tomorrow!
          </h1>
          <p className="text-lg md:text-xl font-light">
            Asian Extrusions Pvt. Ltd<br />
            “QUALITY IS INHERENT”
          </p>
        </div>
      </div>

      {/* Right Box Content */}
      <div className="absolute right-20 top-20 z-20 w-[300px] border border-white bg-white/0  text-white rounded-md overflow-hidden">
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
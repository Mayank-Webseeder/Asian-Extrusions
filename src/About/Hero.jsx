import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[820px] overflow-hidden ">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed  w-full h-full object-cover z-[-2] "
        src="https://video.wixstatic.com/video/4dcc32_96b0325a5e1744b6ae0db4e6fd2461c7/1080p/mp4/file.mp4"
      ></video>
      {/* 🔸 Diagonal Lines Overlay */}
      <div className="absolute  inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />


      {/* 🟦 Content Box (right-aligned) */}
      <div className="flex justify-end items-center h-full px-6 md:px-16">
        <div className="bg-blue-900/60 p-8 rounded-lg text-white max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
          <p className="text-lg leading-relaxed">
            The company is managed by a team of highly experienced professionals. In today’s era of the highly
            crowded business segment of aluminium extrusions, Asian Extrusions Pvt Ltd has established itself as a
            reputed manufacturer of high-quality profiles. The company owns its customer’s trust due to its product
            quality, preciseness in dimensions, and serviceability.
          </p>
          <a
            href="https://www.asianextrusions.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded hover:bg-gray-200 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

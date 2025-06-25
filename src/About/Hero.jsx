import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[820px] overflow-hidden mt-25 lg:mt-0">
      {/* 🔹 Background Video (only for desktop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block fixed w-full h-full object-cover z-[-2]"
        src="/Vedio/about.mp4"
      ></video>

      {/* 🔹 Static Background Image (only for mobile) */}
      <div
        className="block md:hidden fixed w-full h-full bg-cover bg-center z-[-2]"
        style={{
          backgroundImage: `url('/About/aboutHero.jpg')`,
        }}
      ></div>

      {/* 🔸 Diagonal Lines Overlay */}
      <div className="absolute inset-0 z-[-1] bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />

      {/* 🟦 Content Box */}
      <div className="flex justify-end items-center h-full ">
        <div className="w-full md:w-[50%] h-full flex items-center">
          <div className="bg-[#05468D]/70 w-full h-full p-6 py-6 md:p-12 md:pt-40 md:px-20 text-white rounded-none md:rounded-lg space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold ">About Us</h2>
            <p className="text-xl leading-relaxed">
              The company is managed by a team of <br />highly experienced professionals. In today’s<br /> era of the highly
              crowded business segment<br /> of aluminium extrusions, Asian Extrusions Pvt <br />Ltd has established itself as a
              reputed<br /> manufacturer of high-quality profiles. The <br />company owns its customer’s trust due to its <br />product
              quality, preciseness in dimensions,<br /> and serviceability.
            </p><br />
            <a
              href="https://www.asianextrusions.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 text-center font-semibold px-5 py-2 rounded hover:bg-gray-200 transition w-fit "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

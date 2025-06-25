import React from "react";


const MissionVision = () => {
  return (
    <section className="w-full flex flex-col md:flex-row ">
      {/* Left: Mission */}
      <div className="relative w-full md:w-1/2 text-white">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/About/about6.avif')] bg-cover bg-center" />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#045184]/85 bg-opacity-80" />

        {/* Content */}
        <div className="relative z-10 p-10 md:p-20 max-w-md mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide superior quality aluminum extruded products and services
            to the customers, focusing on continual improvement in its overall
            quality management system and cost-effectiveness.
          </p>
        </div>
      </div>
      {/* Right: Vision */}
      <div className="relative w-full md:w-1/2 text-blue-900">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/About/about8.avif')] bg-cover bg-center" />
        {/* White overlay */}
        <div className="absolute inset-0 bg-gray-100/85 bg-opacity-80" />

        {/* Content */}
        <div className=" block relative z-10 p-10 md:p-20 max-w-md mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Vision</h2>
          <p className="text-lg leading-relaxed">
            To be a prominent market player with mutually beneficial,
            long-lasting relationships with customers by catering best quality
            products and services every time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;






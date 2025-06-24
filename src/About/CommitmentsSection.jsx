import React from "react";

const CommitmentsSection = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row min-h-[550px]">
        {/* Left Image */}
        <div className="hidden lg:block w-full lg:w-1/3">
          <img
            src="About/about1.avif"
            alt="Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Text */}
        <div className="w-full lg:w-1/3 bg-[#f4f8fb] flex justify-center items-center p-6 lg:p-10 text-center">
          <div className="text-[#044f96] space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Commitments</h2>
            <ul className="space-y-2 text-[18px] text-left list-disc list-inside">
              <li>Customer Satisfaction</li>
              <li>Reliability</li>
              <li>Excellence in Quality and Innovation</li>
              <li>Adoption of the latest techniques</li>
            </ul>
            <p className="text-[18px] text-left">
              It has led us to become one of quality extrusions manufacturer with
              an ever-increasing customer base.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 ">
          <img
            src="About/about2.avif"
            alt="Right"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
      <section className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#044f96] mb-8">
            Capability Description
          </h2>
        </div>
      </section>
    </>
  );
};

export default CommitmentsSection;

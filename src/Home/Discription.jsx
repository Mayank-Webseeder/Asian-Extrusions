import React from 'react'

export default function Discription() {
  return (
    <section className="w-full flex flex-col lg:flex-row h-auto lg:h-[550px] py-4 px-4 lg:py-0 lg:px-0">
      {/* Left Image */}
      <div className="lg:w-1/2 w-full">
        <img
          src="/Home/home1.avif"
          alt="Aluminium"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="lg:w-1/2 w-full bg-[#0A5AA4] text-white flex items-center ">
        <div className=" py-2 px-2 md:px-14 md:py-14 lg:p-12 w-full max-w-[900px] mx-auto">
          <p className="text-[18px] lg:text-[20px] leading-8 lg:leading-9 font-light">
            Asian Extrusions Pvt. Ltd is promoted by Mr. Mohammed<br />
            Nayeemuddin, a first-generation entrepreneur.<br />
            After establishing & running a successful retailing business of
            <br />various aluminum products in Bangalore since 2004,<br />
            Mr. Mohammed Nayemuddin, a Bachelor of Commerce<br />
            from Bangalore University, envisioned his dream into<br />
            reality in the form of an Aluminium Extrusions<br />
            manufacturing company in 2014.
          </p>
        </div>
      </div>
    </section>
  )
}

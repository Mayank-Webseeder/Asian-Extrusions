import React from 'react'

export default function Discription() {
  return (
    <section className="w-full flex flex-col md:flex-row h-[550px]">
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="/Home/home1.avif" // Yahan tum apna image laga lena
          alt="Aluminium"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 w-full bg-[#0A5AA4] text-white p-6 md:p-12 flex items-center ">
        <p className="text-[20px] leading-9 font-light ">
          Asian Extrusions Pvt. Ltd is promoted by Mr. Mohammed<br />
          Nayeemuddin, a first-generation entrepreneur.<br /> After establishing & running a successful retailing business of
          <br />various aluminum products in Bangalore since 2004,<br />
          Mr. Mohammed Nayemuddin, a Bachelor of Commerce<br />
          from Bangalore University, envisioned his dream into<br />
          reality in the form of an Aluminium Extrusions<br />
          manufacturing company in 2014.
        </p>
      </div>
    </section>
  )
}

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300 flex justify-around items-center py-5 z-40 lg:hidden">
      {/* Phone */}
      <a
        href="tel:+919448291588"
        className="flex flex-col items-center text-[#05468D]"
      >
        <FaPhoneAlt size={25} className='text-green-600' />

      </a>

      {/* Gmail */}
      <a
        href="mailto:pankaj@asianextrusions.com"
        className="flex flex-col items-center text-[#05468D]"
      >
        <FaEnvelope size={25} className="text-rose-700" />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/asianextrusions/"
        className="flex flex-col items-center text-[#05468D]"
      >
        <FaLinkedinIn size={25} className='text-blue-600' />

      </a>
      {/* Twitter */}
      <a
        href="https://x.com/asianextrusions"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-[#05478dee]"
      >
        <FaTwitter size={25} className='text-blue-400 font-bold ' />
      </a>
    </div>
  );
}

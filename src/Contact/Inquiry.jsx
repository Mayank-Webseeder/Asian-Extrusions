import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Inquiry() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://video.wixstatic.com/video/4dcc32_90bc46eb13044ee4b07c4f211be6f69f/720p/mp4/file.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black-200 bg-opacity-50"></div>
      <div className="absolute  inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title */}
        <h1 className="text-white text-6xl font-bold mb-16 text-center">
          Inquiry
        </h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full">
          {/* Address Card */}
          <div className="bg-blue-900 bg-opacity-90 p-12 text-center text-white flex flex-col items-center justify-center min-h-[300px]">
            <MapPin className="w-12 h-12 mb-6" />
            <h2 className="text-xl font-semibold mb-6">Address</h2>
            <p className="text-base leading-relaxed">
              Plot No. 87-A, 2nd KIADB<br />
              Industrial Area, Malur, Kolar,<br />
              Karnataka, 563130
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-[#05468D] bg-opacity-90 p-12 text-center text-white flex flex-col items-center justify-center min-h-[300px]">
            <Phone className="w-12 h-12 mb-6" />
            <h2 className="text-xl font-semibold mb-6">Phone</h2>
            <div className="space-y-2">
              <p className="text-base">+91 9448291585</p>
              <p className="text-base">+91 9448291588</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-blue-900 bg-opacity-90 p-12 text-center text-white flex flex-col items-center justify-center min-h-[300px]">
            <Mail className="w-12 h-12 mb-6" />
            <h2 className="text-xl font-semibold mb-6">Email</h2>
            <div className="space-y-2">
              <p className="text-base">nayeem@asianextrusions.com</p>
              <p className="text-base">pankaj@asianextrusions.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
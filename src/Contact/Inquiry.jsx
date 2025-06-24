import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Inquiry() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔹 Background for mobile/laptop: static image */}
      <div className="absolute inset-0 lg:hidden">
        <video
          className="w-full h-full object-cover"
          stopped
          loop
          muted
          playsInline
        >
          <source
            src="https://video.wixstatic.com/video/4dcc32_90bc46eb13044ee4b07c4f211be6f69f/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 🔹 Background for desktop: video */}
      <div className="hidden lg:block absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://video.wixstatic.com/video/4dcc32_90bc46eb13044ee4b07c4f211be6f69f/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>

      </div>

      {/* 🔹 Overlay pattern */}
      <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />

      {/* 🔹 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 mt-30 lg:mt-0">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
          Inquiry
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl w-full">
          {/* Address */}
          <div className="bg-blue-900 bg-opacity-90 p-8 text-center text-white flex flex-col items-center justify-center rounded-md">
            <MapPin className="w-10 h-10 mb-4" />
            <h2 className="text-lg md:text-xl font-semibold mb-4">Address</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Plot No. 87-A, 2nd KIADB<br />
              Industrial Area, Malur, Kolar,<br />
              Karnataka, 563130
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[#05468D] bg-opacity-90 p-8 text-center text-white flex flex-col items-center justify-center rounded-md">
            <Phone className="w-10 h-10 mb-4" />
            <h2 className="text-lg md:text-xl font-semibold mb-4">Phone</h2>
            <div className="space-y-1">
              <p className="text-sm md:text-base">+91 9448291585</p>
              <p className="text-sm md:text-base">+91 9448291588</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-blue-900 bg-opacity-90 p-8 text-center text-white flex flex-col items-center justify-center rounded-md">
            <Mail className="w-10 h-10 mb-4" />
            <h2 className="text-lg md:text-xl font-semibold mb-4">Email</h2>
            <div className="space-y-1">
              <p className="text-sm md:text-base">nayeem@asianextrusions.com</p>
              <p className="text-sm md:text-base">pankaj@asianextrusions.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

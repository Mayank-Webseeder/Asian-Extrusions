import React, { useState, useEffect } from 'react';

export default function ClientShowcase() {
  const clients = [
    {

      logo: "https://static.parastorage.com/services/editor-elements-library/dist/siteAssets/media/arrow-left.8dc41b29.png"
    },
    {
      name: "TechCorp",
      logo: "https://static.parastorage.com/services/editor-elements-library/dist/siteAssets/media/arrow-right.970da51a.png"

    },
    {
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "FutureTech",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "DigiSoft",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&crop=center"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? clients.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % clients.length);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Container that changes layout in desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 lg:px-35 px-0 lg:py-4 py-0">
          {/* Header */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h2 className="text-5xl font-bold text-[#084e8a]">Our Clients</h2>
          </div>

          {/* Client Box */}
          <div className="relative bg-white  min-h-[200px] w-[200px]  flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-full">
              <div
                key={currentIndex}
                className="animate-fade-in flex flex-col items-center"
              >
                <img
                  src={clients[currentIndex].logo}
                  alt={`${clients[currentIndex].name} logo`}
                  className="max-w-xs max-h-32 object-contain mb-4 filter drop-shadow-lg"
                />
                <h3 className="text-2xl font-semibold text-gray-700">
                  {clients[currentIndex].name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
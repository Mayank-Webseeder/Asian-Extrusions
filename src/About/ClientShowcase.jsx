import React, { useState, useEffect } from 'react';

export default function ClientShowcase() {
  const clients = [
    {
      logo: "/About/client.png"
    },
    {
      logo: "/About/client.avif"
    },
    {
      logo: "/About/client1.png"
    },
    {
      logo: "/About/client2.avif"
    },
    {
      logo: "/About/client3.png"
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
                  className="max-w-full h-full object-contain"
                />
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
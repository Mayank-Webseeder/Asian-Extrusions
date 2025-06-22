import React, { useState, useEffect } from 'react';

export default function ClientShowcase() {
  const clients = [
    {
      name: "NewTek",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center"
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
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-700 mb-4">Our Clients</h2>
        </div>

        {/* Client Showcase */}
        <div className="relative bg-white rounded-2xl shadow-lg p-12 min-h-[300px] flex items-center justify-center">
          {/* Client Logo Display */}
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
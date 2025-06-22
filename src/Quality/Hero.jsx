import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* 🔁 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src="https://video.wixstatic.com/video/4dcc32_6488996622c04b1683a4c6b9067cbb75/1080p/mp4/file.mp4"
      />

      {/* 🔲 Overlay Pattern (optional) */}
      <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/0da768_2729bfbce3874276a7dd057098f93949.png')] opacity-40 bg-repeat z-10"></div>
      <div className="absolute  inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />

      {/* ⬛ Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/10 z-20"></div>

      {/* 🔤 Text Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center h-full px-6">
        <h2 className="text-xl md:text-3xl font-serif italic tracking-wide mb-2">25+ years of</h2>
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4">COMBINED EXPERIENCE</h1>
        <p className="text-lg md:text-2xl mb-10">We have the know-how you need.</p>

        {/* ↓ Scroll Down */}
        <div className="flex flex-col items-center animate-bounce">
          <p className="italic text-base mb-2">Scroll Down</p>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

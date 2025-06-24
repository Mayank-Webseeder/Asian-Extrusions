import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* 🔁 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden lg:block"
        autoPlay
        muted
        loop
        playsInline
        src="/Vedio/quality.mp4"
      />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 block lg:hidden"
        stopped
        muted
        loop
        playsInline
        src="/Vedio/quality.mp4"
      />

      {/* 🔲 Overlay Pattern (optional) */}
      <div className="absolute  inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_6px)]" />

      {/* ⬛ Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/10 z-20"></div>

      {/* 🔤 Text Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center h-full px-6">
        <h2 className="text-xl md:text-3xl font-serif italic tracking-wide mb-2">25+ years of</h2>
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4">COMBINED EXPERIENCE</h1>
        <p className="text-lg md:text-2xl mb-10">We have the know-how you need.</p>

        {/* ↓ Scroll Down */}
        <button
          onClick={() =>
            document
              .getElementById("after-hero")   // ⬅️ id of next section
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center animate-bounce focus:outline-none"
        >
          <span className="italic text-xl mb-2">Scroll Down</span>
          <svg className="w-12 h-12" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

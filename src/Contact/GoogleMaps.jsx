import React from "react";


export default function StaticMapWithMarker() {
  return (
    <section className="w-full h-[500px] relative overflow-hidden">
      {/* Static Map */}
      <iframe
        title="Static Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31191.636153987183!2d77.9313!3d13.0021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719055413027!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="border-0 pointer-events-none"
        loading="lazy"
        allowFullScreen
      ></iframe>

      {/* Custom Marker (Only this is clickable) */}
      <a
        href="https://www.google.com/maps?q=Asian+Extrusions+Pvt+Ltd,+Malur,+Karnataka"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10"
      >
        <img src="/spotlight.png" alt="Custom Marker" />

      </a>
    </section>
  );
}

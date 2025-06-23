import React, { useEffect, useState, useRef } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button while scrolling
      setVisible(true);

      // Clear existing timeout if any
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout to hide after 2.5 sec of no scroll
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-20 right-5 z-50 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } lg:hidden`}
    >
      <button
        onClick={scrollToTop}
        className="text-[#05468D] bg-white p-1 rounded-full shadow-lg  transition border border-[#05468D] hover:bg-[#05468D] hover:text-white"
      >
        <MdKeyboardArrowUp size={40} />
      </button>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home1 from './Home/Home1';
import ChooseUsSection from './Home/ChooseUsSection';
import Industry from './Home/Industry.jsx';
import EnvironmentHealthSafety from './Home/EnvironmentHealthSafety.jsx';
import Footer from './Home/Footer.jsx';
import Hero from './Home/Hero.jsx';

function App() {
  const heroRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visible = still considered "in view"
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Navbar shown only when Hero is visible */}
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full z-50 transition-opacity duration-500">
          <Navbar />
        </div>
      )}

      {/* Hero Section with reference */}
      <div ref={heroRef}>
        <Hero />
      </div>

      {/* Other sections below */}
      <Home1 />
      <ChooseUsSection />
      <Industry />
      <EnvironmentHealthSafety />
      <Footer />
    </>
  );
}

export default App;

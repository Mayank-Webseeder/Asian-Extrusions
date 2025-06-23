import React from 'react';
import Navbar from '../components/Navbar';
import Discription from '../Home/Discription';
import ChooseUsSection from '../Home/ChooseUsSection';
import Industry from '../Home/Industry.jsx';
import EnvironmentHealthSafety from '../Home/EnvironmentHealthSafety.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../Home/Hero.jsx';
import MobileBottomNav from '../components/MobileBottomNav';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Discription />
      <ChooseUsSection />
      <Industry />
      <EnvironmentHealthSafety />
      <Footer />
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  );
}

export default Home;

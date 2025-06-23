import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Hero from '../About/Hero.jsx';
import FullStory from '../About/FullStory.jsx';
import MissionVision from '../About/MissionVision.jsx';
import CommitmentsSection from '../About/CommitmentsSection.jsx';
import ExtrudedSection from '../About/ExtrudedSection.jsx';
import CastHouse from '../About/CastHouse.jsx';
import ProductionFacility from '../About/ProductionFacility.jsx';
import ClientShowcase from '../About/ClientShowcase.jsx';
import MobileBottomNav from '../components/MobileBottomNav';

export default function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <FullStory />
      <MissionVision />
      <CommitmentsSection />
      <ExtrudedSection />
      <CastHouse />
      <ProductionFacility />
      <ClientShowcase />
      <Footer />
      <MobileBottomNav />
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import QualityManagementSystem from '../Quality/QualityManagementSystem.jsx';
import Hero from '../Quality/Hero.jsx';
import QualityPolicy from '../Quality/QualityPolicy.jsx';
import MobileBottomNav from '../components/MobileBottomNav';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Quality() {
  return (
    <>
      <Navbar />
      <Hero />
      <QualityManagementSystem />
      <QualityPolicy />
      <Footer />
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  )
}

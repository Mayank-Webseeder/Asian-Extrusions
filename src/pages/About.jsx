import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Hero from '../About/Hero.jsx';
import FullStory from '../About/FullStory.jsx';
import MissionVision from '../About/MissionVision.jsx';
import CommitmentsSection from '../About/CommitmentsSection.jsx';
import ExtrudedSection from '../About/ExtrudedSection.jsx';
export default function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <FullStory />
      <MissionVision />
      <CommitmentsSection />
      <ExtrudedSection />

    </>
  )
}

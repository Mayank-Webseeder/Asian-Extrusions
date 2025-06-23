import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Inquiry from '../Contact/Inquiry.jsx';
import ContactForm from '../Contact/ContactForm.jsx';
import ContactCards from '../Contact/ContactCards.jsx';
import LocationMap from '../Contact/GoogleMaps.jsx';
import MobileBottomNav from '../components/MobileBottomNav';


export default function Contact() {
  return (
    <>
      <Navbar />
      <Inquiry />
      <ContactForm />
      <ContactCards />
      <LocationMap />
      <Footer />
      <MobileBottomNav />
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Home from '../Products/Home.jsx';
import Products from '../Products/Products.jsx';
import MobileBottomNav from '../components/MobileBottomNav';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Product() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Footer />
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  )
}

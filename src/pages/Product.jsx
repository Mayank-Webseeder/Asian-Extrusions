import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Home from '../Products/Home.jsx';
import Products from '../Products/products.jsx';
import MobileBottomNav from '../components/MobileBottomNav';

export default function Product() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Footer />
      <MobileBottomNav />
    </>
  )
}

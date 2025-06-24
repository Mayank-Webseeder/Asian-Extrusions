import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Quality from './pages/Quality.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;

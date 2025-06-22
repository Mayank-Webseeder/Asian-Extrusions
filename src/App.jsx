import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Quality from './pages/Quality.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

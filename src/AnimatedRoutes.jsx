// AnimatedRoutes.jsx
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Quality from "./pages/Quality";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PageWrapper from "./components/PageWrapper";

export default function AnimatedRoutes() {
  const location = useLocation();          // current path

  return (
    <AnimatePresence mode="wait">          {/* fade-out → fade-in */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/quality" element={<PageWrapper><Quality /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Product /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/product/:slug" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

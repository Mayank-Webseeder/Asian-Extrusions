// AnimatedRoutes.jsx
import React from "react";
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
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper title="Premium Aluminum Extruted | Asian Extrusions">
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper title="About | Asian Extrusions">
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/quality"
          element={
            <PageWrapper title="Quality | Asian Extrusions">
              <Quality />
            </PageWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <PageWrapper title="Products ">
              <Product />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper title="Contact | Asian Extrusions">
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/product/:slug"
          element={
            <PageWrapper
              getTitle={({ slug }) => `${slug.toUpperCase()} | Asian Extrusions`}
            >
              <ProductDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageWrapper title="Privacy Policy | Asian Extrusions">
              <PrivacyPolicy />
            </PageWrapper>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <PageWrapper title="Terms & Conditions | Asian Extrusions">
              <TermsAndConditions />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

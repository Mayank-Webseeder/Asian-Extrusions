import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />   {/* ✨ smooth transitions yahan handle honge */}
    </BrowserRouter>
  );
}

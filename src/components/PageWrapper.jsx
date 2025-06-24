// src/components/PageWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },   // start invisible
  visible: { opacity: 1 },   // fade in
  exit: { opacity: 0 },   // fade out
};

export default function PageWrapper({ children, className = "" }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.50, ease: "easeInOut" }}
      className={`w-full min-h-screen ${className}`}
    >
      {children}
    </motion.main>
  );
}

// src/components/PageWrapper.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Props
 * ──────────────────────────────
 *  children   : page content
 *  className  : extra Tailwind classes (optional)
 *  title      : static title string (optional)
 *  getTitle   : fn(params) → dynamic title string (optional)
 */
export default function PageWrapper({
  children,
  className = "",
  title,
  getTitle,
}) {
  const params = useParams(); // slug, id, etc.

  /* ─── Title handler ─────────────────────── */
  useEffect(() => {
    const resolved =
      typeof getTitle === "function" ? getTitle(params) : title;

    if (resolved) document.title = resolved;
  }, [title, getTitle, params]);
  /* ───────────────────────────────────────── */

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full min-h-screen ${className}`}
    >
      {children}
    </motion.main>
  );
}

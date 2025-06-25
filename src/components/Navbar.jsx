import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  /* ── kitna px scroll hone par state badlegi ── */
  const SCROLL_THRESHOLD = 12

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      // ▶️ hide when scrolling down past threshold + some distance from top
      if (current - lastScrollY > SCROLL_THRESHOLD && current > 120) {
        setShowNavbar(false)
      }
      // ◀️ show when scrolling up past threshold
      else if (lastScrollY - current > SCROLL_THRESHOLD) {
        setShowNavbar(true)
      }

      setLastScrollY(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* ───────────────── Top Navbar ───────────────── */}
      {!menuOpen && (
        <nav
          className={`
            fixed top-0 left-0 z-50 w-full h-[111px] bg-[#f4f7fa] shadow-md
            flex items-center justify-between px-6 md:px-20
            transition-transform duration-500 ease-out
            ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          {/* Logo */}
          <Link to="/">
            <img
              src="/Home/logo.avif"
              alt="Logo"
              className="h-16 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden xl:flex space-x-8 text-[#005298] font-semibold">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/quality" className="hover:text-blue-600">Quality</Link>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </ul>

          {/* Social Icons */}
          <div className="hidden xl:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/asianextrusions/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] text-white p-2 rounded-full"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://x.com/asianextrusions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B5] text-white p-2 rounded-full"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="xl:hidden text-[#005298]"
          >
            <FaBars size={24} />
          </button>
        </nav>
      )}

      {/* ───────────────── Mobile Menu ───────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center
                        space-y-10 bg-[#005298] text-white text-xl font-semibold">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <FaTimes size={28} />
          </button>

          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/quality', 'Quality'],
            ['/products', 'Products'],
            ['/contact', 'Contact'],
            ['/privacy-policy', 'Privacy Policy'],
            ['/terms-and-conditions', 'Terms'],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar

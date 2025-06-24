import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScrollY) {
        setShowNavbar(false) // scrolling down
      } else {
        setShowNavbar(true) // scrolling up
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>


      {!menuOpen && (
        <nav
          className={`w-full h-[111px] bg-[#f4f7fa] flex items-center justify-between px-6 md:px-20 fixed top-0 left-0 z-50 shadow-md transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="/Home/logo.avif"
                alt="Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-8 text-[#005298] font-semibold text-base">
            <Link to="/" className="cursor-pointer hover:text-blue-600">Home</Link>
            <Link to="/about" className="cursor-pointer hover:text-blue-600">About</Link>
            <Link to="/quality" className="cursor-pointer hover:text-blue-600">Quality</Link>
            <Link to="/products" className="cursor-pointer hover:text-blue-600">Products</Link>
            <Link to="/contact" className="cursor-pointer hover:text-blue-600">Contact</Link>
          </ul>

          {/* Social Icons */}
          <div className="hidden xl:flex items-center space-x-4">
            <a href="https://www.linkedin.com/company/asianextrusions/" target="_blank" rel="noopener noreferrer" className="text-white bg-[#1DA1F2] p-2 rounded-full">
              <FaTwitter size={20} />
            </a>
            <a href="https://x.com/asianextrusions" target="_blank" rel="noopener noreferrer" className="text-white bg-[#0077B5] p-2 rounded-full">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Hamburger */}
          <button className="xl:hidden text-[#005298] focus:outline-none" onClick={() => setMenuOpen(true)}>
            <FaBars size={24} />
          </button>
        </nav>
      )}

      {/* Full Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-10 bg-[#005298] text-white text-xl font-semibold">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white">
            <FaTimes size={28} />
          </button>

          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</Link>
          <Link to="/quality" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Quality</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Privacy Policy</Link>
          <Link to="/terms-and-conditions" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Terms</Link>
        </div>
      )}

    </>
  )
}

export default Navbar

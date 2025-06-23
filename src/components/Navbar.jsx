import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar - Hidden on mobile when menuOpen is true */}
      {!menuOpen && (
        <nav className="w-full h-[111px] bg-[#f4f7fa] flex items-center justify-between px-6 md:px-20 fixed top-0 left-0 z-50 shadow-md">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Home/logo.avif"
              alt="Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-8 text-[#005298] font-semibold text-base">
            <Link to="/" className="cursor-pointer hover:text-blue-900">Home</Link>
            <Link to="/about" className="cursor-pointer hover:text-blue-900">About</Link>
            <Link to="/quality" className="cursor-pointer hover:text-blue-900">Quality</Link>
            <Link to="/products" className="cursor-pointer hover:text-blue-900">Products</Link>
            <Link to="/contact" className="cursor-pointer hover:text-blue-900">Contact</Link>
          </ul>


          {/* Social Icons and Hamburger - Only on desktop */}
          <div className="hidden xl:flex items-center space-x-4">

            <a href="https://www.linkedin.com/company/asianextrusions/" className="text-white bg-[#1DA1F2] p-2 rounded-full ">
              <FaTwitter size={20} />
            </a>
            <a to="https://x.com/asianextrusions" className="text-white bg-[#0077B5] p-2 rounded-full">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Hamburger - Hidden on desktop */}
          <button
            className="xl:hidden text-[#005298] focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars size={24} />
          </button>

        </nav>
      )}

      {/* Full Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0  z-50 flex flex-col items-center justify-center space-y-10 bg-[#005298] text-white text-xl font-semibold">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FaTimes size={28} />
          </button>

          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">About</Link>
          <Link to="/quality" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Quality</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Contact</Link>
        </div>
      )}
    </>
  )
}

export default Navbar

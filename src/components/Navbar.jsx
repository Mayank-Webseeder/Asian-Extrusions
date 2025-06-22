import React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full h-[111px] bg-[#f4f7fa] flex items-center justify-between px-6 md:px-20 fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/Home/logo.avif" // yahan apna logo laga lena
          alt="Logo"
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-[#005298] font-semibold text-base">
        <Link to="/" className="cursor-pointer hover:text-blue-900">Home</Link>
        <Link to="/about" className="cursor-pointer hover:text-blue-900">About</Link>
        <Link to="/quality" className="cursor-pointer hover:text-blue-900">Quality</Link>
        <Link to="/products" className="cursor-pointer hover:text-blue-900">Products</Link>
        <Link to="/contact" className="cursor-pointer hover:text-blue-900">Contact</Link>
      </ul>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <Link to="#" className="text-white bg-[#1DA1F2] p-2 rounded-full hover:scale-110 transition">
          <FaTwitter size={20} />
        </Link>
        <Link to="#" className="text-white bg-[#0077B5] p-2 rounded-full hover:scale-110 transition">
          <FaLinkedinIn size={20} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

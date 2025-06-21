import React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="w-full h-[111px] bg-[#f4f7fa] flex items-center justify-between px-6 md:px-20 fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.avif" // yahan apna logo laga lena
          alt="Logo"
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-[#005298] font-semibold text-base">
        <li className="cursor-pointer hover:text-blue-900">Home</li>
        <li className="cursor-pointer hover:text-blue-900">About</li>
        <li className="cursor-pointer hover:text-blue-900">Quality</li>
        <li className="cursor-pointer hover:text-blue-900">Products</li>
        <li className="cursor-pointer hover:text-blue-900">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="#" className="text-white bg-[#1DA1F2] p-2 rounded-full hover:scale-110 transition">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-white bg-[#0077B5] p-2 rounded-full hover:scale-110 transition">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar

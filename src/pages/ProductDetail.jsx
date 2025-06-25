import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../Products/Data.js'
import { FaDownload } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import ScrollToTopButton from '../components/ScrollToTopButton';
import MobileBottomNav from '../components/MobileBottomNav';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const productIndex = products.findIndex(p => p.slug === slug)
  const product = products[productIndex]

  const goTo = (offset) => {
    const nextProduct = products[productIndex + offset]
    if (nextProduct) {
      navigate(`/product/${nextProduct.slug}`)
    }
  }

  if (!product) return <div className="text-center mt-10">Product not found.</div>

  const isPDF = product.link && product.link.endsWith('.pdf')

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-5 md:px-32 py-10 bg-white mt-20 ">
        {/* Back */}
        <button
          onClick={() => navigate('/products')}
          className="absolute top-4 left-4 lg:static lg:mb-6 text-blue-600
             text-base md:text-lg"
        >
          &lt; Back
        </button>

        {/* Title + Download */}
        <div className="flex justify-between items-center mb-10 mt-10  lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a58aa]">
            {product.name}
          </h1>

          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <FaDownload
                className="text-[#0a58aa] hover:text-blue-800
                   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              />
            </a>
          )}
        </div>

        {/* Tagline */}
        <p className="text-[#0a58aa] text-xl font-medium mb-4">The quality is inherent..</p>

        {/* Description */}
        <div className="text-gray-800 space-y-4 leading-7 mb-12">
          <p>
            Asian Extrusions Pvt. Ltd stands out in the market with its extensive expertise and commitment to
            delivering high-quality aluminum extruded profiles. With years of experience, the company has gained a deep
            understanding of various industries' needs and is well-equipped to cater to them. Their state-of-the-art
            laboratory and precision machinery ensure that each piece meets strict quality parameters, guaranteeing
            customers reliable and top-notch products.
          </p>
          <p>
            This commitment to sustainability benefits the environment and reflects their dedication to responsible
            business practices. As a preferred partner, the company has garnered trust and loyalty from a growing
            customer base. Asian Extrusions Pvt. Ltd's unwavering focus on quality, customer satisfaction, and adherence
            to environmental standards positions them as a reliable and competitive player in the aluminum extrusion
            industry.
          </p>
        </div>
        {/* Image Section */}
        <div className="mb-6">
          {/* ✅ Desktop View */}
          <div className="hidden lg:flex justify-start gap-6 flex-wrap">
            {product.imageSrc.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${product.imageAlt} ${i + 1}`}
                className="w-[400px] h-[300px] object-cover "
              />
            ))}
          </div>

          {/* ✅ Mobile to Laptop View - Slider */}
          <div className="flex lg:hidden overflow-x-auto gap-4">
            {product.imageSrc.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${product.imageAlt} ${i + 1}`}
                className="min-w-[90%] h-[220px] object-cover "
              />
            ))}
          </div>
        </div>

        {/* Prev / Next / Download */}
        <div className="mt-10 flex flex-wrap justify-between items-center gap-4">
          <button
            onClick={() => goTo(-1)}
            className="px-4 py-2 text-blue-600 text-base md:text-lg disabled:opacity-50"
            disabled={productIndex === 0}
          >
            Previous
          </button>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#0A4C91] text-white rounded text-base md:text-lg"
          >
            Download
          </a>

          <button
            onClick={() => goTo(1)}
            className="px-4 py-2 text-blue-600 text-base md:text-lg disabled:opacity-50"
            disabled={productIndex === products.length - 1}
          >
            Next
          </button>
        </div>


      </div>
      <Footer />
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  )
}

export default ProductDetail

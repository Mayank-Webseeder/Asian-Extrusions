import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../Products/Data.js'
import { FaDownload } from 'react-icons/fa'
import Navbar from '../components/Navbar'

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
        <button className="text-blue-600 mb-6" onClick={() => navigate('/products')}>&lt; Back</button>

        {/* Title + Download */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-[#0a58aa]">{product.name}</h1>
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload size={28} className="text-[#0a58aa] hover:text-blue-800" />
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
        {console.log(product.imageSrc)}
        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-[300px] h-[220px] object-cover rounded shadow-md"
          />
        </div>

        {/* Prev/Next + Download Button */}
        <div className="mt-10 flex justify-between">
          <button
            onClick={() => goTo(-1)}
            className="px-4 py-2 text-blue-600 text-xl disabled:opacity-50"
            disabled={productIndex === 0}
          >
            Previous
          </button>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-2 bg-[#0A4C91] text-white rounded inline-block"
          >
            Download
          </a>

          <button
            onClick={() => goTo(1)}
            className="px-4 py-2 text-blue-600 text-xl disabled:opacity-50"
            disabled={productIndex === products.length - 1}
          >
            Next
          </button>
        </div>

      </div>
    </>
  )
}

export default ProductDetail

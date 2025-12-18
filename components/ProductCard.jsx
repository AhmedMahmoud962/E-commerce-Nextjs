'use client'
import Image from 'next/image'
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

const ProductCard = ({ product }) => {
  const [isTouched, setIsTouched] = useState(false)

  return (
    <div
      className="group relative"
      onTouchStart={() => setIsTouched(true)}
      onMouseLeave={() => setIsTouched(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          alt={product.name}
          src={product.image[0]}
          className="w-full h-auto aspect-square bg-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
          width={800}
          height={800}
          quality={100}
          priority
        />

        {/* Hover/Touch Overlay with Icons */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3 z-10 ${
            isTouched
              ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100'
              : 'opacity-0 md:group-hover:opacity-100'
          }`}
        >
          <Link
            href={`/product_details/${product._id}`}
            className="bg-white active:bg-gray-900 active:text-white hover:bg-gray-900 hover:text-white text-gray-900 p-2 sm:p-3 rounded-full transition-all duration-300 transform active:scale-95 hover:scale-110 shadow-lg"
            aria-label="Quick view"
            onClick={(e) => e.stopPropagation()}
          >
            <FiEye className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="/wishlist"
            className="bg-white active:bg-gray-900 active:text-white hover:bg-gray-900 hover:text-white text-gray-900 p-2 sm:p-3 rounded-full transition-all duration-300 transform active:scale-95 hover:scale-110 shadow-lg"
            aria-label="Add to wishlist"
            onClick={(e) => e.stopPropagation()}
          >
            <FiHeart className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="/cart"
            className="bg-white active:bg-gray-900 active:text-white hover:bg-gray-900 hover:text-white text-gray-900 p-2 sm:p-3 rounded-full transition-all duration-300 transform active:scale-95 hover:scale-110 shadow-lg"
            aria-label="Add to cart"
            onClick={(e) => e.stopPropagation()}
          >
            <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>

      <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
        <div className="flex-1">
          <h3 className="text-xs sm:text-sm text-gray-700 font-medium line-clamp-1">
            <Link href={`/product_details/${product._id}`}>{product.name}</Link>
          </h3>
          <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-red-600 mt-1 sm:mt-0">
          {product.price}
        </p>
      </div>
    </div>
  )
}

export default ProductCard

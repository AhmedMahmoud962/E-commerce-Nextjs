'use client'
import Link from 'next/link'
import ProductCard from './ProductCard'


const ProductList = ({ products, showButton }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">
              Our <span className="font-bold text-red-600">Products</span>
            </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-6 xl:gap-y-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {/* View All Products */}
        {showButton && (
          <Link href="/products" className="flex justify-center mt-6">
            <button className="bg-gray-100 text-black px-4 py-2 cursor-pointer rounded-xl curser-pointer  hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 ">
              SEE MORE
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProductList

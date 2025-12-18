import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeaderSlider from '../../components/HeaderSlider'
import TrustedBy from '../../components/TrustedBy'
import Productlist from '../../components/productList'
import { productsDummyData } from '../../lib/product.js'
import FeaturesProduct from '../../components/FeaturesProduct'
import Banner from '../../components/Banner'
import Testimonial from '../../components/Testimonial'
import Counter from '../../components/Counter'

// META DATA
export const metadata = {
  title: 'Home | E-Commerce Website',
  description: 'E-Commerce Website',
  keywords:
    'E-Commerce Website, E-Commerce, Website, Online Shopping, Shopping, Shopping Online, Shopping Online Website, Shopping Online Website E-Commerce, Shopping Online Website E-Commerce Website',
  author: 'E-Commerce Website',
}
function page() {
  const Homeproduct = productsDummyData.slice(0, 10)
  return (
    <div>
      <Navbar />
      <HeaderSlider />
      <TrustedBy />
      <Productlist products={Homeproduct} showButton={true} />
      <FeaturesProduct />
      <Banner
        title="Our Products"
        description="We have a new collection of products for you to choose from and enjoy your time shopping with us and enjoy the best quality products with the best price and the best service and the best experience ."
        buttonText="Shop Now"
      />
      <Testimonial />
      <Counter />
      <Footer />
    </div>
  )
}

export default page

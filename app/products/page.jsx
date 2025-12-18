import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductList from '../../components/productList'
import { productsDummyData } from '../../lib/product.js'
import Banner from '../../components/Banner'
import Testimonial from '../../components/Testimonial'
import Counter from '../../components/Counter'

// META DATA
export const metadata = {
  title: 'Products | E-Commerce Website',
  description: 'Products page',
  keywords:
    'E-Commerce Website, E-Commerce, Website, Online Shopping, Shopping, Shopping Online, Shopping Online Website, Shopping Online Website E-Commerce, Shopping Online Website E-Commerce Website',
  author: 'E-Commerce Website',
}
const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Products"
        description="We have a wide range of products for you to choose from."
        buttonText="Shop Now"
      />
      <ProductList products={productsDummyData} showButton={false} />
      <Testimonial />
      <Counter />
      <Footer />
    </>
  )
}

export default ProductsPage

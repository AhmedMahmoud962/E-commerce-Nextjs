import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { productsDummyData } from '../../../lib/product'
import ProductDetailsSection from '../../../components/ProductDetailsSection'
import { notFound } from 'next/navigation'
import ProductList from '../../../components/productList'

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = productsDummyData.find(p => p._id === id)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params
  const product = productsDummyData.find(p => p._id === id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <ProductDetailsSection product={product} />
      <ProductList products={productsDummyData.slice(0, 5)} showButton={true} />
      <Footer />
    </>
  )
}

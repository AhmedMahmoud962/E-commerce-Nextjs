import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// import Banner from '../../components/Banner'
import ContactUsSection from '../../components/ContactUsSection'

// META DATA
export const metadata = {
  title: 'Contact Us | E-Commerce Website',
  description: 'Contact Us page',
  keywords: 'E-Commerce Website, E-Commerce, Website, Online Shopping, Shopping, Shopping Online, Shopping Online Website, Shopping Online Website E-Commerce, Shopping Online Website E-Commerce Website',
  author: 'E-Commerce Website',
}
const contactPage = () => {
  return (
    <div> 
      <Navbar />
      {/* <Banner title="Contact Us" description="We are a team of passionate developers who are dedicated to creating the best ecommerce website for you." buttonText="Shop Now" /> */}
      <ContactUsSection />
      <Footer />
      </div>
  )
}

export default contactPage
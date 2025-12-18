import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import AboutUsSection from '../../components/AboutUsSection'
import Testimonial from '../../components/Testimonial'
import Counter from '../../components/Counter'
// META DATA
export const metadata = {
  title: 'About Us | E-Commerce Website',
  description: 'About Us page',
  keywords: 'E-Commerce Website, E-Commerce, Website, Online Shopping, Shopping, Shopping Online, Shopping Online Website, Shopping Online Website E-Commerce, Shopping Online Website E-Commerce Website',
  author: 'E-Commerce Website',
}
const AboutPage = () => { 
  return (
    <div>
      <Navbar />
      <Banner title="About Us" description="We are a team of passionate developers who are dedicated to creating the best ecommerce website for you." buttonText="Contact Us" />
      <AboutUsSection />
      <Testimonial />
      <Counter />
      <Footer />
    </div>
  )
}

export default AboutPage
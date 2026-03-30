import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PopularTours from '@/components/PopularTours'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <PopularTours/>
      <Features/>
      <Testimonials/>
      <WhyChooseUs/>
    </div>
  )
}

export default page
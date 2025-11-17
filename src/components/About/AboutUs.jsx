import React from 'react'
import About from './About'

const AboutUs = () => {
  return (
    <>
      <About />
      <div className="text-center">
        <p className="text-3xl font-bold text-[#006767] mt-5">About Us</p>
        <p className="text-[#006767] mt-8 font-semibold font-[cursive]">Lorem ipsum dolor, sit amet consectetur adi pisicing elit. Libero minima qui porro.</p>
        <img src="/src/assets/background5.jpg" alt="buildings" className="h-[350px] w-[600px] rounded-[10px] mx-auto object-cover mb-9 mt-3" />
      </div>
    </>
  )
}

export default AboutUs
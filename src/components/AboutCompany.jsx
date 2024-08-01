import React from 'react'
import image from "../assets/background8.jpg"
import AboutUs from './AboutUs'
function AboutCompany() {
  return (
    <>
    <AboutUs/>
      <div className='mainauthors'>
        <h2 className='h2authors'>About Company</h2>
        <p className='pauthors'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima qui porro.</p>
        <img src={image}  alt="building" className='imgauthors' />
      </div>

    </>
  )
}

export default AboutCompany
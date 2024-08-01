import React from 'react'
import Blog from './Blog'
import image2 from '../assets/background7.jpg'
export default function AboutUs2() {
  return (
    <>
    <Blog/>
      <div className='mainauthors'>
        <h2 className='h2authors'>Our Partners</h2>
        <p className='pauthors'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima qui porro.</p>
        <img src={image2}  alt="building" className='imgauthors' />
      </div>

    </>
  )
}


import React from 'react'
import Blog from './Blog'
import image from "../assets/background6.jpg"

function Authors() {
  return (
    <>
    <Blog/>
      <div className='mainauthors'>
        <h2 className='h2authors'>Authors</h2>
        <p className='pauthors'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima qui porro.</p>
        <img src={image}  alt="building" className='imgauthors' />
      </div>

    </>
  )
}




export default Authors
import React from 'react'
import FishBackgroundImage from '../assets/background2.jpg'
import { Link } from 'react-router'
const FreshSardines = () => {
  return (
    <div className='h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center' style={{ backgroundImage: `url(${FishBackgroundImage})` }}>
      <div className='bg-[rgba(0,0,0,0.8)] w-[450px] h-[200px] rounded-xl flex flex-col items-center justify-center  font-semibold'>
        <p className='text-white text-md text-center'>Lorem ipsum dolor sit amet, consectetur adipisincing elit</p>
        <Link to='/' className='text-[#ccc8c8] text-3xl border-b-3 border-transparent hover:border-white transition duration-500 my-3'>Go Back</Link>
      </div>
    </div>
  )
}

export default FreshSardines
import React from 'react'
import SodaBackgroundImage from "../assets/background3.jpg" 
import { Link } from 'react-router'
const Soda = () => {
  return (
    <div className='h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center' style={{backgroundImage:`url(${SodaBackgroundImage})`}}>
        <div className='bg-[rgba(0,0,0,0.8)] w-[450px] h-[200px] rounded-xl flex flex-col items-center justify-center text-3xl font-semibold'>
            <p className='text-white'>Omg Sugar</p>
            <Link to='/' className='text-[#ccc8c8] border-b-3 border-transparent hover:border-white transition duration-500 my-3'>Go Back</Link>
        </div>
    </div>
  )
}

export default Soda
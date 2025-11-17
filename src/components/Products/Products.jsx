import React from 'react'
import ProductBackroundImage from '../../assets/background10.jpg'
import { Link } from 'react-router'
const Products = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center" style={{backgroundImage:`url(${ProductBackroundImage})`}}>
      <div className='bg-[rgba(0,0,0,0.8)] w-[400px] h-[200px] rounded-lg flex flex-col items-center justify-center text-[#f2e2cb]'>
        <p className='text-2xl font-bold mb-2'>Contact Us</p>
        <p className='font-[cursive] my-2'>Khetai Rusel Plaza</p>
        <Link to='/' className='text-3xl my-2 border-b-3 border-transparent hover:border-white transition duration-500'>Go Back</Link>
        <Link to='/products/checkProducts' className='text-3xl border-b-3 border-transparent hover:border-white transition duration-500'>Check Products</Link>
      </div>
    </div>
  )
}

export default Products
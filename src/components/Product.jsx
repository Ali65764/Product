import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css";
import { ROUTER } from "../constant/router"


function Product() {
  return (
    <>
      <div className="maindiv imagesproduct">
        <div className='product'>
          <div className="product2">
            <p className='productp'>Contact Us</p>
            <p className='productp2'>Khetai Rusel Plaza</p>
            <Link
              to="/"
              className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
            >
              Go Back
            </Link>
            <Link 
            to={ROUTER.CheckProducts}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
            >
            Check Products
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default Product


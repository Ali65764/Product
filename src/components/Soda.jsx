import React from 'react'
import { Link } from "react-router-dom";
import backgroundImage from '../assets/background3.jpg';


function Soda() {
  return (
    <>
      <div className="maindiv images3">
        <div className="freshsardines">
          <div className="freshsardines2">
            <p className='text-3xl font-medium '>Omg Sugar</p>
            <Link
              to="/"
              className="block font-semibold mt-4 my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Soda


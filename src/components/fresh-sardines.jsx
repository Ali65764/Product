import React from 'react';
import backgroundImage from '../assets/background2.jpg';
import { Link } from "react-router-dom";
import "../index.css";


function FreshSardines() {
  return (
    <div className="maindiv images2">
      <div className='freshsardines'>
        <div className="freshsardines2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <Link
            to="/"
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FreshSardines;


import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTER } from "../constant/router"
import "../index.css";


export default function AboutUs() {
  
      const {pathname} = useLocation();

      return (
      <>
        <div className='mainblog'>
          <div className='header mt-4 font-bold'>
            <h3 className='text-white'>About</h3>
          </div>
          <div className='bloglink mt-3 text-[15px]'>
            <Link to={ROUTER.AboutCompany}
              className={`"block my-2 border-b-2 border-transparent hover:border-white transition duration-300    inline-block" ${pathname === ROUTER.AboutCompany ? "text-sky-300 font-bold text-[17px]" : "text-white"}`} >About Company</Link>
            <Link to={ROUTER.AboutUs2}
              className={`"block my-2 border-b-2 border-transparent hover:border-white transition duration-300 inline-block" mx-2.5 ${pathname === ROUTER.AboutUs2 ? "text-sky-300 font-bold text-[17px]" : "text-white"}`}>About Us</Link>
            <Link to={"/"}
              className='text-white "block my-2 border-b-2 border-transparent hover:border-white transition duration-300    inline-block'>Go Back</Link>
          </div>
          <p className='text-sm p-12 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quas numquam, fugiat nulla delectus iusto tenetur suscipit provident voluptatum quod, nemo consequuntur deleniti dolores alias officia, ipsum at! Ipsam quasi beatae eligendi, adipisci quos suscipit odit ea. Ut architecto vel cumque dignissimos. Eius, est reiciendis explicabo exercitationem perspiciatis libero vel quos quibusdam repudiandae corporis earum in vitae quasi? Quibusdam tempora quo obcaecati earum. Nemo asperiores sunt laboriosam eius voluptatibus ea blanditiis nobis corrupti ut accusantium rerum iusto, illo quod, esse eveniet rem maxime sequi non itaque. Eum, error assumenda labore optio corporis deserunt eligendi provident molestiae ipsum mollitia laboriosam ea!</p>
        </div >
      </>
      )
}


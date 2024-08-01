import React from 'react'
import AboutUs from './AboutUs'
import image3 from '../assets/background9.jpg'

function AboutUs2() {
    return (
        <>
            <AboutUs />
            <div className='mainauthors'>
                <h2 className='h2authors'>About Us</h2>
                <p className='pauthors'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima qui porro.</p>
                <img src={image3} alt="building" className='imgauthors' />
            </div>
        </>
    )
}

export default AboutUs2
import React from 'react'
import { Link } from 'react-router'
import Background from '../assets/background.jpg'

const SideMenu = ({ links }) => {
  const sideClasses = 'flex flex-col items-center justify-center text-[#ccc8c8] bg-[rgba(0,0,0,0.8)] rounded-xl w-[300px] sm:w-[400px] h-[200px]'
  const linkClasses = 'font-semibold my-2 border-b-3 border-transparent hover:border-white transition duration-500 text-2xl sm:text-3xl'

  return (
    <div className={sideClasses}>
      {links.map((link, index) => (
        <Link key={index} to={link.to} className={linkClasses}>{link.title}</Link>
      ))}
    </div>
  )
}

const Home = () => {
  const leftRouters = [
    { to: "/products", title: "Products" },
    { to: '/about', title: "About Us" },
    { to: "/blog", title: "Blog" }
  ]

  const rightRouters = [
    { to: "/soda", title: "Soda" },
    { to: "/chips", title: "Chips" },
    { to: "/freshSardines", title: "Fresh Sardines" }
  ]

  return (
    <div className='h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center' style={{ backgroundImage: `url(${Background})` }}>
      <div className='w-full flex justify-evenly md:flex-row flex-col items-center justify-center gap-10'>
        <SideMenu links={leftRouters} />
        <SideMenu links={rightRouters} />
      </div>
    </div>
  )
}

export default Home
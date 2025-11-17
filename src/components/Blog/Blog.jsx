import React from 'react'
import { Link, useLocation } from 'react-router'

const Blog = () => {
  const { pathname } = useLocation()

  const links = [
    { to: "/blog/authers", title: "Authors" },
    { to: "/blog/partners", title: "Partners" },
    { to: "/", title: "Go Back" }
  ]

  const borderClasses = `border-b-3 hover:border-white border-transparent transition duration-500 mx-2`

  return (
    <div className='bg-black text-white text-center py-1'>
      <p className='font-bold py-3'>Blog Page</p>
      <div className='text-sm font-semibold'>
        {links.map((link) => (
          <Link to={link.to} className={`${borderClasses} ${pathname === link.to ? "text-[#00ffff] text-[16px]" : ""}`}>{link.title}</Link>
        ))}
      </div>
      <p className='text-sm my-12 px-10 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quas numquam, fugiat nulla delectus iusto tenetur suscipit provident
        voluptatum quod, nemo consequuntur deleniti dolores alias officia, ipsum at! Ipsam quasi beatae eligendi, adipisci quos suscipit odit ea.
        Ut architecto vel cumque dignissimos. Eius, est reiciendis explicabo exercitationem perspiciatis libero vel quos quibusdam repudiandae
        corporis earum in vitae quasi? Quibusdam tempora quo obcaecati earum. Nemo asperiores sunt laboriosam eius voluptatibus ea blanditiis
        nobis corrupti ut accusantium rerum iusto, illo quod, esse eveniet rem maxime sequi non itaque. Eum, error assumenda labore optio
        corporis deserunt eligendi provident molestiae ipsum mollitia laboriosam ea!</p>
    </div>
  )
}

export default Blog
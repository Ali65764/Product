import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { ROUTER } from "../constant/router"

function Home() {
  return (
    <div className="maindiv images">
      <div className="sides">
        <div className="side ">
          <Link
            to={ROUTER.Product}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            Products
          </Link>
          <Link
            to={ROUTER.AboutUs}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            About Us
          </Link>
          <Link
            to={ROUTER.Blog}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            Blog
          </Link>
        </div>
        <div className="side">
          <Link
            to={ROUTER.Soda}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            Soda
          </Link>
          <Link
            to={ROUTER.Chips}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            Chips
          </Link>
          <Link
            to={ROUTER.FreshSardines}
            className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
          >
            Fresh Sardines
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

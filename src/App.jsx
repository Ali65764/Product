import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Blog from "./components/Blog"
import Soda from "./components/Soda"
import Chips from "./components/Chips"
import FreshSardines from "./components/fresh-sardines"
import Authors from "./components/Authors"
import Partners from './components/Partners';
import AboutCompany from './components/AboutCompany';
import AboutUs2 from './components/AboutUs2';
import Product from './components/Product'
import GoDetailsPage from './components/GoDetailsPage';
import CheckProducts from './components/CheckProducts';

function App() {
  return (
    <Routes>
      <Route path={ROUTER.Home} element={<Home />} />
      <Route path={`${ROUTER.Product}/*`} element={<Product/>}/>
      <Route path={ROUTER.CheckProducts} element={<CheckProducts/>}/>
      <Route path={ROUTER.GoDetailsPage +"/:id"} element={<GoDetailsPage/>}/>
      <Route path={`${ROUTER.AboutUs}/*`} element={<AboutUs />} />
      <Route path={ROUTER.AboutCompany} element={<AboutCompany/>}/>
      <Route path={ROUTER.AboutUs2} element={<AboutUs2/>}/>
      <Route path={`${ROUTER.Blog}/*`} element={<Blog />}/>
      <Route path={ROUTER.Authors} element={<Authors/>} />
      <Route path={ROUTER.Partners} element={<Partners />} />
      <Route path={ROUTER.Soda} element={<Soda />} />
      <Route path={ROUTER.Chips} element={<Chips />} />
      <Route path={ROUTER.FreshSardines} element={<FreshSardines />} />
    </Routes>
  );
}

export default App;

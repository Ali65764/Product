import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home.jsx'
import Products from './components/Products/Products.jsx'
import About from './components/About/About.jsx'
import Blog from './components/Blog/Blog.jsx'
import Soda from './components/Soda.jsx'
import Chips from './components/Chips.jsx'
import FreshSardines from './components/FreshSardines.jsx'
import CheckProducts from './components/Products/CheckProducts.jsx'
import ProductDetail from './components/Products/ProductDetail.jsx'
import AboutCompany from './components/About/AboutCompany.jsx'
import AboutUs from './components/About/AboutUs.jsx'
import Authers from './components/Blog/Authers.jsx'
import Partners from './components/Blog/Partners.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path="/products/checkProducts" element={<CheckProducts />} />
      <Route path='/products/checkProducts/ProductDetail/:id' element={<ProductDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/about/aboutCompany' element={<AboutCompany />} />
      <Route path='/about/aboutUs' element={<AboutUs/>}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/authers' element={<Authers/>}/>
      <Route path='/blog/partners' element={<Partners/>}/>
      <Route path="/soda" element={<Soda />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/freshSardines" element={<FreshSardines />} />
    </Routes>
  )
}

export default App

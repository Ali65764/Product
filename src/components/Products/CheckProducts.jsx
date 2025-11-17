import React, { useCallback, useEffect, useState } from 'react'
import { GetProducts } from '../../service/service'
import { useNavigate } from 'react-router'

const CheckProducts = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const fetchProducts = useCallback(async()=>{
    try{
      const data = await GetProducts()
      setProducts(data)
      console.log('data:',data);
      
    }
    catch(err){
      console.log();
    }
  },[])
  
  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])

  return (
    <div>
      <p className='text-center text-[#006767] font-bold text-3xl mt-4'>Our Products</p>
      <div className='px-0 lg:px-30 mt-5 grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <div key={product.id} className='bg-[#94c9ff] rounded-[15px] w-[350px] text-center m-auto mb-10'>
            <img src={product.image} alt={product.title} className='w-[200px] h-[200px] m-auto object-cover' />
            <div className='mt-3'>
              <p className='font-bold text-xl'>{product.title.slice(0, 30)}</p>
              <p className='font-semibold text-sm mt-2'>{product.description.slice(0, 30)}</p>
              <p className='text-xl mt-2'>$ {product.price}</p>
              <button className='text-3xl text-white mb-2 mt-1 cursor-pointer'
                onClick={() => navigate(`/products/checkProducts/ProductDetail/${product.id}`)}>Go Details Page</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckProducts
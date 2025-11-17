import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetSingleProducts } from '../../service/service'

const ProductDetail = () => {
  const [singleData, setSingleData] = useState(null)
  const { id } = useParams()

  const fetchSingleProducts = useCallback(async () => {
    const data = await GetSingleProducts(id)
    setSingleData(data)
  }, [id])

  useEffect(() => {
    fetchSingleProducts()
  }, [fetchSingleProducts])
  return (
    <div className='flex justify-center items-center h-screen'>
      {singleData && (
        <div>
          <img src={singleData.image} alt={singleData.title} className='mx-auto w-[300px] h-[300px] object-cover' />
          <div className='text-center bg-black text-[#ffff00] rounded-md p-2 mx-auto sm:px-40 w-full mt-4'>
            <p className='font-bold text-xl my-2'>{singleData.title}</p>
            <p className='my-2'>{singleData.description.slice(0, 50)}</p>
            <p className='my-2'>$ {singleData.price}</p>
            <p className='my-2'>{singleData.category}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import laysImage from '../assets/background11.jpg'

const STORAGE_KEY = 'chips'

const Chips = () => {
  const [chips, setChips] = useState([])

  const saveToStorage = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }

  const loadToStorage = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  }

  const addChip = () => {
    const newChip = { id: chips.length + 1, src: laysImage }
    const addedChip = [...chips, newChip]
    setChips(addedChip)
    saveToStorage(addedChip)
  }

  const deleteChip = (chipId) => {
    const removeChip = chips.filter((chip) => chip.id !== chipId)
    setChips(removeChip)
    saveToStorage(removeChip)
  }


  const deleteAllChip = () => {
    setChips([])
    localStorage.removeItem(STORAGE_KEY)
  }

  useEffect(() => {
    setChips(loadToStorage())
  }, [])
  return (
    <div className='flex justify-center w-full items-center min-h-screen'>
      <div className='flex flex-wrap  justify-center items-center'>
        {chips.map((chip) => (
          <div key={chip.id} className='flex items-center relative'>
            <img src={chip.src} alt="lays" className='w-[300px] h-[300px]' />
            <button className='cursor-pointer hover:text-white hover:bg-red-600 transition duration-500 rounded-md py-2 px-4 text-sm mt-[250px]'
              onClick={() => deleteChip(chip.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className='fixed bg-[rgba(0,0,0,0.8)] top-[35%] h-[200px] w-[400px] rounded-[10px] p-[20px] text-white text-center flex flex-col items-center justify-center'>
        <p className='text-2xl font-bold'>Bags Eaten: {chips.length}</p>
        <div className='my-6 text-sm text-black'>
          <button className='bg-white rounded-md py-2 px-4 cursor-pointer' onClick={addChip}>Nom Nom</button>
          <button className='bg-white ml-2 py-2 px-4 rounded-md cursor-pointer' onClick={deleteAllChip}>Enough</button>
        </div>
        <Link to='/' className='text-3xl'>Go Back</Link>
      </div>
    </div>
  )
}

export default Chips
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import laysImage from '../assets/background11.jpg';

function App() {
  const [chips, setChips] = useState([]);

  const addChip = () => {
    const newChip = { id: chips.length + 1, src: laysImage };
    const addedchip = [...chips, newChip]
    setChips(addedchip);
    localStorage.setItem("chips",JSON.stringify(addedchip))
  };
  useEffect(()=>{
        const storedChips = JSON.parse(localStorage.getItem("chips"))
        if(storedChips){
          setChips(storedChips);
        }
  },[])


  const deleteChip = (id) => {
    const deletedChip = chips.filter(chip => chip.id !== id)
    setChips(deletedChip);
    localStorage.setItem("chips",JSON.stringify(deletedChip))
  };


  const deleteAllChip=()=>{
    setChips([]);
    localStorage.removeItem("chips")
  }


  return (
    <div className="chipsmain">
      <div className="chips-container">
        {chips.map(chip => (
          <div key={chip.id} className="chip">
            <img src={chip.src} alt="Lays" />
          <button className='deletebutton' onClick={() => deleteChip(chip.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="modal">
      <div className="modal2">
        <p className='chipsp'>Bags Eaten: {chips.length}</p>
        <button className='button1 button' onClick={addChip}>Nom Nom</button>
        <button className='button2 button' onClick={deleteAllChip}>Enough</button>
      </div>
      <Link
          to="/"
          className="block font-semibold my-2 border-b-2 border-transparent hover:border-white transition duration-300 text-xl md:text-2xl lg:text-3xl inline-block"
        >
          Go Back
        </Link>
        </div>
    </div>
  );
}

export default App;

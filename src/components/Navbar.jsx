import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='w-screen h-20 flex justify-around items-center bg-stone-900 '>
      <img className='h-10' src={Logo} alt="" />
        <Link className='text-xl text-white lienmen' to='/'>Accueil</Link>
        <Link className='text-xl text-white lienmen' to='/chopper'>News</Link>
        <Link className='text-xl text-white lienmen' to='/luffy'>Episodes</Link>
        <Link className='text-xl text-white lienmen' to='/zorro'>Manga</Link>

    </div>
  )
}

export default Navbar
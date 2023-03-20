import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='w-full h-14 flex justify-around items-center bg-stone-900'>
      <img className='h-10' src={Logo} alt="" />
        <Link className='text-xl text-white' to='/'>Accueil</Link>
        <Link className='text-xl text-white' to='/luffy'>Luffy</Link>
        <Link className='text-xl text-white' to='/zorro'>Zorro</Link>
        <Link className='text-xl text-white' to='/chopper'>Chopper</Link>
    </div>
  )
}

export default Navbar
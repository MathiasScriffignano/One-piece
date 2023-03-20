import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link className='text-orange text-red-600' to='/'>Accueil</Link>
        <Link to='/luffy'>Luffy</Link>
        <Link to='/zorro'>Zorro</Link>
        <Link to='/chopper'>Chopper</Link>
    </div>
  )
}

export default Navbar
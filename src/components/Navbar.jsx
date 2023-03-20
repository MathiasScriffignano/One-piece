import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link className='text-orange text-red-600' to='/'>Accueil</Link>
    </div>
  )
}

export default Navbar
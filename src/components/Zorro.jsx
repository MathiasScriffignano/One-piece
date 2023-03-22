import React from 'react'
import imgZorro from '../assets/zorro.png'


function Zorro() {
  return ( 
    <div className='fondnight w-full h-screen'>
      <h2 className='text-5xl text-center text-white'>Fatiguer</h2>
          <div className='flex justify-center mt-56 ml-80'>
          
            <img src={imgZorro} alt="" />
          </div>
    </div>
  )
}

export default Zorro
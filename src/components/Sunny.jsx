import React from 'react'
import Accueil from './Accueil'
import Boat from '../assets/sunny.png'
import Vague from '../assets/vague.png'
import Soleil from '../assets/soleil.png'
import Nuage from '../assets/nuage.png'
import Hori from '../assets/horizon.png'



const Sunny = () => {
  return (
    <div className='backgr w-screen h-screen  ' >
      <div className='container relative'>
          <div className='absolute left-[80%] translate-y-[210%] '>
            <img className='reflet w-[15em]' src={Boat} alt="" />
          </div>
        </div>
      <div className='container relative'>
          <div className='absolute left-[70%] translate-y-[20%] z-5'>
            <img className='w-[28em] boat ' src={Boat} alt="" />
          </div>
        </div>
        
       <div className='container relative'>
          <div className='absolute left-[10%] translate-y-[100%] '>
            <img className='w-[15em] ' src={Soleil} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  top-96 left-[10%] z-10 nuage'>
            <img className=' w-[10em]' src={Nuage} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  top-80 left-[40%] '>
            <img className='w-[15em] ' src={Nuage} alt="" />
          </div>
        </div>

        
<div className='w-full flex justify-center absolute'>
            < Accueil />
        </div>
        <img className='h-screen w-screen' src={Hori} alt="" />
        

       
    </div>
  )
}

export default Sunny
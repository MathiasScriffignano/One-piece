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
            <img className='reflet xl:w-[15em] md:w-[0em]' src={Boat} alt="" />
          </div>
        </div>

      <div className='container relative'>
          <div className='absolute left-[70%] xl:translate-y-[20%] md:translate-y-[50%]'>
            <img className='xl:w-[28em] md:w-[15em] boat ' src={Boat} alt="" />
          </div>
        </div>
        
       <div className='container relative'>
          <div className='absolute left-[10%] translate-y-[100%] '>
            <img className='xl:w-[15em] md:w-[5em] ' src={Soleil} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  xl:top-96 md:top-80 left-[10%] z-10 nuage'>
            <img className=' xl:w-[10em] md:w-[5em]' src={Nuage} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  xl:top-80 md:top-60 left-[40%] '>
            <img className='xl:w-[10em] md:w-[6em] ' src={Nuage} alt="" />
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
import React from 'react'
import Accueil from './Accueil'
import Boat from '../assets/sunny.png'
import Vague from '../assets/vague.png'
import Soleil from '../assets/soleil.png'
import Nuage from '../assets/nuage.png'




const Sunny = () => {
  return (
    <div className='backgr w-screen h-screen ' >
        <div className='w-full flex justify-center'>
            < Accueil />
        </div>

       <div className='container '>
          <div className='absolute  top-80 left-[60%] '>
            <img className='w-[28em] boat ' src={Boat} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  top-[44em] left-[10%] '>
            <img className='w-[15em] ' src={Soleil} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  top-96 left-[10%] '>
            <img className='w-[15em] ' src={Nuage} alt="" />
          </div>
        </div>

       <div className='container '>
          <div className='absolute  top-80 left-[40%] '>
            <img className='w-[15em] ' src={Nuage} alt="" />
          </div>
        </div>

        <div className='container'>
          <div className='absolute top-[32em] left-[40%]'>
            <img className='h-[30em] boat' src={Vague} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Sunny
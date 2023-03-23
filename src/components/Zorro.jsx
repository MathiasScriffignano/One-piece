import React from 'react'
import { Parallax } from 'react-parallax'
import Imgfond from '../assets/fond1.jpg'
import Tome1 from './composant/Tome/Tome1'
import Tome2 from './composant/Tome/Tome2'
import Tome3 from './composant/Tome/Tome3'
import Tome4 from './composant/Tome/Tome4'

function Zorro() {
  return ( 
    <div className=' '>
     <Parallax bgImage={Imgfond} strength={300} >
          <div className="relative fondep  w-full h-screen">
        
            <div className="text-center pt-60">
              <h2 className="text-center text-7xl text-white">Guide des <span className="underline decoration-cyan-600"> Manga</span></h2>
            </div>
        
          </div>  
      </Parallax>
      <div className='flex justify-center'>
      <div className=' mt-10 grid xl:grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1'>
      <Tome1 />
      <Tome2 />
      <Tome3 />
      <Tome4 />
      </div>
      </div>
    </div>
  )
}

export default Zorro
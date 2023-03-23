import React from 'react'
import Opensite from './composant/News/Opensite'
import Imgfond from '../assets/fondanim.mp4'

function Chopper() {
  return (
    <div className=' '>


         <div className="w-full h-screen"> 
           <div className="absolute text-center pt-96 z-50 ml-96">
             <h2 className="text-center text-7xl text-white z-50"> <span className="underline decoration-cyan-600"> News</span></h2>
            </div>
              <div className='relative inset-0 custom-bg '>
                <video  autoPlay loop muted>
                  <source className='' src={Imgfond} type="video/mp4" />
                </video>
              </div>
           <div className='mt-10 grid xl:grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1'>
           <Opensite />
           </div>
          </div>  

    
   </div>
  )
}

export default Chopper
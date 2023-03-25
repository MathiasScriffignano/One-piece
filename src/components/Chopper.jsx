import React from 'react'
import { Parallax } from 'react-parallax'
import Opensite from './composant/News/Opensite'
import Chap1073 from './composant/News/Chap1073'
import Chap1078 from './composant/News/Chap1078'
import Imgfond from './composant/Img/newsfond.webp'


function Chopper() {
  return (
    <div className='w-full h-screen bg-zinc-800 '>

<Parallax bgImage={Imgfond} strength={400} >
          <div className="relative fondep  w-full h-screen">
        
            <div className="text-center pt-60">
              <h2 className="text-center text-7xl text-white"><span className="underline decoration-cyan-600"> News</span></h2>
            </div>
        
          </div>  
      </Parallax>
                <div className=' pt-24 grid xl:grid-flow-col sm:grid-flow-row-dense gap-4 bg-zinc-800'>
                    <div class="row-span-2 md:row-span-1 "> 
                      <Opensite />
                    </div>  
                      <div class="xl:row-span-3 col-span-1 sm:row-span-1">
                        <Chap1073 />
                      </div>
                        <div class="xl:row-span-2 col-span- sm:row-span-1"> 
                        <Chap1078 /> 
                        </div>
                    
                </div>
                      <div className='bg-zinc-800 h-screen'>
                    <h3 className='text-center text-xl5 text-white'>Nos Ancienne News</h3>
                  </div>
          </div>  


  )
}

export default Chopper
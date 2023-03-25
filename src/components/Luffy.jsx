import Eastblue from "./composant/Eastblue";
import Albasta from "./composant/Albasta";
import Celeste from "./composant/Celeste";

import { Parallax } from 'react-parallax';
import Imgfond from '../assets/fond-ep.jpg'

function Luffy() {
  return (
  
      <div className='bg-zinc-800'> 
      <Parallax bgImage={Imgfond} strength={300} >
          <div className="relative fondep  w-full h-screen">
        
            <div className="text-center pt-60">
              <h2 className="text-center text-7xl text-white">Guide des <span className="underline decoration-cyan-600"> episode</span></h2>
            </div>
        
          </div>  
      </Parallax>
      
        <Eastblue />
        <Albasta />
        <Celeste />

      </div>

  );
}

export default Luffy;
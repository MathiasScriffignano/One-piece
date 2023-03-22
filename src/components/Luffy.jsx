import Eastblue from "./composant/Eastblue";
import { Parallax } from 'react-parallax';


function Luffy() {
  return (

      <div className='bg-zinc-800'>
        <div className="relative fondep  w-full h-screen">
        
          <div className="text-center pt-60">
            <h2 className="text-center text-7xl text-white">Guide des <span className="underline decoration-cyan-600"> episode</span></h2>
          </div>
        </div>
        <Eastblue />
      </div>

  );
}

export default Luffy;
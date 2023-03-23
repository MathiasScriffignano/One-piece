import React, { useState } from 'react'
import Cover from '../Img/cover1.jpg'

function Tome() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className=''>
      <div class="max-w-xs bg-slate-800 border border-gray-200 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
        <div className=''>
      <img src={Cover} alt="" />
        </div>


        <div class="p-5">
          <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tome 1</h5>
          <button className='text-center w-full text-orange-500' onClick={() => setShowSummary(!showSummary)}>Cliquez ici pour voir le résumé</button>
          {showSummary && (
            <div class="summary mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tout commence avec l'exécution de Gold Roger, le seigneur des pirates qui "donne" son trésor, le One Piece, à qui réussira à le trouver.

L'histoire débute vraiment dans un village de pêcheurs où Luffy, le héros, veut se faire engager par le capitaine Shanks. Afin de monter sa bravoure, il se fait une cicatrice sur la joue. Par erreur, il mange un fruit du démon qui le rend élastique mais le rend incapable de nager, ce qui ne va pas faciliter son rêve de devenir pirate.

10 ans plus tard, Luffy part à l'aventure pour découvrir le trésor mythique : le One Piece, afin de devenir meilleur que son modèle Shanks. Ce dernier lui a laissé son chapeau, à la condition qu'il le lui rende quand il sera devenu le seigneur des pirates.
            </div>
          )}
        </div>
      </div>

      
    </div>
  )
}

export default Tome
import React, { useState } from 'react'
import Cover from '../Img/cover3.jpg'

function Tome() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className=''>
      <div class="max-w-xs bg-slate-800 border border-gray-200 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
        <div className=''>
         <img src={Cover} alt="" />
        </div>

        <div class="p-5">
          <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tome 3</h5>
          <button className='text-center w-full text-orange-500' onClick={() => setShowSummary(!showSummary)}>Cliquez ici pour voir le résumé</button>
          {showSummary && (
            <div class="summary mb-3 font-normal text-gray-700 dark:text-gray-400">
             On voit ici la fin du combat contre Baggy et ses hommes, précisément le duel ente Baggy et Luffy.

Nami se joint à Luffy et Zorro pour voler des trésors, de façon temporaire.

Après un intermède sur une île peuplée d'animaux (et d'un homme coincé dans un coffre ?!!) pour le moins étranges.

Il faut maintenant recruter d'autres membres d'équipages et trouver un bateau. Pour ce faire, ils débarquent tous sur une petite île où habite le capitaine Pipo, le menteur le moins crédible possible.
Mais s'annonce le danger du capitaine Crow que l'on croyait capturé par la marine... 
            </div>
          )}
        </div>
      </div>

      
    </div>
  )
}

export default Tome
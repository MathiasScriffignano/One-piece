import React, { useState } from 'react'
import Cover from '../Img/cover2.jpg'

function Tome() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className=''>
      <div class="max-w-xs bg-slate-800 border border-gray-200 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
        <div className=''>
         <img src={Cover} alt="" />
        </div>

        <div class="p-5">
          <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tome 2</h5>
          <button className='text-center w-full text-orange-500' onClick={() => setShowSummary(!showSummary)}>Cliquez ici pour voir le résumé</button>
          {showSummary && (
            <div class="summary mb-3 font-normal text-gray-700 dark:text-gray-400">
              Après avoir été séparé de Zorro, Luffy atterrit dans un village terrorisé par Baggy le Clown.
Luffy fait la connaissance de Nami, une voleuse qui le livre à Baggy afin de dérober la carte de la route de tous les périls, celle qui mène soit disant au fameux One Piece, le trésor inestimable...

Après l'arrivée de Zorro, Nami s'alliera à eux pour vaincre Baggy et ses hommes (surtout pour voler le trésor pour Nami).
La volonté de défense du village montrée par le maire et un chien motive fortement Luffy et Zorro pour le combat, qui promet d'être explosif..
            </div>
          )}
        </div>
      </div>

      
    </div>
  )
}

export default Tome
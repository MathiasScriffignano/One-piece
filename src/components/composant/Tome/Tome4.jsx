import React, { useState } from 'react'
import Cover from '../Img/cover4.jpg'

function Tome() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className=''>
      <div class="max-w-xs bg-slate-800 border border-gray-200 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
        <div className=''>
         <img src={Cover} alt="" />
        </div>

        <div class="p-5">
          <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tome 4</h5>
          <button className='text-center w-full text-orange-500' onClick={() => setShowSummary(!showSummary)}>Cliquez ici pour voir le résumé</button>
          {showSummary && (
            <div class="summary mb-3 font-normal text-gray-700 dark:text-gray-400">
             Pipo ayant appris les intentions de Krapador, va prévenir les habitants du village mais ils ne le croient pas. Il décide alors de prévenir mademoiselle Kaya mais elle refuse de l'écouter. Il décide alors de défendre l'île seul mais Luffy, Zorro et Nami décident de l'aider. Ils attendent les pirates de Krapador par l'unique plage de l'île ( d'après Pipo ). Mais au levé du jour ils ne sont toujours pas là. Pipo se rappelle qu'il y à une autre plage. Pipo et Nami arrivent les premiers à la plage. Ils se battent contre les pirates en attendant Zorro et Luffy. Ils arrivent enfin. Pourquoi ils ne sont pas arrivés en même temps que Nami et Pipo ? Vous le saurez en lisant le manga . Une bataille s'engage et voilà qu'arrive le terrible capitaine Crow...
            </div>
          )}
        </div>
      </div>

      
    </div>
  )
}

export default Tome
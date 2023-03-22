import React, { useState, useEffect } from "react";

function Eastblue() {
  const [episodes, setEpisodes] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // state pour savoir si l'accordéon est ouvert ou fermé
  const [selectedEpisode, setSelectedEpisode] = useState(null); // state pour retenir l'épisode sélectionné

  useEffect(() => {
    fetch("https://api.api-onepiece.com/episodes") 
      .then((res) => res.json())
      .then((data) => {
        const splitepisode = data.slice(0, 61);
        setEpisodes(splitepisode)
      })
      .catch((err) => console.log(err));
  }, []);

  const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200"];

  function toggleAccordion() {
    setIsOpen(!isOpen); // inverse l'état de isOpen quand on clique sur le h3
  }

  function handleEpisodeClick(episode) {
    setSelectedEpisode(episode); // enregistre l'épisode sélectionné
  }

  return (
    <div>


      {/* Ajout de l'accordéon */}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mt-10">
        <h3 className="cursor-pointer relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group w-96" onClick={toggleAccordion}>
        <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span class="relative w-full  text-white transition-colors duration-200 ease-in-out group-hover:text-white text-center ">East Blue</span>
        </h3>
        </div>

        {/* Condition pour afficher/cacher le contenu selon l'état de isOpen */}
        {isOpen && (
          <ul>
            {episodes.map((episode, index) => (
              <li
                key={episode.episode_number}
                style={{ margin: "50px" }}
                className={`${colors[index % colors.length]} rounded-md`}
              >
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => handleEpisodeClick(episode)}
                >
                  <span className="text-xl text-neutral-900 ">
                    {episode.number}-{episode.title} 
                  </span>{" "}
                  
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal pour afficher le résumé de l'épisode */}
      {selectedEpisode && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  {selectedEpisode.number}-{selectedEpisode.title}
                </h3>
                <p className="text-sm text-black mb-4">
                  {selectedEpisode.description}
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedEpisode(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Eastblue;
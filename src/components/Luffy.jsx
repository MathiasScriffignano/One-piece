import React, { useState, useEffect } from "react";

function Luffy() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://api.api-onepiece.com/episodes?limit=61")
      .then((res) => res.json())
      .then((data) => setEpisodes(data))
      .catch((err) => console.log(err));
  }, []);

  const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200"];

  // state pour avoir un seul épisode ouvert à la fois
  const [openedEpisode, setOpenedEpisode] = useState(null);

  // fonction pour ouvrir ou fermer un épisode
  function toggleEpisode(index) {
    if (index === openedEpisode) {
      setOpenedEpisode(null);
    } else {
      setOpenedEpisode(index);
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl text-center">One Piece Episodes</h2>
      <ul>
        {episodes.map((episode, index) => (
          <li
            key={episode.episode_number}
            style={{ margin: "50px" }}
            className={`${colors[index % colors.length]} rounded-md`}
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleEpisode(index)}
            >
              <span className="text-xl text-amber-500">
                {episode.number}-{episode.title} :
              </span>{" "}
              <br />
              {/* affiche seulement le début de la description */}
              {openedEpisode === index
                ? episode.description
                : episode.description.slice(0, 100) + "..."}
            </div>
            {/* affiche le reste de la description si l'épisode est ouvert */}
            {openedEpisode === index && (
              <div className="p-4">{episode.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Luffy;
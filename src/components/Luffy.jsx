import React from 'react'
import {useState, useEffect} from 'react'


function Luffy() {
  const [episodes,setEpisodes] = useState([]);

  useEffect(()=> {
    fetch('https://api.api-onepiece.com/episodes')
    .then(res => res.json())
    .then(data => setEpisodes(data))
    .then(err => console.log(err))
  })
  const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200'];
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='text-3xl text-center'>One Piece Episodes</h2>
      <ul>
  {episodes.map((episode, index) => (
    <li style={{margin: '50px'}} className={colors[index % colors.length]} key={episode.episode_number}>
      <span className='text-xl text-amber-500'>{episode.number}-{episode.title} :</span>  <br/>{episode.description}
    </li>
  ))}
</ul>
    </div>
  )
}

export default Luffy
import React, { useState } from 'react';

// Fonction message d'accueil qui retourne le nom et pour se déco
function WelcomeMessage({ name, onLogoutClick }) {
  return (
    <div className='textwelco w-full h-screen'>
      <p className="text-3xl text-gray-900 mt-7 ">
        Bonjour, {name}! Bienvenue à bord du Sunny, nous sommes heureux de te
        voir faire partie de l'équipage des Mugiwara
      </p>
      <div className='flex justify-center'>
      <button className='mt-9 relative inline-block text-lg group' onClick={onLogoutClick}><span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">descendre de bord</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </button>
      


      </div>
    </div>
  );
}

// enregistrement en local du prenom
function Nameform({ onNameSubmit, onHide, show }) {
// Hoojk pour contenir la valeur d'état
  const [name, setName] = useState(localStorage.getItem("name") || "");


  // enregistre le nom et empeche le raffraichissement de la page pour perdre la valeur
  function handleSubmit(event) {
    event.preventDefault();
    onNameSubmit(name);
    localStorage.setItem("name", name);
  }

  // supprime l'ancienne valeur 
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Modal
  return (
    <div
      className="fixed w-full flex items-center justify-center z-50"
     
    >
      <div className="bg-white rounded shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Ton nom de pirate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Ton nom de pirate
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex items-center justify-center">
           
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Accueil = () => {
  // Hook pour verif la valeur de name 
  const [name, setName] = useState(localStorage.getItem("name") || "");
  // Hook qui vérifie si l'utilisateur a entré le nom pour afficher la modal
  const [showModal, setShowModal] = useState(!name);

  // Si la valeur est remplis n'affiche pas la modal affiche le message sinon la modal reste afficher 
  function handleNameSubmit(name) {
    setName(name);
    setShowModal(false);
  }

  function handleLogOut() {
    localStorage.removeItem("name");
    setName("");
    setShowModal(true);
  }

  return (
    <div className="container">
      {!name ? (
        <Nameform onNameSubmit={handleNameSubmit} onHide={() => {}} show={showModal} />
      ) : (
        <>
          <WelcomeMessage name={name} onLogoutClick={handleLogOut} />
</>
)}
</div>
);
}

export default Accueil;
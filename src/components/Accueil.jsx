import React, { useEffect, useState } from 'react';

// Fonction message d'accueil qui retourne le nom et pour se déco
function WelcomeMessage({ name, onLogoutClick }) {
  return (
    <div>
      <p className="text-3xl text-gray-900 mt-7 ">
        Bonjour, {name}! Bienvenue à bord du Sunny, nous sommes heureux de te
        voir faire partie de l'équipage des Mugiwara
      </p>
      <div className='flex justify-center'>
      <button className='mt-9 text-md border-orange-500 border-2 hover:bg-slate-500 ' onClick={onLogoutClick}>descendre de bord</button>
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
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50"
     
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
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onHide}
            >
              Annuler
            </button>
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
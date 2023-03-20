import React, { useEffect, useState } from 'react';


function WelcomeMessage({ name, onLogoutClick }) {
  return (
    <div>
      <p className="text-3xl text-orange-900 mt-7 ">
        Bonjour, {name}! Bienvenue à bord du Sunny, nous sommes heureux de te
        voir faire partie de l'équipage des Mugiwara
      </p>
      <button className='mt-9 text-md border-orange-500 border-2 hover:bg-slate-500' onClick={onLogoutClick}>descendre de bord</button>
    </div>
  );
}

function Nameform({ onNameSubmit, onHide, show }) {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  function handleSubmit(event) {
    event.preventDefault();
    onNameSubmit(name);
    localStorage.setItem("name", name);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
     
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
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [showModal, setShowModal] = useState(!name);

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
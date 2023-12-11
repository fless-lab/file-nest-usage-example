import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink
          to="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6"
        >
          Accueil
        </NavLink>

        <NavLink
          to="/add"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6"
        >
          Nouvel Utilisateur
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

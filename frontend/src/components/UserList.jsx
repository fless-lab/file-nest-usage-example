import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Effectue une requête GET vers votre backend pour récupérer la liste des utilisateurs
    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/users`)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Erreur lors de la récupération des utilisateurs :', error));
  }, []);
  return (
    <div>
      <h1 className='p-4 text-xl font-semibold underline text-center'>Liste des utilisateurs</h1>
      <div className="container mx-auto mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {users.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

// src/components/UserDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Effectuez une requête GET pour récupérer les détails de l'utilisateur en utilisant l'ID dans les paramètres de l'URL
    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error));
  }, [userId]);

  if (!user) {  
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
    <div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/browse-files/${user.avatar}`} />
				<p className="text-xl font-semibold leadi">{user.firstName} {user.lastName}</p>
				<p className="dark:text-gray-400">{user.username}</p>
			</div>
        
		<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			{
                user.projects.map((project,index)=>{
                    return <div className="flex space-x-6" key={index}>
				<img alt="" className="border-2 border-slate-200 flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500" src={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/browse-files/${project}`} />
			</div>
                })
            }
		</div>
	</div>
</section>
    </div>
  );
};

export default UserDetails;

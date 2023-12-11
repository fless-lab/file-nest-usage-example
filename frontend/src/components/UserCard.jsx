import React from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-56" src={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/browse-files/${user.avatar}`} alt={`Avatar de ${user.username}`} />
  
        <div className="py-5 text-center">
          <Link to={`/view/${user._id}`} className="block text-xl font-bold text-gray-800" tabIndex="0" role="link">
            {user.firstName} {user.lastName}
          </Link>
          <span className="text-sm text-gray-700">{user.username}</span>
        </div>

        
      </div>
    );
  };

export default UserCard

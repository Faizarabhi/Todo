import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';

const Profile = () => {
  const user = useAppSelector((state) => state.user);

  if (!user) {
    return <div className="text-center py-8">Loading user data...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 relative bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
          <div className="absolute bottom-0 top-4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <img
                src={user.picture}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
        <div className="p-6 text-center"> 
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

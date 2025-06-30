import React from 'react';

const Profile = () => {


  if (!user) {
    return <div className="text-center py-8">Loading user data...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 relative bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
             dsf
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
        
        Profile Content
      </div>
    </div>
  );
};

export default Profile;
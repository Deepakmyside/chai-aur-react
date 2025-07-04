import React from 'react';

function Card({ username, btnText="Visit me"}) {
  return (
    <div className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
        alt="Developer Photo"
      />

      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-4">
        <div className="bg-blue-600 text-white text-xl font-semibold p-4">
          KEEP.ai
        </div>
        <div className="p-6">
          <div className="text-indigo-600 font-semibold text-sm uppercase">
            {username}
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Backend Developer | MongoDB • Express • Node.js
          </p>
          <button className="mt-4 text-white hover:underline text-sm font-medium">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

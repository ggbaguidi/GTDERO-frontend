import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Green Telecom Distributed Energy Resources Optimizer</h1>
      <div>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Logout
          </button>
      </div>
    </header>
  );
};

export default Header;

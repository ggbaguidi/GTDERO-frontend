import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-600 text-white flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Green Telecom</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="block p-2 text-white hover:bg-purple-700 rounded">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/sites" className="block p-2 text-white hover:bg-purple-700 rounded">
              Sites
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/analytics" className="block p-2 text-white hover:bg-purple-700 rounded">
              Analytics
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="block p-2 text-white hover:bg-purple-700 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

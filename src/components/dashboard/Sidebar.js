import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo-gtdero.png';

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-600 text-white flex flex-col">
      <div className="p-6  bg-white">
        <Link to='/' className="flex items-center space-x-4 w-full">
            <img src={logo} alt="Green Telecom" className="w-16 h-16" />
          </Link>
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
            <Link to="/strategy" className="block p-2 text-white hover:bg-purple-700 rounded">
              Strategy
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

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/logo-gtdero.png';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Green Telecom" className="w-16 h-16" />
          <h1 className="text-3xl font-bold text-purple-700">Green Telecom DER Optimizer</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-purple-600">Features</a>
          <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
          <Link to="/login" className="text-sm font-medium text-purple-600 hover:text-purple-700">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

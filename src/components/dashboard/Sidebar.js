import React from 'react';
import { Link } from 'react-router-dom';
import { FerrisWheel } from 'lucide-react';
import { Sparkle } from 'lucide-react';
import { Home } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { Notebook } from 'lucide-react';
import { TrendingUpDown } from 'lucide-react';
import { UserRoundSearch } from 'lucide-react';

import logo from './../../assets/logo-gtdero.png';
import { Button } from '@mui/material';

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
          <li >
            <Link to="/dashboard" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<Home/>}>Dashboard</Button>
            </Link>
          </li>
          <li >
            <Link to="/upload" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<FerrisWheel/>}>Upload Data</Button>
            </Link>
          </li>
          <li >
            <Link to="/sites" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<FerrisWheel/>}>Sites</Button>
            </Link>
          </li>
          <li >
            <Link to="/analytics" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<ChartNoAxesCombined/>}>Analytics</Button>
            </Link>
          </li>
          <li >
            <Link to="/predict" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<TrendingUpDown/>} >Predict</Button>
            </Link>
          </li>
          <li >
            <Link to="/forcast" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<TrendingUpDown/>}>Forecast</Button>
            </Link>
          </li>
          <li >
            <Link to="/strategy" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<Notebook/>}>Strategy</Button>
            </Link>
          </li>
          <li >
            <Link to="/users" className="block p-2 text-white hover:bg-purple-700 rounded">
              
              <Button color='text-white' startIcon={<UserRoundSearch/>}>Users</Button>
            </Link>
          </li>
          <li >
            <Link to="/settings" className="block p-2 text-white hover:bg-purple-700 rounded">
              <Button color='text-white' startIcon={<Sparkle/>}>Settings</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

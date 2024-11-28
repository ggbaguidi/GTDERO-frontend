import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Common = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-white overflow-y-auto">
            {children}
        </main>
      </div>
    </div>
  );
};

export default Common;

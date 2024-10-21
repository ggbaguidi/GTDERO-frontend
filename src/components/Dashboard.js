import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Header from './dashboard/Header';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-white overflow-y-auto">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
          
          {/* Example stats section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600 text-lg">Total Sites</h2>
              <p className="text-3xl font-bold">10</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600 text-lg">Total Energy Consumption</h2>
              <p className="text-3xl font-bold">15,000 kWh</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600 text-lg">Battery Usage</h2>
              <p className="text-3xl font-bold">70%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600 text-lg">Total Solar Energy</h2>
              <p className="text-3xl font-bold">7,500 kWh</p>
            </div>
          </section>

          {/* Add more sections (charts, analytics, etc.) as needed */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

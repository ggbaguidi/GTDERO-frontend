import React from 'react';
import site from './../assets/antenna.png';
import demand from './../assets/energy-consumption.png';
import battery from './../assets/battery.png';
import solar from './../assets/solar-panel.png';
import co2 from './../assets/co2-cloud.png';

const Dashboard = () => {
  return (
    <>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
              {/* Example stats section */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-evenly">
                  <div className=''>
                    <img src={site} alt="Green Telecom" className="w-16 h-16" />
                  </div>
                  <div>
                    <h2 className="text-gray-600 text-lg">Total Sites</h2>
                    <p className="text-3xl font-bold">10</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-evenly">
                  <div className=''>
                    <img src={demand} alt="Green Telecom" className="w-16 h-16" />
                  </div>
                  <div>
                    <h2 className="text-gray-600 text-lg">Total Energy Consumption</h2>
                    <p className="text-3xl font-bold">15,000 kWh</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-evenly">
                  <div className=''>
                    <img src={battery} alt="Green Telecom" className="w-16 h-16" />
                  </div>
                  <div>
                    <h2 className="text-gray-600 text-lg">Battery Usage</h2>
                    <p className="text-3xl font-bold">70%</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-evenly">
                  <div className=''>
                    <img src={solar} alt="Green Telecom" className="w-16 h-16" />
                  </div>
                  <div>
                    <h2 className="text-gray-600 text-lg">Total Solar Energy</h2>
                    <p className="text-3xl font-bold">7,500 kWh</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-evenly">
                  <div className=''>
                    <img src={co2} alt="Green Telecom" className="w-16 h-16" />
                  </div>
                  <div>
                    <h2 className="text-gray-600 text-lg">CO<sub>2</sub> emissions</h2>
                    <p className="text-3xl font-bold">3.15 T</p>
                  </div>
                </div>
              </section>

              {/* Add more sections (charts, analytics, etc.) as needed */}
    </>
  );
};

export default Dashboard;

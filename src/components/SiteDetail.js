import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';

import { Line, Bar } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

ChartJS.register(
  ...registerables
);

const SiteDetail = () => {
  const { siteId } = useParams();

  const [energyConsumption, setEnergyConsumption] = useState([]);
  const [gridOutage, setGridOutage] = useState([]);
  const [solarWeatherData, setSolarWeatherData] = useState([]);

  useEffect(() => {
    // Energy Consumption
    Papa.parse(`/data/${siteId}/energy_consumption.csv`, {
      download: true,
      header: true,
      complete: (results) => {
        setEnergyConsumption(results.data);
      },
    });

    // Grid Outage
    Papa.parse(`/data/${siteId}/site_grid_outage.csv`, {
      download: true,
      header: true,
      complete: (results) => {
        setGridOutage(results.data);
      },
    });

    // Solar Weather Data
    Papa.parse(`/data/${siteId}/solar_weather_data.csv`, {
      download: true,
      header: true,
      complete: (results) => {
        setSolarWeatherData(results.data);
      },
    });
  }, [siteId]);

  // Prepare data for energy consumption chart
  const energyConsumptionData = {
    labels: energyConsumption.map((item) => item['index']),
    datasets: [
      {
        label: 'Total Energy(kWh)',
        data: energyConsumption.map((item) => parseFloat(item['Total Energy(kWh)'])),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  // Prepare data for grid outage chart
  const gridOutageData = {
    labels: gridOutage.map((item) => {
      const plan = item['grid outage plan'];
      
      // Check if the 'grid outage plan' exists and is a valid string
      if (!plan || typeof plan !== 'string') {
        return 0; // If invalid, return 0 as the default length
      }
      
      // Clean the "grid outage plan" string (remove square brackets, trim spaces)
      const cleanedPlan = plan.replace(/[\[\]]/g, "").trim();
      
      // Return the length of the array after splitting by spaces
      return cleanedPlan.split(" ").length;
    }),
    
    datasets: [
      {
        label: 'Grid Outage',
        data: gridOutage.map((item) => {
          // Check if 'grid outage plan' exists and is a valid string
          const plan = item['grid outage plan'];
          
          if (!plan || typeof plan !== 'string') {
            // If there's no valid plan, return an empty array or a default value
            return [];
          }
          
          // Clean the "grid outage plan" string (remove square brackets, trim spaces)
          const cleanedPlan = plan.replace(/[\[\]]/g, "").trim();
          
          // Split the string by spaces, convert each value to 1 (true) or 0 (false)
          return cleanedPlan.split(" ")  // Split the string by spaces
            .map(value => value === "true" ? 1 : 0);  // Convert 'true' to 1, 'false' to 0
        }),
        backgroundColor: 'rgba(255,0,0,0.5)',  // Background color for the chart bars
      },
    ],
  };

  // Prepare data for solar weather data chart
  const ghiData = {
    labels: solarWeatherData.map((item) => item['index']),
    datasets: [
      {
        label: 'GHI (W/m²)',
        data: solarWeatherData.map((item) => parseFloat(item['GHI'])),
        borderColor: 'rgba(255,165,0,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Site {siteId} Details</h1>

      {/* Energy Consumption Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Energy Consumption</h2>
        <Line data={energyConsumptionData} />
      </div>

      {/* Grid Outage Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Grid Outage</h2>
        <Bar data={gridOutageData} />
      </div>

      {/* Solar Weather Data Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Global Horizontal Irradiance (GHI)</h2>
        <Line data={ghiData} />
      </div>
    </div>
  );
};

export default SiteDetail;

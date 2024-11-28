import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Papa from 'papaparse';
import StrategyDisplay from './StrategyDisplay';

// Import Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [dataValues, setDataValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSite, setSelectedSite] = useState('site1');
  const [selectedDataset, setSelectedDataset] = useState('Energy Consumption');

  // List of available sites
  const sites = ['site1', 'site2', 'site3', 'site4', 'site5', 'site6', 'site7', 'site8', 'site9', 'site10']; // Add or remove site IDs as needed

  // List of available datasets
  const datasets = ['Energy Consumption', 'Solar Output'];

  useEffect(() => {
    setLoading(true);

    // Determine the CSV file to load based on selected dataset
    const fileName =
      selectedDataset === 'Energy Consumption'
        ? 'energy_consumption.csv'
        : 'solar_weather_data.csv';

    // Load and parse the CSV file
    Papa.parse(`/data/${selectedSite}/${fileName}`, {
      download: true,
      header: true,
      complete: (results) => {
        let values = [];

        if (selectedDataset === 'Energy Consumption') {
          values = results.data
            .map((row) => parseFloat(row['Total Energy (kWh)'] || row['Total Energy(kWh)']))
            .filter((value) => !isNaN(value));
        } else if (selectedDataset === 'Solar Output') {
          values = results.data
            .map((row) => parseFloat(row['Energy Output(kWh)']))
            .filter((value) => !isNaN(value));
        }

        setDataValues(values);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error loading CSV data:', error);
        setLoading(false);
      },
    });
  }, [selectedSite, selectedDataset]);

  const binData = (data, binSize) => {
    if (data.length === 0) return { bins: [], binEdges: [] };

    const min = Math.min(...data);
    const max = Math.max(...data);
    const numBins = Math.ceil((max - min) / binSize);

    const bins = Array(numBins).fill(0);
    const binEdges = [];

    for (let i = 0; i <= numBins; i++) {
      binEdges.push(min + i * binSize);
    }

    data.forEach((value) => {
      let binIndex = Math.floor((value - min) / binSize);
      if (binIndex >= bins.length) binIndex = bins.length - 1;
      bins[binIndex]++;
    });

    return { bins, binEdges };
  };

  // Prepare histogram data
  const binSize = selectedDataset === 'Energy Consumption' ? 0.05 : 0.2; // Adjust bin size as needed
  const { bins, binEdges } = binData(dataValues, binSize);

  const labels = binEdges.slice(0, -1).map((edge, index) => {
    return `${edge.toFixed(2)} - ${binEdges[index + 1].toFixed(2)} kWh`;
  });

  const histogramData = {
    labels: labels,
    datasets: [
      {
        label: 'Frequency',
        data: bins,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `${selectedDataset} Histogram for ${selectedSite}`,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: `${selectedDataset} Range (kWh)`,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency',
        },
      },
    },
  };

  return (
    <div className="p-6">
      {/* Site Selection */}
      <div className="mb-4">
        <label htmlFor="site-select" className="mr-2 font-semibold">
          Select Site:
        </label>
        <select
          id="site-select"
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
          className="border rounded p-1"
        >
          {sites.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
      </div>

      {/* Dataset Selection */}
      <div className="mb-4">
        {datasets.map((dataset) => (
          <button
            key={dataset}
            onClick={() => setSelectedDataset(dataset)}
            className={`mr-2 mb-2 px-4 py-2 rounded ${
              selectedDataset === dataset
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {dataset}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : dataValues.length === 0 ? (
        <p>No data available for the selected site and dataset.</p>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4">
            {selectedDataset} Histogram for {selectedSite}
          </h1>
          <Bar data={histogramData} options={options} />
        </>
      )}
    </div>
  );
};

export default Analytics;

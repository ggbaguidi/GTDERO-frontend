import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const StrategyDisplay = () => {
  const [strategyData, setStrategyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load and parse the strategy.csv file
    Papa.parse('/data/strategy.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setStrategyData(results.data);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error loading strategy.csv:', error);
        setLoading(false);
      },
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Strategy Data</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : strategyData.length === 0 ? (
        <p>No data available in strategy.csv.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {/* Generate table headers dynamically */}
              {Object.keys(strategyData[0]).map((header) => (
                <th
                  key={header}
                  className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {strategyData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {Object.keys(row).map((key, i) => (
                  <td key={i} className="py-2 px-4 border-b border-gray-200">
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StrategyDisplay;

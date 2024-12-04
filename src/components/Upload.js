import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '@nextui-org/react';
import Papa from 'papaparse';

const Upload = () => {
  const [files, setFiles] = useState({
    energyConsumption: null,
    siteGridOutage: null,
    solarWeatherData: null,
  });
  const [previewData, setPreviewData] = useState({
    energyConsumption: [],
    siteGridOutage: [],
    solarWeatherData: [],
  });

  // Handle file selection
  const handleFileChange = (type, file) => {
    setFiles((prev) => ({ ...prev, [type]: file }));

    // Parse and preview CSV content
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setPreviewData((prev) => ({
          ...prev,
          [type]: results.data.slice(0, 5), // Limit preview to 5 rows
        }));
      },
    });
  };

  // Upload files to the server
  const uploadFiles = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:5000/upload';
    const formData = new FormData();
    Object.entries(files).forEach(([key, file]) => {
      if (file) formData.append(key, file);
    });

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Data Files</h1>
      <Card className="p-10 w-full h-auto mt-1">
        <form className="flex flex-col items-center" onSubmit={uploadFiles}>
          {['energyConsumption', 'siteGridOutage', 'solarWeatherData'].map((type) => (
            <div key={type} className="mb-6 w-full">
              <label className="block mb-2 text-lg font-medium">
                {type.replace(/([A-Z])/g, ' $1')} File
              </label>
              <input
                type="file"
                accept=".csv"
                className="mb-4 border border-gray-300 rounded px-4 py-2 w-full"
                onChange={(e) => handleFileChange(type, e.target.files[0])}
              />
              {previewData[type].length > 0 && (
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-lg font-semibold">Preview</h3>
                  <table className="table-auto w-full mt-2">
                    <thead>
                      <tr>
                        {Object.keys(previewData[type][0] || {}).map((header) => (
                          <th key={header} className="px-4 py-2 text-left border-b">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {previewData[type].map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((value, i) => (
                            <td key={i} className="px-4 py-2 border-b">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-purple-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
          >
            Upload Files
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Upload;

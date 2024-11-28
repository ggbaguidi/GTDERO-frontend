import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Handle saving settings
    alert('Settings have been saved successfully.');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            className="mt-1 w-full border rounded-md p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            className="mt-1 w-full border rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            className="mt-1 w-full border rounded-md p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
          onClick={handleSave}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;

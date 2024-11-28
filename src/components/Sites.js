import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sites = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Fetch the list of site IDs dynamically or define them statically
    const siteIds = ['site1', 'site2', 'site3', 'site4', 'site5', 'site6', 'site7', 'site8', 'site9', 'site10'];
    setSites(siteIds);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Sites</h1>
      <ul>
        {sites.map((siteId) => (
          <li key={siteId} className="mb-2">
            <Link to={`/sites/${siteId}`} className="text-blue-500 underline">
              {siteId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sites;

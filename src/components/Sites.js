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
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6'>
        {sites.map((siteId) => (
          <li key={siteId} className=" bg-purple-500 p-6 rounded-lg shadow-md text-center">
            <Link to={`/sites/${siteId}`} className="text-white text-lg">
              SITE {siteId.split("site")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sites;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TableGenerator from '../components/table/TableGenerator.jsx';
import containers from '../config/Containers.js';
import { COMMON_COMPONENTS } from '../config/Pages.js';

// PageGenerator component handles the routing and rendering of components based on container configurations.
const PageGenerator = ({ containerKey, baseComponents }) => {
  
  // Get the container data associated with the passed containerKey.
  const containerData = containers[containerKey];
  
  return (
    <div className="page-content-container">
      
      {/* Route Setup */}
      <Routes>
        {Object.entries(containerData).map(([key, value]) => (
          <Route
            key={key}
            // Use the URL defined in tableSettings for the path.
            path={value.tableSettings.url + '/*'}
            
            // Pass the value (tableKey) to TableGenerator component.
            element={<TableGenerator tableKey={value} />} />
        ))}
      </Routes>
      
      {/* Render Base Components */}
      <div className="page-base-components">
        {Object.entries(baseComponents).map(([component, display]) => (
          // Only render the component if display is true.
          display && COMMON_COMPONENTS[component]
        ))}
      </div>
      
    </div>
  );
};

export default PageGenerator;

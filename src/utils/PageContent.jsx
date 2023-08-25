import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GenericReceiver from '../components/table/GenericReceiver.jsx';
import containers from '../config/Containers.js';
import { components } from '../config/Pages.js';

const PageContent = ({ containerKey, baseComponents }) => {
   const containerData = containers[containerKey];

   return (
     <div className="page-content-container">
       <Routes>
         {Object.entries(containerData).map(([key, value]) => (
           <Route
             key={key}
             path={value.tableSettings.url + '/*'}
             element={<GenericReceiver tableKey={value} />} />
         ))}
       </Routes>
       <div className="page-base-components">
         {Object.entries(baseComponents).map(([component, display]) => (
           display && components[component]
         ))}
       </div>
     </div>
   );
};

export default PageContent;
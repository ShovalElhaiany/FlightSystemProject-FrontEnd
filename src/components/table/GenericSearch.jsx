import React, { useState } from 'react';
import '../../css/table/GenericSearch.css';

const GenericSearch = ({ filterByParameters, onSearch, formatText }) => {
  const [parameters, setParameters] = useState({});

  // Process and call the onSearch callback with relevant parameters
  const handleSearch = () => {
    const searchCriteria = {};

    // Only consider parameters that have been set (ignoring empty values)
    if (filterByParameters) {
      Object.keys(parameters).forEach((key) => {
        if (parameters[key]) {
          searchCriteria[key] = parameters[key];
        }
      });
    }

    onSearch(searchCriteria);
  };

  return (
    <div className='GenericSearch'>
      {/* Map over the provided parameters and render an input for each */}
      {filterByParameters && filterByParameters.map((param) => (
        <div key={param}>
          <label>{`Filter by ${formatText(param)}:`}</label>
          <input
            // Use a datetime-local input for departure_time, and text for all others
            type={param === 'departure_time' ? 'datetime-local' : 'text'}
            placeholder={formatText(param)}
            value={parameters[param] || ''}
            onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
          />
        </div>
      ))}

      {/* Display the search button only if there are parameters to filter by */}
      {(filterByParameters && filterByParameters.length > 0) && (
        <button onClick={handleSearch}>Search</button>
      )}
    </div>
  );
};

export default GenericSearch;

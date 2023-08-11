import React, { useState } from 'react';

const GenericSearch = ({ filterByParameters, onSearch }) => {
  const [parameters, setParameters] = useState({});

  const handleSearch = () => {
    const searchCriteria = {};
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
    <div>
      {filterByParameters &&
        filterByParameters.map((param) => (
          <input
            key={param}
            type="text"
            placeholder={`Filter by ${param}`}
            value={parameters[param] || ''}
            onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
          />
        ))}

      {(filterByParameters && filterByParameters.length > 0) && (
        <button onClick={handleSearch}>Search</button>
      )}
    </div>
  );
};

export default GenericSearch;

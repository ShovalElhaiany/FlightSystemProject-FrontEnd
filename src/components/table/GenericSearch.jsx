import React, { useState } from 'react';

const GenericSearch = ({ filterById, filterByParameters, onSearch }) => {
  const [idFilter, setIdFilter] = useState('');
  const [parameters, setParameters] = useState({});

  const handleSearch = () => {
    const searchCriteria = {};
    if (filterById) {
      searchCriteria.id = idFilter;
    }
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
      {filterById && (
        <input
          type="text"
          placeholder="Filter by ID"
          value={idFilter}
          onChange={(e) => setIdFilter(e.target.value)}
        />
      )}

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

      {(filterById || (filterByParameters && filterByParameters.length > 0)) && (
        <button onClick={handleSearch}>Search</button>
      )}
    </div>
  );
};

export default GenericSearch;

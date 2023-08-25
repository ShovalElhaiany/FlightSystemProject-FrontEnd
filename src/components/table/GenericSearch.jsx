import React, { useState } from 'react';
import '../../css/table/GenericSearch.css';

const GenericSearch = ({ filterByParameters, onSearch, formatText }) => {
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
    <div className='GenericSearch'>
      {filterByParameters &&
        filterByParameters.map((param) => (
          <div key={param}>
            <label>{`Filter by ${formatText(param)}:`}</label>
            {param === 'departure_time' ? (
              <input
                type="datetime-local"
                placeholder={formatText(param)}
                value={parameters[param] || ''}
                onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
              />
            ) : (
              <input
                type="text"
                placeholder={formatText(param)}
                value={parameters[param] || ''}
                onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
              />
            )}
          </div>
        ))}

      {(filterByParameters && filterByParameters.length > 0) && (
        <button onClick={handleSearch}>Search</button>
      )}
    </div>
  );
};

export default GenericSearch;

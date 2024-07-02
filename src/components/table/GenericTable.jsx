import React, { useState } from 'react';
import GenericSearch from './GenericSearch'
import '../../css/table/GenericTable.css'
import SingularAndPlural from '../../config/SingularAndPlural';

const GenericTable = ({ tableWithInfo, message, onAdd, onUpdate, onDelete, onSearch }) => {
  // Destructure properties from the passed in table configuration and data  
  const {
    title,
    image,
    subjects,
    details,
    singular,
    id,
    allowAdd,
    allowUpdate,
    allowDelete,
    filterById,
    filterByParameters,

  } = tableWithInfo;

  // Modify the title to get a singular format for creating a default image path
  let modifiedTitle = title;
  // Check and set title for specific keywords
  if (title.includes("Airline") || title.includes("Airlines")) {
    modifiedTitle = "Airline";
} else if (title.includes("Flight") || title.includes("Flights")) {
    modifiedTitle = "Flight";
} else if (title.includes("Customer") || title.includes("Customers")) {
    modifiedTitle = "Customer";
} else if (title.includes("Ticket") || title.includes("Tickets")) {
    modifiedTitle = "Ticket";
} else if (title.includes("Country") || title.includes("Countries")) {
    modifiedTitle = "Country";
} else if (title.includes("Admin") || title.includes("Admins")) {
  modifiedTitle = "Admin";
}

  // Construct the default image path based on the modified title
  const defaultImage = `/Images/Table/${modifiedTitle}.jpg`;

  // Use useState for managing component's internal state
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState([...details]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSubjects, setNewSubjects] = useState(subjects.map(() => ''));

  const handleRowClick = (id) => {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    
    // Check if ID is already present
    if (pathSegments.includes(id.toString())) {
      return;
    }
  
    const newPath = `${SingularAndPlural[pathSegments[2]]}/${id}`;
    window.location.href = newPath; // This will cause a full page reload and navigate to the new URL
  };
  

  // Handlers and utility functions
  const handleAdd = (newData) => {
    if (onAdd) {
      onAdd(newData);
      setShowAddForm(false);
    }
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(selectedRows);
      setSelectedRows([]); 
      setSelectAll(false);
    }
  };
  
  const handleSave = () => {
    setIsEditing(false);
    if (onUpdate) {
      onUpdate({ ...tableWithInfo, details: editedDetails });
    }
  };

  const handleRowSelect = (index) => {
    if (allowDelete) {
      if (selectedRows.includes(index)) {
        setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
      } else {
        setSelectedRows([...selectedRows, index]);
      }
    }
  };

  const handleSelectAll = () => {
    if (allowDelete) {
      if (selectAll) {
        setSelectedRows([]);
      } else {
        setSelectedRows(subjects.map((_, index) => index));
      }
      setSelectAll(!selectAll);
    }
  };

  const handleSearch = (searchCriteria) => {
    onSearch(searchCriteria)
    console.log('Search Criteria:', searchCriteria);
  };

  const showForm = () => {
    setShowAddForm(true);
  };

  // A utility function to format the subject texts for display
  const formatText = (subject) => {
    return subject
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='GenericTable'>
      <h2>{title}</h2>

      {/* Decide which image to show based on the availability of a custom image */}
      {image ? <img src={image} alt="Table header" className='table-image'/> : <img src={defaultImage} alt="Default Table header" className='table-image'/>
      }
      <p>{message}</p>

      {/* Render the search component if not displaying a singular table */}
      {!singular && <GenericSearch filterById={filterById} filterByParameters={filterByParameters} onSearch={handleSearch} formatText={formatText} />}
  
      {/* Rendering based on conditions: whether to show Add Form, Singular table or General table */}
      {allowAdd && showAddForm ? (
          <form
          onSubmit={(e) => {
            e.preventDefault();
            const newData = {};
            subjects.forEach((subject, index) => {
              if (subject !== "id" && subject !== "user_id") {
                newData[subject] = newSubjects[index];
              }
            });
            handleAdd(newData);
          }}
        >
          {subjects.map((subject, index) => (
            subject !== "id" && subject !== "user_id" ? (
              <div key={index}>
                <label>{formatText(subject)}</label>&nbsp;
                {subject === "landing_time" || subject === "departure_time" ? (
                  <input
                    type="datetime-local"
                    value={newSubjects[index]}
                    onChange={(e) => {
                      const updatedSubjects = [...newSubjects];
                      updatedSubjects[index] = e.target.value;
                      setNewSubjects(updatedSubjects);
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    value={newSubjects[index]}
                    onChange={(e) => {
                      const updatedSubjects = [...newSubjects];
                      updatedSubjects[index] = e.target.value;
                      setNewSubjects(updatedSubjects);
                    }}
                  />
                )}
              </div>
            ) : null
          ))}
          <br />
          <button type="submit">Submit</button>&nbsp;&nbsp;
          <br />
          <button onClick={() => setShowAddForm(false)}>Cancel</button>&nbsp;&nbsp;
        </form>
      ) : singular ? (
        <div>
          <table>
            <thead>
              <tr>
                <th><h4>Subjects</h4></th>
                <th><h4>Details</h4></th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td className="subject">{subject}</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedDetails[index]}
                        onChange={(e) => {
                          const updatedDetails = [...editedDetails];
                          updatedDetails[index] = e.target.value;
                          setEditedDetails(updatedDetails);
                        }}
                      />
                    ) : (
                      details[index]
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {allowUpdate && (
            isEditing ? (
              <>
                <br />
                <button onClick={handleSave}>Save</button>&nbsp;&nbsp;
              </>
            ) : (
              <>
                <br />
                <button onClick={handleUpdate}>Edit</button>&nbsp;&nbsp;
              </>
            )
          )}
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  {allowDelete && (
                    <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                  )}
                  {allowDelete && <span>Select All</span>}
                </th>
                {subjects.map((subject, index) => (
                  <th key={index}>{formatText(subject)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {details.map((detailRow, rowIndex) => (
              <tr 
                key={rowIndex} 
                onClick={() => handleRowClick(detailRow[0])} // Assuming id is the first element in each 'detailRow'
              >                   <td>
                    {allowDelete && (
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(rowIndex)}
                        onChange={() => handleRowSelect(rowIndex)}
                      />
                    )}
                  </td>
                  {detailRow.map((detail, detailIndex) => (
                    <td key={detailIndex}>{detail}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          {allowAdd && !showAddForm && <button onClick={showForm}>Add</button>}&nbsp;&nbsp;
          <br />
          {allowDelete && <button onClick={handleDelete}>Delete</button>}&nbsp;&nbsp;
        </div>
      )}
    </div>
  );  
};

export default GenericTable;
import React, { useState } from 'react';
import GenericSearch from './GenericSearch'
import '../../css/GenericTable.css'

const GenericTable = ({ tableWithInfo, message, onAdd, onUpdate, onDelete, onSearch }) => {
  const {
    title,
    image,
    subjects,
    details,
    singular,
    allowAdd,
    allowUpdate,
    allowDelete,
    filterById,
    filterByParameters,

  } = tableWithInfo;

  let modifiedTitle = title;

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
  
  const defaultImage = `/Images/Table/${modifiedTitle}.jpg`;

  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState([...details]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSubjects, setNewSubjects] = useState(subjects.map(() => ''));
  const [newDetails] = useState(details.map(() => ''));

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
      {image ? <img src={image} alt="Table header" className='table-image'/> : <img src={defaultImage} alt="Default Table header" className='table-image'/>
      }
      <p>{message}</p>
      {!singular && <GenericSearch filterById={filterById} filterByParameters={filterByParameters} onSearch={handleSearch} formatText={formatText} />}
  
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
          <button onClick={() => setShowAddForm(false)}>Cancel</button>
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
              <button onClick={handleSave}>Save</button>
            ) : (
              <button onClick={handleUpdate}>Edit</button>
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
                <tr key={rowIndex}>
                  <td>
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
          {allowAdd && !showAddForm && <button onClick={showForm}>Add</button>}
          {allowDelete && <button onClick={handleDelete}>Delete</button>}
        </div>
      )}
    </div>
  );  
};

export default GenericTable;
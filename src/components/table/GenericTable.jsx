import React, { useState } from 'react';
import GenericSearch from './GenericSearch'
import './styles.css'

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
  
  const defaultImage = `../../images/${title}.jpg`;

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

  return (
    <div className='GenericTable'>
      <h2>{title}</h2>
      {image ? <img src={image} alt="Table header" /> : <img src={defaultImage} alt="Default Table header" />}
      <p>{message}</p>
  
      {allowAdd && showAddForm ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newData = {};
            subjects.forEach((subject, index) => {
              if (subject !== "id") {
                newData[subject] = newSubjects[index];
              }
            });
            handleAdd(newData);
          }}
        >
          {subjects.map((subject, index) => (
            subject !== "id" ? (
              <div key={index}>
                <label>{subject}</label>
                <input
                  type="text"
                  value={newSubjects[index]}
                  onChange={(e) => {
                    const updatedSubjects = [...newSubjects];
                    updatedSubjects[index] = e.target.value;
                    setNewSubjects(updatedSubjects);
                  }}
                />
              </div>
            ) : null
          ))}
          <button type="submit">Submit</button>
          <button onClick={() => setShowAddForm(false)}>Cancel</button>
        </form>
      ) : singular ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Detail</th>
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
                  <th key={index}>{subject}</th>
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
  
      {!singular && <GenericSearch filterById={filterById} filterByParameters={filterByParameters} onSearch={handleSearch} />}
    </div>
  );  
};

export default GenericTable;
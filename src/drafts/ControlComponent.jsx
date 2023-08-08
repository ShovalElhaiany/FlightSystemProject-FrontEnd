import React from 'react';
import GenericTable from '../components/table/GenericTable.jsx';
import './styles.css';

const ControlComponent = () => {
  // JSON data for the table
  const tableData = {
    title: 'Sample Table',
    image: '../../images/sample-table.jpg',
    subjects: ['Subject 1', 'Subject 2', 'Subject 3'],
    details: ['Detail 1', 'Detail 2', 'Detail 3'],
    allowDelete: true,
    allowUpdate: true,
    allowAdd: true,
    singular: true,
    filterById: true,
    filterByParameters: ['Param1', 'Param2', 'Param3'],
  };

  const handleDelete = (selectedRows) => {
    // ?????????????
    console.log('Delete Table Rows:', selectedRows);
  };

  const handleUpdate = (tableData) => {
    // ????????????????
    console.log('Update Table:', tableData);
  };

  const handleAdd = (newData) => {
    // Perform add action here
    console.log('Add Table Data:', newData);
  };

  // Handler function for search action
  const handleSearch = (searchCriteria) => {
    // Perform search action here
    console.log('Search Criteria:', searchCriteria);
  };

  return (
    <div>
      {/* Render the table with GenericSearch */}
      <GenericTable
        data={tableData}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        onAdd={handleAdd}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default ControlComponent;

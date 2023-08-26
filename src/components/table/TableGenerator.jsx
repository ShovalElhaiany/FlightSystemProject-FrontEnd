import React, { useState, useEffect } from 'react';
import GenericTable from './GenericTable';
import buildApiFunction from '../../api/RequestsGenerator.js';

const TableGenerator = ({ tableKey }) => {
  // States for holding data, table settings, messages, and loading status
  const [data, setData] = useState(null);
  const [tableSettings, setTableSettings] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Extract the last segment from the URL, assuming it's an ID
  const pathSegments = window.location.pathname.split('/');
  const idFromURL = pathSegments[pathSegments.length - 1];

  // Helper function to get API parameters for specific operations
  const apiParams = (operation) => tableKey.apisSettings[operation];

  // Fetch data from the server and set it into state
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const idParam = tableKey.tableSettings.id ? idFromURL : undefined;
      const HTTPrequest = buildApiFunction({ ...apiParams('get'), id: idParam });
      const response = await HTTPrequest();

      if (response) {
        setTableSettings(tableKey.tableSettings);
        setData(response.data);

        if (!tableKey.tableSettings?.id) {
          setMessage(`Found ${Array.isArray(response.data) ? response.data.length : 1} results.`);
        }
      }
    } catch (error) {
      console.error(error);
      setMessage(`Error fetching: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger data fetch on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Extract table subjects and details from the fetched data
  const extractSubjectsAndDetails = () => {
    let subjects = [];
    let details = [];

    if (Array.isArray(data)) {
      subjects = Object.keys(data[0]);
      details = data.map(item => Object.values(item));
    } else {
      subjects = Object.keys(data);
      details = Object.values(data);
    }

    return { ...tableSettings, subjects, details };
  };

  // Add, Update, Delete, and Search handlers
  const handleAdd = async (newData) => {
    try {
      const HTTPrequest = buildApiFunction({ ...apiParams('add'), data: newData });
      await HTTPrequest();

      if (Array.isArray(data)) {
        setData(data);
      }
    } catch (error) {
      console.error(error);
      setMessage(`Error adding data: ${error.message}`);
    }
    fetchData();
  };

  const handleUpdate = async (tableData) => {
    try {
      const updatedDetails = tableData.details;
      const subjects = tableData.subjects;
  
      const updatedItem = subjects.reduce((result, subject, index) => {
        result[subject] = updatedDetails[index];
        return result;
      }, {});
  
      const itemId = updatedItem.id;
  
      const HTTPrequest = buildApiFunction({ ...apiParams('update'), data: updatedItem, id: itemId });
      const response = await HTTPrequest();
  
      if (Array.isArray(data)) {
        const updatedData = data.map(item => item.id === itemId ? response : item);
        setData(updatedData);
      }
      setMessage("Successfully updated the item");
    } catch (error) {
      console.error(error);
      setMessage(`Error updating data: ${error.message}`);
    }
    fetchData();
  };  

  const handleDelete = async (selectedRows) => {
    try {
      setIsLoading(true);
  
      for (const index of selectedRows) {
        const itemToDelete = data[index];
        const id = tableKey.apisSettings.delete.id ? itemToDelete.id : undefined;
        const HTTPrequest = buildApiFunction({ ...apiParams('delete'), id });
        await HTTPrequest();
      }
  
      const updatedData = data.filter((_, index) => !selectedRows.includes(index));
      setData(updatedData);
  
      setIsLoading(false);
      setMessage(`Successfully deleted ${selectedRows.length} items.`);
    } catch (error) {
      console.error(error);
      setMessage(`Error deleting data: ${error.message}`);
      setIsLoading(false);
    }
    fetchData();
  };  

  const handleSearch = async (searchCriteria) => {
    setIsLoading(true);
    let HTTPrequest
    let settings = searchCriteria.id ? {...tableKey.tableSettings, id: true} : tableKey.tableSettings;
    
    try {
      if (searchCriteria.id) {
        HTTPrequest = buildApiFunction({ ...apiParams('get'), id: searchCriteria.id });
        
      } else {
        HTTPrequest = buildApiFunction({ ...apiParams('search'), data: searchCriteria });
      }
      const response = await HTTPrequest();
      setTableSettings(settings);
      setData(response.data);
      setIsLoading(false);
      setMessage(`Found ${response.length} results.`);
    } catch (error) {
      console.error(error);
      setMessage(`Error fetching : ${error.message}`);
      setIsLoading(false);
    }
  };  

  // Rendering logic
  if (isLoading) return <div>Loading...</div>;

  if (data) {
    return (
      <GenericTable
        tableWithInfo={extractSubjectsAndDetails()}
        message={message}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onSearch={handleSearch}
      />
    );
  }

  return null;
};

export default TableGenerator;
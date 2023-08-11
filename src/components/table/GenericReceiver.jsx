import React, { useState, useEffect } from 'react';
import  GenericTable  from './GenericTable';
import  buildApiFunction  from '../../api/RequestsGenerator.js';

const GenericReceiver = ({ containerKey }) => {
  const [data, setData] = useState(null);
  const [tableSettings, settableSettings] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const idFromURL = window.location.pathname.split('/').pop();

  const apiParams = (operation) => containerKey.apis[operation];

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const idParam = containerKey.tableSettings.singular ? idFromURL : undefined;
      const HTTPrequest = buildApiFunction({ ...apiParams('get'), id: idParam });
      const response = await HTTPrequest();  
      if (response) {
        settableSettings(containerKey.tableSettings)
        setData(response);
        setIsLoading(false);
        if (!tableSettings.singular) {
          setMessage(`Found ${response.length} results.`);
        }
      }
    } catch (error) {
      console.error(error);
      setMessage(`Error fetching : ${error.message}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
  
    const tableWithInfo = { ...tableSettings, subjects, details };
    return tableWithInfo;
  };

  const handleAdd = async (newData) => {
    try {
      const HTTPrequest = buildApiFunction({ ...apiParams('add'), data: newData });
      const response = await HTTPrequest();

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
        const id = containerKey.apis.delete.id ? itemToDelete.id : undefined;
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
    let settings = searchCriteria.id ? {...containerKey.tableSettings, singular: true} : containerKey.tableSettings;
    
    try {
      if (searchCriteria.id) {
        HTTPrequest = buildApiFunction({ ...apiParams('get'), id: searchCriteria.id });
        
      } else {
        HTTPrequest = buildApiFunction({ ...apiParams('search'), data: searchCriteria });
      }
      const response = await HTTPrequest();
      settableSettings(settings);
      setData(response);
      setIsLoading(false);
      setMessage(`Found ${response.length} results.`);
    } catch (error) {
      console.error(error);
      setMessage(`Error fetching : ${error.message}`);
      setIsLoading(false);
    }
  };  

  if (data) {
    return (
      <GenericTable
        tableWithInfo={extractSubjectsAndDetails(tableSettings, data)}
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

export default GenericReceiver;
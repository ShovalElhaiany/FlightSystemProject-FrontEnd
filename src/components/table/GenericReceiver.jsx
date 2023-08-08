import React, { useState, useEffect } from 'react';
import GenericTable from './GenericTable';
import buildApiFunction from '../../api/RequestsGenerator.js';

const GenericReceiver = ({ containerKey }) => {
  const [data, setData] = useState(null);
  const [tableSettings, settableSettings] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const idFromURL = window.location.pathname.split('/').pop();

  const getApiParams = {
    id: containerKey.apis.get.id,
    method: containerKey.apis.get.method,
    url: containerKey.apis.get.url,
    data: containerKey.apis.get.data
  };

  const addApiParams = {
    id: containerKey.apis.add.id,
    method: containerKey.apis.add.method,
    url: containerKey.apis.add.url,
    data: containerKey.apis.add.data
  };

  const updateApiParams = {
    method: containerKey.apis.update.method,
    url: containerKey.apis.update.url,
    id: containerKey.apis.update.id,
    data: containerKey.apis.update.data
  };

  // const deleteApiParams = {
  //   method: containerKey.apis.delete.method,
  //   url: containerKey.apis.delete.url,
  //   id: containerKey.apis.delete.id,
  //   data: containerKey.apis.delete.data
  // };
  

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const idParam = containerKey.tableSettings.singular ? idFromURL : undefined;
      const HTTPrequest = buildApiFunction({ ...getApiParams, id: idParam });
      const response = await HTTPrequest();  
      // const response = {id: 1, name: 'Albania'}
      // const response = [
      //   {"id":1, "name":"Albaasdasdnia"},
      //   {"id":2, "name":"Argeasdasdntina"},
      //   {"id":3, "name":"Armasasddenia"}
      // ]  
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
  
  

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDelete = (selectedRows) => {
    // ?????????????
    console.log('Delete Table Rows:', selectedRows);
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
  
      const HTTPrequest = buildApiFunction({ ...updateApiParams, data: updatedItem, id: itemId });
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
  };  
  
  const handleAdd = async (newData) => {
    try {
      const HTTPrequest = buildApiFunction({ ...addApiParams, data: newData });
      const response = await HTTPrequest();

      if (Array.isArray(data)) {
        setData(data);
      }
    } catch (error) {
      console.error(error);
      setMessage(`Error adding data: ${error.message}`);
    }
  };
  

  const handleSearch = (searchCriteria) => {
    // ????????????????
    console.log('Search Criteria:', searchCriteria);
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
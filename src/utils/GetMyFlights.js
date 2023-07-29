import React, { useState } from 'react';
import apiFunctions from './api.js';

const GetMyFlights = () => {
  const [customerId, setCustomerId] = useState('');
  const [flights, setFlights] = useState([]);
  const [message, setMessage] = useState('');

  const handleGetMyFlights = async () => {
    try {
      const myFlights = await apiFunctions.getMyFlights(customerId);
      setFlights(myFlights);
      setMessage(`Found ${myFlights.length} flights for Customer ID ${customerId}`);
    } catch (error) {
      setMessage(`Error fetching flights: ${error.message}`);
    }
  };  

  return (
    <div>
      <h2>Get My Flights</h2>
      <input type="number" placeholder="Customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
      <button onClick={handleGetMyFlights}>Get My Flights</button>
        <ul>
            <li> {flights.id} - {flights.landing_time} - {flights.departure_time}</li>
        </ul>
    </div>
  );
};

export default GetMyFlights;

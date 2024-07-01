// Importing required modules and libraries
import {React, useEffect, useState} from 'react';
import '../../css/base/TopNav.css';
import {faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Defining TopNav functional component
const TopNav = () => {
  // State variables for path and id
  const [path, setPath] = useState(sessionStorage.getItem('role'))
  const [id, setId] = useState(sessionStorage.getItem('id'))

  // useEffect to listen for changes in sessionStorage
  useEffect(() => {
    // Adding event listener for 'storage' events
    window.addEventListener('storage', () => {
      console.log("Change to local storage!"); 
      // Update path and id from sessionStorage
      setPath(sessionStorage.getItem('role'))
      setId(sessionStorage.getItem('id'))
    });
  }, []) // Dependency array is empty, so this runs only on mount and unmount

  // Rendering the component
  return (
    <header className="top-menu">
      <nav>
        <ul>
          {/* Basic Navigation Links */}
          <li><a href="/Home">Home</a></li>
          <li><a href={`/${path}/FlightsTable`}>Flights</a></li>
          <li><a href={`/${path}/AirlinesTable`}>Airlines</a></li>
          <li><a href={`/${path}/CountriesTable`}>Countries</a></li>
          <li className='registration'><a href={`/Registration`}><FontAwesomeIcon icon={faAddressCard} /> Registration</a></li>

          {/* Conditional rendering for customer role */}
          { path === 'customer' && (
            <>
              <li><a href={`/${path}/TicketsTable`}>Tickets</a></li>
              <li><a href={`/${path}/MyTicketsTable/${id}`}>MyTickets</a></li>
              <li><a href={`/${path}/CustomerDetails/${id}`}>MyDetails</a></li>
            </>
          )}

          {/* Conditional rendering for admin role */}
          { path === 'admin' && (
            <>
              <li><a href={`/${path}/CustomersTable`}>Customers</a></li>
              <li><a href={`/${path}/AdminsTable`}>Admins</a></li>
              <li className='registration'><a href={`/${path}/Registration`}><FontAwesomeIcon icon={faAddressCard} /> Registration</a></li>
            </>
          )}

          {/* Conditional rendering for airline role */}
          { path === 'airline' && (
            <>
              <li><a href={`/${path}/AirlineDetails/${id}`}>MyDetails</a></li>
              <li><a href={`/${path}/MyFlightsTable/${id}`}>MyFlights</a></li>
              <li><a href={`/${path}/AddOrDeleteFlight`}>Add/Delete Flight</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

// Exporting the component
export default TopNav;
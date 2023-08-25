import {React, useEffect, useState} from 'react';
import '../../css/base/TopNav.css';
import {faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [path, setPath] = useState(sessionStorage.getItem('role'))
  const [id, setId] = useState(sessionStorage.getItem('id'))

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("Change to local storage!"); 
      setPath(sessionStorage.getItem('role'))
      setId(sessionStorage.getItem('id'))
  })},[])


  return (
    <header className="top-menu">
      <nav>
        <ul>
           <li><a href="/Home">Home</a></li>
           <li><a href={`/${path}/FlightsTable`}>Flights</a></li>
           <li><a href={`/${path}/AirlinesTable`}>Airlines</a></li>
           <li><a href={`/${path}/CountriesTable`}>Countries</a></li>
          { path === 'customer' && (
            <>
              <li><a href={`/${path}/TicketsTable`}>Tickets</a></li>
              <li><a href={`/${path}/MyTicketsTable/${id}`}>MyTickets</a></li>
            </>
          )}
          { path === 'admin' && (
            <>
               <li><a href={`/${path}/CustomersTable`}>Customers</a></li>
               <li><a href={`/${path}/AdminsTable`}>Admins</a></li>
              <li className='registration'><a href={`/${path}/Registration`}><FontAwesomeIcon icon={faAddressCard} /> Registration</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;

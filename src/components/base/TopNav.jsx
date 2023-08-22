import React from 'react';
import '../../css/base/TopNav.css';
import { useLocation } from 'react-router-dom';
import {faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopNav = () => {
  const location = useLocation();
  const path = `/${location.pathname.split('/')[1]}`;

  return (
    <header className="top-menu">
      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href={`${path}/FlightsTable`}>Flights</a></li>
          <li><a href={`${path}/AirlinesTable`}>Airlines</a></li>
          <li><a href={`${path}/CountriesTable`}>Countries</a></li>
          { path === '/customer' && (
            <li><a href={`${path}/MyTicketsTable`}>Tickets</a></li>
          )}
          { path === '/admin' && (
            <>
              <li><a href={`${path}/CustomersTable`}>Customers</a></li>
              <li><a href={`${path}/AdminsTable`}>Admins</a></li>
              <li className='registration'><a href={`${path}/Registration`}><FontAwesomeIcon icon={faAddressCard} /> Registration</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;

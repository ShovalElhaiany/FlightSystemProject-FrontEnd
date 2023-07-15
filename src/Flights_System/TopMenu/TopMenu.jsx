import React from 'react';
import './TopMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TopMenu = () => {
  return (
    <header className="top-menu">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Flights</a></li>
          <li><a href="#">Deals</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li className='Login'><a href="#"><FontAwesomeIcon icon={faUser} /> Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default TopMenu;

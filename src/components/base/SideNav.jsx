import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../css/base/SideNav.css';

const SideNav = () => {
  return (
    <div className="side-menu">
      <nav>
        <ul>
          <li><a href="https://www.booking.com">Hotels</a></li>
          <li><a href="https://www.kishrey-teufa.co.il">Deals</a></li>
          <li><a href="https://www.royalcaribbean.com">Cruises</a></li>
          <li><a href="https://www.rentalcars.com">Car Rentals</a></li>
          <li><a href="https://www.passportcard.co.il">Travel Insurance</a></li>
          <li><a href="#footer">Contact</a></li>
          <li><a href="#footer">About</a></li>
          <li className='login'><a href="/Login"><FontAwesomeIcon icon={faUser} /> Login</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

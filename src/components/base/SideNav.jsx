
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import '../../css/base/SideNav.css';
import buildApiFunction from '../../api/RequestsGenerator';

const SideNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoginStatus = () => {
    const storedCredentials = window.sessionStorage.getItem("credentials");
    setIsLoggedIn(!!storedCredentials);
  };
  
  useEffect(() => {
    updateLoginStatus();

    window.addEventListener("storage", updateLoginStatus);

    return () => {
      window.removeEventListener("storage", updateLoginStatus);
    };
  }, []);

  const handleLogout = async () => {
    const storedCredentials = window.sessionStorage.getItem("credentials");
    const credentials = JSON.parse(storedCredentials);

    const apiParams = {
      method: 'POST',
      url: '/user/logout',
      data: credentials,
    };

    try {
      buildApiFunction(apiParams);
      window.sessionStorage.removeItem("credentials");
      window.sessionStorage.setItem("role", "anonymous");
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

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
          <li className='login'>
            {isLoggedIn 
              ? <a href="#" onClick={handleLogout}><FontAwesomeIcon icon={faUser} /> Logout</a>
              : <a href="/Login"><FontAwesomeIcon icon={faUser} /> Login</a>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

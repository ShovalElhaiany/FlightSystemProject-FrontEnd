import React from 'react';
import './SideMenu.css'

const SideMenu = () => {
  return (
    <div className="side-menu">
      <nav>
        <ul>
          <li><a href="#">Flights</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Car Rentals</a></li>
          <li><a href="#">Vacation Packages</a></li>
          <li><a href="#">Cruises</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Travel Insurance</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;

// Required imports
import { faCircleInfo, faEnvelope, faHouse, faMusic, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../css/base/Footer.css';

// Footer component provides details about the BiguTours site, contact information, and copyright
function Footer() {
  return (
    // Main wrapper for the footer
    <footer className='footer' id='footer'>
      
      {/* // Title for the footer */}
      <h2 className='footer-title'>BiguTours</h2>
      
      {/* // Wrapper for the columns of footer content */}
      <div className='footer-columns'>
        
        {/* // Contact column */}
        <div className='footer-column'>
          <h3>Contact</h3>
          // Unordered list for contact details
          <ul className='footer-ul'>
            <li className='footer-li'><FontAwesomeIcon icon={faHouse} /> Mivtza Hiram 15</li>
            <li className='footer-li'><FontAwesomeIcon icon={faPhone} /> 050-3413413</li>
            <li className='footer-li'><FontAwesomeIcon icon={faEnvelope} /> shoval.elhaiany@gmail.com</li>
            <li className='footer-li'><FontAwesomeIcon icon={faMusic} /> Spotify/Shoval.Elahiny</li>
          </ul>
        </div>
        
        {/* // About column */}
        <div className='footer-column'>
          <h3>About</h3>
          {/* // Unordered list for about details */}
          <ul className='footer-ul'>
            <li className='footer-li'>BiguTours is a revolutionary new site that is set to change the world of modern aviation.</li>
            <li className='footer-li'>Founded in 2023 and since then it has developed and grown.</li>
            <li className='footer-li'>The company has only one employee and works with about 2000 different airlines.</li>
            <li className='footer-li'>CEO and founder of the company - Shoval Elhaiany</li>
          </ul>
        </div>
        
        {/* // Copyright information */}
        <div className='footer-rights'>
          <a href="#" aria-label="All rights reserved to Shoval Elhaiany">
            <FontAwesomeIcon icon={faCircleInfo} />
            All rights reserved to Shoval_Elhaiany
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

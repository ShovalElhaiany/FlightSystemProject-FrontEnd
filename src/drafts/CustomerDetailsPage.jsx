import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/CustomerDetailsPage.css';

const CustomerDetailsPage = ({ photo, FirstName, LastName, Address, Phone, Tickets}) => {
  const imageUrl = photo || '../../images/user-solid.jpg';
  

  return (
    <div className="customer-details-page">
      <div className="customer-details-container">
        <div className="customer-photo">
          <img src={imageUrl} alt="Customer" />
          <header>{FirstName} {LastName}</header>
        </div>
        <table className="customer-table">
          <tbody>
            <tr>
              <td>First Name:</td>
              <td>{FirstName}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{LastName}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{Address}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{Phone}</td>
            </tr>
            <tr>
              <td>Tickets:</td>
              <td className='tickets'><Button><FontAwesomeIcon icon={faTicket} bounce /> {Tickets}</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;

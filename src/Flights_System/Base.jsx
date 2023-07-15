/* Base.jsx */

import React from 'react';
import './Base.css';

import TopMenu from './TopMenu/TopMenu.jsx';
import SideMenu from './SideMenu/SideMenu.jsx';
import ImageComponent from './ImageComponent/ImageComponent.jsx';
import Footer from './Footer/Footer.jsx';
import ContentContainer from './ContentContainer/ContentContainer.jsx';
import RegistrationForm from './RegistrationForm/RegistrationForm.jsx';
import CustomerDetailsPage from './CustomerDetailsPage/CustomerDetailsPage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx';
import GenericTable from './GenericTable/GenericTable.jsx';

const data = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  // Add more data rows as needed
];

const columns = [
  { header: 'ID', field: 'id' },
  { header: 'Name', field: 'name' },
  { header: 'Age', field: 'age' },
  { header: 'Email', field: 'email' },
  { header: 'Email', field: 'email' },
  { header: 'Email', field: 'email' },
  { header: 'Email', field: 'email' },
  { header: 'Email', field: 'email' },
  { header: 'Email', field: 'email' },
];


function Base() {
  return (
    <div className='base'>
      <video autoPlay loop muted src="./videos/backgroundViseo.mp4" className="background-video"></video>
      <div className='background-filter'></div>
      <div className='side-and-top-menu'><TopMenu /><SideMenu /></div>
      <div className='containerComponent'><GenericTable  data={data} columns={columns}/></div>
      <div className='imageComponent'><ImageComponent /></div>
      <div className='footerComponent'><Footer/></div>
    </div>
  );
}

export default Base;

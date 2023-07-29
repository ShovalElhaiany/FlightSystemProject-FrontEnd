import React from 'react';
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import TopNav from '../components/bases/TopNav.jsx';
import SideNav from '../components/bases/SideNav.jsx';
import Ad from '../components/bases/Ad.jsx';
import Footer from '../components/bases/Footer.jsx';
import Home from '../components/anonymous/Home.jsx';
import Registration from '../components/anonymous/Registration.jsx';
// import CustomerDetailsPage from './CustomerDetailsPage.jsx'
import Login from '../components/anonymous/Login.jsx';
import GenericTable from '../components/generics/GenericTable.jsx';

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


function MainPage() {
    return (
    <div className='App'>
        <video autoPlay loop muted src="./videos/backgroundViseo.mp4" className="background-video"></video>
        <div className='background-filter'></div>
        <div className='side-and-top-menu'><TopNav /><SideNav /></div>
        <div className='containerComponent'><Registration /></div>
        <div className='imageComponent'><Ad /></div>
        <div className='footerComponent'><Footer/></div>
    </div>
    );
}

export default MainPage;

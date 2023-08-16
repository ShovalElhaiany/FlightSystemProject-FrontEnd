import React from 'react';
import '../../css/anonymous/Home.css'

const Home = () => {
  return (
    <div className="content-container">
      <img src="/Images/logo.jpg" alt="logo" className='logo-image'/>
      <h1 className="main-title">Welcome to BiguToures</h1>
      <div className="buttons-container">
        <button className="primary-button">Book Now</button>
        <button className="secondary-button">Deals & Discounts</button>
        <button className="secondary-button">Contact Us</button>
        <button className="secondary-button">Track Flight</button>
      </div>
      <div className="media-container">
        <div className="media-item">
          <img src="./images/flight.jpg" alt="Flights" className="media-image" />
          <h3 className="media-title">Explore Flights</h3>
        </div>
        <div className="media-item">
          <img src="./images/vacation.jpg" alt="Vacation" className="media-image" />
          <h3 className="media-title">Plan Your Vacation</h3>
        </div>
        <div className="media-item">
          <video
            src="./videos/destinations.mp4"
            controls
            className="media-video"
          ></video>
          <h3 className="media-title">Discover Destinations</h3>
        </div>
        <div className="media-item">
          <img src="./images/cruise.jpg" alt="Cruise" className="media-image" />
          <h3 className="media-title">Cruise Packages</h3>
        </div>
        <div className="media-item">
          <img src="./images/hotel.jpg" alt="Hotels" className="media-image" />
          <h3 className="media-title">Find Hotels</h3>
        </div>
        <div className="media-item">
          <img src="./images/car-rental.jpg" alt="Car Rentals" className="media-image" />
          <h3 className="media-title">Rent a Car</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import '../../css/anonymous/Home.css'

const Home = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Welcome to BiguToures</h1>
      <div className="search-container">
        <div className="search-form">
          <h2>Search Flights</h2>
          <div className="input-group">
            <input type="text" placeholder="From" className="input-field" />
            <input type="text" placeholder="To" className="input-field" />
          </div>
          <input type="date" className="input-field" />
          <button className="search-button">Search</button>
        </div>
        <div className="search-options">
          <h2>Search Options</h2>
          <div className="option">
            <input type="checkbox" id="directFlights" className="checkbox" />
            <label htmlFor="directFlights" className="checkbox-label">
              Direct Flights Only
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="refundableTickets"
              className="checkbox"
            />
            <label htmlFor="refundableTickets" className="checkbox-label">
              Refundable Tickets
            </label>
          </div>
          <div className="option">
            <input type="checkbox" id="wifiOnboard" className="checkbox" />
            <label htmlFor="wifiOnboard" className="checkbox-label">
              WiFi Onboard
            </label>
          </div>
          <div className="option">
            <input type="checkbox" id="mealIncluded" className="checkbox" />
            <label htmlFor="mealIncluded" className="checkbox-label">
              Meal Included
            </label>
          </div>
        </div>
      </div>
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

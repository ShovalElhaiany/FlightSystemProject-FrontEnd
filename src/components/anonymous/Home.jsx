import React from 'react';
import '../../css/anonymous/Home.css';

// Data for media items to improve maintainability and scalability.
const MEDIA_ITEMS = [
    { type: 'image', src: './Images/base/flight.jpg', alt: 'Flights', title: 'Explore Flights' },
    { type: 'image', src: './Images/base/vacation.jpg', alt: 'Vacation', title: 'Plan Your Vacation' },
    { type: 'video', src: './videos/destinations.mp4', title: 'Discover Destinations' },
    { type: 'image', src: './Images/base/cruise.jpg', alt: 'Cruise', title: 'Cruise Packages' },
    { type: 'image', src: './Images/base/hotel.jpg', alt: 'Hotels', title: 'Find Hotels' },
    { type: 'image', src: './Images/base/car-rental.jpg', alt: 'Car Rentals', title: 'Rent a Car' },
];

const Home = () => {
    return (
        <div className="content-container">
            {/* Logo and Title Section */}
            <img src="./Images/logo.jpg" alt="logo" className='logo-image' />
            <h1 className="main-title">Welcome to BiguToures</h1>

            {/* Button Actions Section */}
            <div className="buttons-container">
                <button className="primary-button">Book Now</button>
                <button className="secondary-button">Deals & Discounts</button>
                <button className="secondary-button">Contact Us</button>
                <button className="secondary-button">Track Flight</button>
            </div>

            {/* Media Display Section: Displays images and videos */}
            <div className="media-container">
                {MEDIA_ITEMS.map((item, index) => (
                    <div key={index} className="media-item">
                        {item.type === 'image' ? (
                            <img src={item.src} alt={item.alt} className="media-image" />
                        ) : (
                            <video src={item.src} controls className="media-video"></video>
                        )}
                        <h3 className="media-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

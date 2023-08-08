import React from 'react';
import '../../css/base/Ad.css';

const Ad = () => {
  return (
    <div className="image-component">
      <div className="image-container">
        <img
          src="./Images/vacation2.jpg"
          alt="Image"
          className="rounded-image"
        />
        <div className="title-container">
          <h3 className="small-title">Can't decide where to go?</h3>
        </div>
        <div className="imageComponent-container">
          <h2 className="big-headline">Explore</h2>
          <h2 className="big-headline">Everywhere</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Ad;

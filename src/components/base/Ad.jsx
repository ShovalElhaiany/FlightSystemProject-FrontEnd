import React from 'react';
import '../../css/base/Ad.css';

// Ad component displays a promotional image and associated text.
const Ad = () => {
  return (
    // Main wrapper for the ad image component
    <div className="image-component">
      
      {/* // Container for the image and its overlays */}
      <div className="image-container">
        
        {/* // Display the ad image */}
        <img
          src="./Images/base/vacation2.jpg"
          alt="Promotional Ad"
          className="rounded-image"
        />
        
        {/* // Container for the title overlaying the image */}
        <div className="title-container">
          <h3 className="small-title">Can't decide where to go?</h3>
        </div>
        
        {/* // Container for the main content overlaying the image */}
        <div className="imageComponent-container">
          <h2 className="big-headline">Explore</h2>
          <h2 className="big-headline">Everywhere</h2>
          
          {/* // Call-to-action button */}
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Ad;

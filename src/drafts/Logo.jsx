import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/base/Logo.css';

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home');
  };

  return (
    <div className="logo-container" onClick={handleClick}>
      <img src='./Images/Logo.jpg' alt="Logo" className='logo-image' />
    </div>
  );
};

export default Logo;

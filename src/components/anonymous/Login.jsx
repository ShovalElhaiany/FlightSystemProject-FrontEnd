import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/anonymous/Login.css';
import buildApiFunction from '../../api/RequestsGenerator';

const Login = () => {
  // State hooks for input fields and feedback messages.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState('');

  // Hook to programmatically navigate to other routes.
  const navigate = useNavigate();

  // Helper function to translate user role codes to human-readable roles.
  const getRoleFromCode = (code) => {
    switch (code) {
      case '1': return 'admin';
      case '2': return 'customer';
      case '3': return 'airline';
      default: return null;
    }
  };

  // Function to handle form submission for login.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior.

    const loginData = { username, password }; // Prepare data for API call.
  
    const apiParams = {
      method: 'POST',
      url: '/user/login',
      data: loginData,
    };

    try {
      const response = await buildApiFunction(apiParams)(); // Make API call.
      const userRole = response.headers['x-user-role'];
      const userId = response.headers['x-user-id'];
      const role = getRoleFromCode(userRole); // Translate role code.

      // If the role exists, store the user info and navigate to home.
      if (role) {
        const credentials = { password, username };
        window.sessionStorage.setItem("credentials", JSON.stringify(credentials));
        window.sessionStorage.setItem("role", role);
        window.sessionStorage.setItem("id", userId);
        window.dispatchEvent(new Event("storage"));

        setMessage('Login successful!');
        setMessageColor('green');

        setTimeout(() => navigate("/Home"), 1000); // Navigate after 1 second.
      } else {
        setMessage('Login failed');
        setMessageColor('red');
      }
    } catch (error) {
      // If an error occurs, display a fail message.
      setMessage('Login failed');
      setMessageColor('red');
      console.error('Login failed:', error.message);
    }
  };

  return (
    // Login page UI.
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Input fields for username and password */}
          <input 
            type="text" 
            placeholder="Username" 
            className="input-field" 
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        {/* Display feedback message after login attempt */}
        {message && <div style={{ color: messageColor }}>{message}</div>}
        {/* Navigation link to registration page */}
        <p className="register-prompt">
          Don't have an account? 
          <span onClick={() => navigate("/Registration")} className="register-link">
            Register here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

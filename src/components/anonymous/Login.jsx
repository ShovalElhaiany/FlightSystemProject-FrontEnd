import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../../css/anonymous/Login.css';
import buildApiFunction from '../../api/RequestsGenerator';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState([]);
  const [messageColor, setMessageColor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { username, password };
  
    const apiParams = {
      method: 'POST',
      url: '/user/login',
      data: loginData,
    };
  
    try {
      const response = await buildApiFunction(apiParams)();
      const userRole = response.headers['x-user-role'];
      const userId = response.headers['x-user-id'];

      let role;
      switch (userRole) {
        case '1': role = 'admin'; break;
        case '2': role = 'customer'; break;
        case '3': role = 'airline'; break;
      }
      if (userRole) {
        const credentials = {
          password: password,
          username: username
        };
        window.sessionStorage.setItem("credentials", JSON.stringify(credentials));
        window.sessionStorage.setItem("role", role);
        window.sessionStorage.setItem("id", userId);
        window.dispatchEvent(new Event("storage"));
        setMessageColor('green');
        setMessage('Login successful!');
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      } else {
        setMessageColor('red');
        setMessage('Login failed');
      }
  
    } catch (error) {
      setMessage('Login failed');
      setMessageColor('red');
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
        {message && <div style={{ color: messageColor }}>{message}</div>}
        <p className="register-prompt">
          Don't have an account? 
          <span 
            onClick={() => navigate("/Registration")} 
            className="register-link"
          >
            Register here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
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

      let path;
      switch (userRole) {
        case '1': path = '/admin'; break;
        case '2': path = '/customer'; break;
        case '3': path = '/airline'; break;
        default: path = '/login'; break; 
      }

      const messages = Array.isArray(response.data) ? response.data : (typeof response.data === 'object' ? Object.values(response.data) : [response.data.toString()]);
      setMessage(messages);
      switch (messages[0]) {
        case 'Login successful!': setMessageColor('green'); break;
        default: setMessageColor('red'); break;
      }
      
  
      setTimeout(() => {
        navigate(path);
      }, 1000);
  
    } catch (error) {
      setMessage([error.message || 'Login failed']);
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
      </div>
    </div>
  );
};

export default Login;

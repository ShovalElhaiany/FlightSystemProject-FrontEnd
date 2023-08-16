import React from 'react';
import '../../css/anonymous/Login.css'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <select className="role-select">
            <option value="customer">Customer</option>
            <option value="airline">Airline Company</option>
            <option value="admin">Administrator</option>
          </select>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import {
  faUser, faLock, faEnvelope, faUserTag, faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';

import '../../css/anonymous/Registertion.css';
import buildApiFunction from '../../api/RequestsGenerator';

// Registration component for adding different user roles.
function Registration({ admin }) {
  // Initial form data structure
  const initialFormData = {
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    user_role: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [additionalFields, setAdditionalFields] = useState([]);

  // Update additional fields based on user role selection
  useEffect(() => {
    switch (formData.user_role) {
      case 'Administrators':
        setAdditionalFields([
          { id: 'first_name', label: 'First Name', placeholder: 'First Name' },
          { id: 'last_name', label: 'Last Name', placeholder: 'Last Name' },
        ]);
        break;
      case 'Customers':
        setAdditionalFields([
          { id: 'address', label: 'Address', placeholder: 'Address' },
          { id: 'credit_card_no', label: 'Credit Card No', placeholder: 'Credit Card No' },
          { id: 'first_name', label: 'First Name', placeholder: 'First Name' },
          { id: 'last_name', label: 'Last Name', placeholder: 'Last Name' },
          { id: 'phone_no', label: 'Phone No', placeholder: 'Phone No' },
        ]);
        break;
      case 'AirlineCompanies':
        setAdditionalFields([
          { id: 'country_id', label: 'Country ID', placeholder: 'Country ID' },
          { id: 'name', label: 'Name', placeholder: 'Name' },
        ]);
        break;
      default:
        setAdditionalFields([]);
    }
  }, [formData.user_role]);

  // Handler to update form data based on input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Special handler for user role change to reset additional fields
  const handleUserRoleChange = (e) => {
    const { id, value } = e.target;
    const resetObject = additionalFields.reduce((acc, field) => {
      acc[field.id] = '';
      return acc;
    }, {});

    setFormData((prevData) => ({
      ...prevData,
      ...resetObject,
      [id]: value
    }));
  };

  // Utility function to check if the passwords match
  const passwordsMatch = () => formData.password === formData.confirmPassword;

  // Handler to submit the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordsMatch()) {
      setError('');
      const { confirmPassword, ...requestData } = formData;
      const requestDetails = {
        method: 'POST',
        url: '',
        data: requestData,
      };

      // Set the appropriate API endpoint based on user role
      switch (formData.user_role) {
        case 'Administrators':
          requestDetails.url = 'administrator/add_administrators';
          break;
        case 'Customers':
          requestDetails.url = 'anonymous/add_customers';
          break;
        case 'AirlineCompanies':
          requestDetails.url = 'administrator/add_airlines';
          break;
        default:
          setError('Invalid User Role');
          return;
      }

      // Submit registration request
      try {
        const apiFunction = buildApiFunction(requestDetails);
        await apiFunction();
        setSuccessMessage('Your request has been successfully sent.');
      } catch (error) {
        console.error('Registration error:', error);
        setError('Registration failed. Please try again.');
      }
    } else {
      setError('Passwords do not match');
    }
  };

  // Render the registration form
  return (
    <Form className='form-body' onSubmit={handleSubmit}>
    <header><h1 className='form-h1'>Registration</h1></header>
    {error && <Alert variant='danger'>{error}</Alert>}
    {successMessage && <Alert variant='success'>{successMessage}</Alert>}
    <Row>
      <Form.Group as={Col} controlId="username">
        <Form.Label><FontAwesomeIcon icon={faUser} /> Username</Form.Label>
        <Form.Control onChange={handleChange} placeholder="Username" />
      </Form.Group>

      <Form.Group as={Col} controlId="email">
        <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
        <Form.Control type="email" onChange={handleChange} placeholder="Email" />
      </Form.Group>
    </Row>
    <Row>
      <Form.Group as={Col} controlId="password">
        <Form.Label><FontAwesomeIcon icon={faLock} /> Password</Form.Label>
        <Form.Control type="password" onChange={handleChange} placeholder="Password" />
      </Form.Group>

      <Form.Group as={Col} controlId="confirmPassword">
        <Form.Label><FontAwesomeIcon icon={faLock} /> Confirm Password</Form.Label>
        <Form.Control type="password" onChange={handleChange} placeholder="Confirm Password" />
      </Form.Group>
    </Row>
    <Row>
      <Form.Group as={Col} controlId="user_role">
        <Form.Label><FontAwesomeIcon icon={faUserTag} /> User Role</Form.Label>
        <Form.Select onChange={handleUserRoleChange}>
          <option value="">Select Role</option>
          {admin && <option value="Administrators">Administrator</option>}
          <option value="Customers">Customer</option>
          {admin && <option value="AirlineCompanies">Airline Company</option>}
        </Form.Select>
      </Form.Group>
    </Row>
    <Row>
      {additionalFields.map((field) => (
        <Form.Group as={Col} controlId={field.id} key={field.id}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control onChange={handleChange} placeholder={field.placeholder} />
        </Form.Group>
      ))}
    </Row>
    <Button variant="primary" type="submit" className='submit'>
      <FontAwesomeIcon icon={faPaperPlane} style={{color: "#fff", height: '20px'}} />
      <span className='form-a'>Submit</span>
    </Button>
  </Form>
  );
}

export default Registration;

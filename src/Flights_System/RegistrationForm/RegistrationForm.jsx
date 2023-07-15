import React from 'react';
import './RegistertionForm.css';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser, faHouse, faPhoneVolume, faLock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function RegistertionForm() {
  return (
    <Form className='form-body'>
      <header><h1 className='form-h1'>Registration</h1></header>
      <Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label><FontAwesomeIcon icon={faCircleUser} /> First name</Form.Label>
          <Form.Control placeholder="First name" />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label><FontAwesomeIcon icon={faCircleUser} /> Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="Address" controlId="formGridAddress">
          <Form.Label><FontAwesomeIcon icon={faHouse} /> Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label><FontAwesomeIcon icon={faPhoneVolume} /> Phone number</Form.Label>
          <Form.Control placeholder="Phone number" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGridPassword1">
          <Form.Label><FontAwesomeIcon icon={faLock} /> Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridConfirmPassword">
          <Form.Label><FontAwesomeIcon icon={faLock} /> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit" className='submit'>
      <FontAwesomeIcon icon={faPaperPlane} beat style={{color: "#fff", height: '20px'}} />
      <a className='form-a'>Submit</a>
      </Button>
    </Form>
  );
}


export default RegistertionForm;

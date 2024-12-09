import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './CreateProfile.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const ContactDetailsForm = () => {
  const [email, setEmail] = useState('');
  const [alternateEmail, setAlternateEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneOwner, setPhoneOwner] = useState('');
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAlternateEmailChange = (e) => setAlternateEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePhoneOwnerChange = (e) => setPhoneOwner(e.target.value);
  const handleAlternatePhoneNumberChange = (e) => setAlternatePhoneNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      email,
      alternateEmail,
      phoneNumber,
      phoneOwner,
      alternatePhoneNumber,
    });
  };

  return (
    <Container className="contact-details-form-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Details</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Update details that would help profiles get in touch with you
              </Card.Subtitle>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId="alternateEmail">
                  <Form.Label>Alternate Email Id</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter alternate email"
                    value={alternateEmail}
                    onChange={handleAlternateEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </Form.Group>

                <Form.Group controlId="phoneOwner">
                  <Form.Label>Phone Number Owned By</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Groom"
                      value="Groom"
                      checked={phoneOwner === 'Groom'}
                      onChange={handlePhoneOwnerChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Parent"
                      value="Parent"
                      checked={phoneOwner === 'Parent'}
                      onChange={handlePhoneOwnerChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Sibling"
                      value="Sibling"
                      checked={phoneOwner === 'Sibling'}
                      onChange={handlePhoneOwnerChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Relative"
                      value="Relative"
                      checked={phoneOwner === 'Relative'}
                      onChange={handlePhoneOwnerChange}
                    />
                  </div>
                </Form.Group>

                <Form.Group controlId="alternatePhoneNumber">
                  <Form.Label>Alternate Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter alternate phone number"
                    value={alternatePhoneNumber}
                    onChange={handleAlternatePhoneNumberChange}
                  />
                </Form.Group>

                <Link to="/user/edit-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <button onClick={handleSave} className="form-button">
                    Save
                  </button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactDetailsForm;

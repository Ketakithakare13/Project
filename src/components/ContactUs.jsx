// import React, { useState } from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import "../../Styles/contactus.css"

// function ContactUs() {

//     return (
//       <Container className="d-flex justify-content-center align-items-center" style={{marginTop:"80px"}}>
//           <Form className="form">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Your Issue</Form.Label>
//         <Form.Control type="testarea" placeholder="Your issue" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//       <Button variant="primary" type="submit" style={{marginLeft: "150px"}}>
//         <a href="/" style={{textDecoration: "none", color: "white"}}>Back</a>
//       </Button>
//     </Form>
//       </Container>
//     );
// }

// export default ContactUs;

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../../Styles/contactus.css" // Make sure to import the CSS file

const ContactUs = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="text-center">CONTACT US</Card.Title>
              <p className="text-center">At Bandhan, we are always striving to better your experience.</p>
              <hr />
              <Row>
                <Col md={6}>
                  <Card.Text>
                    <p><strong>For Membership Plans: </strong> 9874562354</p>
                    <p><strong>Timing: </strong> 10am - 7pm</p>
                    <p><strong>Branch Office:</strong></p>
                    <p><b>BANDHAN</b></p>
                    <p>Mumbai , Maharashtra</p>
                    <p><strong>Google Pay, PhonePe Account No:</strong> 9874562354</p>
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0126341370895!2d72.8826105!3d19.0760907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbc9e1c1dc3b91%3A0x56c88163e864f1ec!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Map"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
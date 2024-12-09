import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const handlePayment = () => {
  const options = {
    key: "rzp_live_KmV3z7hQuIkyoZ", 
    amount: 100, // Amount in paise (₹100.00 = 10000 paise)
    currency: "INR", 
    name: "Bandhan", 
    description: "Premium Subscription", 
    image: "https://example.com/logo.png", 
    handler: function (response) {
      // Handle the payment 
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      setPaymentSuccessful(true);
      
      
    },
    prefill: {
      name: "Customer Name", 
      email: "customer@example.com", 
      contact: "8669190728", 
    },
    notes: {
      address: "Your Address", 
    },
    theme: {
      color: "#F37254", 
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};
const Payment = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Upgrade Membership Plan</h2>
      <p className="text-center mb-4">
        Check whether you have matching profiles through search
        option. Also check our Terms & Conditions & Refund Policy.
      </p>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <div className="card rounded shadow-sm p-3" style={{ backgroundColor: '#FF6347' }}>
            <div className="text-center">
              <h2 className="text-white">INR 4000</h2>
              <p className="text-white">SILVER</p>
            </div>
            <div className="text-center mb-3">
              <i className="fas fa-rupee-sign fa-3x text-white"></i>
            </div>
            <ul className="list-group list-group-flush text-white">
              <li className="list-group-item">Duration / 180</li>
              <li className="list-group-item">Contact / 100</li>
              <li className="list-group-item">View Profile / 3000</li>
              <li className="list-group-item">Live Chat / Yes</li>
              <li className="list-group-item">Personal Message / 200</li>
            </ul>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="light" className="me-2" onClick={handlePayment}>Buy Plan</Button>
            
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="card rounded shadow-sm p-3" style={{ backgroundColor: '#00BFFF' }}>
            <div className="text-center">
              <h2 className="text-white">INR 5000</h2>
              <p className="text-white">GOLD</p> </div>
            <div className="text-center mb-3">
              <i className="fas fa-rupee-sign fa-3x text-white"></i>
            </div>
            <ul className="list-group list-group-flush text-white">
              <li className="list-group-item">Duration / 365</li>
              <li className="list-group-item">Contact / 200</li>
              <li className="list-group-item">View Profile / 5000</li>
              <li className="list-group-item">Live Chat / Yes</li>
              <li className="list-group-item">Personal Message / 500</li>
            </ul>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="light" className="me-2" onClick={handlePayment}>Buy Plan</Button> 
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="card rounded shadow-sm p-3" style={{ backgroundColor: '#32CD32' }}>
            <div className="text-center">
              <h2 className="text-white">INR 7000</h2>
              <p className="text-white">PLATINUM</p>
            </div>
            <div className="text-center mb-3">
              <i className="fas fa-rupee-sign fa-3x text-white"></i>
            </div>
            <ul className="list-group list-group-flush text-white">
              <li className="list-group-item">Duration / 730</li>
              <li className="list-group-item">Contact / Unlimited</li>
              <li className="list-group-item">View Profile / Unlimited</li>
              <li className="list-group-item">Live Chat / Yes</li>
              <li className="list-group-item">Personal Message / Unlimited</li>
            </ul>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="light" className="me-2" onClick={handlePayment}>Buy Plan</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './CreateProfile.css';  // Import the CSS file

const EducationForm = () => {
  const [highestEducation, setHighestEducation] = useState('');
  const [ugDegree, setUgDegree] = useState('');
  const [ugCollege, setUgCollege] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [aboutEducation, setAboutEducation] = useState('');

  const handleHighestEducationChange = (e) => setHighestEducation(e.target.value);
  const handleUgDegreeChange = (e) => setUgDegree(e.target.value);
  const handleUgCollegeChange = (e) => setUgCollege(e.target.value);
  const handleSchoolNameChange = (e) => setSchoolName(e.target.value);
  const handleAboutEducationChange = (e) => setAboutEducation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      highestEducation,
      ugDegree,
      ugCollege,
      schoolName,
      aboutEducation,
    });
  };

  return (
    <Container className="education-form-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Update details about your educational background
              </Card.Subtitle>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="highestEducation">
                  <Form.Label>Highest Education</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your highest education"
                    value={highestEducation}
                    onChange={handleHighestEducationChange}
                  />
                </Form.Group>

                <Form.Group controlId="ugDegree">
                  <Form.Label>UG Degree</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your UG degree"
                    value={ugDegree}
                    onChange={handleUgDegreeChange}
                  />
                </Form.Group>

                <Form.Group controlId="ugCollege">
                  <Form.Label>UG College</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your UG college name"
                    value={ugCollege}
                    onChange={handleUgCollegeChange}
                  />
                </Form.Group>

                <Form.Group controlId="schoolName">
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your school name"
                    value={schoolName}
                    onChange={handleSchoolNameChange}
                  />
                </Form.Group>

                <Form.Group controlId="aboutEducation">
                  <Form.Label>About My Education</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter details about your education"
                    value={aboutEducation}
                    onChange={handleAboutEducationChange}
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

export default EducationForm;

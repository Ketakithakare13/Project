import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    placeOfBirth: '',
    rashi: '',
    height: '',
    maritalStatus: '',
    religion: '',
    motherTongue: '',
    caste: '',
    highestEducation: '',
    collegeName: '',
    job: '',
    annualIncome: '',
    fathersName: '',
    fathersOccupation: '',
    mothersName: '',
    mothersOccupation: '',
    totalBrothers: '',
    totalSisters: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const requiredFields = [
      'name', 'gender', 'dob', 'placeOfBirth', 'rashi', 'height', 'maritalStatus',
      'religion', 'motherTongue', 'caste', 'highestEducation', 'collegeName', 'job',
      'annualIncome', 'fathersName', 'fathersOccupation', 'mothersName', 'mothersOccupation',
      'totalBrothers', 'totalSisters'
    ];

    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert(`${field.replace(/([A-Z])/g, ' $1')} is required.`);
        return;
      }
    }

    // Creating a FormData object to handle file upload along with other fields
    const profileData = new FormData();
    for (const key in formData) {
      profileData.append(key, formData[key]);
    }

    
    const token = localStorage.getItem('token');// Or wherever your token is stored

    // Check if the token exists before using it
    if (!token) {
      console.error('Token not found');
      return;
    }

    try {
      // Make a POST request to the backend to create the profile
      const response = await axios.post('http://localhost:8080/users/user-profile', profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
          withCredentials: true, // For handling image uploads
        },
      });

      if (response.status === 200) {
        alert('Profile Created Successfully!');
        navigate('/user/dashboard'); // Navigate to User Dashboard after successful creation
      } else {
        alert('Failed to create profile. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('An error occurred while creating the profile.');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Row className="justify-content-center w-100">
        <Col md={6} className="bg-white p-4 rounded shadow">
          <h3 className="text-center mb-4">Create Profile</h3>
          <Form onSubmit={handleSubmit}>
            {/* All your form fields here */}
            <Form.Group id="name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group id="gender" className="mb-3">
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group id="dob" className="mb-3">
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="placeOfBirth" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Place of Birth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="rashi" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Rashi"
                name="rashi"
                value={formData.rashi}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="height" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="maritalStatus" className="mb-3">
              <Form.Control
                as="select"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Form.Control>
            </Form.Group>

            <Form.Group id="religion" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Religion"
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="motherTongue" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Mother Tongue"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="caste" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Caste"
                name="caste"
                value={formData.caste}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="highestEducation" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Highest Education"
                name="highestEducation"
                value={formData.highestEducation}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="collegeName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="College Name"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="job" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Job / Occupation"
                name="job"
                value={formData.job}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="annualIncome" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Annual Income"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="fathersName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Father's Name"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="fathersOccupation" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Father's Occupation"
                name="fathersOccupation"
                value={formData.fathersOccupation}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="mothersName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Mother's Name"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="mothersOccupation" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Mother's Occupation"
                name="mothersOccupation"
                value={formData.mothersOccupation}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="totalBrothers" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Total Brothers"
                name="totalBrothers"
                value={formData.totalBrothers}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="totalSisters" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Total Sisters"
                name="totalSisters"
                value={formData.totalSisters}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="image" className="mb-3">
              <Button variant="outline-secondary" onClick={() => document.getElementById('imageInput').click()}>
                Add Photo
              </Button>
              <Form.Control
                id="imageInput"
                type="file"
                name="image"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </Form.Group>

           <Link to="/user">
           <Button variant="primary" type="submit" block>
              Create Profile
            </Button></Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProfileForm;

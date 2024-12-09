import React, { useState } from "react";
import './CreateProfile.css';  // Import the external CSS file
import { Link } from "react-router-dom";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    employedIn: "Not Working",
    occupation: "",
    settlingAbroad: "Undecided",
    aboutCareer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Career Details Saved: ", formData);
  };

  return (
    <div className="career-form-container">
      <h2>Career</h2>
      <p>Update details about your professional background</p>

      <label>Employed In:</label>
      <select
        name="employedIn"
        value={formData.employedIn}
        onChange={handleChange}
        className="career-form-select"
      >
        <option value="Private Sector">Private Sector</option>
        <option value="Government/Public Sector">Government/Public Sector</option>
        <option value="Civil Services">Civil Services</option>
        <option value="Defence">Defence</option>
        <option value="Business/ Self Employed">Business/ Self Employed</option>
        <option value="Not Working">Not Working</option>
      </select>

      <label>
        Occupation:
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Enter your occupation"
        />
      </label>

      <label>Interested in settling abroad?</label>
      <select
        name="settlingAbroad"
        value={formData.settlingAbroad}
        onChange={handleChange}
        className="career-form-select"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Undecided">Undecided</option>
      </select>

      <label>
        About My Career:
        <textarea
          name="aboutCareer"
          value={formData.aboutCareer}
          onChange={handleChange}
          rows="4"
          placeholder="Write about your career..."
        />
      </label>

      <Link to="/user/edit-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <button onClick={handleSave} className="form-button">
          Save
        </button>
      </Link>
    </div>
  );
};

export default CareerForm;

import React, { useState } from "react";
import "./CreateProfile.css"; // Import the CSS file
import { Link } from "react-router-dom";


const BasicDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    showName: true,
    gender: "Female",
    dob: "",
    maritalStatus: "Never Married",
    height: "",
    religion: "Hindu",
    caste: "",
    gothra: "",
    motherTongue: "",
    location: "",
    income: "No Income",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    console.log("Saved Details: ", formData);
  };

  return (
    <div className="form-container">
      <h2 className="title">Basic Details</h2>
      <p className="subtitle">Update these details to get suitable matches</p>

      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">
        <input
          type="checkbox"
          name="showName"
          checked={formData.showName}
          onChange={handleChange}
        />
        Show my name to all
      </label>

      <label className="form-label">
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          readOnly
          className="form-input"
        />
      </label>

      <label className="form-label">
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">Marital Status:</label>
      <div className="form-radio-group">
        {["Never Married", "Awaiting Divorce", "Divorced", "Widowed", "Annulled"].map((status) => (
          <label key={status} className="form-radio-label">
            <input
              type="radio"
              name="maritalStatus"
              value={status}
              checked={formData.maritalStatus === status}
              onChange={handleChange}
            />
            {status}
          </label>
        ))}
      </div>

      <label className="form-label">
        Height:
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">
        Religion:
        <input
          type="text"
          name="religion"
          value={formData.religion}
          readOnly
          className="form-input"
        />
      </label>

      <label className="form-label">
        Caste:
        <input
          type="text"
          name="caste"
          value={formData.caste}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">
        Gothra:
        <input
          type="text"
          name="gothra"
          value={formData.gothra}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">
        Mother Tongue:
        <input
          type="text"
          name="motherTongue"
          value={formData.motherTongue}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">
        Current Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label className="form-label">
        Annual Income:
        <input
          type="text"
          name="income"
          value={formData.income}
          readOnly
          className="form-input"
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

export default BasicDetailsForm;

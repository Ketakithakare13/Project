import React, { useState } from "react";
import "./CreateProfile.css"; // Import the CSS file
import { Link } from "react-router-dom";

const AboutMeForm = () => {
  const [formData, setFormData] = useState({
    aboutMe: "",
    profileManagedBy: "",
    disability: "",
    thalassemia: "",
    hivStatus: "",
  });

  const handleTextSelection = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved Details: ", formData);
  };

  const renderTextOptions = (name, options) => (
    <div className="text-selection-group">
      {options.map((option) => (
        <span
          key={option}
          className={`text-option ${
            formData[name] === option ? "selected" : ""
          }`}
          onClick={() => handleTextSelection(name, option)}
        >
          {option}
        </span>
      ))}
    </div>
  );

  return (
    <div className="about-me-form-container">
      <h2>About Me</h2>
      <p className="description">
        Mention details about yourself, your personality & more
      </p>

      <label className="form-label">
        About Me:
        <textarea
          name="aboutMe"
          value={formData.aboutMe}
          onChange={(e) =>
            setFormData({ ...formData, aboutMe: e.target.value })
          }
          maxLength="340"
          rows="4"
          placeholder="Write something about yourself..."
          className="textarea-input"
        />
        <div className="char-count">{formData.aboutMe.length}/340</div>
      </label>

      <label className="form-label">Profile Managed By:</label>
      {renderTextOptions("profileManagedBy", [
        "Self",
        "Parent",
        "Sibling",
        "Relative/Friend",
        "Marriage Bureau",
        "Other",
      ])}

      <label className="form-label">Disability?</label>
      {renderTextOptions("disability", [
        "None",
        "Physically disabled from birth",
        "Physically disabled due to accident",
        "Mentally disabled from birth",
        "Mentally disabled due to accident",
      ])}

      <label className="form-label">Thalassemia:</label>
      {renderTextOptions("thalassemia", ["Major", "Minor", "No"])}

      <label className="form-label">HIV+:</label>
      {renderTextOptions("hivStatus", ["Yes", "No"])}

      <Link to="/user/edit-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <button onClick={handleSave} className="form-button">
          Save
        </button>
      </Link>
    </div>
  );
};

export default AboutMeForm;

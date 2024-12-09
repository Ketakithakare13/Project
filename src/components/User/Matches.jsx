import React from 'react';
import "./userdashboard.css";

//import '../../../Styles/userdashboard.css';

function Matches() {
  return (
    <div className="matches-list">
      <div className="match-item">
        <div className="profile-pic">
          <img src="/images/image.jpg" alt="Ravindra Khadse" />
        </div>
        <div className="match-details">
          <p>Ravindra Khadse, 31</p>
          <p>5ft 10in • Pune • Quality Assurance Engineer</p>
          <p>Last seen at 5:32 PM</p>
        </div>
        <div className="actions">
          <button>Send Interest</button>
          <button>Super Interest</button>
          <button>Shortlist</button>
          <button>Chat</button>
        </div>
      </div>

      <div className="match-item">
        <div className="profile-pic">
          <img src="/images/image.jpg" alt="Shubham Korde" />
        </div>
        <div className="match-details">
          <p>Shubham Korde, 26</p>
          <p>5ft 5in • Nagpur • Business - Farming</p>
          <p>Last seen at 6:58 PM</p>
        </div>
        <div className="actions">
          <button>Send Interest</button>
          <button>Super Interest</button>
          <button>Shortlist</button>
          <button>Chat</button>
        </div>
      </div>

    </div>
  );
}

export default Matches;

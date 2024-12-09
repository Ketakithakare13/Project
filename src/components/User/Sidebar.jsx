import React from 'react';
import { Link } from 'react-router-dom';
import './userdashboard.css'; 
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-info">
        <h2>Hi Ketaki!</h2>
        <p>UUSX9733</p>
        <Link to="/user/edit-profile">Edit Profile</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/user/matches">Matches</Link>
          </li>
          <li>
            <Link to="/user/activity">Activity</Link>
          </li>
          <li>
            <Link to="/user/chat">Messenger</Link>
          </li>
          <li>
            <Link to="/user/upgrade">Subscription Plan</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

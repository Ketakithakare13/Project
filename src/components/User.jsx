// import React from 'react';
// import Sidebar from '../components/User/Sidebar';
// import Matches from '../components/User/Matches';
// //import PremiumBenefits from './components/PremiumBenefits';
// import "../components/User/userdashboard.css";


// function User() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <Matches />
//         {/* <PremiumBenefits /> */}
//       </div>
//     </div>
//   );
// }

// export default User;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/User/Sidebar';
import Matches from '../components/User/Matches';
import Activity from '../components/User/Activity';
import Search from '../components/User/Search';
import '../components/User/UserDashboard.css'; 
import Profile from '../components/User/Profile';
import Payment from './User/Payment';
import { Col, Row } from 'react-bootstrap';
import BasicDetailsForm from './User/CreateProfile/BasicDetailsForm';
import AboutMeForm from './User/CreateProfile/AboutMeForm';
import CareerForm from './User/CreateProfile/CareerForm';
import EducationForm from './User/CreateProfile/EducationForm';
import ContactDetailsForm from './User/CreateProfile/ContactDetailsForm';
import ChatRoom from './ChatRoom';
import SubplanPage from './subscription/SubplanPage';

function User() {
  return (
    <div className="user-dashboard">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="edit-profile" element={<Profile/>} />
          <Route path="matches" element={<Matches />} />
          <Route path="activity" element={<Activity />} />
          <Route path="search" element={<Search />} />
          <Route path="upgrade" element={<Payment />} />
          <Route path="basicdetails" element={<BasicDetailsForm />} />
          <Route path="aboutme" element={<AboutMeForm />} />
          <Route path="career" element={<CareerForm />} />
          <Route path="education" element={<EducationForm />} />
          <Route path="contact" element={<ContactDetailsForm />} />
          <Route path="chat" element={<ChatRoom />} />
          <Route path="subplan" element={<SubplanPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default User;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Nav from "./components/NavBar";
import { Navbar } from "react-bootstrap";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import ChatRoom from "./components/ChatRoom";
import AboutUs from "./components/AboutUs";
import FAQSection from "./components/FAQSection";
import AdminHome from "./components/./admin/AdminHome";
import AdminNavbar from "./components/./admin/AdminNavbar";
import Admin from "./components/Admin";
import Users from "./components/admin/Users";
import User from "./components/User";
import Profile from "./components/User/Profile";
import LoginPage from "./components/login/LoginPage";
import RegisterDialog from "./components/registration/RegisterDialog";

import SubplanPage from "./components/subscription/SubplanPage";
import Matches from "./components/User/Matches";

import BasicDetailsForm from "./components/User/CreateProfile/BasicDetailsForm";
import AboutMeForm from "./components/User/CreateProfile/AboutMeForm";
import EducationForm from "./components/User/CreateProfile/EducationForm";
import ContactDetailsForm from "./components/User/CreateProfile/ContactDetailsForm";
import CareerForm from "./components/User/CreateProfile/CareerForm";
import Payment from "./components/User/Payment";
import CreateProfileForm from "./components/login/CreateProfileForm";
import VideoHome from "./components/Home/VideoHome";
import RoomPage from "./components/Room/RoomPage";


function App() {
  return (
    <Router>
      {/* <NavBar sticky="top"/> */}
       <Routes>
           <Route path="/" element={<HomePage />} /> 
         <Route path="/ContactUs" element={<ContactUs />} />  
         <Route path="/AboutUs" element={<AboutUs />} /> 
         <Route path="/FAQSection" element={<FAQSection />} />
         
         <Route path="/Admin/*" element={<Admin />} />
         {/* <Route path="/Users" element={<Users />} /> */}
         
         <Route path="/user/*" element={<User />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/matches" element={<Matches />} />
        

        <Route path="/login" element={<LoginPage />} />  
        <Route path="/register" element={<RegisterDialog />} /> 
        
        <Route path="/subplan" element={<SubplanPage />} />  
        <Route path="/createprofile" element={<CreateProfileForm />} />  
        <Route path="/video" element={<VideoHome />} /> 
        <Route path="/room/:roomId" element={<RoomPage />} /> 


        {/* <Route path="/" element={<ProfileCreation />} /> */}
        {/* <Route path="/" element={<BasicDetailsForm />} /> */}
        {/* <Route path="/" element={<AboutMeForm />} /> */}
        {/* <Route path="/" element={<ChatRoom />} /> */}
        {/* <Route path="/" element={<Payment />} /> */}

        {/* <Route path="/" element={<Profile />} />  */}
      </Routes>
   
      
      
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import SignUp from './Components/signup/SignUp';
import Login from './Components/login/Login';
import AdminRoleManagement from './Components/admin/AdminRoleManagement';
import HomePage from './Components/landing/HomePage';
import Contact from './Components/contact/Contact';
import ProfilePage from './Components/profile/ProfilePage';
import ApplicationForm from './Components/applicationforms/ApplicationForm';
import AdminDashboard from './Components/admin/AdminDashboard';
import ApplicantDashboard from './Components/applicationforms/ApplicantDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseForm from './Components/admin/CourseForm';
import MainPage from './Components/applicationforms/MainPage';
import LearnMore from './Components/miscelleneous/LearnMore';
import ImportantDates from './Components/miscelleneous/ImportantDates';

function App() {
  return (
    <>
     <ToastContainer />
      <Router>
      <Routes>
       
      <Route path='/' element={<HomePage/>} />
       <Route path='/signup' element={<SignUp/>} />
       <Route path='/course' element={<CourseForm/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/apply' element={<ApplicationForm/>} />
       <Route path="/admin/dashboard" element={<AdminDashboard />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/requirements" element={<MainPage/>} />
       <Route path="/important-dates" element={<ImportantDates/>} />
       <Route path="/learn-more" element={<LearnMore />} />
       <Route path="/profile" element={<ProfilePage />} />
       <Route path='/admin' element={<AdminRoleManagement/>} />
       <Route path="/dashboard" element={<ApplicantDashboard />} />
      
     
   </Routes>
   </Router>
    </>
  );
};

export default App;

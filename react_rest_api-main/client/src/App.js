import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

//import app elements
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import DeleteCourse from './components/DeleteCourse';


function App() {

  return (
    <Router>
      <div> 
      <Header />
      <Routes>
        <Route exact path="/" element={<Courses/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/create" element={<CreateCourse/>} />
        <Route path="/courses/:id/update" element={<UpdateCourse/>} />
        <Route path="/signin" element={<UserSignIn/>} />
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/signout" element={<UserSignOut/>} />
        <Route path="/deletecourse" element={<DeleteCourse/>} />
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
